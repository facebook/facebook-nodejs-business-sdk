/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ExportAdCampaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExportAdCampaign extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      adset_id: 'adset_id',
      adset_name: 'adset_name',
      id: 'id'
    });
  }

  get (fields, params): ExportAdCampaign {
    return this.read(
      fields,
      params
    );
  }
}
