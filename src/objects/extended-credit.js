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
import AdAccount from './ad-account';
import ExtendedCreditInvoiceGroup from './extended-credit-invoice-group';
import CRMAddress from './crm-address';
import ExtendedCreditAllocationConfig from './extended-credit-allocation-config';

/**
 * ExtendedCredit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCredit extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      allocated_amount: 'allocated_amount',
      balance: 'balance',
      credit_available: 'credit_available',
      credit_type: 'credit_type',
      id: 'id',
      is_access_revoked: 'is_access_revoked',
      is_automated_experience: 'is_automated_experience',
      last_payment_time: 'last_payment_time',
      legal_entity_name: 'legal_entity_name',
      liable_biz_name: 'liable_biz_name',
      max_balance: 'max_balance',
      online_max_balance: 'online_max_balance',
      owner_business: 'owner_business',
      owner_business_name: 'owner_business_name',
      partition_from: 'partition_from',
      receiving_credit_allocation_config: 'receiving_credit_allocation_config',
      send_bill_to_biz_name: 'send_bill_to_biz_name'
    });
  }

  getAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/ad_accounts'
    );
  }

  getExtendedCreditEmails (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/extended_credit_emails'
    );
  }

  getExtendedCreditInvoiceGroups (fields, params, fetchFirstPage = true): ExtendedCreditInvoiceGroup {
    return this.getEdge(
      ExtendedCreditInvoiceGroup,
      fields,
      params,
      fetchFirstPage,
      '/extended_credit_invoice_groups'
    );
  }

  createExtendedCreditInvoiceGroup (fields, params): ExtendedCreditInvoiceGroup {
    return this.createEdge(
      '/extended_credit_invoice_groups',
      fields,
      params,
      ExtendedCreditInvoiceGroup
    );
  }

  getLiableAddresses (fields, params, fetchFirstPage = true): CRMAddress {
    return this.getEdge(
      CRMAddress,
      fields,
      params,
      fetchFirstPage,
      '/liable_addresses'
    );
  }

  getOwningCreditAllocationConfigs (fields, params, fetchFirstPage = true): ExtendedCreditAllocationConfig {
    return this.getEdge(
      ExtendedCreditAllocationConfig,
      fields,
      params,
      fetchFirstPage,
      '/owning_credit_allocation_configs'
    );
  }

  createOwningCreditAllocationConfig (fields, params): ExtendedCreditAllocationConfig {
    return this.createEdge(
      '/owning_credit_allocation_configs',
      fields,
      params,
      ExtendedCreditAllocationConfig
    );
  }

  getSendBillToAddresses (fields, params, fetchFirstPage = true): CRMAddress {
    return this.getEdge(
      CRMAddress,
      fields,
      params,
      fetchFirstPage,
      '/send_bill_to_addresses'
    );
  }

  getSoldToAddresses (fields, params, fetchFirstPage = true): CRMAddress {
    return this.getEdge(
      CRMAddress,
      fields,
      params,
      fetchFirstPage,
      '/sold_to_addresses'
    );
  }

  get (fields, params): ExtendedCredit {
    return this.read(
      fields,
      params
    );
  }
}
