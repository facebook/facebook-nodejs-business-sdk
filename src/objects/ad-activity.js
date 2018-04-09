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
 * AdActivity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdActivity extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actor_id: 'actor_id',
      actor_name: 'actor_name',
      application_id: 'application_id',
      application_name: 'application_name',
      date_time_in_timezone: 'date_time_in_timezone',
      event_time: 'event_time',
      event_type: 'event_type',
      extra_data: 'extra_data',
      object_id: 'object_id',
      object_name: 'object_name',
      translated_event_type: 'translated_event_type'
    });
  }

  static get EventType (): Object {
    return Object.freeze({
      ad_account_update_spend_limit: 'AD_ACCOUNT_UPDATE_SPEND_LIMIT',
      ad_account_reset_spend_limit: 'AD_ACCOUNT_RESET_SPEND_LIMIT',
      ad_account_remove_spend_limit: 'AD_ACCOUNT_REMOVE_SPEND_LIMIT',
      ad_account_set_business_information: 'AD_ACCOUNT_SET_BUSINESS_INFORMATION',
      ad_account_update_status: 'AD_ACCOUNT_UPDATE_STATUS',
      ad_account_add_user_to_role: 'AD_ACCOUNT_ADD_USER_TO_ROLE',
      ad_account_remove_user_from_role: 'AD_ACCOUNT_REMOVE_USER_FROM_ROLE',
      add_images: 'ADD_IMAGES',
      edit_images: 'EDIT_IMAGES',
      delete_images: 'DELETE_IMAGES',
      ad_account_billing_charge: 'AD_ACCOUNT_BILLING_CHARGE',
      ad_account_billing_charge_failed: 'AD_ACCOUNT_BILLING_CHARGE_FAILED',
      ad_account_billing_chargeback: 'AD_ACCOUNT_BILLING_CHARGEBACK',
      ad_account_billing_chargeback_reversal: 'AD_ACCOUNT_BILLING_CHARGEBACK_REVERSAL',
      ad_account_billing_decline: 'AD_ACCOUNT_BILLING_DECLINE',
      ad_account_billing_refund: 'AD_ACCOUNT_BILLING_REFUND',
      billing_event: 'BILLING_EVENT',
      add_funding_source: 'ADD_FUNDING_SOURCE',
      remove_funding_source: 'REMOVE_FUNDING_SOURCE',
      create_campaign_group: 'CREATE_CAMPAIGN_GROUP',
      update_campaign_name: 'UPDATE_CAMPAIGN_NAME',
      update_campaign_run_status: 'UPDATE_CAMPAIGN_RUN_STATUS',
      update_campaign_group_spend_cap: 'UPDATE_CAMPAIGN_GROUP_SPEND_CAP',
      campaign_ended: 'CAMPAIGN_ENDED',
      create_campaign: 'CREATE_CAMPAIGN',
      create_campaign_legacy: 'CREATE_CAMPAIGN_LEGACY',
      update_campaign_budget: 'UPDATE_CAMPAIGN_BUDGET',
      update_campaign_duration: 'UPDATE_CAMPAIGN_DURATION',
      create_ad_set: 'CREATE_AD_SET',
      update_ad_set_bidding: 'UPDATE_AD_SET_BIDDING',
      update_ad_set_budget: 'UPDATE_AD_SET_BUDGET',
      update_ad_set_duration: 'UPDATE_AD_SET_DURATION',
      update_ad_set_run_status: 'UPDATE_AD_SET_RUN_STATUS',
      update_ad_set_name: 'UPDATE_AD_SET_NAME',
      create_ad: 'CREATE_AD',
      update_ad_creative: 'UPDATE_AD_CREATIVE',
      edit_and_update_ad_creative: 'EDIT_AND_UPDATE_AD_CREATIVE',
      update_ad_bid_info: 'UPDATE_AD_BID_INFO',
      update_ad_bid_type: 'UPDATE_AD_BID_TYPE',
      update_ad_run_status: 'UPDATE_AD_RUN_STATUS',
      update_ad_friendly_name: 'UPDATE_AD_FRIENDLY_NAME',
      update_ad_targets_spec: 'UPDATE_AD_TARGETS_SPEC',
      update_adgroup_stop_delivery: 'UPDATE_ADGROUP_STOP_DELIVERY',
      update_ad_set_target_spec: 'UPDATE_AD_SET_TARGET_SPEC',
      ad_review_approved: 'AD_REVIEW_APPROVED',
      ad_review_declined: 'AD_REVIEW_DECLINED',
      first_delivery_event: 'FIRST_DELIVERY_EVENT',
      create_audience: 'CREATE_AUDIENCE',
      update_audience: 'UPDATE_AUDIENCE',
      delete_audience: 'DELETE_AUDIENCE',
      share_audience: 'SHARE_AUDIENCE',
      receive_audience: 'RECEIVE_AUDIENCE',
      unshare_audience: 'UNSHARE_AUDIENCE',
      remove_shared_audience: 'REMOVE_SHARED_AUDIENCE',
      unknown: 'UNKNOWN',
      account_spending_limit_reached: 'ACCOUNT_SPENDING_LIMIT_REACHED',
      campaign_spending_limit_reached: 'CAMPAIGN_SPENDING_LIMIT_REACHED',
      lifetime_budget_spent: 'LIFETIME_BUDGET_SPENT',
      funding_event_initiated: 'FUNDING_EVENT_INITIATED',
      funding_event_successful: 'FUNDING_EVENT_SUCCESSFUL',
      update_ad_labels: 'UPDATE_AD_LABELS'
    });
  }
  static get Category (): Object {
    return Object.freeze({
      account: 'ACCOUNT',
      ad: 'AD',
      ad_set: 'AD_SET',
      audience: 'AUDIENCE',
      bid: 'BID',
      budget: 'BUDGET',
      campaign: 'CAMPAIGN',
      date: 'DATE',
      status: 'STATUS',
      targeting: 'TARGETING'
    });
  }
}
