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

/**
 * HomeServiceProvider
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class HomeServiceProvider extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      achievement_badges: 'achievement_badges',
      address: 'address',
      applinks: 'applinks',
      bbb_rating: 'bbb_rating',
      bookable_task: 'bookable_task',
      business_hours: 'business_hours',
      business_phone_number: 'business_phone_number',
      business_url: 'business_url',
      company_name: 'company_name',
      company_tagline: 'company_tagline',
      completed_jobs: 'completed_jobs',
      criminal_background_check_date: 'criminal_background_check_date',
      deals: 'deals',
      description: 'description',
      fb_page_id: 'fb_page_id',
      financial_background_check_date: 'financial_background_check_date',
      first_name: 'first_name',
      home_service_provider_id: 'home_service_provider_id',
      id: 'id',
      images: 'images',
      insurance_info: 'insurance_info',
      internal_score: 'internal_score',
      last_name: 'last_name',
      licensing_info: 'licensing_info',
      messaging_inbox_page_id: 'messaging_inbox_page_id',
      partner_verified_date: 'partner_verified_date',
      product_brands_used: 'product_brands_used',
      provider_type: 'provider_type',
      rating_distribution: 'rating_distribution',
      sanitized_images: 'sanitized_images',
      title: 'title',
      transaction_currency: 'transaction_currency',
      url: 'url',
      year_business_started: 'year_business_started'
    });
  }

  getVideosMetadata (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/videos_metadata'
    );
  }

  get (fields, params): HomeServiceProvider {
    return this.read(
      fields,
      params
    );
  }
}
