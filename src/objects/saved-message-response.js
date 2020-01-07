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
import Cursor from './../cursor';
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
      title: 'title',
    });
  }

  static get Category (): Object {
    return Object.freeze({
      appointment_reminder: 'APPOINTMENT_REMINDER',
      away_message: 'AWAY_MESSAGE',
      follow_up: 'FOLLOW_UP',
      instant_reply: 'INSTANT_REPLY',
      job_application: 'JOB_APPLICATION',
      messenger_code: 'MESSENGER_CODE',
      referral: 'REFERRAL',
      smart_reply_contact: 'SMART_REPLY_CONTACT',
      smart_reply_hours: 'SMART_REPLY_HOURS',
      smart_reply_location: 'SMART_REPLY_LOCATION',
      smart_reply_negative_feedback: 'SMART_REPLY_NEGATIVE_FEEDBACK',
      smart_reply_positive_feedback: 'SMART_REPLY_POSITIVE_FEEDBACK',
      standard: 'STANDARD',
      welcome_message: 'WELCOME_MESSAGE',
    });
  }

  getMacros (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      SavedMessageResponseMacro,
      fields,
      params,
      fetchFirstPage,
      '/macros'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): SavedMessageResponse {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): SavedMessageResponse {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
