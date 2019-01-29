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
 * PartnerIntegrationLinked
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerIntegrationLinked extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ads_pixel: 'ads_pixel',
      application: 'application',
      completed_integration_types: 'completed_integration_types',
      external_id: 'external_id',
      has_oauth_token: 'has_oauth_token',
      id: 'id',
      name: 'name',
      offline_conversion_data_set: 'offline_conversion_data_set',
      partner: 'partner',
      partner_profile: 'partner_profile',
      product_catalog: 'product_catalog',
      setup_status: 'setup_status'
    });
  }

  static get Partner (): Object {
    return Object.freeze({
      adjust: 'adjust',
      appsflyer: 'appsflyer',
      avana: 'avana',
      backer_founder: 'backer_founder',
      bandzoogle: 'bandzoogle',
      big_commerce: 'big_commerce',
      cart_3d: 'cart_3d',
      default: 'default',
      drupal: 'drupal',
      ec_cube3: 'ec_cube3',
      ecwid: 'ecwid',
      eventbrite: 'eventbrite',
      feedonomics: 'feedonomics',
      foodkit: 'foodkit',
      google_tag_manager: 'google_tag_manager',
      haravan: 'haravan',
      hubspot: 'hubspot',
      infusionsoft_zap: 'infusionsoft_zap',
      intern: 'intern',
      invoca: 'invoca',
      jimdo: 'jimdo',
      joomla: 'joomla',
      jumpseller: 'jumpseller',
      kajabi: 'kajabi',
      kraftly: 'kraftly',
      magento: 'magento',
      magento_2: 'magento_2',
      marketo: 'marketo',
      meesho: 'meesho',
      m_particle: 'm_particle',
      now_floats: 'now_floats',
      opencart: 'opencart',
      prestashop: 'prestashop',
      productsup: 'productsup',
      ruby_on_rails: 'ruby_on_rails',
      riversoft: 'riversoft',
      salesforce: 'salesforce',
      salesforce_zap: 'salesforce_zap',
      segment: 'segment',
      shopify: 'shopify',
      shopify_online: 'shopify_online',
      shopline: 'shopline',
      shop_up: 'shop_up',
      sirclo: 'sirclo',
      squarespace: 'squarespace',
      storeden: 'storeden',
      test: 'test',
      verifone: 'verifone',
      waca: 'waca',
      webflow: 'webflow',
      weebly: 'weebly',
      wix: 'wix',
      woocommerce: 'woocommerce',
      wordpress: 'wordpress',
      zoho_zap: 'zoho_zap',
      ticketmaster: 'ticketmaster'
    });
  }
  static get CompletedIntegrationTypes (): Object {
    return Object.freeze({
      value_0: '0',
      value_1: '1',
      value_2: '2',
      value_3: '3'
    });
  }
  static get SetupStatus (): Object {
    return Object.freeze({
      start: 'START',
      complete: 'COMPLETE'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): PartnerIntegrationLinked {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): PartnerIntegrationLinked {
    return super.update(
      params
    );
  }
}
