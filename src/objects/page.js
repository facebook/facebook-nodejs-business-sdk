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
import AdAccount from './ad-account';
import PageAdminNote from './page-admin-note';
import PageAdminSettings from './page-admin-settings';
import User from './user';
import Ad from './ad';
import AdsPost from './ads-post';
import Business from './business';
import Album from './album';
import AnalyticsCohortQueryResult from './analytics-cohort-query-result';
import AnalyticsEntityUserConfig from './analytics-entity-user-config';
import AnalyticsEventTypes from './analytics-event-types';
import AnalyticsFunnelQueryResult from './analytics-funnel-query-result';
import AnalyticsQueryResult from './analytics-query-result';
import AnalyticsQueryExportResult from './analytics-query-export-result';
import AnalyticsSegment from './analytics-segment';
import WithAsset3D from './with-asset3-d';
import AssignedUser from './assigned-user';
import AudioCopyright from './audio-copyright';
import AudioRelease from './audio-release';
import EntWithSponsor from './ent-with-sponsor';
import Profile from './profile';
import PageBroadcast from './page-broadcast';
import PageBudgetRecs from './page-budget-recs';
import BusinessActivityLogEvent from './business-activity-log-event';
import BusinessTag from './business-tag';
import BusinessRequest from './business-request';
import BusinessProject from './business-project';
import BusinessSettingLogsData from './business-setting-logs-data';
import PageCallToAction from './page-call-to-action';
import CanvasBodyElement from './canvas-body-element';
import Canvas from './canvas';
import PageChangeProposal from './page-change-proposal';
import PagePost from './page-post';
import URL from './url';
import CommerceMerchantSettings from './commerce-merchant-settings';
import CommerceOrder from './commerce-order';
import PagesPlatformComponentFlow from './pages-platform-component-flow';
import BusinessObject from './business-object';
import PagePostExperiment from './page-post-experiment';
import UnifiedThread from './unified-thread';
import VideoCopyrightMatch from './video-copyright-match';
import VideoReferenceMatch from './video-reference-match';
import PageUserMessageThreadLabel from './page-user-message-thread-label';
import CustomUserSettings from './custom-user-settings';
import DocumentFont from './document-font';
import ProductCatalog from './product-catalog';
import DraftPost from './draft-post';
import TarotDigest from './tarot-digest';
import Event from './event';
import ExpirablePost from './expirable-post';
import PageFeatureAccessList from './page-feature-access-list';
import AdVideo from './ad-video';
import VideoCopyright from './video-copyright';
import InsightsResult from './insights-result';
import PageInsightsAsyncExportRun from './page-insights-async-export-run';
import InstagramUser from './instagram-user';
import InstantArticleCTA from './instant-article-cta';
import InstantArticle from './instant-article';
import InstantArticleInsightsQueryResult from './instant-article-insights-query-result';
import InstantArticleTrafficLift from './instant-article-traffic-lift';
import JobOpening from './job-opening';
import PageLabel from './page-label';
import LeadGenConditionalQuestionsGroup from './lead-gen-conditional-questions-group';
import LeadGenContextCard from './lead-gen-context-card';
import LeadGenDataDraft from './lead-gen-data-draft';
import LeadgenForm from './leadgen-form';
import LeadGenDirectCRMIntegrationThirdPartyApp from './lead-gen-direct-crm-integration-third-party-app';
import LeadGenLegalContent from './lead-gen-legal-content';
import LeadGenQualifier from './lead-gen-qualifier';
import VideoAsset from './video-asset';
import Link from './link';
import LiveEncoder from './live-encoder';
import LiveVideo from './live-video';
import PageLocationsBreakdown from './page-locations-breakdown';
import MarketingArea from './marketing-area';
import MediaCopyrightAttribution from './media-copyright-attribution';
import MediaFingerprint from './media-fingerprint';
import Menu from './menu';
import MessagingFeatureReview from './messaging-feature-review';
import MessengerDestinationPageWelcomeMessage from './messenger-destination-page-welcome-message';
import MessengerAdsPartialAutomatedStepList from './messenger-ads-partial-automated-step-list';
import MessengerProfile from './messenger-profile';
import LifeEvent from './life-event';
import MusicVideoCopyright from './music-video-copyright';
import NativeOffer from './native-offer';
import StonehengeSubscriptionPublisher from './stonehenge-subscription-publisher';
import Offer from './offer';
import BusinessOwnedObjectOnBehalfOfRequest from './business-owned-object-on-behalf-of-request';
import PageAppWithLeadsAccess from './page-app-with-leads-access';
import PageDirectIntegrationCrmWithLeadsAccess from './page-direct-integration-crm-with-leads-access';
import PagePartnerWithLeadsAccess from './page-partner-with-leads-access';
import PageUserWithLeadsAccess from './page-user-with-leads-access';
import BusinessRoleRequest from './business-role-request';
import Permission from './permission';
import Persona from './persona';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import PlaceTopic from './place-topic';
import Recommendation from './recommendation';
import FoodDrinkOrder from './food-drink-order';
import RTBDynamicPost from './rtb-dynamic-post';
import PageSavedFilter from './page-saved-filter';
import SavedMessageResponse from './saved-message-response';
import ScheduledPost from './scheduled-post';
import ScreenName from './screen-name';
import SearchDialogData from './search-dialog-data';
import VideoList from './video-list';
import Application from './application';
import PageSettings from './page-settings';
import CommerceMerchantSettingsSetupStatus from './commerce-merchant-settings-setup-status';
import PageStoreVisitsCustomAudiencesEligibleCountries from './page-store-visits-custom-audiences-eligible-countries';
import PageStoreVisitsDemographicInsights from './page-store-visits-demographic-insights';
import Tab from './tab';
import PageThreadOwner from './page-thread-owner';
import ThreadSetting from './thread-setting';
import EventTour from './event-tour';
import PageUpcomingChange from './page-upcoming-change';
import GenericVideoAsset from './generic-video-asset';
import VideoCopyrightRule from './video-copyright-rule';
import VideoGroup from './video-group';
import VideoStats from './video-stats';
import PageVideosYouCanUse from './page-videos-you-can-use';
import PagesPlatformComponentFlowServiceConfig from './pages-platform-component-flow-service-config';

/**
 * Page
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Page extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      about: 'about',
      access_token: 'access_token',
      ad_campaign: 'ad_campaign',
      affiliation: 'affiliation',
      app_id: 'app_id',
      app_links: 'app_links',
      artists_we_like: 'artists_we_like',
      attire: 'attire',
      awards: 'awards',
      band_interests: 'band_interests',
      band_members: 'band_members',
      best_page: 'best_page',
      bio: 'bio',
      birthday: 'birthday',
      booking_agent: 'booking_agent',
      built: 'built',
      business: 'business',
      can_checkin: 'can_checkin',
      can_post: 'can_post',
      category: 'category',
      category_list: 'category_list',
      checkins: 'checkins',
      company_overview: 'company_overview',
      connected_instagram_account: 'connected_instagram_account',
      contact_address: 'contact_address',
      context: 'context',
      copyright_attribution_insights: 'copyright_attribution_insights',
      copyright_whitelisted_ig_partners: 'copyright_whitelisted_ig_partners',
      country_page_likes: 'country_page_likes',
      cover: 'cover',
      culinary_team: 'culinary_team',
      current_location: 'current_location',
      description: 'description',
      description_html: 'description_html',
      directed_by: 'directed_by',
      display_subtext: 'display_subtext',
      displayed_message_response_time: 'displayed_message_response_time',
      emails: 'emails',
      engagement: 'engagement',
      fan_count: 'fan_count',
      featured_video: 'featured_video',
      features: 'features',
      food_styles: 'food_styles',
      founded: 'founded',
      general_info: 'general_info',
      general_manager: 'general_manager',
      genre: 'genre',
      global_brand_page_name: 'global_brand_page_name',
      global_brand_parent_page: 'global_brand_parent_page',
      global_brand_root_id: 'global_brand_root_id',
      has_added_app: 'has_added_app',
      has_whatsapp_business_number: 'has_whatsapp_business_number',
      has_whatsapp_number: 'has_whatsapp_number',
      hometown: 'hometown',
      hours: 'hours',
      id: 'id',
      impressum: 'impressum',
      influences: 'influences',
      instagram_business_account: 'instagram_business_account',
      instant_articles_review_status: 'instant_articles_review_status',
      is_always_open: 'is_always_open',
      is_chain: 'is_chain',
      is_community_page: 'is_community_page',
      is_eligible_for_branded_content: 'is_eligible_for_branded_content',
      is_messenger_bot_get_started_enabled: 'is_messenger_bot_get_started_enabled',
      is_messenger_platform_bot: 'is_messenger_platform_bot',
      is_owned: 'is_owned',
      is_permanently_closed: 'is_permanently_closed',
      is_published: 'is_published',
      is_unclaimed: 'is_unclaimed',
      is_verified: 'is_verified',
      is_webhooks_subscribed: 'is_webhooks_subscribed',
      keywords: 'keywords',
      leadgen_form_preview_details: 'leadgen_form_preview_details',
      leadgen_has_crm_integration: 'leadgen_has_crm_integration',
      leadgen_has_fat_ping_crm_integration: 'leadgen_has_fat_ping_crm_integration',
      leadgen_tos_acceptance_time: 'leadgen_tos_acceptance_time',
      leadgen_tos_accepted: 'leadgen_tos_accepted',
      leadgen_tos_accepting_user: 'leadgen_tos_accepting_user',
      link: 'link',
      location: 'location',
      members: 'members',
      merchant_id: 'merchant_id',
      merchant_review_status: 'merchant_review_status',
      messenger_ads_default_icebreakers: 'messenger_ads_default_icebreakers',
      messenger_ads_default_page_welcome_message: 'messenger_ads_default_page_welcome_message',
      messenger_ads_default_quick_replies: 'messenger_ads_default_quick_replies',
      messenger_ads_quick_replies_type: 'messenger_ads_quick_replies_type',
      mission: 'mission',
      mpg: 'mpg',
      name: 'name',
      name_with_location_descriptor: 'name_with_location_descriptor',
      network: 'network',
      new_like_count: 'new_like_count',
      offer_eligible: 'offer_eligible',
      overall_star_rating: 'overall_star_rating',
      page_token: 'page_token',
      parent_page: 'parent_page',
      parking: 'parking',
      payment_options: 'payment_options',
      personal_info: 'personal_info',
      personal_interests: 'personal_interests',
      pharma_safety_info: 'pharma_safety_info',
      phone: 'phone',
      place_type: 'place_type',
      plot_outline: 'plot_outline',
      preferred_audience: 'preferred_audience',
      press_contact: 'press_contact',
      price_range: 'price_range',
      produced_by: 'produced_by',
      products: 'products',
      promotion_eligible: 'promotion_eligible',
      promotion_ineligible_reason: 'promotion_ineligible_reason',
      public_transit: 'public_transit',
      publisher_space: 'publisher_space',
      rating_count: 'rating_count',
      recipient: 'recipient',
      record_label: 'record_label',
      release_date: 'release_date',
      restaurant_services: 'restaurant_services',
      restaurant_specialties: 'restaurant_specialties',
      schedule: 'schedule',
      screenplay_by: 'screenplay_by',
      season: 'season',
      single_line_address: 'single_line_address',
      starring: 'starring',
      start_info: 'start_info',
      store_code: 'store_code',
      store_location_descriptor: 'store_location_descriptor',
      store_number: 'store_number',
      studio: 'studio',
      supports_instant_articles: 'supports_instant_articles',
      talking_about_count: 'talking_about_count',
      unread_message_count: 'unread_message_count',
      unread_notif_count: 'unread_notif_count',
      unseen_message_count: 'unseen_message_count',
      username: 'username',
      verification_status: 'verification_status',
      voip_info: 'voip_info',
      website: 'website',
      were_here_count: 'were_here_count',
      whatsapp_number: 'whatsapp_number',
      written_by: 'written_by'
    });
  }

  static get Permission (): Object {
    return Object.freeze({
      organic_post_link_edit: 'ORGANIC_POST_LINK_EDIT',
      ads_publish: 'ADS_PUBLISH',
      ads_link_edit: 'ADS_LINK_EDIT'
    });
  }
  static get Restriction (): Object {
    return Object.freeze({
      none: 'NONE',
      blacklist_inactive: 'BLACKLIST_INACTIVE',
      blacklist_active: 'BLACKLIST_ACTIVE',
      whitelist_inactive: 'WHITELIST_INACTIVE',
      whitelist_active: 'WHITELIST_ACTIVE'
    });
  }
  static get Attire (): Object {
    return Object.freeze({
      unspecified: 'Unspecified',
      casual: 'Casual',
      dressy: 'Dressy'
    });
  }
  static get FoodStyles (): Object {
    return Object.freeze({
      afghani: 'Afghani',
      american_new_: 'American (New)',
      american_traditional_: 'American (Traditional)',
      asian_fusion: 'Asian Fusion',
      barbeque: 'Barbeque',
      brazilian: 'Brazilian',
      breakfast: 'Breakfast',
      british: 'British',
      brunch: 'Brunch',
      buffets: 'Buffets',
      burgers: 'Burgers',
      burmese: 'Burmese',
      cajun_creole: 'Cajun/Creole',
      caribbean: 'Caribbean',
      chinese: 'Chinese',
      creperies: 'Creperies',
      cuban: 'Cuban',
      delis: 'Delis',
      diners: 'Diners',
      ethiopian: 'Ethiopian',
      fast_food: 'Fast Food',
      filipino: 'Filipino',
      fondue: 'Fondue',
      food_stands: 'Food Stands',
      french: 'French',
      german: 'German',
      greek_and_mediterranean: 'Greek and Mediterranean',
      hawaiian: 'Hawaiian',
      himalayan_nepalese: 'Himalayan/Nepalese',
      hot_dogs: 'Hot Dogs',
      indian_pakistani: 'Indian/Pakistani',
      irish: 'Irish',
      italian: 'Italian',
      japanese: 'Japanese',
      korean: 'Korean',
      latin_american: 'Latin American',
      mexican: 'Mexican',
      middle_eastern: 'Middle Eastern',
      moroccan: 'Moroccan',
      pizza: 'Pizza',
      russian: 'Russian',
      sandwiches: 'Sandwiches',
      seafood: 'Seafood',
      singaporean: 'Singaporean',
      soul_food: 'Soul Food',
      southern: 'Southern',
      spanish_basque: 'Spanish/Basque',
      steakhouses: 'Steakhouses',
      sushi_bars: 'Sushi Bars',
      taiwanese: 'Taiwanese',
      tapas_bars: 'Tapas Bars',
      tex_mex: 'Tex-Mex',
      thai: 'Thai',
      turkish: 'Turkish',
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      vietnamese: 'Vietnamese'
    });
  }
  static get Setting (): Object {
    return Object.freeze({
      post_as_self: 'POST_AS_SELF',
      email_notif: 'EMAIL_NOTIF',
      mobile_notif: 'MOBILE_NOTIF'
    });
  }
  static get Audience (): Object {
    return Object.freeze({
      grouper: 'GROUPER',
      ncpp: 'NCPP',
      custom_audience: 'CUSTOM_AUDIENCE',
      lookalike: 'LOOKALIKE',
      fans: 'FANS',
      local: 'LOCAL',
      ig_promoted_post_auto: 'IG_PROMOTED_POST_AUTO',
      saved_audience: 'SAVED_AUDIENCE',
      event_engagement: 'EVENT_ENGAGEMENT',
      district: 'DISTRICT',
      smart_audience: 'SMART_AUDIENCE',
      create_new: 'CREATE_NEW',
      auto_lookalike: 'AUTO_LOOKALIKE',
      mult_custom_audiences: 'MULT_CUSTOM_AUDIENCES',
      event_custom_audiences: 'EVENT_CUSTOM_AUDIENCES'
    });
  }
  static get PermittedTasks (): Object {
    return Object.freeze({
      manage: 'MANAGE',
      create_content: 'CREATE_CONTENT',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE'
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      manage: 'MANAGE',
      create_content: 'CREATE_CONTENT',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE'
    });
  }
  static get MessagingType (): Object {
    return Object.freeze({
      response: 'RESPONSE',
      update: 'UPDATE',
      message_tag: 'MESSAGE_TAG'
    });
  }
  static get NotificationType (): Object {
    return Object.freeze({
      regular: 'REGULAR',
      silent_push: 'SILENT_PUSH',
      no_push: 'NO_PUSH'
    });
  }
  static get PublishStatus (): Object {
    return Object.freeze({
      draft: 'DRAFT',
      live: 'LIVE'
    });
  }
  static get SenderAction (): Object {
    return Object.freeze({
      mark_seen: 'MARK_SEEN',
      typing_on: 'TYPING_ON',
      typing_off: 'TYPING_OFF'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      standard: 'STANDARD',
      ref: 'REF'
    });
  }
  static get Model (): Object {
    return Object.freeze({
      arabic: 'ARABIC',
      chinese: 'CHINESE',
      croatian: 'CROATIAN',
      custom: 'CUSTOM',
      danish: 'DANISH',
      dutch: 'DUTCH',
      english: 'ENGLISH',
      french_standard: 'FRENCH_STANDARD',
      german_standard: 'GERMAN_STANDARD',
      greek: 'GREEK',
      hebrew: 'HEBREW',
      hungarian: 'HUNGARIAN',
      irish: 'IRISH',
      italian_standard: 'ITALIAN_STANDARD',
      korean: 'KOREAN',
      norwegian_bokmal: 'NORWEGIAN_BOKMAL',
      polish: 'POLISH',
      portuguese: 'PORTUGUESE',
      romanian: 'ROMANIAN',
      spanish: 'SPANISH',
      swedish: 'SWEDISH',
      vietnamese: 'VIETNAMESE'
    });
  }
  static get Filtering (): Object {
    return Object.freeze({
      groups: 'groups',
      groups_social: 'groups_social',
      ema: 'ema'
    });
  }
  static get SubscribedFields (): Object {
    return Object.freeze({
      feed: 'feed',
      mention: 'mention',
      name: 'name',
      picture: 'picture',
      category: 'category',
      description: 'description',
      conversations: 'conversations',
      branded_camera: 'branded_camera',
      feature_access_list: 'feature_access_list',
      standby: 'standby',
      messages: 'messages',
      messaging_account_linking: 'messaging_account_linking',
      messaging_checkout_updates: 'messaging_checkout_updates',
      message_echoes: 'message_echoes',
      message_deliveries: 'message_deliveries',
      messaging_game_plays: 'messaging_game_plays',
      messaging_optins: 'messaging_optins',
      messaging_optouts: 'messaging_optouts',
      messaging_payments: 'messaging_payments',
      messaging_postbacks: 'messaging_postbacks',
      messaging_pre_checkouts: 'messaging_pre_checkouts',
      message_reads: 'message_reads',
      messaging_referrals: 'messaging_referrals',
      messaging_handovers: 'messaging_handovers',
      messaging_policy_enforcement: 'messaging_policy_enforcement',
      messaging_page_feedback: 'messaging_page_feedback',
      founded: 'founded',
      company_overview: 'company_overview',
      mission: 'mission',
      products: 'products',
      general_info: 'general_info',
      leadgen: 'leadgen',
      leadgen_fat: 'leadgen_fat',
      location: 'location',
      hours: 'hours',
      parking: 'parking',
      public_transit: 'public_transit',
      phone: 'phone',
      email: 'email',
      website: 'website',
      ratings: 'ratings',
      attire: 'attire',
      payment_options: 'payment_options',
      culinary_team: 'culinary_team',
      general_manager: 'general_manager',
      price_range: 'price_range',
      awards: 'awards',
      hometown: 'hometown',
      current_location: 'current_location',
      bio: 'bio',
      affiliation: 'affiliation',
      birthday: 'birthday',
      personal_info: 'personal_info',
      personal_interests: 'personal_interests',
      publisher_subscriptions: 'publisher_subscriptions',
      members: 'members',
      checkins: 'checkins',
      page_upcoming_change: 'page_upcoming_change',
      page_change_proposal: 'page_change_proposal',
      merchant_review: 'merchant_review',
      product_review: 'product_review',
      videos: 'videos',
      live_videos: 'live_videos',
      registration: 'registration'
    });
  }
  static get DomainActionType (): Object {
    return Object.freeze({
      add: 'ADD',
      remove: 'REMOVE'
    });
  }
  static get PaymentDevModeAction (): Object {
    return Object.freeze({
      add: 'ADD',
      remove: 'REMOVE'
    });
  }
  static get SettingType (): Object {
    return Object.freeze({
      account_linking: 'ACCOUNT_LINKING',
      call_to_actions: 'CALL_TO_ACTIONS',
      greeting: 'GREETING',
      domain_whitelisting: 'DOMAIN_WHITELISTING',
      payment: 'PAYMENT'
    });
  }
  static get ThreadState (): Object {
    return Object.freeze({
      new_thread: 'NEW_THREAD',
      existing_thread: 'EXISTING_THREAD'
    });
  }

  createActivity (fields, params): Page {
    return this.createEdge(
      '/activities',
      fields,
      params,
      Page
    );
  }

  getAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  getAdminNotes (fields, params, fetchFirstPage = true): PageAdminNote {
    return this.getEdge(
      PageAdminNote,
      fields,
      params,
      fetchFirstPage,
      '/admin_notes'
    );
  }

  createAdminNote (fields, params): PageAdminNote {
    return this.createEdge(
      '/admin_notes',
      fields,
      params,
      PageAdminNote
    );
  }

  getAdminSettings (fields, params, fetchFirstPage = true): PageAdminSettings {
    return this.getEdge(
      PageAdminSettings,
      fields,
      params,
      fetchFirstPage,
      '/admin_settings'
    );
  }

  createAdMInSetting (fields, params): Page {
    return this.createEdge(
      '/admin_settings',
      fields,
      params,
      Page
    );
  }

  deleteAdMIns (params): AbstractObject {
    return super.deleteEdge(
      '/admins',
      params
    );
  }

  deleteAdMIns (params): AbstractObject {
    return super.deleteEdge(
      '/admins',
      params
    );
  }

  getAdMIns (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/admins'
    );
  }

  createAdMIn (fields, params): User {
    return this.createEdge(
      '/admins',
      fields,
      params,
      User
    );
  }

  createAdMIn (fields, params): User {
    return this.createEdge(
      '/admins',
      fields,
      params,
      User
    );
  }

  createAdMInStickySetting (fields, params): Page {
    return this.createEdge(
      '/adminstickysettings',
      fields,
      params,
      Page
    );
  }

  getAds (fields, params, fetchFirstPage = true): Ad {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/ads'
    );
  }

  getAdsPosts (fields, params, fetchFirstPage = true): AdsPost {
    return this.getEdge(
      AdsPost,
      fields,
      params,
      fetchFirstPage,
      '/ads_posts'
    );
  }

  deleteAgencies (params): AbstractObject {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createAgency (fields, params): Page {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      Page
    );
  }

  getAlbums (fields, params, fetchFirstPage = true): Album {
    return this.getEdge(
      Album,
      fields,
      params,
      fetchFirstPage,
      '/albums'
    );
  }

  createAlbum (fields, params): Album {
    return this.createEdge(
      '/albums',
      fields,
      params,
      Album
    );
  }

  getAnalyticsCohortQuery (fields, params, fetchFirstPage = true): AnalyticsCohortQueryResult {
    return this.getEdge(
      AnalyticsCohortQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_cohort_query'
    );
  }

  getAnalyticsEntityUserConfig (fields, params, fetchFirstPage = true): AnalyticsEntityUserConfig {
    return this.getEdge(
      AnalyticsEntityUserConfig,
      fields,
      params,
      fetchFirstPage,
      '/analytics_entity_user_config'
    );
  }

  getAnalyticsEventTypes (fields, params, fetchFirstPage = true): AnalyticsEventTypes {
    return this.getEdge(
      AnalyticsEventTypes,
      fields,
      params,
      fetchFirstPage,
      '/analytics_event_types'
    );
  }

  getAnalyticsFunnelQuery (fields, params, fetchFirstPage = true): AnalyticsFunnelQueryResult {
    return this.getEdge(
      AnalyticsFunnelQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_funnel_query'
    );
  }

  getAnalyticsQuery (fields, params, fetchFirstPage = true): AnalyticsQueryResult {
    return this.getEdge(
      AnalyticsQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_query'
    );
  }

  getAnalyticsQueryExport (fields, params, fetchFirstPage = true): AnalyticsQueryExportResult {
    return this.getEdge(
      AnalyticsQueryExportResult,
      fields,
      params,
      fetchFirstPage,
      '/analytics_query_export'
    );
  }

  getAnalyticsSegments (fields, params, fetchFirstPage = true): AnalyticsSegment {
    return this.getEdge(
      AnalyticsSegment,
      fields,
      params,
      fetchFirstPage,
      '/analytics_segments'
    );
  }

  getAsset3Ds (fields, params, fetchFirstPage = true): WithAsset3D {
    return this.getEdge(
      WithAsset3D,
      fields,
      params,
      fetchFirstPage,
      '/asset3ds'
    );
  }

  getAssignedPartners (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/assigned_partners'
    );
  }

  deleteAssignedUsers (params): AbstractObject {
    return super.deleteEdge(
      '/assigned_users',
      params
    );
  }

  getAssignedUsers (fields, params, fetchFirstPage = true): AssignedUser {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields, params): Page {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      Page
    );
  }

  getAudioCopyrights (fields, params, fetchFirstPage = true): AudioCopyright {
    return this.getEdge(
      AudioCopyright,
      fields,
      params,
      fetchFirstPage,
      '/audio_copyrights'
    );
  }

  getAudioMediaCopyrights (fields, params, fetchFirstPage = true): AudioCopyright {
    return this.getEdge(
      AudioCopyright,
      fields,
      params,
      fetchFirstPage,
      '/audio_media_copyrights'
    );
  }

  getAudioReleases (fields, params, fetchFirstPage = true): AudioRelease {
    return this.getEdge(
      AudioRelease,
      fields,
      params,
      fetchFirstPage,
      '/audio_releases'
    );
  }

  getBcSponsoredPosts (fields, params, fetchFirstPage = true): EntWithSponsor {
    return this.getEdge(
      EntWithSponsor,
      fields,
      params,
      fetchFirstPage,
      '/bc_sponsored_posts'
    );
  }

  deleteBlocked (params): AbstractObject {
    return super.deleteEdge(
      '/blocked',
      params
    );
  }

  getBlocked (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/blocked'
    );
  }

  createBlocked (fields, params): AbstractObject {
    return this.createEdge(
      '/blocked',
      fields,
      params

    );
  }

  getBroadcastMessages (fields, params, fetchFirstPage = true): PageBroadcast {
    return this.getEdge(
      PageBroadcast,
      fields,
      params,
      fetchFirstPage,
      '/broadcast_messages'
    );
  }

  createBroadcastMessage (fields, params): Page {
    return this.createEdge(
      '/broadcast_messages',
      fields,
      params,
      Page
    );
  }

  createBroadcastReachEstimation (fields, params): Page {
    return this.createEdge(
      '/broadcast_reach_estimations',
      fields,
      params,
      Page
    );
  }

  getBudgetRecs (fields, params, fetchFirstPage = true): PageBudgetRecs {
    return this.getEdge(
      PageBudgetRecs,
      fields,
      params,
      fetchFirstPage,
      '/budget_recs'
    );
  }

  getBusinessActivities (fields, params, fetchFirstPage = true): BusinessActivityLogEvent {
    return this.getEdge(
      BusinessActivityLogEvent,
      fields,
      params,
      fetchFirstPage,
      '/business_activities'
    );
  }

  getBusinessObjectTags (fields, params, fetchFirstPage = true): BusinessTag {
    return this.getEdge(
      BusinessTag,
      fields,
      params,
      fetchFirstPage,
      '/business_object_tags'
    );
  }

  getBusinessRequests (fields, params, fetchFirstPage = true): BusinessRequest {
    return this.getEdge(
      BusinessRequest,
      fields,
      params,
      fetchFirstPage,
      '/business_requests'
    );
  }

  createBusiness (fields, params): Business {
    return this.createEdge(
      '/businesses',
      fields,
      params,
      Business
    );
  }

  getBusinessProjects (fields, params, fetchFirstPage = true): BusinessProject {
    return this.getEdge(
      BusinessProject,
      fields,
      params,
      fetchFirstPage,
      '/businessprojects'
    );
  }

  getBusinessSettingLogs (fields, params, fetchFirstPage = true): BusinessSettingLogsData {
    return this.getEdge(
      BusinessSettingLogsData,
      fields,
      params,
      fetchFirstPage,
      '/businesssettinglogs'
    );
  }

  getCallToActions (fields, params, fetchFirstPage = true): PageCallToAction {
    return this.getEdge(
      PageCallToAction,
      fields,
      params,
      fetchFirstPage,
      '/call_to_actions'
    );
  }

  createCallToAction (fields, params): PageCallToAction {
    return this.createEdge(
      '/call_to_actions',
      fields,
      params,
      PageCallToAction
    );
  }

  getCanvasElements (fields, params, fetchFirstPage = true): CanvasBodyElement {
    return this.getEdge(
      CanvasBodyElement,
      fields,
      params,
      fetchFirstPage,
      '/canvas_elements'
    );
  }

  createCanvasElement (fields, params): CanvasBodyElement {
    return this.createEdge(
      '/canvas_elements',
      fields,
      params,
      CanvasBodyElement
    );
  }

  getCanvases (fields, params, fetchFirstPage = true): Canvas {
    return this.getEdge(
      Canvas,
      fields,
      params,
      fetchFirstPage,
      '/canvases'
    );
  }

  createCanvase (fields, params): Canvas {
    return this.createEdge(
      '/canvases',
      fields,
      params,
      Canvas
    );
  }

  getChangeProposals (fields, params, fetchFirstPage = true): PageChangeProposal {
    return this.getEdge(
      PageChangeProposal,
      fields,
      params,
      fetchFirstPage,
      '/change_proposals'
    );
  }

  getCheckinPosts (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/checkin_posts'
    );
  }

  deleteClaimedUrls (params): AbstractObject {
    return super.deleteEdge(
      '/claimed_urls',
      params
    );
  }

  getClaimedUrls (fields, params, fetchFirstPage = true): URL {
    return this.getEdge(
      URL,
      fields,
      params,
      fetchFirstPage,
      '/claimed_urls'
    );
  }

  getCommerceMerchantSettings (fields, params, fetchFirstPage = true): CommerceMerchantSettings {
    return this.getEdge(
      CommerceMerchantSettings,
      fields,
      params,
      fetchFirstPage,
      '/commerce_merchant_settings'
    );
  }

  getCommerceOrders (fields, params, fetchFirstPage = true): CommerceOrder {
    return this.getEdge(
      CommerceOrder,
      fields,
      params,
      fetchFirstPage,
      '/commerce_orders'
    );
  }

  getComponentFlow (fields, params, fetchFirstPage = true): PagesPlatformComponentFlow {
    return this.getEdge(
      PagesPlatformComponentFlow,
      fields,
      params,
      fetchFirstPage,
      '/component_flow'
    );
  }

  getConnectedBusinessObjects (fields, params, fetchFirstPage = true): BusinessObject {
    return this.getEdge(
      BusinessObject,
      fields,
      params,
      fetchFirstPage,
      '/connected_business_objects'
    );
  }

  getContentTests (fields, params, fetchFirstPage = true): PagePostExperiment {
    return this.getEdge(
      PagePostExperiment,
      fields,
      params,
      fetchFirstPage,
      '/content_tests'
    );
  }

  getConversations (fields, params, fetchFirstPage = true): UnifiedThread {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/conversations'
    );
  }

  createCopyrightManualClaim (fields, params): VideoCopyrightMatch {
    return this.createEdge(
      '/copyright_manual_claims',
      fields,
      params,
      VideoCopyrightMatch
    );
  }

  getCopyrightMatches (fields, params, fetchFirstPage = true): VideoCopyrightMatch {
    return this.getEdge(
      VideoCopyrightMatch,
      fields,
      params,
      fetchFirstPage,
      '/copyright_matches'
    );
  }

  getCopyrightReferenceMatches (fields, params, fetchFirstPage = true): VideoReferenceMatch {
    return this.getEdge(
      VideoReferenceMatch,
      fields,
      params,
      fetchFirstPage,
      '/copyright_reference_matches'
    );
  }

  deleteCopyrightWhitelistedIgPartners (params): AbstractObject {
    return super.deleteEdge(
      '/copyright_whitelisted_ig_partners',
      params
    );
  }

  createCopyrightWhitelistedIgPartner (fields, params): AbstractObject {
    return this.createEdge(
      '/copyright_whitelisted_ig_partners',
      fields,
      params

    );
  }

  deleteCopyrightWhitelistedPartners (params): AbstractObject {
    return super.deleteEdge(
      '/copyright_whitelisted_partners',
      params
    );
  }

  getCopyrightWhitelistedPartners (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/copyright_whitelisted_partners'
    );
  }

  createCopyrightWhitelistedPartner (fields, params): AbstractObject {
    return this.createEdge(
      '/copyright_whitelisted_partners',
      fields,
      params

    );
  }

  getCrosspostPendingApprovalPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/crosspost_pending_approval_pages'
    );
  }

  getCrosspostWhitelistedPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/crosspost_whitelisted_pages'
    );
  }

  getCustomLabels (fields, params, fetchFirstPage = true): PageUserMessageThreadLabel {
    return this.getEdge(
      PageUserMessageThreadLabel,
      fields,
      params,
      fetchFirstPage,
      '/custom_labels'
    );
  }

  createCustomLabel (fields, params): PageUserMessageThreadLabel {
    return this.createEdge(
      '/custom_labels',
      fields,
      params,
      PageUserMessageThreadLabel
    );
  }

  getCustomUserSettings (fields, params, fetchFirstPage = true): CustomUserSettings {
    return this.getEdge(
      CustomUserSettings,
      fields,
      params,
      fetchFirstPage,
      '/custom_user_settings'
    );
  }

  getDocumentFonts (fields, params, fetchFirstPage = true): DocumentFont {
    return this.getEdge(
      DocumentFont,
      fields,
      params,
      fetchFirstPage,
      '/document_fonts'
    );
  }

  getDpaEligibleProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/dpa_eligible_product_catalogs'
    );
  }

  getDraftPosts (fields, params, fetchFirstPage = true): DraftPost {
    return this.getEdge(
      DraftPost,
      fields,
      params,
      fetchFirstPage,
      '/draft_posts'
    );
  }

  getEditions (fields, params, fetchFirstPage = true): TarotDigest {
    return this.getEdge(
      TarotDigest,
      fields,
      params,
      fetchFirstPage,
      '/editions'
    );
  }

  getEsVideoReferenceMatches (fields, params, fetchFirstPage = true): VideoReferenceMatch {
    return this.getEdge(
      VideoReferenceMatch,
      fields,
      params,
      fetchFirstPage,
      '/es_video_reference_matches'
    );
  }

  getEvents (fields, params, fetchFirstPage = true): Event {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  createEvent (fields, params): Event {
    return this.createEdge(
      '/events',
      fields,
      params,
      Event
    );
  }

  getExpiredPosts (fields, params, fetchFirstPage = true): ExpirablePost {
    return this.getEdge(
      ExpirablePost,
      fields,
      params,
      fetchFirstPage,
      '/expired_posts'
    );
  }

  getExpiringPosts (fields, params, fetchFirstPage = true): ExpirablePost {
    return this.getEdge(
      ExpirablePost,
      fields,
      params,
      fetchFirstPage,
      '/expiring_posts'
    );
  }

  getFeatureAccessList (fields, params, fetchFirstPage = true): PageFeatureAccessList {
    return this.getEdge(
      PageFeatureAccessList,
      fields,
      params,
      fetchFirstPage,
      '/feature_access_list'
    );
  }

  getFeatureDVideosCollection (fields, params, fetchFirstPage = true): AdVideo {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/featured_videos_collection'
    );
  }

  getFeed (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/feed'
    );
  }

  createFeed (fields, params): PagePost {
    return this.createEdge(
      '/feed',
      fields,
      params,
      PagePost
    );
  }

  createFlag (fields, params): Page {
    return this.createEdge(
      '/flags',
      fields,
      params,
      Page
    );
  }

  getGlobalBrandChildren (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/global_brand_children'
    );
  }

  getIndexedByUniversalIdVideos (fields, params, fetchFirstPage = true): AdVideo {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/indexed_by_universal_id_videos'
    );
  }

  getIndexedVideoCopyrightMatches (fields, params, fetchFirstPage = true): VideoCopyrightMatch {
    return this.getEdge(
      VideoCopyrightMatch,
      fields,
      params,
      fetchFirstPage,
      '/indexed_video_copyright_matches'
    );
  }

  getIndexedVideoCopyrights (fields, params, fetchFirstPage = true): VideoCopyright {
    return this.getEdge(
      VideoCopyright,
      fields,
      params,
      fetchFirstPage,
      '/indexed_video_copyrights'
    );
  }

  getIndexedVideos (fields, params, fetchFirstPage = true): AdVideo {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/indexed_videos'
    );
  }

  getInsights (fields, params, fetchFirstPage = true): InsightsResult {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getInsightsExports (fields, params, fetchFirstPage = true): PageInsightsAsyncExportRun {
    return this.getEdge(
      PageInsightsAsyncExportRun,
      fields,
      params,
      fetchFirstPage,
      '/insights_exports'
    );
  }

  getInstagramAccounts (fields, params, fetchFirstPage = true): InstagramUser {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_accounts'
    );
  }

  getInstantArticleCtas (fields, params, fetchFirstPage = true): InstantArticleCTA {
    return this.getEdge(
      InstantArticleCTA,
      fields,
      params,
      fetchFirstPage,
      '/instant_article_ctas'
    );
  }

  getInstantArticleStyles (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/instant_article_styles'
    );
  }

  getInstantArticles (fields, params, fetchFirstPage = true): InstantArticle {
    return this.getEdge(
      InstantArticle,
      fields,
      params,
      fetchFirstPage,
      '/instant_articles'
    );
  }

  createInstantArticle (fields, params): InstantArticle {
    return this.createEdge(
      '/instant_articles',
      fields,
      params,
      InstantArticle
    );
  }

  getInstantArticlesCmsSearch (fields, params, fetchFirstPage = true): InstantArticle {
    return this.getEdge(
      InstantArticle,
      fields,
      params,
      fetchFirstPage,
      '/instant_articles_cms_search'
    );
  }

  getInstantArticlesDevFeed (fields, params, fetchFirstPage = true): InstantArticle {
    return this.getEdge(
      InstantArticle,
      fields,
      params,
      fetchFirstPage,
      '/instant_articles_dev_feed'
    );
  }

  getInstantArticlesInsights (fields, params, fetchFirstPage = true): InstantArticleInsightsQueryResult {
    return this.getEdge(
      InstantArticleInsightsQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/instant_articles_insights'
    );
  }

  createInstantArticlesPublish (fields, params): Page {
    return this.createEdge(
      '/instant_articles_publish',
      fields,
      params,
      Page
    );
  }

  getInstantArticlesSampleFeed (fields, params, fetchFirstPage = true): InstantArticle {
    return this.getEdge(
      InstantArticle,
      fields,
      params,
      fetchFirstPage,
      '/instant_articles_sample_feed'
    );
  }

  getInstantArticlesTrafficLift (fields, params, fetchFirstPage = true): InstantArticleTrafficLift {
    return this.getEdge(
      InstantArticleTrafficLift,
      fields,
      params,
      fetchFirstPage,
      '/instant_articles_traffic_lift'
    );
  }

  getJobs (fields, params, fetchFirstPage = true): JobOpening {
    return this.getEdge(
      JobOpening,
      fields,
      params,
      fetchFirstPage,
      '/jobs'
    );
  }

  getLabels (fields, params, fetchFirstPage = true): PageLabel {
    return this.getEdge(
      PageLabel,
      fields,
      params,
      fetchFirstPage,
      '/labels'
    );
  }

  createLabel (fields, params): PageLabel {
    return this.createEdge(
      '/labels',
      fields,
      params,
      PageLabel
    );
  }

  getLeadGenConditionalQuestionsGroup (fields, params, fetchFirstPage = true): LeadGenConditionalQuestionsGroup {
    return this.getEdge(
      LeadGenConditionalQuestionsGroup,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_conditional_questions_group'
    );
  }

  createLeadGenConditionalQuestionsGroup (fields, params): LeadGenConditionalQuestionsGroup {
    return this.createEdge(
      '/leadgen_conditional_questions_group',
      fields,
      params,
      LeadGenConditionalQuestionsGroup
    );
  }

  getLeadGenContextCards (fields, params, fetchFirstPage = true): LeadGenContextCard {
    return this.getEdge(
      LeadGenContextCard,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_context_cards'
    );
  }

  createLeadGenContextCard (fields, params): LeadGenContextCard {
    return this.createEdge(
      '/leadgen_context_cards',
      fields,
      params,
      LeadGenContextCard
    );
  }

  getLeadGenDraftForMs (fields, params, fetchFirstPage = true): LeadGenDataDraft {
    return this.getEdge(
      LeadGenDataDraft,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_draft_forms'
    );
  }

  createLeadGenDraftForM (fields, params): LeadGenDataDraft {
    return this.createEdge(
      '/leadgen_draft_forms',
      fields,
      params,
      LeadGenDataDraft
    );
  }

  getLeadGenForms (fields, params, fetchFirstPage = true): LeadgenForm {
    return this.getEdge(
      LeadgenForm,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_forms'
    );
  }

  createLeadGenForm (fields, params): LeadgenForm {
    return this.createEdge(
      '/leadgen_forms',
      fields,
      params,
      LeadgenForm
    );
  }

  getLeadGenIntegrations (fields, params, fetchFirstPage = true): LeadGenDirectCRMIntegrationThirdPartyApp {
    return this.getEdge(
      LeadGenDirectCRMIntegrationThirdPartyApp,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_integrations'
    );
  }

  getLeadGenLegalContent (fields, params, fetchFirstPage = true): LeadGenLegalContent {
    return this.getEdge(
      LeadGenLegalContent,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_legal_content'
    );
  }

  createLeadGenLegalContent (fields, params): LeadGenLegalContent {
    return this.createEdge(
      '/leadgen_legal_content',
      fields,
      params,
      LeadGenLegalContent
    );
  }

  getLeadGenQualifiers (fields, params, fetchFirstPage = true): LeadGenQualifier {
    return this.getEdge(
      LeadGenQualifier,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_qualifiers'
    );
  }

  createLeadGenThankYouPage (fields, params): AbstractObject {
    return this.createEdge(
      '/leadgen_thank_you_page',
      fields,
      params

    );
  }

  deleteLeadGenWhitelistedUsers (params): AbstractObject {
    return super.deleteEdge(
      '/leadgen_whitelisted_users',
      params
    );
  }

  getLeadGenWhitelistedUsers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_whitelisted_users'
    );
  }

  createLeadGenWhitelistedUser (fields, params): Page {
    return this.createEdge(
      '/leadgen_whitelisted_users',
      fields,
      params,
      Page
    );
  }

  getLentVideoAssets (fields, params, fetchFirstPage = true): VideoAsset {
    return this.getEdge(
      VideoAsset,
      fields,
      params,
      fetchFirstPage,
      '/lent_video_assets'
    );
  }

  getLikes (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  createLink (fields, params): Link {
    return this.createEdge(
      '/links',
      fields,
      params,
      Link
    );
  }

  getLiveEncoders (fields, params, fetchFirstPage = true): LiveEncoder {
    return this.getEdge(
      LiveEncoder,
      fields,
      params,
      fetchFirstPage,
      '/live_encoders'
    );
  }

  getLiveVideos (fields, params, fetchFirstPage = true): LiveVideo {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields, params): LiveVideo {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo
    );
  }

  deleteLocations (params): AbstractObject {
    return super.deleteEdge(
      '/locations',
      params
    );
  }

  getLocations (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/locations'
    );
  }

  createLocation (fields, params): Page {
    return this.createEdge(
      '/locations',
      fields,
      params,
      Page
    );
  }

  getLocationsBreakdown (fields, params, fetchFirstPage = true): PageLocationsBreakdown {
    return this.getEdge(
      PageLocationsBreakdown,
      fields,
      params,
      fetchFirstPage,
      '/locations_breakdown'
    );
  }

  getLocationsBreakdownSearch (fields, params, fetchFirstPage = true): PageLocationsBreakdown {
    return this.getEdge(
      PageLocationsBreakdown,
      fields,
      params,
      fetchFirstPage,
      '/locations_breakdown_search'
    );
  }

  getMarketingAreas (fields, params, fetchFirstPage = true): MarketingArea {
    return this.getEdge(
      MarketingArea,
      fields,
      params,
      fetchFirstPage,
      '/marketing_areas'
    );
  }

  getMediaCopyrightAttributions (fields, params, fetchFirstPage = true): MediaCopyrightAttribution {
    return this.getEdge(
      MediaCopyrightAttribution,
      fields,
      params,
      fetchFirstPage,
      '/media_copyright_attributions'
    );
  }

  getMediaFingerprints (fields, params, fetchFirstPage = true): MediaFingerprint {
    return this.getEdge(
      MediaFingerprint,
      fields,
      params,
      fetchFirstPage,
      '/media_fingerprints'
    );
  }

  createMediaFingerprint (fields, params): MediaFingerprint {
    return this.createEdge(
      '/media_fingerprints',
      fields,
      params,
      MediaFingerprint
    );
  }

  getMenus (fields, params, fetchFirstPage = true): Menu {
    return this.getEdge(
      Menu,
      fields,
      params,
      fetchFirstPage,
      '/menus'
    );
  }

  createMessageAttachment (fields, params): AbstractObject {
    return this.createEdge(
      '/message_attachments',
      fields,
      params

    );
  }

  createMessageCreative (fields, params): Page {
    return this.createEdge(
      '/message_creatives',
      fields,
      params,
      Page
    );
  }

  createMessage (fields, params): Page {
    return this.createEdge(
      '/messages',
      fields,
      params,
      Page
    );
  }

  getMessagingFeatureReview (fields, params, fetchFirstPage = true): MessagingFeatureReview {
    return this.getEdge(
      MessagingFeatureReview,
      fields,
      params,
      fetchFirstPage,
      '/messaging_feature_review'
    );
  }

  getMessengerAdsPageWelcomeMessages (fields, params, fetchFirstPage = true): MessengerDestinationPageWelcomeMessage {
    return this.getEdge(
      MessengerDestinationPageWelcomeMessage,
      fields,
      params,
      fetchFirstPage,
      '/messenger_ads_page_welcome_messages'
    );
  }

  createMessengerCode (fields, params): Page {
    return this.createEdge(
      '/messenger_codes',
      fields,
      params,
      Page
    );
  }

  getMessengerLeadForMs (fields, params, fetchFirstPage = true): MessengerAdsPartialAutomatedStepList {
    return this.getEdge(
      MessengerAdsPartialAutomatedStepList,
      fields,
      params,
      fetchFirstPage,
      '/messenger_lead_forms'
    );
  }

  deleteMessengerProfile (params): AbstractObject {
    return super.deleteEdge(
      '/messenger_profile',
      params
    );
  }

  getMessengerProfile (fields, params, fetchFirstPage = true): MessengerProfile {
    return this.getEdge(
      MessengerProfile,
      fields,
      params,
      fetchFirstPage,
      '/messenger_profile'
    );
  }

  createMessengerProfile (fields, params): Page {
    return this.createEdge(
      '/messenger_profile',
      fields,
      params,
      Page
    );
  }

  getMilestones (fields, params, fetchFirstPage = true): LifeEvent {
    return this.getEdge(
      LifeEvent,
      fields,
      params,
      fetchFirstPage,
      '/milestones'
    );
  }

  createMilestone (fields, params): LifeEvent {
    return this.createEdge(
      '/milestones',
      fields,
      params,
      LifeEvent
    );
  }

  getMusicVideoCopyrights (fields, params, fetchFirstPage = true): MusicVideoCopyright {
    return this.getEdge(
      MusicVideoCopyright,
      fields,
      params,
      fetchFirstPage,
      '/music_video_copyrights'
    );
  }

  getNativeOffers (fields, params, fetchFirstPage = true): NativeOffer {
    return this.getEdge(
      NativeOffer,
      fields,
      params,
      fetchFirstPage,
      '/nativeoffers'
    );
  }

  createNativeOffer (fields, params): NativeOffer {
    return this.createEdge(
      '/nativeoffers',
      fields,
      params,
      NativeOffer
    );
  }

  getNewsSubscriptions (fields, params, fetchFirstPage = true): StonehengeSubscriptionPublisher {
    return this.getEdge(
      StonehengeSubscriptionPublisher,
      fields,
      params,
      fetchFirstPage,
      '/news_subscriptions'
    );
  }

  createNlpConfig (fields, params): Page {
    return this.createEdge(
      '/nlp_configs',
      fields,
      params,
      Page
    );
  }

  createNote (fields, params): AbstractObject {
    return this.createEdge(
      '/notes',
      fields,
      params

    );
  }

  createNotification (fields, params): Page {
    return this.createEdge(
      '/notifications',
      fields,
      params,
      Page
    );
  }

  getOffers (fields, params, fetchFirstPage = true): Offer {
    return this.getEdge(
      Offer,
      fields,
      params,
      fetchFirstPage,
      '/offers'
    );
  }

  getOnBehalfRequests (fields, params, fetchFirstPage = true): BusinessOwnedObjectOnBehalfOfRequest {
    return this.getEdge(
      BusinessOwnedObjectOnBehalfOfRequest,
      fields,
      params,
      fetchFirstPage,
      '/onbehalf_requests'
    );
  }

  getPageAppWithLeadsAccess (fields, params, fetchFirstPage = true): PageAppWithLeadsAccess {
    return this.getEdge(
      PageAppWithLeadsAccess,
      fields,
      params,
      fetchFirstPage,
      '/page_app_with_leads_access'
    );
  }

  getPageBackedInstagramAccounts (fields, params, fetchFirstPage = true): InstagramUser {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/page_backed_instagram_accounts'
    );
  }

  createPageBackedInstagramAccount (fields, params): InstagramUser {
    return this.createEdge(
      '/page_backed_instagram_accounts',
      fields,
      params,
      InstagramUser
    );
  }

  getPageDirectIntegrationCrmWithLeadsAccess (fields, params, fetchFirstPage = true): PageDirectIntegrationCrmWithLeadsAccess {
    return this.getEdge(
      PageDirectIntegrationCrmWithLeadsAccess,
      fields,
      params,
      fetchFirstPage,
      '/page_direct_integration_crm_with_leads_access'
    );
  }

  getPagePartnerWithLeadsAccess (fields, params, fetchFirstPage = true): PagePartnerWithLeadsAccess {
    return this.getEdge(
      PagePartnerWithLeadsAccess,
      fields,
      params,
      fetchFirstPage,
      '/page_partner_with_leads_access'
    );
  }

  getPageUserWithLeadsAccess (fields, params, fetchFirstPage = true): PageUserWithLeadsAccess {
    return this.getEdge(
      PageUserWithLeadsAccess,
      fields,
      params,
      fetchFirstPage,
      '/page_user_with_leads_access'
    );
  }

  createPassThreadControl (fields, params): Page {
    return this.createEdge(
      '/pass_thread_control',
      fields,
      params,
      Page
    );
  }

  getPendingUsers (fields, params, fetchFirstPage = true): BusinessRoleRequest {
    return this.getEdge(
      BusinessRoleRequest,
      fields,
      params,
      fetchFirstPage,
      '/pending_users'
    );
  }

  getPermissions (fields, params, fetchFirstPage = true): Permission {
    return this.getEdge(
      Permission,
      fields,
      params,
      fetchFirstPage,
      '/permissions'
    );
  }

  getPersonas (fields, params, fetchFirstPage = true): Persona {
    return this.getEdge(
      Persona,
      fields,
      params,
      fetchFirstPage,
      '/personas'
    );
  }

  getPhotos (fields, params, fetchFirstPage = true): Photo {
    return this.getEdge(
      Photo,
      fields,
      params,
      fetchFirstPage,
      '/photos'
    );
  }

  createPhoto (fields, params): Photo {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo
    );
  }

  getPicture (fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  createPicture (fields, params): ProfilePictureSource {
    return this.createEdge(
      '/picture',
      fields,
      params,
      ProfilePictureSource
    );
  }

  getPlaceTopics (fields, params, fetchFirstPage = true): PlaceTopic {
    return this.getEdge(
      PlaceTopic,
      fields,
      params,
      fetchFirstPage,
      '/place_topics'
    );
  }

  getPosts (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/posts'
    );
  }

  getPostsInsights (fields, params, fetchFirstPage = true): InsightsResult {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/posts_insights'
    );
  }

  getProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  getPromotablePosts (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/promotable_posts'
    );
  }

  createPromotion (fields, params): AbstractObject {
    return this.createEdge(
      '/promotions',
      fields,
      params

    );
  }

  getPublishedPosts (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/published_posts'
    );
  }

  createQuestion (fields, params): AbstractObject {
    return this.createEdge(
      '/questions',
      fields,
      params

    );
  }

  getRatings (fields, params, fetchFirstPage = true): Recommendation {
    return this.getEdge(
      Recommendation,
      fields,
      params,
      fetchFirstPage,
      '/ratings'
    );
  }

  createRequestThreadControl (fields, params): Page {
    return this.createEdge(
      '/request_thread_control',
      fields,
      params,
      Page
    );
  }

  getRestaurantOrders (fields, params, fetchFirstPage = true): FoodDrinkOrder {
    return this.getEdge(
      FoodDrinkOrder,
      fields,
      params,
      fetchFirstPage,
      '/restaurant_orders'
    );
  }

  getReviewableBcPosts (fields, params, fetchFirstPage = true): EntWithSponsor {
    return this.getEdge(
      EntWithSponsor,
      fields,
      params,
      fetchFirstPage,
      '/reviewable_bc_posts'
    );
  }

  getReviewableBcPostsCreator (fields, params, fetchFirstPage = true): EntWithSponsor {
    return this.getEdge(
      EntWithSponsor,
      fields,
      params,
      fetchFirstPage,
      '/reviewable_bc_posts_creator'
    );
  }

  getRichMediaDocuments (fields, params, fetchFirstPage = true): Canvas {
    return this.getEdge(
      Canvas,
      fields,
      params,
      fetchFirstPage,
      '/rich_media_documents'
    );
  }

  getRoles (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  getRtbDynamicPosts (fields, params, fetchFirstPage = true): RTBDynamicPost {
    return this.getEdge(
      RTBDynamicPost,
      fields,
      params,
      fetchFirstPage,
      '/rtb_dynamic_posts'
    );
  }

  getSavedFilters (fields, params, fetchFirstPage = true): PageSavedFilter {
    return this.getEdge(
      PageSavedFilter,
      fields,
      params,
      fetchFirstPage,
      '/saved_filters'
    );
  }

  createSavedFilter (fields, params): PageSavedFilter {
    return this.createEdge(
      '/saved_filters',
      fields,
      params,
      PageSavedFilter
    );
  }

  getSavedMessageResponses (fields, params, fetchFirstPage = true): SavedMessageResponse {
    return this.getEdge(
      SavedMessageResponse,
      fields,
      params,
      fetchFirstPage,
      '/saved_message_responses'
    );
  }

  createSavedMessageResponse (fields, params): SavedMessageResponse {
    return this.createEdge(
      '/saved_message_responses',
      fields,
      params,
      SavedMessageResponse
    );
  }

  getScheduleDPosts (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/scheduled_posts'
    );
  }

  getScheduledPostsInternal (fields, params, fetchFirstPage = true): ScheduledPost {
    return this.getEdge(
      ScheduledPost,
      fields,
      params,
      fetchFirstPage,
      '/scheduled_posts_internal'
    );
  }

  getScreenNames (fields, params, fetchFirstPage = true): ScreenName {
    return this.getEdge(
      ScreenName,
      fields,
      params,
      fetchFirstPage,
      '/screennames'
    );
  }

  getSearchDialogs (fields, params, fetchFirstPage = true): SearchDialogData {
    return this.getEdge(
      SearchDialogData,
      fields,
      params,
      fetchFirstPage,
      '/search_dialogs'
    );
  }

  getSeasons (fields, params, fetchFirstPage = true): VideoList {
    return this.getEdge(
      VideoList,
      fields,
      params,
      fetchFirstPage,
      '/seasons'
    );
  }

  getSecondaryReceivers (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/secondary_receivers'
    );
  }

  getSettings (fields, params, fetchFirstPage = true): PageSettings {
    return this.getEdge(
      PageSettings,
      fields,
      params,
      fetchFirstPage,
      '/settings'
    );
  }

  createSetting (fields, params): Page {
    return this.createEdge(
      '/settings',
      fields,
      params,
      Page
    );
  }

  getShareDLocationStructures (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/shared_location_structures'
    );
  }

  getShopSetupStatus (fields, params, fetchFirstPage = true): CommerceMerchantSettingsSetupStatus {
    return this.getEdge(
      CommerceMerchantSettingsSetupStatus,
      fields,
      params,
      fetchFirstPage,
      '/shop_setup_status'
    );
  }

  getShowPlaylists (fields, params, fetchFirstPage = true): VideoList {
    return this.getEdge(
      VideoList,
      fields,
      params,
      fetchFirstPage,
      '/show_playlists'
    );
  }

  getSimilarPlaces (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/similar_places'
    );
  }

  getStoreVisitsCustomAudiencesEligibleCountries (fields, params, fetchFirstPage = true): PageStoreVisitsCustomAudiencesEligibleCountries {
    return this.getEdge(
      PageStoreVisitsCustomAudiencesEligibleCountries,
      fields,
      params,
      fetchFirstPage,
      '/store_visits_custom_audiences_eligible_countries'
    );
  }

  getStoreVisitsDemographicInsightsByCountry (fields, params, fetchFirstPage = true): PageStoreVisitsDemographicInsights {
    return this.getEdge(
      PageStoreVisitsDemographicInsights,
      fields,
      params,
      fetchFirstPage,
      '/store_visits_demographic_insights_by_country'
    );
  }

  getStoreVisitsDemographicInsightsByLocationPageId (fields, params, fetchFirstPage = true): PageStoreVisitsDemographicInsights {
    return this.getEdge(
      PageStoreVisitsDemographicInsights,
      fields,
      params,
      fetchFirstPage,
      '/store_visits_demographic_insights_by_location_page_id'
    );
  }

  getStoreVisitsDemographicInsightsByPartnerLocationId (fields, params, fetchFirstPage = true): PageStoreVisitsDemographicInsights {
    return this.getEdge(
      PageStoreVisitsDemographicInsights,
      fields,
      params,
      fetchFirstPage,
      '/store_visits_demographic_insights_by_partner_location_id'
    );
  }

  deleteSubscribedApps (params): AbstractObject {
    return super.deleteEdge(
      '/subscribed_apps',
      params
    );
  }

  getSubscribedApps (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_apps'
    );
  }

  createSubscribedApp (fields, params): Page {
    return this.createEdge(
      '/subscribed_apps',
      fields,
      params,
      Page
    );
  }

  createSubscription (fields, params): AbstractObject {
    return this.createEdge(
      '/subscriptions',
      fields,
      params

    );
  }

  deleteTabs (params): AbstractObject {
    return super.deleteEdge(
      '/tabs',
      params
    );
  }

  getTabs (fields, params, fetchFirstPage = true): Tab {
    return this.getEdge(
      Tab,
      fields,
      params,
      fetchFirstPage,
      '/tabs'
    );
  }

  createTab (fields, params): Page {
    return this.createEdge(
      '/tabs',
      fields,
      params,
      Page
    );
  }

  getTagged (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/tagged'
    );
  }

  createTakeThreadControl (fields, params): Page {
    return this.createEdge(
      '/take_thread_control',
      fields,
      params,
      Page
    );
  }

  getThreadOwner (fields, params, fetchFirstPage = true): PageThreadOwner {
    return this.getEdge(
      PageThreadOwner,
      fields,
      params,
      fetchFirstPage,
      '/thread_owner'
    );
  }

  deleteThreadSettings (params): AbstractObject {
    return super.deleteEdge(
      '/thread_settings',
      params
    );
  }

  getThreadSettings (fields, params, fetchFirstPage = true): ThreadSetting {
    return this.getEdge(
      ThreadSetting,
      fields,
      params,
      fetchFirstPage,
      '/thread_settings'
    );
  }

  createThreadSetting (fields, params): Page {
    return this.createEdge(
      '/thread_settings',
      fields,
      params,
      Page
    );
  }

  getThreads (fields, params, fetchFirstPage = true): UnifiedThread {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/threads'
    );
  }

  getTours (fields, params, fetchFirstPage = true): EventTour {
    return this.getEdge(
      EventTour,
      fields,
      params,
      fetchFirstPage,
      '/tours'
    );
  }

  createUnlinkAccount (fields, params): Page {
    return this.createEdge(
      '/unlink_accounts',
      fields,
      params,
      Page
    );
  }

  getUpcomingChanges (fields, params, fetchFirstPage = true): PageUpcomingChange {
    return this.getEdge(
      PageUpcomingChange,
      fields,
      params,
      fetchFirstPage,
      '/upcoming_changes'
    );
  }

  deleteUserPermissions (params): AbstractObject {
    return super.deleteEdge(
      '/userpermissions',
      params
    );
  }

  createUserPermission (fields, params): Page {
    return this.createEdge(
      '/userpermissions',
      fields,
      params,
      Page
    );
  }

  getVenueEvents (fields, params, fetchFirstPage = true): Event {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/venue_events'
    );
  }

  getVideoAssets (fields, params, fetchFirstPage = true): GenericVideoAsset {
    return this.getEdge(
      GenericVideoAsset,
      fields,
      params,
      fetchFirstPage,
      '/video_assets'
    );
  }

  getVideoBroadcasts (fields, params, fetchFirstPage = true): LiveVideo {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/video_broadcasts'
    );
  }

  getVideoCopyrightMatches (fields, params, fetchFirstPage = true): VideoCopyrightMatch {
    return this.getEdge(
      VideoCopyrightMatch,
      fields,
      params,
      fetchFirstPage,
      '/video_copyright_matches'
    );
  }

  getVideoCopyrightRules (fields, params, fetchFirstPage = true): VideoCopyrightRule {
    return this.getEdge(
      VideoCopyrightRule,
      fields,
      params,
      fetchFirstPage,
      '/video_copyright_rules'
    );
  }

  createVideoCopyrightRule (fields, params): VideoCopyrightRule {
    return this.createEdge(
      '/video_copyright_rules',
      fields,
      params,
      VideoCopyrightRule
    );
  }

  getVideoCopyrights (fields, params, fetchFirstPage = true): VideoCopyright {
    return this.getEdge(
      VideoCopyright,
      fields,
      params,
      fetchFirstPage,
      '/video_copyrights'
    );
  }

  createVideoCopyright (fields, params): VideoCopyright {
    return this.createEdge(
      '/video_copyrights',
      fields,
      params,
      VideoCopyright
    );
  }

  getVideoGroups (fields, params, fetchFirstPage = true): VideoGroup {
    return this.getEdge(
      VideoGroup,
      fields,
      params,
      fetchFirstPage,
      '/video_groups'
    );
  }

  deleteVideoLists (params): AbstractObject {
    return super.deleteEdge(
      '/video_lists',
      params
    );
  }

  getVideoLists (fields, params, fetchFirstPage = true): VideoList {
    return this.getEdge(
      VideoList,
      fields,
      params,
      fetchFirstPage,
      '/video_lists'
    );
  }

  createVideoList (fields, params): Page {
    return this.createEdge(
      '/video_lists',
      fields,
      params,
      Page
    );
  }

  getVideoMediaCopyrights (fields, params, fetchFirstPage = true): VideoCopyright {
    return this.getEdge(
      VideoCopyright,
      fields,
      params,
      fetchFirstPage,
      '/video_media_copyrights'
    );
  }

  getVideoReferenceMatches (fields, params, fetchFirstPage = true): VideoReferenceMatch {
    return this.getEdge(
      VideoReferenceMatch,
      fields,
      params,
      fetchFirstPage,
      '/video_reference_matches'
    );
  }

  getVideoStats (fields, params, fetchFirstPage = true): VideoStats {
    return this.getEdge(
      VideoStats,
      fields,
      params,
      fetchFirstPage,
      '/video_stats'
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

  createVideo (fields, params): AdVideo {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo
    );
  }

  getVideosYouCanUse (fields, params, fetchFirstPage = true): PageVideosYouCanUse {
    return this.getEdge(
      PageVideosYouCanUse,
      fields,
      params,
      fetchFirstPage,
      '/videos_you_can_use'
    );
  }

  getVisitorPosts (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/visitor_posts'
    );
  }

  getWorkFlows (fields, params, fetchFirstPage = true): PagesPlatformComponentFlowServiceConfig {
    return this.getEdge(
      PagesPlatformComponentFlowServiceConfig,
      fields,
      params,
      fetchFirstPage,
      '/workflows'
    );
  }

  get (fields, params): Page {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Page {
    return super.update(
      params
    );
  }
}
