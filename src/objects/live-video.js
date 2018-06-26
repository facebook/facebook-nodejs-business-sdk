/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * LiveVideo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_break_config: 'ad_break_config',
      ad_break_failure_reason: 'ad_break_failure_reason',
      broadcast_start_time: 'broadcast_start_time',
      copyright: 'copyright',
      creation_time: 'creation_time',
      dash_ingest_url: 'dash_ingest_url',
      dash_preview_url: 'dash_preview_url',
      description: 'description',
      embed_html: 'embed_html',
      from: 'from',
      id: 'id',
      is_manual_mode: 'is_manual_mode',
      is_reference_only: 'is_reference_only',
      live_encoders: 'live_encoders',
      live_views: 'live_views',
      permalink_url: 'permalink_url',
      planned_start_time: 'planned_start_time',
      seconds_left: 'seconds_left',
      secure_stream_url: 'secure_stream_url',
      status: 'status',
      stream_url: 'stream_url',
      title: 'title',
      video: 'video'
    });
  }

  static get LiveCommentModerationSetting (): Object {
    return Object.freeze({
      follower: 'FOLLOWER',
      slow: 'SLOW',
      discussion: 'DISCUSSION',
      restricted: 'RESTRICTED'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      unpublished: 'UNPUBLISHED',
      live_now: 'LIVE_NOW',
      scheduled_unpublished: 'SCHEDULED_UNPUBLISHED',
      scheduled_live: 'SCHEDULED_LIVE',
      scheduled_canceled: 'SCHEDULED_CANCELED'
    });
  }
  static get StreamType (): Object {
    return Object.freeze({
      regular: 'REGULAR',
      ambient: 'AMBIENT'
    });
  }
  static get BroadcastStatus (): Object {
    return Object.freeze({
      unpublished: 'UNPUBLISHED',
      live: 'LIVE',
      live_stopped: 'LIVE_STOPPED',
      processing: 'PROCESSING',
      vod: 'VOD',
      scheduled_unpublished: 'SCHEDULED_UNPUBLISHED',
      scheduled_live: 'SCHEDULED_LIVE',
      scheduled_expired: 'SCHEDULED_EXPIRED',
      scheduled_canceled: 'SCHEDULED_CANCELED'
    });
  }
  static get Projection (): Object {
    return Object.freeze({
      equirectangular: 'EQUIRECTANGULAR',
      cubemap: 'CUBEMAP'
    });
  }
  static get SpatialAudioFormat (): Object {
    return Object.freeze({
      ambix_4: 'ambiX_4'
    });
  }
  static get StereoscopicMode (): Object {
    return Object.freeze({
      mono: 'MONO',
      left_right: 'LEFT_RIGHT',
      top_bottom: 'TOP_BOTTOM'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      tagged: 'tagged',
      uploaded: 'uploaded'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): LiveVideo {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): LiveVideo {
    return super.update(
      params
    );
  }
}
