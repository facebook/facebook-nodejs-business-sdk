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
 * CatalogSegmentAllMatchCountLaser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogSegmentAllMatchCountLaser extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      date_start: 'date_start',
      date_stop: 'date_stop',
      event: 'event',
      source: 'source',
      total_matched_content_ids: 'total_matched_content_ids',
      unique_matched_content_ids: 'unique_matched_content_ids',
    });
  }

}
