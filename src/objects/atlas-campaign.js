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
import OracleTransaction from './oracle-transaction';
import AtlasURL from './atlas-url';

/**
 * AtlasCampaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AtlasCampaign extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      alias: 'alias',
      created_by: 'created_by',
      created_date: 'created_date',
      created_time: 'created_time',
      creator_name: 'creator_name',
      cumulative_edited_date: 'cumulative_edited_date',
      custom_fields: 'custom_fields',
      description: 'description',
      flight_dates: 'flight_dates',
      id: 'id',
      is_archived: 'is_archived',
      is_auto_tracked: 'is_auto_tracked',
      is_favorite: 'is_favorite',
      is_mta: 'is_mta',
      last_modified_by: 'last_modified_by',
      last_modified_date: 'last_modified_date',
      last_modified_time: 'last_modified_time',
      name: 'name',
      purchase_order_alias: 'purchase_order_alias',
      target_audience: 'target_audience',
      type: 'type',
      version: 'version'
    });
  }

  getAdSets (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ad_sets'
    );
  }

  getAds (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ads'
    );
  }

  getCampaignGroups (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/campaign_groups'
    );
  }

  getChannels (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/channels'
    );
  }

  getClickThroughs (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/click_throughs'
    );
  }

  getDimensionGroupRulesets (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/dimension_group_rulesets'
    );
  }

  createImportTemplate (fields, params): AtlasCampaign {
    return this.createEdge(
      '/importtemplate',
      fields,
      params,
      AtlasCampaign
    );
  }

  getInProductMetrics (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/in_product_metrics'
    );
  }

  getInProductMetricsByPlaceMEnt (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/in_product_metrics_by_placement'
    );
  }

  getInProductMetricsByPublisher (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/in_product_metrics_by_publisher'
    );
  }

  getInvoices (fields, params, fetchFirstPage = true): OracleTransaction {
    return this.getEdge(
      OracleTransaction,
      fields,
      params,
      fetchFirstPage,
      '/invoices'
    );
  }

  getMetricsBreakdown (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/metrics_breakdown'
    );
  }

  getPlacements (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/placements'
    );
  }

  getPublishers (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/publishers'
    );
  }

  getTactics (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/tactics'
    );
  }

  getTraffickingData (fields, params, fetchFirstPage = true): AtlasURL {
    return this.getEdge(
      AtlasURL,
      fields,
      params,
      fetchFirstPage,
      '/trafficking_data'
    );
  }

  get (fields, params): AtlasCampaign {
    return this.read(
      fields,
      params
    );
  }
}
