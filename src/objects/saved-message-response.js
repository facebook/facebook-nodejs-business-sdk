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
import SavedMessageResponseMacro from './saved-message-response-macro';

/**
 * SavedMessageResponse
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SavedMessageResponse extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      category: 'category',
      id: 'id',
      image: 'image',
      is_enabled: 'is_enabled',
      message: 'message',
      title: 'title'
    });
  }

  static get Category (): Object {
    return Object.freeze({
      standard: 'STANDARD',
      instant_reply: 'INSTANT_REPLY',
      away_message: 'AWAY_MESSAGE',
      welcome_message: 'WELCOME_MESSAGE',
      follow_up: 'FOLLOW_UP',
      messenger_code: 'MESSENGER_CODE',
      referral: 'REFERRAL',
      appointment_reminder: 'APPOINTMENT_REMINDER',
      smart_reply_contact: 'SMART_REPLY_CONTACT',
      smart_reply_hours: 'SMART_REPLY_HOURS',
      smart_reply_location: 'SMART_REPLY_LOCATION',
      smart_reply_negative_feedback: 'SMART_REPLY_NEGATIVE_FEEDBACK',
      smart_reply_positive_feedback: 'SMART_REPLY_POSITIVE_FEEDBACK',
      job_application: 'JOB_APPLICATION'
    });
  }

  getMacros (fields, params, fetchFirstPage = true): SavedMessageResponseMacro {
    return this.getEdge(
      SavedMessageResponseMacro,
      fields,
      params,
      fetchFirstPage,
      '/macros'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): SavedMessageResponse {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): SavedMessageResponse {
    return super.update(
      params
    );
  }
}
