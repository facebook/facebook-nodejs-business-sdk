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
      web_publishers: 'web_publishers',
    });
  }


  getPagedAppPublishers (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/paged_app_publishers'
    );
  }

  getPagedWebPublishers (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
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
