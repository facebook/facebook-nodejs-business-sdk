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
 * InsightsQueryResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InsightsQueryResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      breakdowns: 'breakdowns',
      time: 'time',
      value: 'value',
      id: 'id'
    });
  }

  static get Aggregateby (): Object {
    return Object.freeze({
      count: 'COUNT',
      count_identified_users: 'COUNT_IDENTIFIED_USERS',
      users: 'USERS',
      topk: 'TOPK',
      sum: 'SUM',
      sum_per_event: 'SUM_PER_EVENT',
      sum_identified_users: 'SUM_IDENTIFIED_USERS',
      usd_sum: 'USD_SUM',
      usd_sum_per_event: 'USD_SUM_PER_EVENT',
      usd_sum_identified_users: 'USD_SUM_IDENTIFIED_USERS',
      usd_sum_per_user: 'USD_SUM_PER_USER',
      unknown_users: 'UNKNOWN_USERS',
      score: 'SCORE',
      median_value: 'MEDIAN_VALUE',
      median_value_per_user: 'MEDIAN_VALUE_PER_USER',
      dau: 'DAU',
      wau: 'WAU',
      mau: 'MAU',
      percentiles_count: 'PERCENTILES_COUNT',
      percentiles_value: 'PERCENTILES_VALUE',
      percentiles_usd_value: 'PERCENTILES_USD_VALUE',
      overlap: 'OVERLAP',
      count_per_user: 'COUNT_PER_USER',
      value_per_user: 'VALUE_PER_USER',
      usd_value_per_user: 'USD_VALUE_PER_USER',
      sessions_per_journey: 'SESSIONS_PER_JOURNEY',
      converted_journey_percent: 'CONVERTED_JOURNEY_PERCENT',
      median_journey_length: 'MEDIAN_JOURNEY_LENGTH',
      average_journey_length: 'AVERAGE_JOURNEY_LENGTH',
      journey_channel_inclusion: 'JOURNEY_CHANNEL_INCLUSION',
      event_source_ids: 'EVENT_SOURCE_IDS',
      session_bounce_rate: 'SESSION_BOUNCE_RATE',
      journey_inclusion: 'JOURNEY_INCLUSION',
      user_property_user_count: 'USER_PROPERTY_USER_COUNT'
    });
  }
  static get Ecosystem (): Object {
    return Object.freeze({
      game: 'GAME',
      non_game: 'NON_GAME'
    });
  }
  static get Period (): Object {
    return Object.freeze({
      mins_15: 'mins_15',
      hourly: 'hourly',
      daily: 'daily',
      weekly: 'weekly',
      monthly: 'monthly',
      lifetime: 'lifetime',
      days_28: 'days_28',
      range: 'range'
    });
  }

  get (fields, params): InsightsQueryResult {
    return this.read(
      fields,
      params
    );
  }
}
