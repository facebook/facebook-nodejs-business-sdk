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
import ProductSet from './product-set';

/**
 * ProductItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItem extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      additional_image_urls: 'additional_image_urls',
      age_group: 'age_group',
      applinks: 'applinks',
      availability: 'availability',
      brand: 'brand',
      category: 'category',
      color: 'color',
      commerce_insights: 'commerce_insights',
      condition: 'condition',
      currency: 'currency',
      custom_data: 'custom_data',
      custom_label_0: 'custom_label_0',
      custom_label_1: 'custom_label_1',
      custom_label_2: 'custom_label_2',
      custom_label_3: 'custom_label_3',
      custom_label_4: 'custom_label_4',
      description: 'description',
      expiration_date: 'expiration_date',
      gender: 'gender',
      gtin: 'gtin',
      id: 'id',
      image_url: 'image_url',
      manufacturer_part_number: 'manufacturer_part_number',
      material: 'material',
      name: 'name',
      ordering_index: 'ordering_index',
      pattern: 'pattern',
      price: 'price',
      product_catalog: 'product_catalog',
      product_feed: 'product_feed',
      product_group: 'product_group',
      product_type: 'product_type',
      retailer_id: 'retailer_id',
      retailer_product_group_id: 'retailer_product_group_id',
      review_rejection_reasons: 'review_rejection_reasons',
      review_status: 'review_status',
      sale_price: 'sale_price',
      sale_price_end_date: 'sale_price_end_date',
      sale_price_start_date: 'sale_price_start_date',
      shipping_weight_unit: 'shipping_weight_unit',
      shipping_weight_value: 'shipping_weight_value',
      short_description: 'short_description',
      size: 'size',
      start_date: 'start_date',
      url: 'url',
      visibility: 'visibility'
    });
  }

  static get AgeGroup (): Object {
    return Object.freeze({
      adult: 'ADULT',
      infant: 'INFANT',
      kids: 'KIDS',
      newborn: 'NEWBORN',
      toddler: 'TODDLER'
    });
  }
  static get Availability (): Object {
    return Object.freeze({
      in_stock: 'IN_STOCK',
      out_of_stock: 'OUT_OF_STOCK',
      preorder: 'PREORDER',
      available_for_order: 'AVAILABLE_FOR_ORDER',
      discontinued: 'DISCONTINUED'
    });
  }
  static get Condition (): Object {
    return Object.freeze({
      new: 'NEW',
      refurbished: 'REFURBISHED',
      used: 'USED'
    });
  }
  static get Gender (): Object {
    return Object.freeze({
      female: 'FEMALE',
      male: 'MALE',
      unisex: 'UNISEX'
    });
  }
  static get ReviewStatus (): Object {
    return Object.freeze({
      pending: 'PENDING',
      rejected: 'REJECTED',
      approved: 'APPROVED',
      outdated: 'OUTDATED'
    });
  }
  static get ShippingWeightUnit (): Object {
    return Object.freeze({
      g: 'G',
      kg: 'KG',
      oz: 'OZ',
      lb: 'LB'
    });
  }
  static get Visibility (): Object {
    return Object.freeze({
      staging: 'STAGING',
      published: 'PUBLISHED'
    });
  }

  getProductSets (fields, params, fetchFirstPage = true): ProductSet {
    return this.getEdge(
      ProductSet,
      fields,
      params,
      fetchFirstPage,
      '/product_sets'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): ProductItem {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): ProductItem {
    return super.update(
      params
    );
  }
}
