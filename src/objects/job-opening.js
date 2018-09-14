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
 * JobOpening
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class JobOpening extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      address: 'address',
      application_callback_url: 'application_callback_url',
      created_time: 'created_time',
      description: 'description',
      errors: 'errors',
      expiration_time: 'expiration_time',
      external_company_facebook_url: 'external_company_facebook_url',
      external_company_full_address: 'external_company_full_address',
      external_company_id: 'external_company_id',
      external_company_name: 'external_company_name',
      external_id: 'external_id',
      hide_from_newsfeed: 'hide_from_newsfeed',
      hide_from_timeline: 'hide_from_timeline',
      id: 'id',
      job_status: 'job_status',
      latitude: 'latitude',
      longitude: 'longitude',
      page: 'page',
      photo: 'photo',
      place: 'place',
      platform_review_status: 'platform_review_status',
      post: 'post',
      title: 'title',
      type: 'type'
    });
  }

  static get JobStatus (): Object {
    return Object.freeze({
      open: 'OPEN',
      closed: 'CLOSED',
      draft: 'DRAFT',
      provisional: 'PROVISIONAL'
    });
  }
  static get PlatformReviewStatus (): Object {
    return Object.freeze({
      pending: 'PENDING',
      rejected: 'REJECTED',
      approved: 'APPROVED'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      full_time: 'FULL_TIME',
      part_time: 'PART_TIME',
      internship: 'INTERNSHIP',
      volunteer: 'VOLUNTEER',
      contract: 'CONTRACT'
    });
  }

  getCustomQuestions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/custom_questions'
    );
  }

  getJobApplications (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/job_applications'
    );
  }

  get (fields, params): JobOpening {
    return this.read(
      fields,
      params
    );
  }
}
