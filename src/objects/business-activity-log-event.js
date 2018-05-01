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
 * BusinessActivityLogEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessActivityLogEvent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      acted_upon_business_id: 'acted_upon_business_id',
      acted_upon_business_name: 'acted_upon_business_name',
      acted_upon_business_object_id: 'acted_upon_business_object_id',
      acted_upon_business_object_name: 'acted_upon_business_object_name',
      acted_upon_business_object_type: 'acted_upon_business_object_type',
      acted_upon_user_id: 'acted_upon_user_id',
      acted_upon_user_name: 'acted_upon_user_name',
      acting_business_id: 'acting_business_id',
      acting_business_name: 'acting_business_name',
      acting_user_id: 'acting_user_id',
      acting_user_name: 'acting_user_name',
      event_time: 'event_time',
      event_type: 'event_type',
      extra_data: 'extra_data',
      target_business_id: 'target_business_id',
      target_business_name: 'target_business_name',
      target_business_object_id: 'target_business_object_id',
      target_business_object_name: 'target_business_object_name',
      target_business_object_type: 'target_business_object_type'
    });
  }
}
