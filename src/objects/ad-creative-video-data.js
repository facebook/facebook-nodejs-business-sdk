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
 * AdCreativeVideoData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeVideoData extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
     branded_content_sponsor_page_id: 'branded_content_sponsor_page_id',
     branded_content_sponsor_relationship: 'branded_content_sponsor_relationship',
     call_to_action: 'call_to_action',
     image_hash: 'image_hash',
     image_url: 'image_url',
     link_description: 'link_description',
     message: 'message',
     offer_id: 'offer_id',
     page_welcome_message: 'page_welcome_message',
     targeting: 'targeting',
     title: 'title',
     video_id: 'video_id',
    });
  }

}
