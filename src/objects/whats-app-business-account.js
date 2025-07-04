 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AssignedUser from './assigned-user';
import Dataset from './dataset';
import ProductCatalog from './product-catalog';
import CTXPartnerAppWelcomeMessageFlow from './ctx-partner-app-welcome-message-flow';

/**
 * WhatsAppBusinessAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessAccount extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_review_status: 'account_review_status',
      analytics: 'analytics',
      auth_international_rate_eligibility: 'auth_international_rate_eligibility',
      business_verification_status: 'business_verification_status',
      country: 'country',
      creation_time: 'creation_time',
      currency: 'currency',
      health_status: 'health_status',
      id: 'id',
      is_enabled_for_insights: 'is_enabled_for_insights',
      is_shared_with_partners: 'is_shared_with_partners',
      linked_commerce_account: 'linked_commerce_account',
      marketing_messages_lite_api_status: 'marketing_messages_lite_api_status',
      message_template_namespace: 'message_template_namespace',
      name: 'name',
      on_behalf_of_business_info: 'on_behalf_of_business_info',
      owner_business: 'owner_business',
      owner_business_info: 'owner_business_info',
      ownership_type: 'ownership_type',
      primary_business_location: 'primary_business_location',
      primary_funding_id: 'primary_funding_id',
      purchase_order_number: 'purchase_order_number',
      status: 'status',
      timezone_id: 'timezone_id',
    });
  }

  static get BusinessVerificationStatus (): Object {
    return Object.freeze({
      expired: 'expired',
      failed: 'failed',
      ineligible: 'ineligible',
      not_verified: 'not_verified',
      pending: 'pending',
      pending_need_more_info: 'pending_need_more_info',
      pending_submission: 'pending_submission',
      rejected: 'rejected',
      revoked: 'revoked',
      verified: 'verified',
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      develop: 'DEVELOP',
      manage: 'MANAGE',
      manage_extensions: 'MANAGE_EXTENSIONS',
      manage_phone: 'MANAGE_PHONE',
      manage_phone_assets: 'MANAGE_PHONE_ASSETS',
      manage_templates: 'MANAGE_TEMPLATES',
      messaging: 'MESSAGING',
      view_cost: 'VIEW_COST',
      view_phone_assets: 'VIEW_PHONE_ASSETS',
      view_templates: 'VIEW_TEMPLATES',
    });
  }
  static get Category (): Object {
    return Object.freeze({
      authentication: 'AUTHENTICATION',
      marketing: 'MARKETING',
      utility: 'UTILITY',
    });
  }
  static get DisplayFormat (): Object {
    return Object.freeze({
      order_details: 'ORDER_DETAILS',
    });
  }
  static get ParameterFormat (): Object {
    return Object.freeze({
      named: 'NAMED',
      positional: 'POSITIONAL',
    });
  }
  static get SubCategory (): Object {
    return Object.freeze({
      order_details: 'ORDER_DETAILS',
      order_status: 'ORDER_STATUS',
    });
  }
  static get ProviderName (): Object {
    return Object.freeze({
      billdesk: 'BILLDESK',
      payu: 'PAYU',
      razorpay: 'RAZORPAY',
      upi_vpa: 'UPI_VPA',
      zaakpay: 'ZAAKPAY',
    });
  }

  getActivities (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/activities'
    );
  }

  deleteAssignedUsers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/assigned_users',
      params
    );
  }

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  getAudiences (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/audiences'
    );
  }

  getCallAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/call_analytics'
    );
  }

  getConversationAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/conversation_analytics'
    );
  }

  getDataset (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Dataset,
      fields,
      params,
      fetchFirstPage,
      '/dataset'
    );
  }

  createDataset (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Dataset> {
    return this.createEdge(
      '/dataset',
      fields,
      params,
      Dataset,
      pathOverride,
    );
  }

  getFlows (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/flows'
    );
  }

  createFlow (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/flows',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  createGeneratePaymentConfigurationOauthLink (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/generate_payment_configuration_oauth_link',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  getMessageCampaigns (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/message_campaigns'
    );
  }

  getMessageTemplatePreviews (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/message_template_previews'
    );
  }

  deleteMessageTemplates (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/message_templates',
      params
    );
  }

  getMessageTemplates (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/message_templates'
    );
  }

  createMessageTemplate (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/message_templates',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  createMigrateFlow (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/migrate_flows',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  createMigrateMessageTemplate (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/migrate_message_templates',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  deletePaymentConfiguration (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/payment_configuration',
      params
    );
  }

  getPaymentConfiguration (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/payment_configuration'
    );
  }

  createPaymentConfiguration (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/payment_configuration',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  getPaymentConfigurations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/payment_configurations'
    );
  }

  getPhoneNumbers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/phone_numbers'
    );
  }

  createPhoneNumber (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/phone_numbers',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getPricingAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/pricing_analytics'
    );
  }

  deleteProductCatalogs (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/product_catalogs',
      params
    );
  }

  getProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  createProductCatalog (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalog> {
    return this.createEdge(
      '/product_catalogs',
      fields,
      params,
      ProductCatalog,
      pathOverride,
    );
  }

  getSchedules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/schedules'
    );
  }

  createSetOboMobilityIntent (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/set_obo_mobility_intent',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  createSetSolutionMigrationIntent (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/set_solution_migration_intent',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getSolutions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/solutions'
    );
  }

  deleteSubscribedApps (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/subscribed_apps',
      params
    );
  }

  getSubscribedApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_apps'
    );
  }

  createSubscribedApp (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/subscribed_apps',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  getTemplateAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/template_analytics'
    );
  }

  getTemplateGroupAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/template_group_analytics'
    );
  }

  getTemplateGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/template_groups'
    );
  }

  createTemplateGroup (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/template_groups',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getTemplatePerformanceMetrics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/template_performance_metrics'
    );
  }

  createUpsertMessageTemplate (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<WhatsAppBusinessAccount> {
    return this.createEdge(
      '/upsert_message_templates',
      fields,
      params,
      WhatsAppBusinessAccount,
      pathOverride,
    );
  }

  getWelcomeMessageSequences (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CTXPartnerAppWelcomeMessageFlow,
      fields,
      params,
      fetchFirstPage,
      '/welcome_message_sequences'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): WhatsAppBusinessAccount {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): WhatsAppBusinessAccount {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
