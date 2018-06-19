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
      additional_image_cdn_urls: 'additional_image_cdn_urls',
      additional_image_urls: 'additional_image_urls',
      additional_variant_attributes: 'additional_variant_attributes',
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
      image_cdn_urls: 'image_cdn_urls',
      image_url: 'image_url',
      inventory: 'inventory',
      manufacturer_part_number: 'manufacturer_part_number',
      material: 'material',
      mobile_link: 'mobile_link',
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
      adult: 'adult',
      all_ages: 'all ages',
      infant: 'infant',
      kids: 'kids',
      newborn: 'newborn',
      teen: 'teen',
      toddler: 'toddler'
    });
  }
  static get Availability (): Object {
    return Object.freeze({
      in_stock: 'in stock',
      out_of_stock: 'out of stock',
      preorder: 'preorder',
      available_for_order: 'available for order',
      discontinued: 'discontinued',
      pending: 'pending'
    });
  }
  static get Condition (): Object {
    return Object.freeze({
      new: 'new',
      refurbished: 'refurbished',
      used: 'used',
      cpo: 'cpo'
    });
  }
  static get Gender (): Object {
    return Object.freeze({
      female: 'female',
      male: 'male',
      unisex: 'unisex'
    });
  }
  static get ReviewStatus (): Object {
    return Object.freeze({
      pending: 'pending',
      rejected: 'rejected',
      approved: 'approved',
      outdated: 'outdated'
    });
  }
  static get ShippingWeightUnit (): Object {
    return Object.freeze({
      g: 'g',
      kg: 'kg',
      oz: 'oz',
      lb: 'lb'
    });
  }
  static get Visibility (): Object {
    return Object.freeze({
      staging: 'staging',
      published: 'published'
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
