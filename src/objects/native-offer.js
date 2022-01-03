/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import NativeOfferView from './native-offer-view';

/**
 * NativeOffer
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class NativeOffer extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      barcode_photo: 'barcode_photo',
      barcode_photo_uri: 'barcode_photo_uri',
      barcode_type: 'barcode_type',
      barcode_value: 'barcode_value',
      block_reshares: 'block_reshares',
      details: 'details',
      disable_location: 'disable_location',
      discounts: 'discounts',
      expiration_time: 'expiration_time',
      id: 'id',
      instore_code: 'instore_code',
      location_type: 'location_type',
      max_save_count: 'max_save_count',
      online_code: 'online_code',
      page: 'page',
      page_set_id: 'page_set_id',
      redemption_code: 'redemption_code',
      redemption_link: 'redemption_link',
      save_count: 'save_count',
      terms: 'terms',
      title: 'title',
      total_unique_codes: 'total_unique_codes',
      unique_codes: 'unique_codes',
      unique_codes_file_code_type: 'unique_codes_file_code_type',
      unique_codes_file_name: 'unique_codes_file_name',
      unique_codes_file_upload_status: 'unique_codes_file_upload_status',
    });
  }

  static get UniqueCodesFileCodeType (): Object {
    return Object.freeze({
      barcodes: 'barcodes',
      discount_and_barcodes: 'discount_and_barcodes',
      discount_and_discount: 'discount_and_discount',
      discount_codes: 'discount_codes',
      instore_barcodes: 'instore_barcodes',
      instore_discount_codes: 'instore_discount_codes',
      online_discount_codes: 'online_discount_codes',
    });
  }
  static get BarcodeType (): Object {
    return Object.freeze({
      code128: 'CODE128',
      code128b: 'CODE128B',
      code93: 'CODE93',
      databar: 'DATABAR',
      databar_expanded: 'DATABAR_EXPANDED',
      databar_expanded_stacked: 'DATABAR_EXPANDED_STACKED',
      databar_limited: 'DATABAR_LIMITED',
      datamatrix: 'DATAMATRIX',
      ean: 'EAN',
      pdf417: 'PDF417',
      qr: 'QR',
      upc_a: 'UPC_A',
      upc_e: 'UPC_E',
    });
  }
  static get LocationType (): Object {
    return Object.freeze({
      both: 'both',
      offline: 'offline',
      online: 'online',
    });
  }

  createCode (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<NativeOffer> {
    return this.createEdge(
      '/codes',
      fields,
      params,
      NativeOffer,
      pathOverride,
    );
  }

  createNativeOfferView (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<NativeOffer> {
    return this.createEdge(
      '/nativeofferviews',
      fields,
      params,
      NativeOffer,
      pathOverride,
    );
  }

  getViews (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NativeOfferView,
      fields,
      params,
      fetchFirstPage,
      '/views'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): NativeOffer {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
