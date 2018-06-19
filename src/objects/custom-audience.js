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
import AdAccount from './ad-account';
import Ad from './ad';
import CustomAudiencePrefillState from './custom-audience-prefill-state';
import CustomAudienceSession from './custom-audience-session';
import User from './user';

/**
 * CustomAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      approximate_count: 'approximate_count',
      customer_file_source: 'customer_file_source',
      data_source: 'data_source',
      delivery_status: 'delivery_status',
      description: 'description',
      external_event_source: 'external_event_source',
      id: 'id',
      is_value_based: 'is_value_based',
      lookalike_audience_ids: 'lookalike_audience_ids',
      lookalike_spec: 'lookalike_spec',
      name: 'name',
      operation_status: 'operation_status',
      opt_out_link: 'opt_out_link',
      permission_for_actions: 'permission_for_actions',
      pixel_id: 'pixel_id',
      retention_days: 'retention_days',
      rule: 'rule',
      rule_aggregation: 'rule_aggregation',
      subtype: 'subtype',
      time_content_updated: 'time_content_updated',
      time_created: 'time_created',
      time_updated: 'time_updated'
    });
  }

  static get ClaimObjective (): Object {
    return Object.freeze({
      auto_offer: 'AUTO_OFFER',
      home_listing: 'HOME_LISTING',
      product: 'PRODUCT',
      travel: 'TRAVEL',
      vehicle: 'VEHICLE'
    });
  }
  static get ContentType (): Object {
    return Object.freeze({
      auto_offer: 'AUTO_OFFER',
      destination: 'DESTINATION',
      flight: 'FLIGHT',
      home_listing: 'HOME_LISTING',
      hotel: 'HOTEL',
      media_title: 'MEDIA_TITLE',
      vehicle: 'VEHICLE',
      vehicle_offer: 'VEHICLE_OFFER'
    });
  }
  static get CustomerFileSource (): Object {
    return Object.freeze({
      user_provided_only: 'USER_PROVIDED_ONLY',
      partner_provided_only: 'PARTNER_PROVIDED_ONLY',
      both_user_and_partner_provided: 'BOTH_USER_AND_PARTNER_PROVIDED'
    });
  }
  static get Subtype (): Object {
    return Object.freeze({
      custom: 'CUSTOM',
      website: 'WEBSITE',
      app: 'APP',
      offline_conversion: 'OFFLINE_CONVERSION',
      claim: 'CLAIM',
      partner: 'PARTNER',
      managed: 'MANAGED',
      video: 'VIDEO',
      lookalike: 'LOOKALIKE',
      engagement: 'ENGAGEMENT',
      data_set: 'DATA_SET',
      bag_of_accounts: 'BAG_OF_ACCOUNTS',
      study_rule_audience: 'STUDY_RULE_AUDIENCE',
      fox: 'FOX'
    });
  }

  deleteAdAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/adaccounts',
      params
    );
  }

  getAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  createAdAccount (fields, params): AdAccount {
    return this.createEdge(
      '/adaccounts',
      fields,
      params,
      AdAccount
    );
  }

  getAds (fields, params, fetchFirstPage = true): Ad {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/ads'
    );
  }

  getPrefills (fields, params, fetchFirstPage = true): CustomAudiencePrefillState {
    return this.getEdge(
      CustomAudiencePrefillState,
      fields,
      params,
      fetchFirstPage,
      '/prefills'
    );
  }

  getSessions (fields, params, fetchFirstPage = true): CustomAudienceSession {
    return this.getEdge(
      CustomAudienceSession,
      fields,
      params,
      fetchFirstPage,
      '/sessions'
    );
  }

  deleteUsers (params): AbstractObject {
    return super.deleteEdge(
      '/users',
      params
    );
  }

  createUser (fields, params): User {
    return this.createEdge(
      '/users',
      fields,
      params,
      User
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): CustomAudience {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): CustomAudience {
    return super.update(
      params
    );
  }
}
