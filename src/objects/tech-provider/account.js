/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import FacebookAdsApi from '../../api';
import Business  from '../business';
import ExtendedCredit from '../extended-credit';
import ExtendedCreditAllocationConfig from '../extended-credit-allocation-config';
import AdAccount from '../ad-account';
import Page from '../page'

/**
 * These are accounts owned by a tech provider's business, representing
 * a user of the tech provider's application.
 *
 * This class allows the tech provider to decide which assets are shared from an existing
 * facebook user's account/business portfolio (which the user has granted the tech provider access to),
 * and which assets are created and owned by the tech provider. This class allows the Tech Provider
 * to provide monetization experiences for the third party user using a higher level interface
 * than the underlying facebook graph apis.
 *
 * This class simplifies:
 * 1. Creating Assets that are owned by the tech provider (Ad Accounts, Pages, Pixels, etc) .
 * 2. Accessing Assets from a users facebook account or business account (Pages, Pixels, etc).
 * 3. Combining tech provider owned and user owned assets. (ex: a Product Catalog owned by the tech provider using CAPI events from a user owned dataset)
 * 3. Allocating a portion of the tech provider's Credit Line to the account.
 * 4. Access Token Usage and Management
 * 5. Providing Monetization Services to the third party user
 *
 * All management operations are performed using the {@link ThirdPartyAccountManager} (e.g. CRUD operations)
 *
 * Creation:
 * - {@link ThirdPartyAccountManager.createAccount()} must be used to create a new ThirdPartyAccount
 *
 * Loading:
 * - {@link ThirdPartyAccountManager.getAccount()} must be used to load an existing ThirdPartyAccount
 * - {@link ThirdPartyAccountManager.listAccountsAccounts()} must be used to load existing ThirdPartyAccounts
 *
 * Deletion:
 * - {@link ThirdPartyAccountManager.deleteAccount()} must be used to delete an existing ThirdPartyAccount
 *
 * Usage:
 * - Use `getFacebookPageId()` to retrieve the Facebook Page used for advertising by this account
 * - Use `disconnectFacebookPage()` to disconnect the Facebook Page used for advertising by this account
 * - Use `updateFacebookPage()` to update the Facebook Page used for advertising by this account
 */
class ThirdPartyAccount {
    /**
     * The GraphAPI resource id that backs the ThirdPartyAccount, essentially
     * acting as a container. Currently the only backing type is Business
     */
    accountId: string;
    /**
     * Delegate used to simplify certain common operations that may require
     * the tech provider's business admin system account to perform the operation.
     * e.g. generating a new access token for a child when updating the page.
     *
     * This member simplifies usage of the interfaces for both this class and the Manager class.
     * It also greatly simplifies important parts of the implementation.
     *
     * Dependency Inversion/Injection can be abstracted from the callers because a ThirdPartyAccount
     * can only be created by the factory methods in {@link ThirdPartyAccountManager}.
     */
    #accountManager: ThirdPartyAccountManager;

    /** see {@link ThirdPartyAccount.accessToken} */
    #accountToken: string;

    constructor(accountId: string, accountManager: ThirdPartyAccountManager, accessToken: string) {
        this.accountId = accountId;
        this.#accountManager = accountManager;
        this.#accountToken = accessToken;
    }

    /**
     * Return the Facebook Page associated with the account.
     * This is the Facebook Page that was shared with the account
     * during creation. If the page was updated, this will return
     * the updated page.
     */
    async getFacebookPageId(): Promise<string> {
        let api = await this.getApi();
        let business = new Business(this.accountId, {api: api});
        let adAccounts = await business.getOwnedAdAccounts([AdAccount.Fields.end_advertiser]);
        let pageId = adAccounts[0].end_advertiser;
        return pageId;
    }

    /**
     * Disconnects the Facebook Page that was previously connected
     * to the third party account. Advertising will not be possible
     * until a new Facebook Page is connected to the account
     */
    async disconnectFacebookPage(): Promise<void> {
        let pageId = await this.getFacebookPageId();
        if (!pageId) {
            return; // don't do anything if no page to disconnect
        }
        let api = await this.getApi();
        let business = new Business(this.accountId, {api: api});
        await business.deletePages({
            [Page.Fields.id]: pageId,
        });
    }

    /**
     * Updates the Facebook Page associated with this account.
     *
     * This method should be used when a user of the tech provider's application
     * wants to change the Facebook Page that is linked to this account.
     * If the provided page is the existing page, it no-ops and returns the existing page id.
     * If the provided page is a different page, it disconnects the existing page and connects
     * the new page to the account.
     *
     * The method ensures that the new page is properly set up for advertising.
     * After updating the page, it refreshes the access token to ensure that the
     * account has the correct permissions for the new page.
     *
     * @param {string} pageId - The ID of the new Facebook Page to be associated with the account.
     * @returns {Promise<string>} A promise that resolves to the ID of the updated Facebook Page.
     *
     * Usage:
     * - Use `updateFacebookPage(pageId)` to change the Facebook Page linked to the account.
     * - Ensure that the page ID provided is valid and accessible by the tech provider's application
     *  - For example, having the user grant access to the Page using Facebook Login for Business.
     *  - If the page is a personal page, the user must grant the tech provider's application
     * pages_manage_metadata and pages_read_engagement permissions.
     *  - If the page is a business page, the user must grant the tech provider's application
     * business_management, ads_management, and pages_read_engagement permissions.
     *  - For more information, see the Facebook Login for Business documentation: https://developers.facebook.com/docs/facebook-login/facebook-login-for-business
     *
     * @example
     *
     * ```
     * const account = new ThirdPartyAccount(accountId, accountManager, accessToken);
     * account.updateFacebookPage('new-page-id')
     *      .then(updatedPageId => {
     *          console.log('Page successfully updated. Page ID:', updatedPageId);
     *      }).catch(error => {
     *          console.error(error, 'Error updating page');
     *  });
     * ```
     */

    async updateFacebookPage(pageId: string): Promise<string> {
        let currentPageId = await this.getFacebookPageId();
        if (pageId === currentPageId) {
            return pageId;
        }
        await this.disconnectFacebookPage();
        let api = await this.getApi();
        let backingResource: Business = new Business(this.accountId, { api: api });
        let response: any = await backingResource.createClientPage([], {
            'page_id': pageId,
            'permitted_tasks': ['ADVERTISE', 'ANALYZE'],
        });
        let updatedPageId = response['id'];

        // New token must be generated because access control was updated. Old token is stale and
        // does not have access to the new page.
        await this.refreshToken();
        return updatedPageId;
    }

    /**
     * Refreshed the token that provides access to this account.
     * This token is hidden by default to prevent logging or accidentally
     * leaking it.
     */
     async refreshToken(): Promise<void> {
        let accountToken = await this.#accountManager.regenerateAccessToken(this.accountId);
        this.#accountToken = accountToken;
    }

    /**
     * Because the token can be periodically refreshed, this method
     * is used to prevent the old token from accidentally being used.
     * @returns the GraphAPI instance for this account
     */
     async getApi(): Promise<FacebookAdsApi> {
        let token = this.#accountToken;
        return FacebookAdsApi.init(token);
    }
}

export type { ThirdPartyAccount };

/**
 * Read only view of the third party account
 * Returned by listAccounts operations
 */
interface ThirdPartyAccountInfo {
    id: string;
    name: string;
}

/**
 * Page ID to use to back the ads
 * This is the identity of the advertiser
 */
type PageProps = {
    id: string;
}

/**
 * Defines the credit allocation to be
 * given to the third party account.
 * The tech provider must have a valid Credit Line.
 */
type CreditAllocationProps = {
    creditLineId: string;
    currencyAmount?: string;
    currency?: string;
}

/**
 * Properties needed to create the account
 * For now, a page is necessary in order to
 * create the account. It is used as the identity
 * of the advertiser and must be a real Facebook Page
 */
type CreateAccountProps = {
    name: string;
    page?: PageProps;
    creditAllocation?: CreditAllocationProps;
    userAccessToken: string;
}

type DeleteAccountProps = {
    accountId: string;
}


/**
 * ThirdPartyAccountManager is responsible for creating and managing ThirdPartyAccounts
 * that represent users of a tech provider's application.
 *
 * This class provides functionality to:
 * 1. Create new third-party accounts with associated assets (Ad Accounts, Pages, Pixels)
 * 2. Retrieve existing accounts by ID
 * 3. listAccounts all accounts associated with the tech provider's application
 * 4. Delete accounts when they are no longer needed
 * 5. Manage access tokens for account operations
 *
 * Each account created through this manager allows the tech provider to:
 * - Create assets owned by the tech provider on behalf of the user
 * - Access assets shared by the user from their Facebook account
 * - Allocate portions of the tech provider's credit line to the user
 * - Manage all assets with a single access token
 *
 * @see ThirdPartyAccount for account usage after creation
 */
export class ThirdPartyAccountManager {
    /**
     * The ID of the tech provider's application.
     */
    #appId: string;

    /**
     * For now, the backing resource for a ThirdPartyAccount is a Child Business Portfolio.
     * This is the ID of the tech provider's business that owns the Child Business Portfolios.
     */
    #techProvBusinessId: string;

    /**
     * The system account token for the tech provider's business. This is used to perform
     * operations that require admin access to the business. e.g. creating a new child business.
     */
    #systemToken: string;

    constructor(appId: string, techProvBusinessId: string, systemAccountToken: string) {
        this.#appId = appId;
        this.#techProvBusinessId = techProvBusinessId;
        this.#systemToken = systemAccountToken;
    }

    /**
     * Creates a third party account under this tech provider's business. This account is used to represent
     * a third party user on the tech provider's platform.
     *
     * This account allows the tech provider's application to:
     *      1. Create Assets (Ad Accounts, Pages, Pixels, etc) that are owned by the tech provider.
     *      2. Access Assets (Pages, Pixels, etc) from a users facebook account or business account.
     *      3. Allocate a portion of the tech provider's Credit Line to the account.
     *      4. Use one access token to manage both created and shared assets.
     *
     * This account allows the tech provider to decide which assets are shared from an existing
     * facebook user, and which assets are created and owned by the tech provider. This allows the Tech Provider
     * to provide monetization experiences for the third party user using a higher level abstraction without worrying
     * about access token management.
     *
     * @param {CreateAccountProps} props - Configuration for the new account including name, page, pixel, ad account details, and user access token
     *
     * @returns a {@link Promise<ThirdPartyAccount>} that resolves to the newly created {@link ThirdPartyAccount} t
     *
     * @example
     *
     * ```
     * const manager = new ThirdPartyAccountManager(appId, partnerBusinessId, partnerAccessToken);
     * const account = await manager.createAccount({
     *     name: 'Client Account',
     *     page: { id: 'page-id' },
     *     creditAllocation: { creditLineId: 'credit-line-id', currencyAmount: '1000', currency: 'USD' }
     *     userAccessToken: 'user-access-token',
     * });
     * ```
     */
    async createAccount(props: CreateAccountProps): Promise<ThirdPartyAccount> {
        // Use the user access token if present to create child business, otherwise use parent token
        let api = FacebookAdsApi.init(props.userAccessToken);
        let partnerBusiness = new Business(this.#techProvBusinessId, {api: api});

        // Create the child business to represent the third party
        // This is currently the backing resource for the account
        let childBusiness: Business = (await partnerBusiness.createOwnedBusiness([],
            {
                'id': this.#techProvBusinessId,
                [Business.Fields.name]: props.name,
                [Business.Fields.vertical]: 'OTHER',
                'shared_page_id': props.page?.id,
                'page_permitted_tasks': ['ADVERTISE', 'ANALYZE'],
                'timezone_id': '1',
            }
        ));

        // Calls for creating assets in the child business require the parent system user access token
        api = FacebookAdsApi.init(this.#systemToken);

        // Create a token for the account which is used to manage all assets
        childBusiness = new Business(childBusiness.id, {api: api});
        let response: any = await childBusiness.createAccessToken([],
            {
                'id': childBusiness.id,
                'app_id': this.#appId,
                'scope': 'ads_management,business_management',
            }
        );
        let accountToken = response.exportAllData()['access_token'];

        // Share a Line of Credit from your business to the Advertiser
        let extendedCredit = new ExtendedCredit(props.creditAllocation?.creditLineId, {api: api});
        await extendedCredit.createOwningCreditAllocationConfig([],
            {
                'id': props.creditAllocation?.creditLineId,
                'receiving_business_id': childBusiness.id,
                'amount': props.creditAllocation?.currencyAmount,
                'partition_type':'FIXED_WITHOUT_PARTITION',
            }
        ).catch(error => {}) // ignore to allow setting up extended credit later and during app development

        api = FacebookAdsApi.init(accountToken);

        // Get an id from the credit allocation to use for the ad account
        childBusiness = new Business(childBusiness.id, {api: api});
        let extendedCredits = await childBusiness.getExtendedCredits([ExtendedCredit.Fields.id], {api: api});
        let fundingSource = extendedCredits[0];

        // Create the ad account
        let adAccount = await childBusiness.createAdAccount([],
            {
                [AdAccount.Fields.name]: props.name,
                [AdAccount.Fields.currency]: props.creditAllocation?.currency,
                [AdAccount.Fields.timezone_id]: '1',
                [AdAccount.Fields.partner]: 'NONE',
                [AdAccount.Fields.media_agency]: 'NONE',
                [AdAccount.Fields.end_advertiser]: props.page?.id,
                'funding_source_id': fundingSource.id,
            }
        );

        // Fetch the system user id from the child business
        let systemUsers = await childBusiness.getSystemUsers([]);
        let systemUserId = systemUsers[0].id;

        // Assign system user to the ad account
        await adAccount.createAssignedUser([],
            {
                'user': systemUserId,
                'tasks': 'MANAGE,ADVERTISE,ANALYZE',
                [AdAccount.Fields.business]: childBusiness.id,
            }
        );

        return Promise.resolve(new ThirdPartyAccount(childBusiness.id, this, accountToken));
    }

    /**
     * This method returns a {@link ThirdPartyAccount} instance for the given account ID. If an account token
     * is provided, it will be used directly. Otherwise, a new token will be generated, which requires
     * an additional API call.
     *
     * @param {string} accountId - The ID of the account to retrieve.
     * @param {string} [accountToken] - Optional. The access token for the account. Using this token is recommended to prevent an extra API call.
     * @returns {Promise<ThirdPartyAccount>} A promise that resolves to the `ThirdPartyAccount` instance.
     *
     * Usage:
     * - Use `getAccount(accountId, accountToken)` to retrieve a third-party account with the specified ID.
     * - If the account token is not provided, the method will generate a new token.
     *
     * Example:
     * ```
     * const manager = new ThirdPartyAccountManager(appId, techProvBusinessId, systemAccountToken);
     * manager.getAccount('account-id', 'optional-account-token').then(
     *  account => {
     *      console.log('Retrieved account:', account);
     * }).catch(error => {
     *     console.error('Error retrieving account', error);
     * });
     * ```
     */
    async getAccount(accountId: string, accountToken?: string): Promise<ThirdPartyAccount> {
        if (accountToken) {
            return Promise.resolve(new ThirdPartyAccount(accountId, this, accountToken));
        }
        // if the token isn't passed, we must generate it
        let regeneratedToken = await this.regenerateAccessToken(accountId);
        return Promise.resolve(new ThirdPartyAccount(accountId, this, regeneratedToken));
    }

    async regenerateAccessToken(accountId: string): Promise<string> {
        let api = FacebookAdsApi.init(this.#systemToken);
        // Create a token for the account which is used to manage all assets.
        // Currently the accounts backing resource is a Child Business Portfolio.
        let childBusiness = new Business(accountId, { api: api });
        let response = await childBusiness.createAccessToken([],
            {
                'id': accountId,
                'app_id': this.#appId,
                'scope': 'ads_management,business_management',
            }
        ).catch((error) => {
            console.log(error);
            throw error;
        });

        return response.exportAllData()['access_token'];
    }

    /**
     * Deletes an account from a tech provider's application and business.
     *
     * WARNING: This operation is irreversible.
     *
     * This operation will pause all active campaigns and stop all active ads, then,
     * all assets created within the account (Ad Accounts, Catalogs, etc.) will also be deleted,
     * and all user owned asset connections will be severed. Finally, the ThirdPartyAccount and backingResource
     * will be deleted.
     *
     * In order to re-create an account for a user, the tech provider's app will have to have a user
     * re-authenticate to getAccount a user access token for reconnecting the assets to a new account, as the token
     * from the previous login will almost certianly be invalid. User access tokens have a short lifetime.
     *
     * @param {DeleteAccountProps} props - Object containing the childBusinessId to delete
     * @returns {Promise<boolean>} A promise that resolves to true if deletion was successful, false otherwise
     *
     * Usage:
     * - Use `deleteAccount()` when a client relationship ends or when an account needs to be removed
     * - This method is useful when a client no longer is spending an the tech provider needs to reclaim
     * some of its credit line (i.e. that portion of the credit line that was allocated to the account
     * will be reclaimed for use by other accounts)
     * - This operation is also useful when testing the integration because a tech provider is limited
     * to 2 accounts when an app is in development mode.
     * - This operation cannot be undone, and all data associated with the account will be lost
     *
     * @example
     *
     * ```
     * const manager = new ThirdPartyAccountManager(appId, partnerBusinessId, partnerAccessToken);
     * manager.deleteAccount({ childBusinessId: 'business-id-to-delete' }).then(
     *     success => {
     *         if (success) {
     *             console.log('Account successfully deleted');
     *         } else {
     *             console.log('Account does not exist');
     *         }
     *     }
     * ).catch(error => {
     *     console.error('Error when trying to delete account', error);
     * });
     * ```
     */
    async deleteAccount(props: DeleteAccountProps): Promise<bool> {
        let api = FacebookAdsApi.init(this.#systemToken);
        let business = new Business(this.#techProvBusinessId, {api: api});
        let response = await business.deleteOwnedBusinesses({
            'client_id': props.accountId,
        }).catch((error) => {
            console.log(error);
            throw error;
        });
        return response['success'] ? response['success'] : false;
    }

    /**
     * listAccountss third-party accounts associated with tech provider's app.
     *
     * By default, this method will return a maximum of 10 accounts.
     *
     * No matter what max is set, 10 results are returned in each API page.
     *
     * @returns {Promise<Array<ThirdPartyAccountInfo>>} A promise that resolves to an array of ThirdPartyAccount instances.
     *
     * Usage:
     * - Use `listAccounts()` to listAccounts all third-party accounts managed by the partner business.
     *
     * @example
     *
     * ```
     * const manager = new ThirdPartyAccountManager(appId, techProvBusinessId, systemAccountToken);
     * manager.listAccounts().then(
     *  accounts => {
     *      accounts.forEach(account => {
     *          console.log(account);
     *      });
     * });
     * ```
     */
    async listAccounts(max: number = 10): Promise<Array<ThirdPartyAccountInfo>> {
        let api = FacebookAdsApi.init(this.#systemToken);
        let business = new Business(this.#techProvBusinessId, {api: api});
        let pageLimit = Math.min(max, 10);
        let cursor = await business.getOwnedBusinesses([Business.Fields.id, Business.Fields.name], { limit:  pageLimit });
        let accounts:Array<ThirdPartyAccountInfo> = [];
        // Unfortunately, Cursor does not implement Iteratable
        while (cursor && accounts.length < max) {
            for (var i = 0; i < cursor.length && accounts.length + i < max; i++) {
                let backingResource: any = cursor[i];
                let accountInfo: ThirdPartyAccountInfo = {
                    id: backingResource.id,
                    name: backingResource['name'],
                } ;
                accounts.push(accountInfo);
            }
            cursor = cursor.hasNext() ? await cursor.next() : null;
        }
        return accounts;
    }
}
