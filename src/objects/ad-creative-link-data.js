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
 * AdCreativeLinkData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkData extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      additional_image_index: 'additional_image_index',
      app_link_spec: 'app_link_spec',
      attachment_style: 'attachment_style',
      branded_content_sponsor_page_id: 'branded_content_sponsor_page_id',
      branded_content_sponsor_relationship: 'branded_content_sponsor_relationship',
      call_to_action: 'call_to_action',
      caption: 'caption',
      child_attachments: 'child_attachments',
      description: 'description',
      event_id: 'event_id',
      force_single_link: 'force_single_link',
      image_crops: 'image_crops',
      image_hash: 'image_hash',
      link: 'link',
      message: 'message',
      multi_share_end_card: 'multi_share_end_card',
      multi_share_optimized: 'multi_share_optimized',
      name: 'name',
      offer_id: 'offer_id',
      page_welcome_message: 'page_welcome_message',
      picture: 'picture'
    });
  }

  static get AttachmentStyle (): Object {
    return Object.freeze({
      link: 'LINK',
      default: 'DEFAULT'
    });
  }
}
