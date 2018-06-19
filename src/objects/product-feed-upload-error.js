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
 * ProductFeedUploadError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadError extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      affected_surfaces: 'affected_surfaces',
      description: 'description',
      error_type: 'error_type',
      id: 'id',
      severity: 'severity',
      summary: 'summary',
      total_count: 'total_count'
    });
  }

  static get AffectedSurfaces (): Object {
    return Object.freeze({
      dynamic_ads: 'Dynamic Ads',
      marketplace: 'Marketplace',
      us_marketplace: 'US Marketplace'
    });
  }
  static get Severity (): Object {
    return Object.freeze({
      fatal: 'fatal',
      warning: 'warning'
    });
  }

  getSamples (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/samples'
    );
  }

  get (fields, params): ProductFeedUploadError {
    return this.read(
      fields,
      params
    );
  }
}
