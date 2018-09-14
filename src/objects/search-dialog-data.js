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
 * SearchDialogData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SearchDialogData extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      form_options: 'form_options',
      id: 'id',
      name: 'name',
      page: 'page',
      privacy_policy_url: 'privacy_policy_url',
      template_url_spec: 'template_url_spec'
    });
  }

  get (fields, params): SearchDialogData {
    return this.read(
      fields,
      params
    );
  }
}
