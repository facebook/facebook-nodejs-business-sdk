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
 * PlacementSoftOptOut
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlacementSoftOptOut extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      audience_network_positions: 'audience_network_positions',
      facebook_positions: 'facebook_positions',
      instagram_positions: 'instagram_positions',
      messenger_positions: 'messenger_positions',
      oculus_positions: 'oculus_positions',
      threads_positions: 'threads_positions',
      whatsapp_positions: 'whatsapp_positions',
    });
  }

}
