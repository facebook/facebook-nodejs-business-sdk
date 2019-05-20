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
import DynamicItemDisplayBundleFolder from './dynamic-item-display-bundle-folder';

/**
 * DynamicItemDisplayBundle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicItemDisplayBundle extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      additional_urls: 'additional_urls',
      description: 'description',
      id: 'id',
      name: 'name',
      product_set: 'product_set',
      text_tokens: 'text_tokens',
      url: 'url',
    });
  }


  getBundleFolders (fields, params, fetchFirstPage = true): DynamicItemDisplayBundleFolder {
    return this.getEdge(
      DynamicItemDisplayBundleFolder,
      fields,
      params,
      fetchFirstPage,
      '/bundle_folders'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): DynamicItemDisplayBundle {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): DynamicItemDisplayBundle {
    return super.update(
      params
    );
  }
}
