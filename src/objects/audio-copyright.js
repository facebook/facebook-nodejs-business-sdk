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
import Cursor from './../cursor';

/**
 * AudioCopyright
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioCopyright extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      creation_time: 'creation_time',
      displayed_matches_count: 'displayed_matches_count',
      id: 'id',
      in_conflict: 'in_conflict',
      isrc: 'isrc',
      match_rule: 'match_rule',
      ownership_countries: 'ownership_countries',
      reference_file_status: 'reference_file_status',
      ridge_monitoring_status: 'ridge_monitoring_status',
      tags: 'tags',
      update_time: 'update_time',
      whitelisted_fb_users: 'whitelisted_fb_users',
      whitelisted_ig_users: 'whitelisted_ig_users',
    });
  }


  getUpdateRecords (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/update_records'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AudioCopyright {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
