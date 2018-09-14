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
 * FundraiserPersonToCharity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundraiserPersonToCharity extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount_raised: 'amount_raised',
      charity_id: 'charity_id',
      currency: 'currency',
      description: 'description',
      donations_count: 'donations_count',
      donors_count: 'donors_count',
      end_time: 'end_time',
      external_amount_raised: 'external_amount_raised',
      external_donations_count: 'external_donations_count',
      external_donors_count: 'external_donors_count',
      external_event_name: 'external_event_name',
      external_event_start_time: 'external_event_start_time',
      external_event_uri: 'external_event_uri',
      external_fundraiser_uri: 'external_fundraiser_uri',
      external_id: 'external_id',
      goal_amount: 'goal_amount',
      id: 'id',
      internal_amount_raised: 'internal_amount_raised',
      internal_donations_count: 'internal_donations_count',
      internal_donors_count: 'internal_donors_count',
      name: 'name',
      uri: 'uri'
    });
  }

  getDonations (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/donations'
    );
  }

  getExternalDonations (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/external_donations'
    );
  }

  get (fields, params): FundraiserPersonToCharity {
    return this.read(
      fields,
      params
    );
  }
}
