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
 * AudioSubLabel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioSubLabel extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      expiration_timestamp: 'expiration_timestamp',
      flagged_timestamp: 'flagged_timestamp',
      id: 'id',
      label_name: 'label_name',
      last_update_timestamp: 'last_update_timestamp',
      num_audio_tracks: 'num_audio_tracks',
      state: 'state',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): AudioSubLabel {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
