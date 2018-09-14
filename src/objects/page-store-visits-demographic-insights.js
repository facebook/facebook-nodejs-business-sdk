/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * PageStoreVisitsDemographicInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageStoreVisitsDemographicInsights extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      breakdown: 'breakdown',
      data_available_since: 'data_available_since',
      data_available_until: 'data_available_until',
      values: 'values',
      id: 'id'
    });
  }

  static get Breakdowns (): Object {
    return Object.freeze({
      age_gender: 'AGE_GENDER',
      highest_education: 'HIGHEST_EDUCATION',
      job_title: 'JOB_TITLE',
      page_like: 'PAGE_LIKE',
      home_city: 'HOME_CITY',
      locale: 'LOCALE'
    });
  }

  get (fields, params): PageStoreVisitsDemographicInsights {
    return this.read(
      fields,
      params
    );
  }
}
