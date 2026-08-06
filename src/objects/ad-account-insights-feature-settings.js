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
import Cursor from './../cursor';
import AdAccountInsightsFeatureSettingsListFeatures from './ad-account-insights-feature-settings-list-features';
import AdAccountInsightsFeatureSettingsPost from './ad-account-insights-feature-settings-post';

/**
 * AdAccountInsightsFeatureSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountInsightsFeatureSettings extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genlistfeatures (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountInsightsFeatureSettingsListFeatures,
      fields,
      params,
      fetchFirstPage,
      '/insights/feature-settings/list-features'
    );
  }

  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdAccountInsightsFeatureSettingsPost> {
    return this.createEdge(
      '/insights/feature-settings',
      fields,
      params,
      AdAccountInsightsFeatureSettingsPost,
      pathOverride,
    );
  }
}
