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
 * LeadGenLegalContent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenLegalContent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_disclaimer: 'custom_disclaimer',
      id: 'id',
      privacy_policy: 'privacy_policy'
    });
  }

  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      deleted: 'DELETED',
      draft: 'DRAFT'
    });
  }

  get (fields, params): LeadGenLegalContent {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): LeadGenLegalContent {
    return super.update(
      params
    );
  }
}
