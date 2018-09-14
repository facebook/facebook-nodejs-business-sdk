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
      has_discount_code: 'has_discount_code',
      id: 'id',
      merchant_alert_email: 'merchant_alert_email',
      merchant_page: 'merchant_page',
      merchant_status: 'merchant_status',
      payment_provider: 'payment_provider',
      privacy_url_by_locale: 'privacy_url_by_locale',
      review_rejection_messages: 'review_rejection_messages',
      review_rejection_reasons: 'review_rejection_reasons',
      review_status: 'review_status',
      supported_card_types: 'supported_card_types',
      terms: 'terms',
      terms_url_by_locale: 'terms_url_by_locale'
    });
  }

  getCommerceMerchantApplications (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/commerce_merchant_applications'
    );
  }

  getCommerceOffers (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/commerce_offers'
    );
  }

  getOrders (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/orders'
    );
  }

  getProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  getProductItemMetrics (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/product_item_metrics'
    );
  }

  getSetupStatus (fields, params, fetchFirstPage = true): CommerceMerchantSettingsSetupStatus {
    return this.getEdge(
      CommerceMerchantSettingsSetupStatus,
      fields,
      params,
      fetchFirstPage,
      '/setup_status'
    );
  }

  get (fields, params): CommerceMerchantSettings {
    return this.read(
      fields,
      params
    );
  }
}
