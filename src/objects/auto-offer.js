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
 * AutoOffer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AutoOffer extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      amount_currency: 'amount_currency',
      amount_percentage: 'amount_percentage',
      amount_price: 'amount_price',
      amount_qualifier: 'amount_qualifier',
      applinks: 'applinks',
      auto_offer_id: 'auto_offer_id',
      downpayment_currency: 'downpayment_currency',
      downpayment_price: 'downpayment_price',
      downpayment_qualifier: 'downpayment_qualifier',
      id: 'id',
      images: 'images',
      offer_description: 'offer_description',
      offer_disclaimer: 'offer_disclaimer',
      offer_type: 'offer_type',
      sanitized_images: 'sanitized_images',
      term_length: 'term_length',
      term_qualifier: 'term_qualifier',
      url: 'url'
    });
  }

  getVideosMetadata (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/videos_metadata'
    );
  }

  get (fields, params): AutoOffer {
    return this.read(
      fields,
      params
    );
  }
}
