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
 * MusicVideoCopyright
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MusicVideoCopyright extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      displayed_matches_count: 'displayed_matches_count',
      id: 'id',
      in_conflict: 'in_conflict',
      isrc: 'isrc',
      ownership_countries: 'ownership_countries',
      reference_file_status: 'reference_file_status',
      ridge_monitoring_status: 'ridge_monitoring_status',
      update_time: 'update_time',
      video_asset: 'video_asset',
      whitelisted_fb_users: 'whitelisted_fb_users',
      whitelisted_ig_users: 'whitelisted_ig_users'
    });
  }

  get (fields, params): MusicVideoCopyright {
    return this.read(
      fields,
      params
    );
  }
}
