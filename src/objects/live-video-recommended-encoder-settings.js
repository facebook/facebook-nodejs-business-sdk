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
 * LiveVideoRecommendedEncoderSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideoRecommendedEncoderSettings extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      audio_codec_settings: 'audio_codec_settings',
      streaming_protocol: 'streaming_protocol',
      video_codec_settings: 'video_codec_settings',
    });
  }

}
