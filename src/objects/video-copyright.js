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
 * VideoCopyright
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyright extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      content_category: 'content_category',
      copyright_content_id: 'copyright_content_id',
      creator: 'creator',
      excluded_ownership_segments: 'excluded_ownership_segments',
      id: 'id',
      in_conflict: 'in_conflict',
      monitoring_status: 'monitoring_status',
      monitoring_type: 'monitoring_type',
      ownership_countries: 'ownership_countries',
      reference_file: 'reference_file',
      reference_file_disabled: 'reference_file_disabled',
      reference_file_disabled_by_ops: 'reference_file_disabled_by_ops',
      reference_owner_id: 'reference_owner_id',
      rule_ids: 'rule_ids',
      tags: 'tags',
      whitelisted_ids: 'whitelisted_ids',
    });
  }

  static get ContentCategory (): Object {
    return Object.freeze({
      episode: 'episode',
      movie: 'movie',
      web: 'web',
    });
  }
  static get MonitoringType (): Object {
    return Object.freeze({
      audio_only: 'AUDIO_ONLY',
      video_and_audio: 'VIDEO_AND_AUDIO',
      video_only: 'VIDEO_ONLY',
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

  
  get (fields: Array<string>, params: Object = {}): VideoCopyright {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): VideoCopyright {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
