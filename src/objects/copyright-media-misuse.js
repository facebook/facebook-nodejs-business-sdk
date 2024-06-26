 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * CopyrightMediaMisuse
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CopyrightMediaMisuse extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      audio_segments: 'audio_segments',
      creation_time: 'creation_time',
      disabled_audio_segments: 'disabled_audio_segments',
      disabled_video_segments: 'disabled_video_segments',
      entire_file_issue: 'entire_file_issue',
      entire_file_issue_reasons: 'entire_file_issue_reasons',
      expiration_time: 'expiration_time',
      id: 'id',
      media_asset_id: 'media_asset_id',
      reasons: 'reasons',
      requested_audio_segments: 'requested_audio_segments',
      requested_video_segments: 'requested_video_segments',
      resolution_type: 'resolution_type',
      status: 'status',
      update_time: 'update_time',
      video_copyright: 'video_copyright',
      video_segments: 'video_segments',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): CopyrightMediaMisuse {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
