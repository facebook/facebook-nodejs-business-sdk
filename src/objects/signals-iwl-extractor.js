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
 * SignalsIWLExtractor
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SignalsIWLExtractor extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      domain_uri: 'domain_uri',
      event_type: 'event_type',
      extractor_config: 'extractor_config',
      extractor_type: 'extractor_type',
      id: 'id'
    });
  }

  static get EventType (): Object {
    return Object.freeze({
      addpaymentinfo: 'AddPaymentInfo',
      addtocart: 'AddToCart',
      addtowishlist: 'AddToWishlist',
      completeregistration: 'CompleteRegistration',
      contact: 'Contact',
      customizeproduct: 'CustomizeProduct',
      donate: 'Donate',
      findlocation: 'FindLocation',
      initiatecheckout: 'InitiateCheckout',
      lead: 'Lead',
      other: 'Other',
      purchase: 'Purchase',
      schedule: 'Schedule',
      search: 'Search',
      starttrial: 'StartTrial',
      submitapplication: 'SubmitApplication',
      subscribe: 'Subscribe',
      viewcontent: 'ViewContent'
    });
  }
  static get ExtractorType (): Object {
    return Object.freeze({
      constant_value: 'CONSTANT_VALUE',
      css: 'CSS',
      global_variable: 'GLOBAL_VARIABLE',
      gtm: 'GTM',
      json_ld: 'JSON_LD',
      meta_tag: 'META_TAG',
      open_graph: 'OPEN_GRAPH',
      rdfa: 'RDFA',
      schema_dot_org: 'SCHEMA_DOT_ORG',
      uri: 'URI'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): SignalsIWLExtractor {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): SignalsIWLExtractor {
    return super.update(
      params
    );
  }
}
