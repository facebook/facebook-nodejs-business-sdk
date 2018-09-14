/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Application from './application';
import User from './user';

/**
 * BlindPig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BlindPig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      all_phone_numbers: 'all_phone_numbers',
      alternately_named_field: 'alternately_named_field',
      always_null: 'always_null',
      always_secret_pattern_time: 'always_secret_pattern_time',
      always_secret_time: 'always_secret_time',
      ambience: 'ambience',
      async_drinks_info: 'async_drinks_info',
      average_customer_age: 'average_customer_age',
      awesomeness: 'awesomeness',
      bar_game_ids: 'bar_game_ids',
      beer_types: 'beer_types',
      blind_pig_profile: 'blind_pig_profile',
      cards_accepted: 'cards_accepted',
      category: 'category',
      celebrity: 'celebrity',
      chair_count: 'chair_count',
      cocktails: 'cocktails',
      color: 'color',
      company_name: 'company_name',
      country_of_origin: 'country_of_origin',
      creation_time_from_tao_server: 'creation_time_from_tao_server',
      creator: 'creator',
      creator_as_field: 'creator_as_field',
      currency_code: 'currency_code',
      days_open: 'days_open',
      drinks_info: 'drinks_info',
      dynamically_named_field: 'dynamically_named_field',
      ein: 'ein',
      email_address_blacklist: 'email_address_blacklist',
      embedded_updated_time: 'embedded_updated_time',
      even_number: 'even_number',
      favorite_meal: 'favorite_meal',
      favorite_person: 'favorite_person',
      favorite_person_again: 'favorite_person_again',
      favorite_place: 'favorite_place',
      feedback_list: 'feedback_list',
      field_on_shadow_ent_pattern: 'field_on_shadow_ent_pattern',
      field_on_trait: 'field_on_trait',
      founded_time: 'founded_time',
      geocities_page_uri: 'geocities_page_uri',
      id: 'id',
      instruments: 'instruments',
      is_illegal: 'is_illegal',
      is_in_blanket: 'is_in_blanket',
      last_drink_bottle_broken_date: 'last_drink_bottle_broken_date',
      latitude: 'latitude',
      locale: 'locale',
      longitude: 'longitude',
      lucky_numbers: 'lucky_numbers',
      marketing_uri: 'marketing_uri',
      max_allowance: 'max_allowance',
      meals: 'meals',
      mobile_github_uri: 'mobile_github_uri',
      monthly_profit: 'monthly_profit',
      name: 'name',
      overrideable_thing: 'overrideable_thing',
      phone_directory: 'phone_directory',
      phone_numbers: 'phone_numbers',
      price: 'price',
      proprietor: 'proprietor',
      request_box: 'request_box',
      revert_name: 'revert_name',
      second_favorite_person: 'second_favorite_person',
      secret_even_number: 'secret_even_number',
      secret_even_pattern_number: 'secret_even_pattern_number',
      secret_pattern_time: 'secret_pattern_time',
      secret_time: 'secret_time',
      see_also: 'see_also',
      snacks: 'snacks',
      store_number: 'store_number',
      street_address: 'street_address',
      subpattern_address: 'subpattern_address',
      subpattern_dynamic_field: 'subpattern_dynamic_field',
      subpattern_name: 'subpattern_name',
      throne_chair_id: 'throne_chair_id',
      todays_special: 'todays_special',
      unique_bar_game_ids: 'unique_bar_game_ids',
      update_time_from_tao_server: 'update_time_from_tao_server',
      vip: 'vip',
      year_founded: 'year_founded'
    });
  }

  getBarGames (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/bar_games'
    );
  }

  getCardHolders (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/card_holders'
    );
  }

  getDebtorPigs (fields, params, fetchFirstPage = true): BlindPig {
    return this.getEdge(
      BlindPig,
      fields,
      params,
      fetchFirstPage,
      '/debtor_pigs'
    );
  }

  getDynamicallyNamedAssocEdge (fields, params, fetchFirstPage = true): BlindPig {
    return this.getEdge(
      BlindPig,
      fields,
      params,
      fetchFirstPage,
      '/dynamically_named_assoc_edge'
    );
  }

  getKnownPatrons (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/known_patrons'
    );
  }

  getSupervisors (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/supervisors'
    );
  }

  getUniqueBarGames (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/unique_bar_games'
    );
  }

  get (fields, params): BlindPig {
    return this.read(
      fields,
      params
    );
  }
}
