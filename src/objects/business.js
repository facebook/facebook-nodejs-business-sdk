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
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ALMAdAccountInfo from './alm-ad-account-info';
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import Application from './application';
import AdNetworkAnalyticsSyncQueryResult from './ad-network-analytics-sync-query-result';
import AdNetworkAnalyticsAsyncQueryResult from './ad-network-analytics-async-query-result';
import AdsDataset from './ads-dataset';
import AdsReportBuilderMMMReport from './ads-report-builder-mmm-report';
import AdsReportBuilderMMMReportScheduler from './ads-report-builder-mmm-report-scheduler';
import AdsPixel from './ads-pixel';
import AdPlacement from './ad-placement';
import BusinessAssetGroup from './business-asset-group';
import OmegaCustomerTrx from './omega-customer-trx';
import BusinessUser from './business-user';
import BusinessProject from './business-project';
import CustomConversion from './custom-conversion';
import OffsiteSignalContainerBusinessObject from './offsite-signal-container-business-object';
import Page from './page';
import ProductCatalog from './product-catalog';
import WhatsAppBusinessAccount from './whats-app-business-account';
import CPASCollaborationRequest from './cpas-collaboration-request';
import CPASAdvertiserPartnershipRecommendation from './cpas-advertiser-partnership-recommendation';
import CommerceMerchantSettings from './commerce-merchant-settings';
import CPASBusinessSetupConfig from './cpas-business-setup-config';
import CPASMerchantConfig from './cpas-merchant-config';
import BusinessCreativeFolder from './business-creative-folder';
import CreditCard from './credit-card';
import EventSourceGroup from './event-source-group';
import ExtendedCreditApplication from './extended-credit-application';
import ExtendedCredit from './extended-credit';
import BusinessImage from './business-image';
import BusinessAssetSharingAgreement from './business-asset-sharing-agreement';
import IGUser from './ig-user';
import FundingSourceDetailsCoupon from './funding-source-details-coupon';
import ManagedPartnerBusiness from './managed-partner-business';
import OpenBridgeConfiguration from './open-bridge-configuration';
import PartnerAccountLinking from './partner-account-linking';
import BusinessAdAccountRequest from './business-ad-account-request';
import BusinessApplicationRequest from './business-application-request';
import BusinessPageRequest from './business-page-request';
import BusinessRoleRequest from './business-role-request';
import ProfilePictureSource from './profile-picture-source';
import WhatsAppBusinessPreVerifiedPhoneNumber from './whats-app-business-pre-verified-phone-number';
import ResellerGuidance from './reseller-guidance';
import WhatsAppBusinessPartnerClientVerificationSubmission from './whats-app-business-partner-client-verification-submission';
import SystemUser from './system-user';
import ThirdPartyMeasurementReportDataset from './third-party-measurement-report-dataset';
import AdVideo from './ad-video';

/**
 * Business
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Business extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      block_offline_analytics: 'block_offline_analytics',
      collaborative_ads_managed_partner_business_info: 'collaborative_ads_managed_partner_business_info',
      collaborative_ads_managed_partner_eligibility: 'collaborative_ads_managed_partner_eligibility',
      collaborative_ads_partner_premium_options: 'collaborative_ads_partner_premium_options',
      created_by: 'created_by',
      created_time: 'created_time',
      extended_updated_time: 'extended_updated_time',
      id: 'id',
      is_hidden: 'is_hidden',
      link: 'link',
      name: 'name',
      payment_account_id: 'payment_account_id',
      primary_page: 'primary_page',
      profile_picture_uri: 'profile_picture_uri',
      timezone_id: 'timezone_id',
      two_factor_type: 'two_factor_type',
      updated_by: 'updated_by',
      updated_time: 'updated_time',
      user_access_expire_time: 'user_access_expire_time',
      verification_status: 'verification_status',
      vertical: 'vertical',
      vertical_id: 'vertical_id',
    });
  }

  static get VerificationStatus (): Object {
    return Object.freeze({
      expired: 'expired',
      failed: 'failed',
      ineligible: 'ineligible',
      not_verified: 'not_verified',
      pending: 'pending',
      pending_need_more_info: 'pending_need_more_info',
      pending_submission: 'pending_submission',
      rejected: 'rejected',
      revoked: 'revoked',
      verified: 'verified',
    });
  }
  static get TwoFactorType (): Object {
    return Object.freeze({
      admin_required: 'admin_required',
      all_required: 'all_required',
      none: 'none',
    });
  }
  static get Vertical (): Object {
    return Object.freeze({
      advertising: 'ADVERTISING',
      automotive: 'AUTOMOTIVE',
      consumer_packaged_goods: 'CONSUMER_PACKAGED_GOODS',
      ecommerce: 'ECOMMERCE',
      education: 'EDUCATION',
      energy_and_utilities: 'ENERGY_AND_UTILITIES',
      entertainment_and_media: 'ENTERTAINMENT_AND_MEDIA',
      financial_services: 'FINANCIAL_SERVICES',
      gaming: 'GAMING',
      government_and_politics: 'GOVERNMENT_AND_POLITICS',
      health: 'HEALTH',
      luxury: 'LUXURY',
      marketing: 'MARKETING',
      non_profit: 'NON_PROFIT',
      not_set: 'NOT_SET',
      organizations_and_associations: 'ORGANIZATIONS_AND_ASSOCIATIONS',
      other: 'OTHER',
      professional_services: 'PROFESSIONAL_SERVICES',
      restaurant: 'RESTAURANT',
      retail: 'RETAIL',
      technology: 'TECHNOLOGY',
      telecom: 'TELECOM',
      travel: 'TRAVEL',
    });
  }
  static get PermittedTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      cashier_role: 'CASHIER_ROLE',
      create_content: 'CREATE_CONTENT',
      global_structure_management: 'GLOBAL_STRUCTURE_MANAGEMENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      messaging: 'MESSAGING',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      profile_plus_advertise: 'PROFILE_PLUS_ADVERTISE',
      profile_plus_analyze: 'PROFILE_PLUS_ANALYZE',
      profile_plus_create_content: 'PROFILE_PLUS_CREATE_CONTENT',
      profile_plus_facebook_access: 'PROFILE_PLUS_FACEBOOK_ACCESS',
      profile_plus_full_control: 'PROFILE_PLUS_FULL_CONTROL',
      profile_plus_manage: 'PROFILE_PLUS_MANAGE',
      profile_plus_manage_leads: 'PROFILE_PLUS_MANAGE_LEADS',
      profile_plus_messaging: 'PROFILE_PLUS_MESSAGING',
      profile_plus_moderate: 'PROFILE_PLUS_MODERATE',
      profile_plus_moderate_delegate_community: 'PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY',
      profile_plus_revenue: 'PROFILE_PLUS_REVENUE',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }
  static get SurveyBusinessType (): Object {
    return Object.freeze({
      advertiser: 'ADVERTISER',
      agency: 'AGENCY',
      app_developer: 'APP_DEVELOPER',
      publisher: 'PUBLISHER',
    });
  }
  static get TimezoneId (): Object {
    return Object.freeze({
      value_0: '0',
      value_1: '1',
      value_2: '2',
      value_3: '3',
      value_4: '4',
      value_5: '5',
      value_6: '6',
      value_7: '7',
      value_8: '8',
      value_9: '9',
      value_10: '10',
      value_11: '11',
      value_12: '12',
      value_13: '13',
      value_14: '14',
      value_15: '15',
      value_16: '16',
      value_17: '17',
      value_18: '18',
      value_19: '19',
      value_20: '20',
      value_21: '21',
      value_22: '22',
      value_23: '23',
      value_24: '24',
      value_25: '25',
      value_26: '26',
      value_27: '27',
      value_28: '28',
      value_29: '29',
      value_30: '30',
      value_31: '31',
      value_32: '32',
      value_33: '33',
      value_34: '34',
      value_35: '35',
      value_36: '36',
      value_37: '37',
      value_38: '38',
      value_39: '39',
      value_40: '40',
      value_41: '41',
      value_42: '42',
      value_43: '43',
      value_44: '44',
      value_45: '45',
      value_46: '46',
      value_47: '47',
      value_48: '48',
      value_49: '49',
      value_50: '50',
      value_51: '51',
      value_52: '52',
      value_53: '53',
      value_54: '54',
      value_55: '55',
      value_56: '56',
      value_57: '57',
      value_58: '58',
      value_59: '59',
      value_60: '60',
      value_61: '61',
      value_62: '62',
      value_63: '63',
      value_64: '64',
      value_65: '65',
      value_66: '66',
      value_67: '67',
      value_68: '68',
      value_69: '69',
      value_70: '70',
      value_71: '71',
      value_72: '72',
      value_73: '73',
      value_74: '74',
      value_75: '75',
      value_76: '76',
      value_77: '77',
      value_78: '78',
      value_79: '79',
      value_80: '80',
      value_81: '81',
      value_82: '82',
      value_83: '83',
      value_84: '84',
      value_85: '85',
      value_86: '86',
      value_87: '87',
      value_88: '88',
      value_89: '89',
      value_90: '90',
      value_91: '91',
      value_92: '92',
      value_93: '93',
      value_94: '94',
      value_95: '95',
      value_96: '96',
      value_97: '97',
      value_98: '98',
      value_99: '99',
      value_100: '100',
      value_101: '101',
      value_102: '102',
      value_103: '103',
      value_104: '104',
      value_105: '105',
      value_106: '106',
      value_107: '107',
      value_108: '108',
      value_109: '109',
      value_110: '110',
      value_111: '111',
      value_112: '112',
      value_113: '113',
      value_114: '114',
      value_115: '115',
      value_116: '116',
      value_117: '117',
      value_118: '118',
      value_119: '119',
      value_120: '120',
      value_121: '121',
      value_122: '122',
      value_123: '123',
      value_124: '124',
      value_125: '125',
      value_126: '126',
      value_127: '127',
      value_128: '128',
      value_129: '129',
      value_130: '130',
      value_131: '131',
      value_132: '132',
      value_133: '133',
      value_134: '134',
      value_135: '135',
      value_136: '136',
      value_137: '137',
      value_138: '138',
      value_139: '139',
      value_140: '140',
      value_141: '141',
      value_142: '142',
      value_143: '143',
      value_144: '144',
      value_145: '145',
      value_146: '146',
      value_147: '147',
      value_148: '148',
      value_149: '149',
      value_150: '150',
      value_151: '151',
      value_152: '152',
      value_153: '153',
      value_154: '154',
      value_155: '155',
      value_156: '156',
      value_157: '157',
      value_158: '158',
      value_159: '159',
      value_160: '160',
      value_161: '161',
      value_162: '162',
      value_163: '163',
      value_164: '164',
      value_165: '165',
      value_166: '166',
      value_167: '167',
      value_168: '168',
      value_169: '169',
      value_170: '170',
      value_171: '171',
      value_172: '172',
      value_173: '173',
      value_174: '174',
      value_175: '175',
      value_176: '176',
      value_177: '177',
      value_178: '178',
      value_179: '179',
      value_180: '180',
      value_181: '181',
      value_182: '182',
      value_183: '183',
      value_184: '184',
      value_185: '185',
      value_186: '186',
      value_187: '187',
      value_188: '188',
      value_189: '189',
      value_190: '190',
      value_191: '191',
      value_192: '192',
      value_193: '193',
      value_194: '194',
      value_195: '195',
      value_196: '196',
      value_197: '197',
      value_198: '198',
      value_199: '199',
      value_200: '200',
      value_201: '201',
      value_202: '202',
      value_203: '203',
      value_204: '204',
      value_205: '205',
      value_206: '206',
      value_207: '207',
      value_208: '208',
      value_209: '209',
      value_210: '210',
      value_211: '211',
      value_212: '212',
      value_213: '213',
      value_214: '214',
      value_215: '215',
      value_216: '216',
      value_217: '217',
      value_218: '218',
      value_219: '219',
      value_220: '220',
      value_221: '221',
      value_222: '222',
      value_223: '223',
      value_224: '224',
      value_225: '225',
      value_226: '226',
      value_227: '227',
      value_228: '228',
      value_229: '229',
      value_230: '230',
      value_231: '231',
      value_232: '232',
      value_233: '233',
      value_234: '234',
      value_235: '235',
      value_236: '236',
      value_237: '237',
      value_238: '238',
      value_239: '239',
      value_240: '240',
      value_241: '241',
      value_242: '242',
      value_243: '243',
      value_244: '244',
      value_245: '245',
      value_246: '246',
      value_247: '247',
      value_248: '248',
      value_249: '249',
      value_250: '250',
      value_251: '251',
      value_252: '252',
      value_253: '253',
      value_254: '254',
      value_255: '255',
      value_256: '256',
      value_257: '257',
      value_258: '258',
      value_259: '259',
      value_260: '260',
      value_261: '261',
      value_262: '262',
      value_263: '263',
      value_264: '264',
      value_265: '265',
      value_266: '266',
      value_267: '267',
      value_268: '268',
      value_269: '269',
      value_270: '270',
      value_271: '271',
      value_272: '272',
      value_273: '273',
      value_274: '274',
      value_275: '275',
      value_276: '276',
      value_277: '277',
      value_278: '278',
      value_279: '279',
      value_280: '280',
      value_281: '281',
      value_282: '282',
      value_283: '283',
      value_284: '284',
      value_285: '285',
      value_286: '286',
      value_287: '287',
      value_288: '288',
      value_289: '289',
      value_290: '290',
      value_291: '291',
      value_292: '292',
      value_293: '293',
      value_294: '294',
      value_295: '295',
      value_296: '296',
      value_297: '297',
      value_298: '298',
      value_299: '299',
      value_300: '300',
      value_301: '301',
      value_302: '302',
      value_303: '303',
      value_304: '304',
      value_305: '305',
      value_306: '306',
      value_307: '307',
      value_308: '308',
      value_309: '309',
      value_310: '310',
      value_311: '311',
      value_312: '312',
      value_313: '313',
      value_314: '314',
      value_315: '315',
      value_316: '316',
      value_317: '317',
      value_318: '318',
      value_319: '319',
      value_320: '320',
      value_321: '321',
      value_322: '322',
      value_323: '323',
      value_324: '324',
      value_325: '325',
      value_326: '326',
      value_327: '327',
      value_328: '328',
      value_329: '329',
      value_330: '330',
      value_331: '331',
      value_332: '332',
      value_333: '333',
      value_334: '334',
      value_335: '335',
      value_336: '336',
      value_337: '337',
      value_338: '338',
      value_339: '339',
      value_340: '340',
      value_341: '341',
      value_342: '342',
      value_343: '343',
      value_344: '344',
      value_345: '345',
      value_346: '346',
      value_347: '347',
      value_348: '348',
      value_349: '349',
      value_350: '350',
      value_351: '351',
      value_352: '352',
      value_353: '353',
      value_354: '354',
      value_355: '355',
      value_356: '356',
      value_357: '357',
      value_358: '358',
      value_359: '359',
      value_360: '360',
      value_361: '361',
      value_362: '362',
      value_363: '363',
      value_364: '364',
      value_365: '365',
      value_366: '366',
      value_367: '367',
      value_368: '368',
      value_369: '369',
      value_370: '370',
      value_371: '371',
      value_372: '372',
      value_373: '373',
      value_374: '374',
      value_375: '375',
      value_376: '376',
      value_377: '377',
      value_378: '378',
      value_379: '379',
      value_380: '380',
      value_381: '381',
      value_382: '382',
      value_383: '383',
      value_384: '384',
      value_385: '385',
      value_386: '386',
      value_387: '387',
      value_388: '388',
      value_389: '389',
      value_390: '390',
      value_391: '391',
      value_392: '392',
      value_393: '393',
      value_394: '394',
      value_395: '395',
      value_396: '396',
      value_397: '397',
      value_398: '398',
      value_399: '399',
      value_400: '400',
      value_401: '401',
      value_402: '402',
      value_403: '403',
      value_404: '404',
      value_405: '405',
      value_406: '406',
      value_407: '407',
      value_408: '408',
      value_409: '409',
      value_410: '410',
      value_411: '411',
      value_412: '412',
      value_413: '413',
      value_414: '414',
      value_415: '415',
      value_416: '416',
      value_417: '417',
      value_418: '418',
      value_419: '419',
      value_420: '420',
      value_421: '421',
      value_422: '422',
      value_423: '423',
      value_424: '424',
      value_425: '425',
      value_426: '426',
      value_427: '427',
      value_428: '428',
      value_429: '429',
      value_430: '430',
      value_431: '431',
      value_432: '432',
      value_433: '433',
      value_434: '434',
      value_435: '435',
      value_436: '436',
      value_437: '437',
      value_438: '438',
      value_439: '439',
      value_440: '440',
      value_441: '441',
      value_442: '442',
      value_443: '443',
      value_444: '444',
      value_445: '445',
      value_446: '446',
      value_447: '447',
      value_448: '448',
      value_449: '449',
      value_450: '450',
      value_451: '451',
      value_452: '452',
      value_453: '453',
      value_454: '454',
      value_455: '455',
      value_456: '456',
      value_457: '457',
      value_458: '458',
      value_459: '459',
      value_460: '460',
      value_461: '461',
      value_462: '462',
      value_463: '463',
      value_464: '464',
      value_465: '465',
      value_466: '466',
      value_467: '467',
      value_468: '468',
      value_469: '469',
      value_470: '470',
      value_471: '471',
      value_472: '472',
      value_473: '473',
      value_474: '474',
      value_475: '475',
      value_476: '476',
      value_477: '477',
      value_478: '478',
      value_479: '479',
      value_480: '480',
    });
  }
  static get PagePermittedTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      cashier_role: 'CASHIER_ROLE',
      create_content: 'CREATE_CONTENT',
      global_structure_management: 'GLOBAL_STRUCTURE_MANAGEMENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      messaging: 'MESSAGING',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      profile_plus_advertise: 'PROFILE_PLUS_ADVERTISE',
      profile_plus_analyze: 'PROFILE_PLUS_ANALYZE',
      profile_plus_create_content: 'PROFILE_PLUS_CREATE_CONTENT',
      profile_plus_facebook_access: 'PROFILE_PLUS_FACEBOOK_ACCESS',
      profile_plus_full_control: 'PROFILE_PLUS_FULL_CONTROL',
      profile_plus_manage: 'PROFILE_PLUS_MANAGE',
      profile_plus_manage_leads: 'PROFILE_PLUS_MANAGE_LEADS',
      profile_plus_messaging: 'PROFILE_PLUS_MESSAGING',
      profile_plus_moderate: 'PROFILE_PLUS_MODERATE',
      profile_plus_moderate_delegate_community: 'PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY',
      profile_plus_revenue: 'PROFILE_PLUS_REVENUE',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }
  static get BusinessVertical (): Object {
    return Object.freeze({
      adult_products_and_services: 'ADULT_PRODUCTS_AND_SERVICES',
      alcohol_and_tobacco: 'ALCOHOL_AND_TOBACCO',
      automotive_dealers: 'AUTOMOTIVE_DEALERS',
      body_parts_fluids: 'BODY_PARTS_FLUIDS',
      business_and_utility: 'BUSINESS_AND_UTILITY',
      content_and_apps: 'CONTENT_AND_APPS',
      creators_and_celebrities: 'CREATORS_AND_CELEBRITIES',
      dating: 'DATING',
      drugs: 'DRUGS',
      endangered_species: 'ENDANGERED_SPECIES',
      firearms: 'FIREARMS',
      fraudulent_misleading_offensive: 'FRAUDULENT_MISLEADING_OFFENSIVE',
      gambling: 'GAMBLING',
      grocery_and_convenience_store: 'GROCERY_AND_CONVENIENCE_STORE',
      hazardous_goods_and_materials: 'HAZARDOUS_GOODS_AND_MATERIALS',
      home: 'HOME',
      home_and_auto_manufacturing: 'HOME_AND_AUTO_MANUFACTURING',
      lifestyle: 'LIFESTYLE',
      live_non_endangered_species: 'LIVE_NON_ENDANGERED_SPECIES',
      loans_debt_collection_bail_bonds: 'LOANS_DEBT_COLLECTION_BAIL_BONDS',
      local_events: 'LOCAL_EVENTS',
      medical_healthcare: 'MEDICAL_HEALTHCARE',
      multilevel_marketing: 'MULTILEVEL_MARKETING',
      non_profit_and_religious_orgs: 'NON_PROFIT_AND_RELIGIOUS_ORGS',
      professional: 'PROFESSIONAL',
      real_virtual_fake_currency: 'REAL_VIRTUAL_FAKE_CURRENCY',
      restaurants: 'RESTAURANTS',
      retail: 'RETAIL',
      transportation_and_accommodation: 'TRANSPORTATION_AND_ACCOMMODATION',
    });
  }
  static get SubverticalV2 (): Object {
    return Object.freeze({
      accounting_and_tax: 'ACCOUNTING_AND_TAX',
      activities_and_leisure: 'ACTIVITIES_AND_LEISURE',
      air: 'AIR',
      apparel_and_accessories: 'APPAREL_AND_ACCESSORIES',
      arts_and_heritage_and_education: 'ARTS_AND_HERITAGE_AND_EDUCATION',
      ar_or_vr_gaming: 'AR_OR_VR_GAMING',
      audio_streaming: 'AUDIO_STREAMING',
      auto: 'AUTO',
      auto_insurance: 'AUTO_INSURANCE',
      auto_rental: 'AUTO_RENTAL',
      baby: 'BABY',
      ballot_initiative_or_referendum: 'BALLOT_INITIATIVE_OR_REFERENDUM',
      beauty: 'BEAUTY',
      beauty_and_fashion: 'BEAUTY_AND_FASHION',
      beer_and_wine_and_liquor_and_malt_beverages: 'BEER_AND_WINE_AND_LIQUOR_AND_MALT_BEVERAGES',
      bookstores: 'BOOKSTORES',
      broadcast_television: 'BROADCAST_TELEVISION',
      business_consultants: 'BUSINESS_CONSULTANTS',
      buying_agency: 'BUYING_AGENCY',
      cable_and_satellite: 'CABLE_AND_SATELLITE',
      cable_television: 'CABLE_TELEVISION',
      call_center_and_messaging_services: 'CALL_CENTER_AND_MESSAGING_SERVICES',
      candidate_or_politician: 'CANDIDATE_OR_POLITICIAN',
      career: 'CAREER',
      career_and_tech: 'CAREER_AND_TECH',
      casual_dining: 'CASUAL_DINING',
      chronic_conditions_and_medical_causes: 'CHRONIC_CONDITIONS_AND_MEDICAL_CAUSES',
      civic_influencers: 'CIVIC_INFLUENCERS',
      clinical_trials: 'CLINICAL_TRIALS',
      coffee: 'COFFEE',
      computer_and_software_and_hardware: 'COMPUTER_AND_SOFTWARE_AND_HARDWARE',
      console_and_cross_platform_gaming: 'CONSOLE_AND_CROSS_PLATFORM_GAMING',
      consulting: 'CONSULTING',
      consumer_electronics: 'CONSUMER_ELECTRONICS',
      counseling_and_psychotherapy: 'COUNSELING_AND_PSYCHOTHERAPY',
      creative_agency: 'CREATIVE_AGENCY',
      credit_and_financing_and_mortages: 'CREDIT_AND_FINANCING_AND_MORTAGES',
      cruises_and_marine: 'CRUISES_AND_MARINE',
      culture_and_lifestyle: 'CULTURE_AND_LIFESTYLE',
      data_analytics_and_data_management: 'DATA_ANALYTICS_AND_DATA_MANAGEMENT',
      dating_and_technology_apps: 'DATING_AND_TECHNOLOGY_APPS',
      department_store: 'DEPARTMENT_STORE',
      desktop_software: 'DESKTOP_SOFTWARE',
      dieting_and_fitness_programs: 'DIETING_AND_FITNESS_PROGRAMS',
      digital_native_education_or_training: 'DIGITAL_NATIVE_EDUCATION_OR_TRAINING',
      drinking_places: 'DRINKING_PLACES',
      education_resources: 'EDUCATION_RESOURCES',
      ed_tech: 'ED_TECH',
      elearning_and_massive_online_open_courses: 'ELEARNING_AND_MASSIVE_ONLINE_OPEN_COURSES',
      election_commission: 'ELECTION_COMMISSION',
      electronics_and_appliances: 'ELECTRONICS_AND_APPLIANCES',
      engineering_and_design: 'ENGINEERING_AND_DESIGN',
      environment_and_animal_welfare: 'ENVIRONMENT_AND_ANIMAL_WELFARE',
      esports: 'ESPORTS',
      events: 'EVENTS',
      farming_and_ranching: 'FARMING_AND_RANCHING',
      file_storage_and_cloud_and_data_services: 'FILE_STORAGE_AND_CLOUD_AND_DATA_SERVICES',
      finance: 'FINANCE',
      fin_tech: 'FIN_TECH',
      fishing_and_hunting_and_forestry_and_logging: 'FISHING_AND_HUNTING_AND_FORESTRY_AND_LOGGING',
      fitness: 'FITNESS',
      food: 'FOOD',
      footwear: 'FOOTWEAR',
      for_profit_colleges_and_universities: 'FOR_PROFIT_COLLEGES_AND_UNIVERSITIES',
      full_service_agency: 'FULL_SERVICE_AGENCY',
      government_controlled_entity: 'GOVERNMENT_CONTROLLED_ENTITY',
      government_department_or_agency: 'GOVERNMENT_DEPARTMENT_OR_AGENCY',
      government_official: 'GOVERNMENT_OFFICIAL',
      government_owned_media: 'GOVERNMENT_OWNED_MEDIA',
      grocery_and_drug_and_convenience: 'GROCERY_AND_DRUG_AND_CONVENIENCE',
      head_of_state: 'HEAD_OF_STATE',
      health_insurance: 'HEALTH_INSURANCE',
      health_systems_and_practitioners: 'HEALTH_SYSTEMS_AND_PRACTITIONERS',
      health_tech: 'HEALTH_TECH',
      home_and_furniture_and_office: 'HOME_AND_FURNITURE_AND_OFFICE',
      home_improvement: 'HOME_IMPROVEMENT',
      home_insurance: 'HOME_INSURANCE',
      home_tech: 'HOME_TECH',
      hotel_and_accomodation: 'HOTEL_AND_ACCOMODATION',
      household_goods_durable: 'HOUSEHOLD_GOODS_DURABLE',
      household_goods_non_durable: 'HOUSEHOLD_GOODS_NON_DURABLE',
      hr_and_financial_management: 'HR_AND_FINANCIAL_MANAGEMENT',
      humanitarian_or_disaster_relief: 'HUMANITARIAN_OR_DISASTER_RELIEF',
      independent_expenditure_group: 'INDEPENDENT_EXPENDITURE_GROUP',
      insurance_tech: 'INSURANCE_TECH',
      international_organizaton: 'INTERNATIONAL_ORGANIZATON',
      investment_bank_and_brokerage: 'INVESTMENT_BANK_AND_BROKERAGE',
      issue_advocacy: 'ISSUE_ADVOCACY',
      legal: 'LEGAL',
      life_insurance: 'LIFE_INSURANCE',
      logistics_and_transportation_and_fleet_management: 'LOGISTICS_AND_TRANSPORTATION_AND_FLEET_MANAGEMENT',
      manufacturing: 'MANUFACTURING',
      medical_devices_and_supplies_and_equipment: 'MEDICAL_DEVICES_AND_SUPPLIES_AND_EQUIPMENT',
      medspa_and_elective_surgeries_and_alternative_medicine: 'MEDSPA_AND_ELECTIVE_SURGERIES_AND_ALTERNATIVE_MEDICINE',
      mining_and_quarrying: 'MINING_AND_QUARRYING',
      mobile_gaming: 'MOBILE_GAMING',
      movies: 'MOVIES',
      museums_and_parks_and_libraries: 'MUSEUMS_AND_PARKS_AND_LIBRARIES',
      music: 'MUSIC',
      network_security_products: 'NETWORK_SECURITY_PRODUCTS',
      news_and_current_events: 'NEWS_AND_CURRENT_EVENTS',
      non_prescription: 'NON_PRESCRIPTION',
      not_for_profit_colleges_and_universities: 'NOT_FOR_PROFIT_COLLEGES_AND_UNIVERSITIES',
      office: 'OFFICE',
      office_or_business_supplies: 'OFFICE_OR_BUSINESS_SUPPLIES',
      oil_and_gas_and_consumable_fuel: 'OIL_AND_GAS_AND_CONSUMABLE_FUEL',
      online_only_publications: 'ONLINE_ONLY_PUBLICATIONS',
      package_or_freight_delivery: 'PACKAGE_OR_FREIGHT_DELIVERY',
      party_independent_expenditure_group_us: 'PARTY_INDEPENDENT_EXPENDITURE_GROUP_US',
      payment_processing_and_gateway_solutions: 'PAYMENT_PROCESSING_AND_GATEWAY_SOLUTIONS',
      pc_gaming: 'PC_GAMING',
      people: 'PEOPLE',
      personal_care: 'PERSONAL_CARE',
      pet: 'PET',
      photography_and_filming_services: 'PHOTOGRAPHY_AND_FILMING_SERVICES',
      pizza: 'PIZZA',
      planning_agency: 'PLANNING_AGENCY',
      political_party_or_committee: 'POLITICAL_PARTY_OR_COMMITTEE',
      prescription: 'PRESCRIPTION',
      professional_associations: 'PROFESSIONAL_ASSOCIATIONS',
      property_and_casualty: 'PROPERTY_AND_CASUALTY',
      quick_service: 'QUICK_SERVICE',
      radio: 'RADIO',
      railroads: 'RAILROADS',
      real_estate: 'REAL_ESTATE',
      real_money_gaming: 'REAL_MONEY_GAMING',
      recreational: 'RECREATIONAL',
      religious: 'RELIGIOUS',
      reseller: 'RESELLER',
      residential_and_long_term_care_facilities_and_outpatient_care_centers: 'RESIDENTIAL_AND_LONG_TERM_CARE_FACILITIES_AND_OUTPATIENT_CARE_CENTERS',
      retail_and_credit_union_and_commercial_bank: 'RETAIL_AND_CREDIT_UNION_AND_COMMERCIAL_BANK',
      ride_sharing_or_taxi_services: 'RIDE_SHARING_OR_TAXI_SERVICES',
      safety_services: 'SAFETY_SERVICES',
      scholarly: 'SCHOLARLY',
      school_and_early_children_edcation: 'SCHOOL_AND_EARLY_CHILDREN_EDCATION',
      social_media: 'SOCIAL_MEDIA',
      software_as_a_service: 'SOFTWARE_AS_A_SERVICE',
      sporting: 'SPORTING',
      sporting_and_outdoor: 'SPORTING_AND_OUTDOOR',
      sports: 'SPORTS',
      superstores: 'SUPERSTORES',
      t1_automotive_manufacturer: 'T1_AUTOMOTIVE_MANUFACTURER',
      t1_motorcycle: 'T1_MOTORCYCLE',
      t2_dealer_associations: 'T2_DEALER_ASSOCIATIONS',
      t3_auto_agency: 'T3_AUTO_AGENCY',
      t3_auto_resellers: 'T3_AUTO_RESELLERS',
      t3_dealer_groups: 'T3_DEALER_GROUPS',
      t3_franchise_dealer: 'T3_FRANCHISE_DEALER',
      t3_independent_dealer: 'T3_INDEPENDENT_DEALER',
      t3_parts_and_services: 'T3_PARTS_AND_SERVICES',
      t3_portals: 'T3_PORTALS',
      telecommunications_equipment_and_accessories: 'TELECOMMUNICATIONS_EQUIPMENT_AND_ACCESSORIES',
      telephone_service_providers_and_carriers: 'TELEPHONE_SERVICE_PROVIDERS_AND_CARRIERS',
      ticketing: 'TICKETING',
      tobacco: 'TOBACCO',
      tourism_and_travel_services: 'TOURISM_AND_TRAVEL_SERVICES',
      tourism_board: 'TOURISM_BOARD',
      toy_and_hobby: 'TOY_AND_HOBBY',
      trade_school: 'TRADE_SCHOOL',
      travel_agencies_and_guides_and_otas: 'TRAVEL_AGENCIES_AND_GUIDES_AND_OTAS',
      utilities_and_energy_equipment_and_services: 'UTILITIES_AND_ENERGY_EQUIPMENT_AND_SERVICES',
      veterinary_clinics_and_services: 'VETERINARY_CLINICS_AND_SERVICES',
      video_streaming: 'VIDEO_STREAMING',
      virtual_services: 'VIRTUAL_SERVICES',
      vitamins_or_wellness: 'VITAMINS_OR_WELLNESS',
      warehousing_and_storage: 'WAREHOUSING_AND_STORAGE',
      water_and_soft_drink_and_baverage: 'WATER_AND_SOFT_DRINK_AND_BAVERAGE',
      website_designers_or_graphic_designers: 'WEBSITE_DESIGNERS_OR_GRAPHIC_DESIGNERS',
      wholesale: 'WHOLESALE',
      wireless_services: 'WIRELESS_SERVICES',
    });
  }
  static get VerticalV2 (): Object {
    return Object.freeze({
      advertising_and_marketing: 'ADVERTISING_AND_MARKETING',
      agriculture: 'AGRICULTURE',
      automotive: 'AUTOMOTIVE',
      banking_and_credit_cards: 'BANKING_AND_CREDIT_CARDS',
      business_to_business: 'BUSINESS_TO_BUSINESS',
      consumer_packaged_goods: 'CONSUMER_PACKAGED_GOODS',
      ecommerce: 'ECOMMERCE',
      education: 'EDUCATION',
      energy_and_natural_resources_and_utilities: 'ENERGY_AND_NATURAL_RESOURCES_AND_UTILITIES',
      entertainment_and_media: 'ENTERTAINMENT_AND_MEDIA',
      gaming: 'GAMING',
      government: 'GOVERNMENT',
      healthcare_and_pharmaceuticals_and_biotech: 'HEALTHCARE_AND_PHARMACEUTICALS_AND_BIOTECH',
      insurance: 'INSURANCE',
      non_profit: 'NON_PROFIT',
      organizations_and_associations: 'ORGANIZATIONS_AND_ASSOCIATIONS',
      politics: 'POLITICS',
      professional_services: 'PROFESSIONAL_SERVICES',
      publishing: 'PUBLISHING',
      restaurants: 'RESTAURANTS',
      retail: 'RETAIL',
      technology: 'TECHNOLOGY',
      telecom: 'TELECOM',
      travel: 'TRAVEL',
    });
  }
  static get ActionSource (): Object {
    return Object.freeze({
      physical_store: 'PHYSICAL_STORE',
      website: 'WEBSITE',
    });
  }

  createAccessToken (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/access_token',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getAdAccountInfos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ALMAdAccountInfo,
      fields,
      params,
      fetchFirstPage,
      '/ad_account_infos'
    );
  }

  deleteAdAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/ad_accounts',
      params
    );
  }

  createAdReviewRequest (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/ad_review_requests',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getAdStudies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdStudy,
      fields,
      params,
      fetchFirstPage,
      '/ad_studies'
    );
  }

  createAdStudy (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdStudy> {
    return this.createEdge(
      '/ad_studies',
      fields,
      params,
      AdStudy,
      pathOverride,
    );
  }

  createAdAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdAccount> {
    return this.createEdge(
      '/adaccount',
      fields,
      params,
      AdAccount,
      pathOverride,
    );
  }

  createAddPhoneNumber (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/add_phone_numbers',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  createAdNetworkApplication (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Application> {
    return this.createEdge(
      '/adnetwork_applications',
      fields,
      params,
      Application,
      pathOverride,
    );
  }

  getAdNetworkAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdNetworkAnalyticsSyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics'
    );
  }

  createAdNetworkAnalytic (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/adnetworkanalytics',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getAdNetworkAnalyticsResults (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdNetworkAnalyticsAsyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics_results'
    );
  }

  getAdsDataset (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsDataset,
      fields,
      params,
      fetchFirstPage,
      '/ads_dataset'
    );
  }

  createAdsDataSet (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/ads_dataset',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getAdsReportingMmmReports (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsReportBuilderMMMReport,
      fields,
      params,
      fetchFirstPage,
      '/ads_reporting_mmm_reports'
    );
  }

  getAdsReportingMmmSchedulers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsReportBuilderMMMReportScheduler,
      fields,
      params,
      fetchFirstPage,
      '/ads_reporting_mmm_schedulers'
    );
  }

  getAdsPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/adspixels'
    );
  }

  createAdsPixel (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdsPixel> {
    return this.createEdge(
      '/adspixels',
      fields,
      params,
      AdsPixel,
      pathOverride,
    );
  }

  deleteAgencies (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  getAnPlacements (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdPlacement,
      fields,
      params,
      fetchFirstPage,
      '/an_placements'
    );
  }

  createBlockListDraft (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/block_list_drafts',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  createBmReviewRequest (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/bm_review_requests',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getBusinessAssetGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetGroup,
      fields,
      params,
      fetchFirstPage,
      '/business_asset_groups'
    );
  }

  getBusinessInvoices (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OmegaCustomerTrx,
      fields,
      params,
      fetchFirstPage,
      '/business_invoices'
    );
  }

  getBusinessUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessUser,
      fields,
      params,
      fetchFirstPage,
      '/business_users'
    );
  }

  createBusinessUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessUser> {
    return this.createEdge(
      '/business_users',
      fields,
      params,
      BusinessUser,
      pathOverride,
    );
  }

  getBusinessProjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessProject,
      fields,
      params,
      fetchFirstPage,
      '/businessprojects'
    );
  }

  createClaimCustomConversion (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CustomConversion> {
    return this.createEdge(
      '/claim_custom_conversions',
      fields,
      params,
      CustomConversion,
      pathOverride,
    );
  }

  getClientAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/client_ad_accounts'
    );
  }

  getClientApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/client_apps'
    );
  }

  createClientApp (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/client_apps',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getClientOffsiteSignalContainerBusinessObjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OffsiteSignalContainerBusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/client_offsite_signal_container_business_objects'
    );
  }

  getClientPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/client_pages'
    );
  }

  createClientPage (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/client_pages',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getClientPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/client_pixels'
    );
  }

  getClientProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/client_product_catalogs'
    );
  }

  getClientWhatsAppBusinessAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      WhatsAppBusinessAccount,
      fields,
      params,
      fetchFirstPage,
      '/client_whatsapp_business_accounts'
    );
  }

  deleteClients (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/clients',
      params
    );
  }

  getClients (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/clients'
    );
  }

  getCollaborativeAdsCollaborationRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CPASCollaborationRequest,
      fields,
      params,
      fetchFirstPage,
      '/collaborative_ads_collaboration_requests'
    );
  }

  createCollaborativeAdsCollaborationRequest (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CPASCollaborationRequest> {
    return this.createEdge(
      '/collaborative_ads_collaboration_requests',
      fields,
      params,
      CPASCollaborationRequest,
      pathOverride,
    );
  }

  getCollaborativeAdsSuggestedPartners (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CPASAdvertiserPartnershipRecommendation,
      fields,
      params,
      fetchFirstPage,
      '/collaborative_ads_suggested_partners'
    );
  }

  getCommerceMerchantSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CommerceMerchantSettings,
      fields,
      params,
      fetchFirstPage,
      '/commerce_merchant_settings'
    );
  }

  getCpasBusinessSetupConfig (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CPASBusinessSetupConfig,
      fields,
      params,
      fetchFirstPage,
      '/cpas_business_setup_config'
    );
  }

  createCpasBusinessSetupConfig (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CPASBusinessSetupConfig> {
    return this.createEdge(
      '/cpas_business_setup_config',
      fields,
      params,
      CPASBusinessSetupConfig,
      pathOverride,
    );
  }

  getCpasMerchantConfig (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CPASMerchantConfig,
      fields,
      params,
      fetchFirstPage,
      '/cpas_merchant_config'
    );
  }

  createCreativeFolder (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessCreativeFolder> {
    return this.createEdge(
      '/creative_folders',
      fields,
      params,
      BusinessCreativeFolder,
      pathOverride,
    );
  }

  getCreditCards (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CreditCard,
      fields,
      params,
      fetchFirstPage,
      '/creditcards'
    );
  }

  createCustomConversion (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<CustomConversion> {
    return this.createEdge(
      '/customconversions',
      fields,
      params,
      CustomConversion,
      pathOverride,
    );
  }

  getEventSourceGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      EventSourceGroup,
      fields,
      params,
      fetchFirstPage,
      '/event_source_groups'
    );
  }

  createEventSourceGroup (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<EventSourceGroup> {
    return this.createEdge(
      '/event_source_groups',
      fields,
      params,
      EventSourceGroup,
      pathOverride,
    );
  }

  getExtendedCreditApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ExtendedCreditApplication,
      fields,
      params,
      fetchFirstPage,
      '/extendedcreditapplications'
    );
  }

  getExtendedCredits (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ExtendedCredit,
      fields,
      params,
      fetchFirstPage,
      '/extendedcredits'
    );
  }

  createImage (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<BusinessImage> {
    return this.createEdge(
      '/images',
      fields,
      params,
      BusinessImage,
      pathOverride,
    );
  }

  getInitiatedAudienceSharingRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetSharingAgreement,
      fields,
      params,
      fetchFirstPage,
      '/initiated_audience_sharing_requests'
    );
  }

  deleteInstagramAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/instagram_accounts',
      params
    );
  }

  getInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_accounts'
    );
  }

  getInstagramBusinessAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_business_accounts'
    );
  }

  deleteManagedBusinesses (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/managed_businesses',
      params
    );
  }

  createManagedBusiness (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/managed_businesses',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getManagedPartnerAdsFundingSourceDetails (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      FundingSourceDetailsCoupon,
      fields,
      params,
      fetchFirstPage,
      '/managed_partner_ads_funding_source_details'
    );
  }

  createManagedPartnerBusinessSetup (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/managed_partner_business_setup',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  deleteManagedPartnerBusinesses (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/managed_partner_businesses',
      params
    );
  }

  createManagedPartnerBusiness (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ManagedPartnerBusiness> {
    return this.createEdge(
      '/managed_partner_businesses',
      fields,
      params,
      ManagedPartnerBusiness,
      pathOverride,
    );
  }

  createOnboardPartnersToMmLite (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/onboard_partners_to_mm_lite',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getOpenBridgeConfigurations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OpenBridgeConfiguration,
      fields,
      params,
      fetchFirstPage,
      '/openbridge_configurations'
    );
  }

  createOpenBridgeConfiguration (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<OpenBridgeConfiguration> {
    return this.createEdge(
      '/openbridge_configurations',
      fields,
      params,
      OpenBridgeConfiguration,
      pathOverride,
    );
  }

  getOwnedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/owned_ad_accounts'
    );
  }

  createOwnedAdAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/owned_ad_accounts',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getOwnedApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/owned_apps'
    );
  }

  createOwnedApp (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/owned_apps',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  deleteOwnedBusinesses (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/owned_businesses',
      params
    );
  }

  getOwnedBusinesses (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/owned_businesses'
    );
  }

  createOwnedBusiness (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/owned_businesses',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getOwnedInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      IGUser,
      fields,
      params,
      fetchFirstPage,
      '/owned_instagram_accounts'
    );
  }

  getOwnedOffsiteSignalContainerBusinessObjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OffsiteSignalContainerBusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/owned_offsite_signal_container_business_objects'
    );
  }

  getOwnedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/owned_pages'
    );
  }

  createOwnedPage (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/owned_pages',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getOwnedPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/owned_pixels'
    );
  }

  getOwnedProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/owned_product_catalogs'
    );
  }

  createOwnedProductCatalog (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalog> {
    return this.createEdge(
      '/owned_product_catalogs',
      fields,
      params,
      ProductCatalog,
      pathOverride,
    );
  }

  getOwnedWhatsAppBusinessAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      WhatsAppBusinessAccount,
      fields,
      params,
      fetchFirstPage,
      '/owned_whatsapp_business_accounts'
    );
  }

  deletePages (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/pages',
      params
    );
  }

  getPartnerAccountLinking (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PartnerAccountLinking,
      fields,
      params,
      fetchFirstPage,
      '/partner_account_linking'
    );
  }

  createPartnerPremiumOption (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/partner_premium_options',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getPassbackAttributionMetadataConfigs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/passback_attribution_metadata_configs'
    );
  }

  getPendingClientAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_client_ad_accounts'
    );
  }

  getPendingClientApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessApplicationRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_client_apps'
    );
  }

  getPendingClientPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_client_pages'
    );
  }

  getPendingOwnedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_owned_ad_accounts'
    );
  }

  getPendingOwnedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_owned_pages'
    );
  }

  getPendingSharedOffsiteSignalContainerBusinessObjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OffsiteSignalContainerBusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/pending_shared_offsite_signal_container_business_objects'
    );
  }

  getPendingUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessRoleRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_users'
    );
  }

  getPicture (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  createPixelTo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AbstractObject> {
    return this.createEdge(
      '/pixel_tos',
      fields,
      params,
      null,
      pathOverride,
    );
  }

  getPreVerifiedNumbers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      WhatsAppBusinessPreVerifiedPhoneNumber,
      fields,
      params,
      fetchFirstPage,
      '/preverified_numbers'
    );
  }

  getReceivedAudienceSharingRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetSharingAgreement,
      fields,
      params,
      fetchFirstPage,
      '/received_audience_sharing_requests'
    );
  }

  getResellerGuidances (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ResellerGuidance,
      fields,
      params,
      fetchFirstPage,
      '/reseller_guidances'
    );
  }

  getSelfCertifiedWhatsAppBusinessSubmissions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      WhatsAppBusinessPartnerClientVerificationSubmission,
      fields,
      params,
      fetchFirstPage,
      '/self_certified_whatsapp_business_submissions'
    );
  }

  createSelfCertifyWhatsAppBusiness (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/self_certify_whatsapp_business',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  createSetupManagedPartnerAdAccount (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/setup_managed_partner_adaccounts',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  deleteSharePreVerifiedNumbers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/share_preverified_numbers',
      params
    );
  }

  createSharePreVerifiedNumber (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/share_preverified_numbers',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  createSystemUserAccessToken (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<Business> {
    return this.createEdge(
      '/system_user_access_tokens',
      fields,
      params,
      Business,
      pathOverride,
    );
  }

  getSystemUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      SystemUser,
      fields,
      params,
      fetchFirstPage,
      '/system_users'
    );
  }

  createSystemUser (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<SystemUser> {
    return this.createEdge(
      '/system_users',
      fields,
      params,
      SystemUser,
      pathOverride,
    );
  }

  getThirdPartyMeasurementReportDataset (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ThirdPartyMeasurementReportDataset,
      fields,
      params,
      fetchFirstPage,
      '/third_party_measurement_report_dataset'
    );
  }

  createVideo (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdVideo> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo,
      pathOverride,
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Business {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Business {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
