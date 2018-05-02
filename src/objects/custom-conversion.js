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
import CustomConversionStatsResult from './custom-conversion-stats-result';

/**
 * CustomConversion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversion extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      aggregation_rule: 'aggregation_rule',
      creation_time: 'creation_time',
      custom_event_type: 'custom_event_type',
      data_sources: 'data_sources',
      default_conversion_value: 'default_conversion_value',
      description: 'description',
      event_source_type: 'event_source_type',
      first_fired_time: 'first_fired_time',
      id: 'id',
      is_archived: 'is_archived',
      last_fired_time: 'last_fired_time',
      name: 'name',
      offline_conversion_data_set: 'offline_conversion_data_set',
      pixel: 'pixel',
      retention_days: 'retention_days',
      rule: 'rule'
    });
  }

  static get CustomEventType (): Object {
    return Object.freeze({
      add_payment_info: 'ADD_PAYMENT_INFO',
      add_to_cart: 'ADD_TO_CART',
      add_to_wishlist: 'ADD_TO_WISHLIST',
      complete_registration: 'COMPLETE_REGISTRATION',
      content_view: 'CONTENT_VIEW',
      initiated_checkout: 'INITIATED_CHECKOUT',
      lead: 'LEAD',
      purchase: 'PURCHASE',
      search: 'SEARCH',
      contact: 'CONTACT',
      customize_product: 'CUSTOMIZE_PRODUCT',
      donate: 'DONATE',
      find_location: 'FIND_LOCATION',
      schedule: 'SCHEDULE',
      start_trial: 'START_TRIAL',
      submit_application: 'SUBMIT_APPLICATION',
      subscribe: 'SUBSCRIBE',
      take_survey: 'TAKE_SURVEY',
      other: 'OTHER'
    });
  }

  getActivities (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/activities'
    );
  }

  deleteAdAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/adaccounts',
      params
    );
  }

  createAdAccount (fields, params): CustomConversion {
    return this.createEdge(
      '/adaccounts',
      fields,
      params,
      CustomConversion
    );
  }

  deleteSharedAgencies (params): AbstractObject {
    return super.deleteEdge(
      '/shared_agencies',
      params
    );
  }

  createSharedAgency (fields, params): CustomConversion {
    return this.createEdge(
      '/shared_agencies',
      fields,
      params,
      CustomConversion
    );
  }

  getStats (fields, params, fetchFirstPage = true): CustomConversionStatsResult {
    return this.getEdge(
      CustomConversionStatsResult,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): CustomConversion {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): CustomConversion {
    return super.update(
      params
    );
  }
}
