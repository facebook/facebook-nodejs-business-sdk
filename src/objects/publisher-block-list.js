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
import Business from './business';
import AssignedUser from './assigned-user';
import AdAccount from './ad-account';
import AppPublisher from './app-publisher';
import WebPublisher from './web-publisher';

/**
 * PublisherBlockList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PublisherBlockList extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      app_publishers: 'app_publishers',
      business_owner_id: 'business_owner_id',
      id: 'id',
      is_auto_blocking_on: 'is_auto_blocking_on',
      is_eligible_at_campaign_level: 'is_eligible_at_campaign_level',
      last_update_time: 'last_update_time',
      last_update_user: 'last_update_user',
      name: 'name',
      owner_ad_account_id: 'owner_ad_account_id',
      web_publishers: 'web_publishers'
    });
  }

  getAgencies (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  getAssignedUsers (fields, params, fetchFirstPage = true): AssignedUser {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  getAutoAppliedAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/auto_applied_ad_accounts'
    );
  }

  getAutoAppliedBusinesses (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/auto_applied_businesses'
    );
  }

  getPageDAppPublishers (fields, params, fetchFirstPage = true): AppPublisher {
    return this.getEdge(
      AppPublisher,
      fields,
      params,
      fetchFirstPage,
      '/paged_app_publishers'
    );
  }

  getPageDWebPublishers (fields, params, fetchFirstPage = true): WebPublisher {
    return this.getEdge(
      WebPublisher,
      fields,
      params,
      fetchFirstPage,
      '/paged_web_publishers'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): PublisherBlockList {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): PublisherBlockList {
    return super.update(
      params
    );
  }
}
