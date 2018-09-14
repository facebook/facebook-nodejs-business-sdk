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
 * MessengerAdsPartialAutomatedStepList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerAdsPartialAutomatedStepList extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      fblead_form: 'fblead_form',
      first_step_id: 'first_step_id',
      id: 'id',
      page: 'page',
      privacy_url: 'privacy_url',
      reminder_text: 'reminder_text'
    });
  }

  getSteps (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/steps'
    );
  }

  get (fields, params): MessengerAdsPartialAutomatedStepList {
    return this.read(
      fields,
      params
    );
  }
}
