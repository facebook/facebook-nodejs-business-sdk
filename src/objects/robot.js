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
 * Robot
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Robot extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      bringup_vars: 'bringup_vars',
      configurations: 'configurations',
      data_center: 'data_center',
      id: 'id',
      init_pos: 'init_pos',
      last_pos: 'last_pos',
      meetup_link_hash: 'meetup_link_hash',
      suite: 'suite',
      target_map_image_uri: 'target_map_image_uri',
      target_os_image_uri: 'target_os_image_uri',
      target_sw_image_uri: 'target_sw_image_uri',
      user: 'user',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): Robot {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
