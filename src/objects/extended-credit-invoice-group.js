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

/**
 * ExtendedCreditInvoiceGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditInvoiceGroup extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      customer_po_number: 'customer_po_number',
      email: 'email',
      emails: 'emails',
      id: 'id',
      name: 'name'
    });
  }

  deleteAdAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/ad_accounts',
      params
    );
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

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): ExtendedCreditInvoiceGroup {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ExtendedCreditInvoiceGroup {
    return super.update(
      params
    );
  }
}
