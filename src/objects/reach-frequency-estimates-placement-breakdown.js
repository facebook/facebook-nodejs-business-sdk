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
 * ReachFrequencyEstimatesPlacementBreakdown
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ReachFrequencyEstimatesPlacementBreakdown extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      android: 'android',
      audience_network: 'audience_network',
      desktop: 'desktop',
      ig_android: 'ig_android',
      ig_ios: 'ig_ios',
      ig_other: 'ig_other',
      ig_reels: 'ig_reels',
      ig_story: 'ig_story',
      instant_articles: 'instant_articles',
      instream_videos: 'instream_videos',
      ios: 'ios',
      msite: 'msite',
      suggested_videos: 'suggested_videos',
    });
  }

}
