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
 * PhotoMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PhotoMetadata extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      camera_make: 'camera_make',
      camera_model: 'camera_model',
      datetime_modified: 'datetime_modified',
      datetime_taken: 'datetime_taken',
      exposure: 'exposure',
      focal_length: 'focal_length',
      fstop: 'fstop',
      iso_speed: 'iso_speed',
      offline_id: 'offline_id',
      orientation: 'orientation',
      original_height: 'original_height',
      original_width: 'original_width',
    });
  }

}
