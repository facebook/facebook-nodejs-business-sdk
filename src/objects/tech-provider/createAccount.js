/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 import { ThirdPartyAccountManager } from './account';
 const techProvBusinessId='<tech-provider-business-id>';
 const systemToken='<system-user-access-token>';
 const userToken='<fbl4b-user-access-token>';
 const pageId='<user-page-id>';
 const appId='<tech-provider-app-id>';
 const creditLineId='<credit-line-id>';

 async () => {
    const accountManager = new ThirdPartyAccountManager(appId, techProvBusinessId, systemToken);
    let thirdPartyAccount = await accountManager.createAccount({
        name: 'Test Account for Someone',
        page: {
            id: pageId,
        },
        creditAllocation: {
            creditLineId: creditLineId,
            currency: 'USD',
            currencyAmount: '1',
        },
        userAccessToken: userToken,
    });

    console.log(thirdPartyAccount);
}
