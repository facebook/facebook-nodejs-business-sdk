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
 * DynamicItemDisplayBundleFolder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicItemDisplayBundleFolder extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      categorization_criteria: 'categorization_criteria',
      id: 'id',
      name: 'name',
      product_catalog: 'product_catalog',
      product_set: 'product_set',
      valid_labels: 'valid_labels',
    });
  }


  deleteBundles (params): AbstractObject {
    return super.deleteEdge(
      '/bundles',
      params
    );
  }

  createBundle (fields, params): DynamicItemDisplayBundleFolder {
    return this.createEdge(
      '/bundles',
      fields,
      params,
      DynamicItemDisplayBundleFolder
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): DynamicItemDisplayBundleFolder {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): DynamicItemDisplayBundleFolder {
    return super.update(
      params
    );
  }
}
