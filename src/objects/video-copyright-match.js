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
 * VideoCopyrightMatch
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightMatch extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created_date: 'created_date',
      id: 'id',
      match_data: 'match_data',
      match_status: 'match_status',
      notes: 'notes',
      permalink: 'permalink'
    });
  }

  static get Action (): Object {
    return Object.freeze({
      manual_review: 'MANUAL_REVIEW',
      monitor: 'MONITOR',
      block: 'BLOCK',
      claim_ad_earnings: 'CLAIM_AD_EARNINGS',
      request_takedown: 'REQUEST_TAKEDOWN'
    });
  }
  static get MatchContentType (): Object {
    return Object.freeze({
      video_and_audio: 'VIDEO_AND_AUDIO',
      video_only: 'VIDEO_ONLY',
      audio_only: 'AUDIO_ONLY'
    });
  }
  static get MatchStatus (): Object {
    return Object.freeze({
      reported: 'REPORTED',
      added_match: 'ADDED_MATCH',
      removed: 'REMOVED',
      in_dispute: 'IN_DISPUTE',
      blocked: 'BLOCKED',
      claimed: 'CLAIMED',
      monitored: 'MONITORED',
      manual_review: 'MANUAL_REVIEW'
    });
  }

  get (fields, params): VideoCopyrightMatch {
    return this.read(
      fields,
      params
    );
  }
}
