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
 * AdAccountActivity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountActivity extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      billing_address_new: 'billing_address_new',
      billing_address_old: 'billing_address_old',
      created_by: 'created_by',
      created_time: 'created_time',
      credit_new: 'credit_new',
      credit_old: 'credit_old',
      credit_status_new: 'credit_status_new',
      credit_status_old: 'credit_status_old',
      currency_new: 'currency_new',
      currency_old: 'currency_old',
      daily_spend_limit_new: 'daily_spend_limit_new',
      daily_spend_limit_old: 'daily_spend_limit_old',
      event_time: 'event_time',
      event_type: 'event_type',
      funding_id_new: 'funding_id_new',
      funding_id_old: 'funding_id_old',
      grace_period_time_new: 'grace_period_time_new',
      grace_period_time_old: 'grace_period_time_old',
      id: 'id',
      manager_id_new: 'manager_id_new',
      manager_id_old: 'manager_id_old',
      name_new: 'name_new',
      name_old: 'name_old',
      spend_cap_new: 'spend_cap_new',
      spend_cap_old: 'spend_cap_old',
      status_new: 'status_new',
      status_old: 'status_old',
      terms_new: 'terms_new',
      terms_old: 'terms_old',
      tier_new: 'tier_new',
      tier_old: 'tier_old',
      time_updated_new: 'time_updated_new',
      time_updated_old: 'time_updated_old'
    });
  }

  static get ChangedAll (): Object {
    return Object.freeze({
      ab_test_id: 'AB_TEST_ID',
      ads_pay_flags: 'ADS_PAY_FLAGS',
      billing_address_id: 'BILLING_ADDRESS_ID',
      business_info: 'BUSINESS_INFO',
      channel: 'CHANNEL',
      created_by: 'CREATED_BY',
      credit: 'CREDIT',
      credit_status: 'CREDIT_STATUS',
      currency: 'CURRENCY',
      daily_spend_limit: 'DAILY_SPEND_LIMIT',
      disable_reason: 'DISABLE_REASON',
      deferred_credential_enrollment: 'DEFERRED_CREDENTIAL_ENROLLMENT',
      funding_id: 'FUNDING_ID',
      fundyg_type: 'FUNDYG_TYPE',
      grace_period_time: 'GRACE_PERIOD_TIME',
      manager_id: 'MANAGER_ID',
      name: 'NAME',
      spend_cap: 'SPEND_CAP',
      status: 'STATUS',
      status_change_reason: 'STATUS_CHANGE_REASON',
      tax_id_status: 'TAX_ID_STATUS',
      terms: 'TERMS',
      tier: 'TIER',
      created_time: 'CREATED_TIME',
      updated_time: 'UPDATED_TIME',
      timezone_id: 'TIMEZONE_ID',
      vertical_type: 'VERTICAL_TYPE',
      account_id: 'ACCOUNT_ID'
    });
  }
  static get ChangedAny (): Object {
    return Object.freeze({
      ab_test_id: 'AB_TEST_ID',
      ads_pay_flags: 'ADS_PAY_FLAGS',
      billing_address_id: 'BILLING_ADDRESS_ID',
      business_info: 'BUSINESS_INFO',
      channel: 'CHANNEL',
      created_by: 'CREATED_BY',
      credit: 'CREDIT',
      credit_status: 'CREDIT_STATUS',
      currency: 'CURRENCY',
      daily_spend_limit: 'DAILY_SPEND_LIMIT',
      disable_reason: 'DISABLE_REASON',
      deferred_credential_enrollment: 'DEFERRED_CREDENTIAL_ENROLLMENT',
      funding_id: 'FUNDING_ID',
      fundyg_type: 'FUNDYG_TYPE',
      grace_period_time: 'GRACE_PERIOD_TIME',
      manager_id: 'MANAGER_ID',
      name: 'NAME',
      spend_cap: 'SPEND_CAP',
      status: 'STATUS',
      status_change_reason: 'STATUS_CHANGE_REASON',
      tax_id_status: 'TAX_ID_STATUS',
      terms: 'TERMS',
      tier: 'TIER',
      created_time: 'CREATED_TIME',
      updated_time: 'UPDATED_TIME',
      timezone_id: 'TIMEZONE_ID',
      vertical_type: 'VERTICAL_TYPE',
      account_id: 'ACCOUNT_ID'
    });
  }

  get (fields, params): AdAccountActivity {
    return this.read(
      fields,
      params
    );
  }
}
