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
import AdSet from './ad-set';
import Business from './business';
import BusinessTag from './business-tag';
import BusinessRequest from './business-request';
import BusinessObject from './business-object';

/**
 * SavedAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedAudience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account: 'account',
      approximate_count: 'approximate_count',
      description: 'description',
      expiry_time: 'expiry_time',
      id: 'id',
      name: 'name',
      permission_for_actions: 'permission_for_actions',
      run_status: 'run_status',
      sentence_lines: 'sentence_lines',
      targeting: 'targeting',
      time_created: 'time_created',
      time_updated: 'time_updated'
    });
  }

  getAdSets (fields, params, fetchFirstPage = true): AdSet {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/adsets'
    );
  }

  getAssignedPartners (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/assigned_partners'
    );
  }

  getBusinessObjectTags (fields, params, fetchFirstPage = true): BusinessTag {
    return this.getEdge(
      BusinessTag,
      fields,
      params,
      fetchFirstPage,
      '/business_object_tags'
    );
  }

  getBusinessRequests (fields, params, fetchFirstPage = true): BusinessRequest {
    return this.getEdge(
      BusinessRequest,
      fields,
      params,
      fetchFirstPage,
      '/business_requests'
    );
  }

  getConnectedBusinessObjects (fields, params, fetchFirstPage = true): BusinessObject {
    return this.getEdge(
      BusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/connected_business_objects'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): SavedAudience {
    return this.read(
      fields,
      params
    );
  }
}
