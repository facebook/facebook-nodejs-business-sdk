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
      appointment_reminder: 'APPOINTMENT_REMINDER'
    });
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
