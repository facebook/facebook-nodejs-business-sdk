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
import HotelRoom from './hotel-room';
import AdVideo from './ad-video';

/**
 * Hotel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Hotel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      address: 'address',
      applinks: 'applinks',
      brand: 'brand',
      description: 'description',
      guest_ratings: 'guest_ratings',
      hotel_id: 'hotel_id',
      id: 'id',
      images: 'images',
      lowest_base_price: 'lowest_base_price',
      loyalty_program: 'loyalty_program',
      margin_level: 'margin_level',
      name: 'name',
      phone: 'phone',
      sanitized_images: 'sanitized_images',
      star_rating: 'star_rating',
      url: 'url'
    });
  }

  getHotelRooms (fields, params, fetchFirstPage = true): HotelRoom {
    return this.getEdge(
      HotelRoom,
      fields,
      params,
      fetchFirstPage,
      '/hotel_rooms'
    );
  }

  createHotelRoom (fields, params): HotelRoom {
    return this.createEdge(
      '/hotel_rooms',
      fields,
      params,
      HotelRoom
    );
  }

  getVideos (fields, params, fetchFirstPage = true): AdVideo {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
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

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): Hotel {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Hotel {
    return super.update(
      params
    );
  }
}
