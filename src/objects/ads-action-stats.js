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
 * AdsActionStats
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsActionStats extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      value_1d_click: '1d_click',
      value_1d_view: '1d_view',
      value_28d_click: '28d_click',
      value_28d_view: '28d_view',
      value_7d_click: '7d_click',
      value_7d_view: '7d_view',
      action_canvas_component_name: 'action_canvas_component_name',
      action_carousel_card_id: 'action_carousel_card_id',
      action_carousel_card_name: 'action_carousel_card_name',
      action_destination: 'action_destination',
      action_device: 'action_device',
      action_link_click_destination: 'action_link_click_destination',
      action_reaction: 'action_reaction',
      action_target_id: 'action_target_id',
      action_type: 'action_type',
      action_video_sound: 'action_video_sound',
      action_video_type: 'action_video_type',
      inline: 'inline',
      value: 'value'
    });
  }
}
