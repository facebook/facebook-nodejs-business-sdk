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
 * ScheduledPost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ScheduledPost extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      admin_creator: 'admin_creator',
      creation_time: 'creation_time',
      feed_audience_description: 'feed_audience_description',
      feed_targeting: 'feed_targeting',
      id: 'id',
      message: 'message',
      modified_time: 'modified_time',
      og_action_summary: 'og_action_summary',
      permalink_url: 'permalink_url',
      place: 'place',
      privacy_description: 'privacy_description',
      promotion_info: 'promotion_info',
      scheduled_publish_time: 'scheduled_publish_time',
      story_token: 'story_token',
      thumbnail: 'thumbnail',
      video_id: 'video_id'
    });
  }

  get (fields, params): ScheduledPost {
    return this.read(
      fields,
      params
    );
  }
}
