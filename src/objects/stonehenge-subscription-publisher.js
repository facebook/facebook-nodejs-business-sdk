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
 * StonehengeSubscriptionPublisher
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class StonehengeSubscriptionPublisher extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      application_id: 'application_id',
      content_tier_breakdown: 'content_tier_breakdown',
      default_content_tier: 'default_content_tier',
      id: 'id',
      is_test: 'is_test',
      meter_tracker: 'meter_tracker',
      owner: 'owner',
      packages: 'packages',
      paywall_tracker: 'paywall_tracker',
      subscription_pixel_tracking: 'subscription_pixel_tracking'
    });
  }

  getSubscriptions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/subscriptions'
    );
  }

  get (fields, params): StonehengeSubscriptionPublisher {
    return this.read(
      fields,
      params
    );
  }
}
