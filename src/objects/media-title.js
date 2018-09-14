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
 * MediaTitle
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaTitle extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      applinks: 'applinks',
      content_category: 'content_category',
      content_countries: 'content_countries',
      content_locale: 'content_locale',
      crew: 'crew',
      currency: 'currency',
      description: 'description',
      episode: 'episode',
      fb_page_alias: 'fb_page_alias',
      fb_page_id: 'fb_page_id',
      genres: 'genres',
      id: 'id',
      images: 'images',
      instagram_username: 'instagram_username',
      media_source: 'media_source',
      media_title_id: 'media_title_id',
      mpaa_rating: 'mpaa_rating',
      performers: 'performers',
      price: 'price',
      release_date: 'release_date',
      sanitized_images: 'sanitized_images',
      season: 'season',
      similar_titles: 'similar_titles',
      subtitle_locale: 'subtitle_locale',
      title: 'title',
      url: 'url',
      view_count_eighty_four_days: 'view_count_eighty_four_days',
      view_count_fourteen_days: 'view_count_fourteen_days',
      view_count_one_day: 'view_count_one_day',
      view_count_seven_days: 'view_count_seven_days',
      view_count_twenty_eight_days: 'view_count_twenty_eight_days',
      wiki_data_item: 'wiki_data_item',
      wikipedia_url: 'wikipedia_url'
    });
  }

  getVideosMetadata (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/videos_metadata'
    );
  }

  get (fields, params): MediaTitle {
    return this.read(
      fields,
      params
    );
  }
}
