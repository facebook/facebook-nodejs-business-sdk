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
 * MeasurementUploadEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MeasurementUploadEvent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aggregation_level: 'aggregation_level',
      conversion_end_date: 'conversion_end_date',
      conversion_start_date: 'conversion_start_date',
      event_status: 'event_status',
      id: 'id',
      lookback_window: 'lookback_window',
      match_universe: 'match_universe',
      partner: 'partner',
      timezone: 'timezone',
      upload_tag: 'upload_tag',
    });
  }

  static get AggregationLevel (): Object {
    return Object.freeze({
      daily: 'DAILY',
      none: 'NONE',
      weekly: 'WEEKLY',
    });
  }
  static get EventStatus (): Object {
    return Object.freeze({
      cancelcompleted: 'CANCELCOMPLETED',
      canceled: 'CANCELED',
      completed: 'COMPLETED',
      failed: 'FAILED',
      started: 'STARTED',
      uploaded: 'UPLOADED',
    });
  }
  static get LookbackWindow (): Object {
    return Object.freeze({
      days30: 'DAYS30',
      days45: 'DAYS45',
      days60: 'DAYS60',
      days90: 'DAYS90',
    });
  }
  static get MatchUniverse (): Object {
    return Object.freeze({
      full: 'FULL',
      pii: 'PII',
      pixel: 'PIXEL',
    });
  }
  static get Timezone (): Object {
    return Object.freeze({
      tz_africa_accra: 'TZ_AFRICA_ACCRA',
      tz_africa_cairo: 'TZ_AFRICA_CAIRO',
      tz_africa_casablanca: 'TZ_AFRICA_CASABLANCA',
      tz_africa_johannesburg: 'TZ_AFRICA_JOHANNESBURG',
      tz_africa_lagos: 'TZ_AFRICA_LAGOS',
      tz_africa_nairobi: 'TZ_AFRICA_NAIROBI',
      tz_africa_tunis: 'TZ_AFRICA_TUNIS',
      tz_america_anchorage: 'TZ_AMERICA_ANCHORAGE',
      tz_america_argentina_buenos_aires: 'TZ_AMERICA_ARGENTINA_BUENOS_AIRES',
      tz_america_argentina_salta: 'TZ_AMERICA_ARGENTINA_SALTA',
      tz_america_argentina_san_luis: 'TZ_AMERICA_ARGENTINA_SAN_LUIS',
      tz_america_asuncion: 'TZ_AMERICA_ASUNCION',
      tz_america_atikokan: 'TZ_AMERICA_ATIKOKAN',
      tz_america_belem: 'TZ_AMERICA_BELEM',
      tz_america_blanc_sablon: 'TZ_AMERICA_BLANC_SABLON',
      tz_america_bogota: 'TZ_AMERICA_BOGOTA',
      tz_america_campo_grande: 'TZ_AMERICA_CAMPO_GRANDE',
      tz_america_caracas: 'TZ_AMERICA_CARACAS',
      tz_america_chicago: 'TZ_AMERICA_CHICAGO',
      tz_america_costa_rica: 'TZ_AMERICA_COSTA_RICA',
      tz_america_dawson: 'TZ_AMERICA_DAWSON',
      tz_america_dawson_creek: 'TZ_AMERICA_DAWSON_CREEK',
      tz_america_denver: 'TZ_AMERICA_DENVER',
      tz_america_detroit: 'TZ_AMERICA_DETROIT',
      tz_america_edmonton: 'TZ_AMERICA_EDMONTON',
      tz_america_el_salvador: 'TZ_AMERICA_EL_SALVADOR',
      tz_america_guatemala: 'TZ_AMERICA_GUATEMALA',
      tz_america_guayaquil: 'TZ_AMERICA_GUAYAQUIL',
      tz_america_halifax: 'TZ_AMERICA_HALIFAX',
      tz_america_hermosillo: 'TZ_AMERICA_HERMOSILLO',
      tz_america_iqaluit: 'TZ_AMERICA_IQALUIT',
      tz_america_jamaica: 'TZ_AMERICA_JAMAICA',
      tz_america_la_paz: 'TZ_AMERICA_LA_PAZ',
      tz_america_lima: 'TZ_AMERICA_LIMA',
      tz_america_los_angeles: 'TZ_AMERICA_LOS_ANGELES',
      tz_america_managua: 'TZ_AMERICA_MANAGUA',
      tz_america_mazatlan: 'TZ_AMERICA_MAZATLAN',
      tz_america_mexico_city: 'TZ_AMERICA_MEXICO_CITY',
      tz_america_montevideo: 'TZ_AMERICA_MONTEVIDEO',
      tz_america_nassau: 'TZ_AMERICA_NASSAU',
      tz_america_new_york: 'TZ_AMERICA_NEW_YORK',
      tz_america_noronha: 'TZ_AMERICA_NORONHA',
      tz_america_panama: 'TZ_AMERICA_PANAMA',
      tz_america_phoenix: 'TZ_AMERICA_PHOENIX',
      tz_america_port_of_spain: 'TZ_AMERICA_PORT_OF_SPAIN',
      tz_america_puerto_rico: 'TZ_AMERICA_PUERTO_RICO',
      tz_america_rainy_river: 'TZ_AMERICA_RAINY_RIVER',
      tz_america_regina: 'TZ_AMERICA_REGINA',
      tz_america_santiago: 'TZ_AMERICA_SANTIAGO',
      tz_america_santo_domingo: 'TZ_AMERICA_SANTO_DOMINGO',
      tz_america_sao_paulo: 'TZ_AMERICA_SAO_PAULO',
      tz_america_st_johns: 'TZ_AMERICA_ST_JOHNS',
      tz_america_tegucigalpa: 'TZ_AMERICA_TEGUCIGALPA',
      tz_america_tijuana: 'TZ_AMERICA_TIJUANA',
      tz_america_toronto: 'TZ_AMERICA_TORONTO',
      tz_america_vancouver: 'TZ_AMERICA_VANCOUVER',
      tz_america_winnipeg: 'TZ_AMERICA_WINNIPEG',
      tz_asia_amman: 'TZ_ASIA_AMMAN',
      tz_asia_baghdad: 'TZ_ASIA_BAGHDAD',
      tz_asia_bahrain: 'TZ_ASIA_BAHRAIN',
      tz_asia_bangkok: 'TZ_ASIA_BANGKOK',
      tz_asia_beirut: 'TZ_ASIA_BEIRUT',
      tz_asia_colombo: 'TZ_ASIA_COLOMBO',
      tz_asia_dhaka: 'TZ_ASIA_DHAKA',
      tz_asia_dubai: 'TZ_ASIA_DUBAI',
      tz_asia_gaza: 'TZ_ASIA_GAZA',
      tz_asia_hong_kong: 'TZ_ASIA_HONG_KONG',
      tz_asia_ho_chi_minh: 'TZ_ASIA_HO_CHI_MINH',
      tz_asia_irkutsk: 'TZ_ASIA_IRKUTSK',
      tz_asia_jakarta: 'TZ_ASIA_JAKARTA',
      tz_asia_jayapura: 'TZ_ASIA_JAYAPURA',
      tz_asia_jerusalem: 'TZ_ASIA_JERUSALEM',
      tz_asia_kamchatka: 'TZ_ASIA_KAMCHATKA',
      tz_asia_karachi: 'TZ_ASIA_KARACHI',
      tz_asia_kathmandu: 'TZ_ASIA_KATHMANDU',
      tz_asia_kolkata: 'TZ_ASIA_KOLKATA',
      tz_asia_krasnoyarsk: 'TZ_ASIA_KRASNOYARSK',
      tz_asia_kuala_lumpur: 'TZ_ASIA_KUALA_LUMPUR',
      tz_asia_kuwait: 'TZ_ASIA_KUWAIT',
      tz_asia_magadan: 'TZ_ASIA_MAGADAN',
      tz_asia_makassar: 'TZ_ASIA_MAKASSAR',
      tz_asia_manila: 'TZ_ASIA_MANILA',
      tz_asia_muscat: 'TZ_ASIA_MUSCAT',
      tz_asia_nicosia: 'TZ_ASIA_NICOSIA',
      tz_asia_omsk: 'TZ_ASIA_OMSK',
      tz_asia_qatar: 'TZ_ASIA_QATAR',
      tz_asia_riyadh: 'TZ_ASIA_RIYADH',
      tz_asia_seoul: 'TZ_ASIA_SEOUL',
      tz_asia_shanghai: 'TZ_ASIA_SHANGHAI',
      tz_asia_singapore: 'TZ_ASIA_SINGAPORE',
      tz_asia_taipei: 'TZ_ASIA_TAIPEI',
      tz_asia_tokyo: 'TZ_ASIA_TOKYO',
      tz_asia_vladivostok: 'TZ_ASIA_VLADIVOSTOK',
      tz_asia_yakutsk: 'TZ_ASIA_YAKUTSK',
      tz_asia_yekaterinburg: 'TZ_ASIA_YEKATERINBURG',
      tz_atlantic_azores: 'TZ_ATLANTIC_AZORES',
      tz_atlantic_canary: 'TZ_ATLANTIC_CANARY',
      tz_atlantic_reykjavik: 'TZ_ATLANTIC_REYKJAVIK',
      tz_australia_broken_hill: 'TZ_AUSTRALIA_BROKEN_HILL',
      tz_australia_melbourne: 'TZ_AUSTRALIA_MELBOURNE',
      tz_australia_perth: 'TZ_AUSTRALIA_PERTH',
      tz_australia_sydney: 'TZ_AUSTRALIA_SYDNEY',
      tz_europe_amsterdam: 'TZ_EUROPE_AMSTERDAM',
      tz_europe_athens: 'TZ_EUROPE_ATHENS',
      tz_europe_belgrade: 'TZ_EUROPE_BELGRADE',
      tz_europe_berlin: 'TZ_EUROPE_BERLIN',
      tz_europe_bratislava: 'TZ_EUROPE_BRATISLAVA',
      tz_europe_brussels: 'TZ_EUROPE_BRUSSELS',
      tz_europe_bucharest: 'TZ_EUROPE_BUCHAREST',
      tz_europe_budapest: 'TZ_EUROPE_BUDAPEST',
      tz_europe_copenhagen: 'TZ_EUROPE_COPENHAGEN',
      tz_europe_dublin: 'TZ_EUROPE_DUBLIN',
      tz_europe_helsinki: 'TZ_EUROPE_HELSINKI',
      tz_europe_istanbul: 'TZ_EUROPE_ISTANBUL',
      tz_europe_kaliningrad: 'TZ_EUROPE_KALININGRAD',
      tz_europe_kiev: 'TZ_EUROPE_KIEV',
      tz_europe_lisbon: 'TZ_EUROPE_LISBON',
      tz_europe_ljubljana: 'TZ_EUROPE_LJUBLJANA',
      tz_europe_london: 'TZ_EUROPE_LONDON',
      tz_europe_luxembourg: 'TZ_EUROPE_LUXEMBOURG',
      tz_europe_madrid: 'TZ_EUROPE_MADRID',
      tz_europe_malta: 'TZ_EUROPE_MALTA',
      tz_europe_moscow: 'TZ_EUROPE_MOSCOW',
      tz_europe_oslo: 'TZ_EUROPE_OSLO',
      tz_europe_paris: 'TZ_EUROPE_PARIS',
      tz_europe_prague: 'TZ_EUROPE_PRAGUE',
      tz_europe_riga: 'TZ_EUROPE_RIGA',
      tz_europe_rome: 'TZ_EUROPE_ROME',
      tz_europe_samara: 'TZ_EUROPE_SAMARA',
      tz_europe_sarajevo: 'TZ_EUROPE_SARAJEVO',
      tz_europe_skopje: 'TZ_EUROPE_SKOPJE',
      tz_europe_sofia: 'TZ_EUROPE_SOFIA',
      tz_europe_stockholm: 'TZ_EUROPE_STOCKHOLM',
      tz_europe_tallinn: 'TZ_EUROPE_TALLINN',
      tz_europe_vienna: 'TZ_EUROPE_VIENNA',
      tz_europe_vilnius: 'TZ_EUROPE_VILNIUS',
      tz_europe_warsaw: 'TZ_EUROPE_WARSAW',
      tz_europe_zagreb: 'TZ_EUROPE_ZAGREB',
      tz_europe_zurich: 'TZ_EUROPE_ZURICH',
      tz_indian_maldives: 'TZ_INDIAN_MALDIVES',
      tz_indian_mauritius: 'TZ_INDIAN_MAURITIUS',
      tz_num_timezones: 'TZ_NUM_TIMEZONES',
      tz_pacific_auckland: 'TZ_PACIFIC_AUCKLAND',
      tz_pacific_easter: 'TZ_PACIFIC_EASTER',
      tz_pacific_galapagos: 'TZ_PACIFIC_GALAPAGOS',
      tz_pacific_honolulu: 'TZ_PACIFIC_HONOLULU',
    });
  }

  
  get (fields: Array<string>, params: Object = {}): MeasurementUploadEvent {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): MeasurementUploadEvent {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
