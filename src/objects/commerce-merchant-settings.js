/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import Application from './application';
import ProductCatalog from './product-catalog';
import CommerceMerchantSettingsSetupStatus from './commerce-merchant-settings-setup-status';

/**
 * CommerceMerchantSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CommerceMerchantSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      braintree_merchant_id: 'braintree_merchant_id',
      checkout_message: 'checkout_message',
      contact_email: 'contact_email',
      disable_checkout_urls: 'disable_checkout_urls',
      display_name: 'display_name',
      facebook_channel: 'facebook_channel',
      has_discount_code: 'has_discount_code',
      id: 'id',
      instagram_channel: 'instagram_channel',
      merchant_alert_email: 'merchant_alert_email',
      merchant_page: 'merchant_page',
      merchant_status: 'merchant_status',
      onsite_commerce_merchant: 'onsite_commerce_merchant',
      payment_provider: 'payment_provider',
      privacy_url_by_locale: 'privacy_url_by_locale',
      review_rejection_messages: 'review_rejection_messages',
      review_rejection_reasons: 'review_rejection_reasons',
      review_status: 'review_status',
      supported_card_types: 'supported_card_types',
      terms: 'terms',
      terms_url_by_locale: 'terms_url_by_locale',
      whatsapp_channel: 'whatsapp_channel',
    });
  }

  static get MerchantStatus (): Object {
    return Object.freeze({
      enabled: 'ENABLED',
      externally_disabled: 'EXTERNALLY_DISABLED',
    });
  }

  createFacebookChannel (fields: Array<string>, params: Object = {}): Promise<CommerceMerchantSettings> {
    return this.createEdge(
      '/facebook_channel',
      fields,
      params,
      CommerceMerchantSettings
    );
  }

  deleteInstagramChannel (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/instagram_channel',
      params
    );
  }

  createInstagramChannel (fields: Array<string>, params: Object = {}): Promise<CommerceMerchantSettings> {
    return this.createEdge(
      '/instagram_channel',
      fields,
      params,
      CommerceMerchantSettings
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

  createOrderManagementApp (fields: Array<string>, params: Object = {}): Promise<CommerceMerchantSettings> {
    return this.createEdge(
      '/order_management_apps',
      fields,
      params,
      CommerceMerchantSettings
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

  getTaxSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/tax_settings'
    );
  }

  createWhatsappChannel (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/whatsapp_channel',
      fields,
      params,
      
    );
  }

  
  get (fields: Array<string>, params: Object = {}): CommerceMerchantSettings {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): CommerceMerchantSettings {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
