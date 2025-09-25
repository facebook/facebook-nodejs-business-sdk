 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * PartnerCenterExportFile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerCenterExportFile extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
      report_ds: 'report_ds',
      url: 'url',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): PartnerCenterExportFile {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
