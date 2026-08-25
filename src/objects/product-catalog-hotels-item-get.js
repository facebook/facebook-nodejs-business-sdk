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
 * ProductCatalogHotelsItemGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogHotelsItemGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      additional_image_urls: 'additional_image_urls',
      address: 'address',
      applink_android_app_name: 'applink_android_app_name',
      applink_android_class: 'applink_android_class',
      applink_android_package: 'applink_android_package',
      applink_android_url: 'applink_android_url',
      applink_ios_app_name: 'applink_ios_app_name',
      applink_ios_app_store_id: 'applink_ios_app_store_id',
      applink_ios_url: 'applink_ios_url',
      applinks: 'applinks',
      brand: 'brand',
      category: 'category',
      currency: 'currency',
      custom_label_0: 'custom_label_0',
      custom_label_1: 'custom_label_1',
      custom_label_2: 'custom_label_2',
      custom_label_3: 'custom_label_3',
      custom_label_4: 'custom_label_4',
      custom_number_0: 'custom_number_0',
      custom_number_1: 'custom_number_1',
      custom_number_2: 'custom_number_2',
      custom_number_3: 'custom_number_3',
      custom_number_4: 'custom_number_4',
      da_display_preview_url: 'da_display_preview_url',
      description: 'description',
      guest_ratings: 'guest_ratings',
      hotel_id: 'hotel_id',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      image_url: 'image_url',
      images: 'images',
      lowest_base_price: 'lowest_base_price',
      loyalty_program: 'loyalty_program',
      margin_level: 'margin_level',
      name: 'name',
      number_of_rooms: 'number_of_rooms',
      phone: 'phone',
      price: 'price',
      product_priority_0: 'product_priority_0',
      product_priority_1: 'product_priority_1',
      product_priority_2: 'product_priority_2',
      product_priority_3: 'product_priority_3',
      product_priority_4: 'product_priority_4',
      retailer_id: 'retailer_id',
      sale_price: 'sale_price',
      sanitized_images: 'sanitized_images',
      star_rating: 'star_rating',
      tags: 'tags',
      url: 'url',
      video_urls: 'video_urls',
      videos_metadata: 'videos_metadata',
      visibility: 'visibility',
    });
  }

  static get DisplayFormat (): Object {
    return Object.freeze({
      carousel_ad: 'CAROUSEL_AD',
      shops_pdp: 'SHOPS_PDP',
      single_ad: 'SINGLE_AD',
    });
  }
}
