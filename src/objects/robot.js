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
 * Robot
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Robot extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      data_center: 'data_center',
      id: 'id',
      init_pos: 'init_pos',
      suite: 'suite',
      sw_image: 'sw_image',
      target_sw_image: 'target_sw_image',
      target_sw_image_uri: 'target_sw_image_uri',
      user: 'user'
    });
  }

  get (fields, params): Robot {
    return this.read(
      fields,
      params
    );
  }
}
