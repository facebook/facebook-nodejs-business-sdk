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
 * VideoCopyright
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyright extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      content_category: 'content_category',
      copyright_content_id: 'copyright_content_id',
      creator: 'creator',
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
      whitelisted_ids: 'whitelisted_ids'
    });
  }

  static get ContentCategory (): Object {
    return Object.freeze({
      episode: 'episode',
      movie: 'movie',
      web: 'web'
    });
  }
  static get MonitoringType (): Object {
    return Object.freeze({
      video_and_audio: 'VIDEO_AND_AUDIO',
      video_only: 'VIDEO_ONLY',
      audio_only: 'AUDIO_ONLY'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): VideoCopyright {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): VideoCopyright {
    return super.update(
      params
    );
  }
}
