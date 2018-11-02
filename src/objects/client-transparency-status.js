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
 * ClientTransparencyStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ClientTransparencyStatus extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      grace_period_expiration_date: 'grace_period_expiration_date',
      has_owning_business: 'has_owning_business',
      is_satisfied: 'is_satisfied',
      owning_business_requirements: 'owning_business_requirements',
      id: 'id'
    });
  }
}
