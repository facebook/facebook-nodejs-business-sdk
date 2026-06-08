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

/**
 * CPASCollaborationRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASCollaborationRequest extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_account_id: 'ad_account_id',
      ad_account_name: 'ad_account_name',
      brands: 'brands',
      catalog_segment: 'catalog_segment',
      contact_email: 'contact_email',
      contact_first_name: 'contact_first_name',
      contact_last_name: 'contact_last_name',
      creation_time: 'creation_time',
      id: 'id',
      phone_number: 'phone_number',
      receiver_business: 'receiver_business',
      requester_agency_or_brand: 'requester_agency_or_brand',
      seller_id: 'seller_id',
      sender_business: 'sender_business',
      sender_client_business: 'sender_client_business',
      shop_url: 'shop_url',
      source: 'source',
      status: 'status',
    });
  }

  static get RequestRole (): Object {
    return Object.freeze({
      receiver: 'RECEIVER',
      sender: 'SENDER',
    });
  }
  static get Source (): Object {
    return Object.freeze({
      external: 'EXTERNAL',
      internal: 'INTERNAL',
      self_serve: 'SELF_SERVE',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): CPASCollaborationRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
