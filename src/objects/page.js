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
import PageAdminNote from './page-admin-note';
import User from './user';
import Business from './business';
import Album from './album';
import WithAsset3D from './with-asset3-d';
import AssignedUser from './assigned-user';
import AudioCopyright from './audio-copyright';
import Profile from './profile';
import PageBroadcast from './page-broadcast';
import BusinessActivityLogEvent from './business-activity-log-event';
import BusinessProject from './business-project';
import BusinessSettingLogsData from './business-setting-logs-data';
import PageCallToAction from './page-call-to-action';
import CanvasBodyElement from './canvas-body-element';
import Canvas from './canvas';
import URL from './url';
import UnifiedThread from './unified-thread';
import PageUserMessageThreadLabel from './page-user-message-thread-label';
import Event from './event';
import ExpirablePost from './expirable-post';
import AdVideo from './ad-video';
import PagePost from './page-post';
import VideoCopyright from './video-copyright';
import InsightsResult from './insights-result';
import PageInsightsAsyncExportRun from './page-insights-async-export-run';
import InstagramUser from './instagram-user';
import InstantArticle from './instant-article';
import InstantArticleInsightsQueryResult from './instant-article-insights-query-result';
import PageLabel from './page-label';
import LeadGenConditionalQuestionsGroup from './lead-gen-conditional-questions-group';
import LeadGenContextCard from './lead-gen-context-card';
import LeadGenDataDraft from './lead-gen-data-draft';
import LeadgenForm from './leadgen-form';
import LeadGenLegalContent from './lead-gen-legal-content';
import LeadGenQualifier from './lead-gen-qualifier';
import Link from './link';
import LiveEncoder from './live-encoder';
import LiveVideo from './live-video';
import MediaFingerprint from './media-fingerprint';
import MessagingFeatureReview from './messaging-feature-review';
import MessengerDestinationPageWelcomeMessage from './messenger-destination-page-welcome-message';
import MessengerProfile from './messenger-profile';
import LifeEvent from './life-event';
import MusicVideoCopyright from './music-video-copyright';
import NativeOffer from './native-offer';
import Persona from './persona';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import PlaceTopic from './place-topic';
import ProductCatalog from './product-catalog';
import Recommendation from './recommendation';
import FoodDrinkOrder from './food-drink-order';
import RTBDynamicPost from './rtb-dynamic-post';
import PageSavedFilter from './page-saved-filter';
import SavedMessageResponse from './saved-message-response';
import ScreenName from './screen-name';
import VideoList from './video-list';
import Application from './application';
import PageSettings from './page-settings';
import Tab from './tab';
import PageThreadOwner from './page-thread-owner';
import ThreadSetting from './thread-setting';
import EventTour from './event-tour';
import VideoCopyrightRule from './video-copyright-rule';
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
      privacy_info_url: 'privacy_info_url',
      produced_by: 'produced_by',
      products: 'products',
      promotion_eligible: 'promotion_eligible',
      promotion_ineligible_reason: 'promotion_ineligible_reason',
      public_transit: 'public_transit',
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
      event_custom_audiences: 'EVENT_CUSTOM_AUDIENCES',
      auto_page_lookalike: 'AUTO_PAGE_LOOKALIKE'
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
      georgian: 'GEORGIAN',
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
      messaging_appointments: 'messaging_appointments',
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

  createAdminSetting (fields, params): Page {
    return this.createEdge(
      '/admin_settings',
      fields,
      params,
      Page
    );
  }

  deleteAdmins (params): AbstractObject {
    return super.deleteEdge(
      '/admins',
      params
    );
  }

  createAdmin (fields, params): User {
    return this.createEdge(
      '/admins',
      fields,
      params,
      User
    );
  }

  createAdminStickySetting (fields, params): Page {
    return this.createEdge(
      '/adminstickysettings',
      fields,
      params,
      Page
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

  getAsset3Ds (fields, params, fetchFirstPage = true): WithAsset3D {
    return this.getEdge(
      WithAsset3D,
      fields,
      params,
      fetchFirstPage,
      '/asset3ds'
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

  getBusinessActivities (fields, params, fetchFirstPage = true): BusinessActivityLogEvent {
    return this.getEdge(
      BusinessActivityLogEvent,
      fields,
      params,
      fetchFirstPage,
      '/business_activities'
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

  createClaimedUrl (fields, params): Page {
    return this.createEdge(
      '/claimed_urls',
      fields,
      params,
      Page
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

  createCopyrightManualClaim (fields, params): AbstractObject {
    return this.createEdge(
      '/copyright_manual_claims',
      fields,
      params

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

  getLeadGenDraftForms (fields, params, fetchFirstPage = true): LeadGenDataDraft {
    return this.getEdge(
      LeadGenDataDraft,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_draft_forms'
    );
  }

  createLeadGenDraftForm (fields, params): LeadGenDataDraft {
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

  getLeadGenLegalContent (fields, params, fetchFirstPage = true): LeadGenLegalContent {
    return this.getEdge(
      LeadGenLegalContent,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_legal_content'
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

  createLiveEncoder (fields, params): LiveEncoder {
    return this.createEdge(
      '/live_encoders',
      fields,
      params,
      LiveEncoder
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

  getMusicVideoMediaCopyrights (fields, params, fetchFirstPage = true): MusicVideoCopyright {
    return this.getEdge(
      MusicVideoCopyright,
      fields,
      params,
      fetchFirstPage,
      '/music_video_media_copyrights'
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

  createPassThreadControl (fields, params): Page {
    return this.createEdge(
      '/pass_thread_control',
      fields,
      params,
      Page
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

  createPersona (fields, params): Persona {
    return this.createEdge(
      '/personas',
      fields,
      params,
      Persona
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

  getScreenNames (fields, params, fetchFirstPage = true): ScreenName {
    return this.getEdge(
      ScreenName,
      fields,
      params,
      fetchFirstPage,
      '/screennames'
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

  getShowPlaylists (fields, params, fetchFirstPage = true): VideoList {
    return this.getEdge(
      VideoList,
      fields,
      params,
      fetchFirstPage,
      '/show_playlists'
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

  getVideoBroadcasts (fields, params, fetchFirstPage = true): LiveVideo {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/video_broadcasts'
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
