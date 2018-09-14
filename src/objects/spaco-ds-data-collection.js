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
 * SpacoDsDataCollection
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SpacoDsDataCollection extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      bounds: 'bounds',
      creation_time: 'creation_time',
      description: 'description',
      id: 'id',
      is_crisis: 'is_crisis',
      name: 'name',
      update_time: 'update_time'
    });
  }

  getBaseMapDataSets (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/basemap_datasets'
    );
  }

  getOrganizations (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/organizations'
    );
  }

  getRasterDataSets (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/raster_datasets'
    );
  }

  getVectorDataSets (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/vector_datasets'
    );
  }

  get (fields, params): SpacoDsDataCollection {
    return this.read(
      fields,
      params
    );
  }
}
