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
 * Placement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Placement extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      audience_network_positions: 'audience_network_positions',
      device_platforms: 'device_platforms',
      effective_audience_network_positions: 'effective_audience_network_positions',
      effective_device_platforms: 'effective_device_platforms',
      effective_facebook_positions: 'effective_facebook_positions',
      effective_instagram_positions: 'effective_instagram_positions',
      effective_messenger_positions: 'effective_messenger_positions',
      effective_oculus_positions: 'effective_oculus_positions',
      effective_publisher_platforms: 'effective_publisher_platforms',
      effective_threads_positions: 'effective_threads_positions',
      effective_whatsapp_positions: 'effective_whatsapp_positions',
      facebook_positions: 'facebook_positions',
      instagram_positions: 'instagram_positions',
      messenger_positions: 'messenger_positions',
      oculus_positions: 'oculus_positions',
      publisher_platforms: 'publisher_platforms',
      threads_positions: 'threads_positions',
      whatsapp_positions: 'whatsapp_positions',
    });
  }

  static get DevicePlatforms (): Object {
    return Object.freeze({
      desktop: 'desktop',
      mobile: 'mobile',
    });
  }
  static get EffectiveDevicePlatforms (): Object {
    return Object.freeze({
      desktop: 'desktop',
      mobile: 'mobile',
    });
  }
}
