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
 * PagesPlatformComponentFlowServiceConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagesPlatformComponentFlowServiceConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      deeplink: 'deeplink',
      flow_category: 'flow_category',
      id: 'id',
      label: 'label'
    });
  }

  get (fields, params): PagesPlatformComponentFlowServiceConfig {
    return this.read(
      fields,
      params
    );
  }
}
