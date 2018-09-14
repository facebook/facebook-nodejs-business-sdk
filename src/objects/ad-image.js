/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Business from './business';
import BusinessTag from './business-tag';
import BusinessRequest from './business-request';
import BusinessObject from './business-object';

/**
 * AdImage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdImage extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      created_time: 'created_time',
      creatives: 'creatives',
      hash: 'hash',
      height: 'height',
      id: 'id',
      is_associated_creatives_in_adgroups: 'is_associated_creatives_in_adgroups',
      name: 'name',
      original_height: 'original_height',
      original_width: 'original_width',
      permalink_url: 'permalink_url',
      status: 'status',
      updated_time: 'updated_time',
      url: 'url',
      url_128: 'url_128',
      width: 'width'
    });
  }

  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      deleted: 'DELETED'
    });
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

  get (fields, params): AdImage {
    return this.read(
      fields,
      params
    );
  }
}
