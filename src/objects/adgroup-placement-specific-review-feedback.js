/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdgroupPlacementSpecificReviewFeedback
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupPlacementSpecificReviewFeedback extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_admin: 'account_admin',
      ad: 'ad',
      b2c: 'b2c',
      bsg: 'bsg',
      city_community: 'city_community',
      daily_deals: 'daily_deals',
      daily_deals_legacy: 'daily_deals_legacy',
      dpa: 'dpa',
      facebook: 'facebook',
      instagram: 'instagram',
      instagram_shop: 'instagram_shop',
      marketplace: 'marketplace',
      marketplace_home_rentals: 'marketplace_home_rentals',
      marketplace_home_sales: 'marketplace_home_sales',
      marketplace_motors: 'marketplace_motors',
      max_review_placements: 'max_review_placements',
      page_admin: 'page_admin',
      product: 'product',
      product_service: 'product_service',
      profile: 'profile',
      seller: 'seller',
      shops: 'shops',
      whatsapp: 'whatsapp',
      id: 'id'
    });
  }

  get (fields, params): AdgroupPlacementSpecificReviewFeedback {
    return this.read(
      fields,
      params
    );
  }
}
