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
 * MerchantCompliance
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MerchantCompliance extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      a2c_p_disc: 'a2c_p_disc',
      base_compliance_status: 'base_compliance_status',
      non_null_id: 'non_null_id',
      non_null_quantity: 'non_null_quantity',
      vc_a2c_disc: 'vc_a2c_disc',
      id: 'id'
    });
  }
}
