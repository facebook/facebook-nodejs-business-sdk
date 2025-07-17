 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import CommerceOrder from './commerce-order';
import CommercePayout from './commerce-payout';
import CommerceOrderTransactionDetail from './commerce-order-transaction-detail';
import Application from './application';
import ProductCatalog from './product-catalog';
import CommerceMerchantSettingsSetupStatus from './commerce-merchant-settings-setup-status';
import Shop from './shop';

/**
 * CommerceMerchantSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceMerchantSettings extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      checkout_config: 'checkout_config',
      checkout_message: 'checkout_message',
      contact_email: 'contact_email',
      cta: 'cta',
      display_name: 'display_name',
      facebook_channel: 'facebook_channel',
      id: 'id',
      instagram_channel: 'instagram_channel',
      korea_ftc_listing: 'korea_ftc_listing',
      merchant_page: 'merchant_page',
      merchant_status: 'merchant_status',
      offsite_iab_checkout_enabled_countries: 'offsite_iab_checkout_enabled_countries',
      onsite_commerce_merchant: 'onsite_commerce_merchant',
      payment_provider: 'payment_provider',
      privacy_policy_localized: 'privacy_policy_localized',
      return_policy_localized: 'return_policy_localized',
      review_rejection_messages: 'review_rejection_messages',
      review_rejection_reasons: 'review_rejection_reasons',
      shops_ads_setup: 'shops_ads_setup',
      terms: 'terms',
    });
  }


  createAcknowledgeOrder (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CommerceMerchantSettings> {
    return this.createEdge(
      '/acknowledge_orders',
      fields,
      params,
      CommerceMerchantSettings,
      pathOverride,
    );
  }

  getCommerceOrders (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommerceOrder,
      fields,
      params,
      fetchFirstPage,
      '/commerce_orders'
    );
  }

  getCommercePayouts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommercePayout,
      fields,
      params,
      fetchFirstPage,
      '/commerce_payouts'
    );
  }

  getCommerceTransactions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommerceOrderTransactionDetail,
      fields,
      params,
      fetchFirstPage,
      '/commerce_transactions'
    );
  }

  getOrderManagementApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/order_management_apps'
    );
  }

  createOrderManagementApp (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CommerceMerchantSettings> {
    return this.createEdge(
      '/order_management_apps',
      fields,
      params,
      CommerceMerchantSettings,
      pathOverride,
    );
  }

  getProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  getReturns (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/returns'
    );
  }

  getSetupStatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommerceMerchantSettingsSetupStatus,
      fields,
      params,
      fetchFirstPage,
      '/setup_status'
    );
  }

  getShippingProfiles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/shipping_profiles'
    );
  }

  createShippingProfile (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/shipping_profiles',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getShops (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Shop,
      fields,
      params,
      fetchFirstPage,
      '/shops'
    );
  }

  getTaxSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/tax_settings'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): CommerceMerchantSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
