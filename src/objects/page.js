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
import Album from './album';
import AssignedUser from './assigned-user';
import AudioCopyright from './audio-copyright';
import Profile from './profile';
import BusinessActivityLogEvent from './business-activity-log-event';
import PageCallToAction from './page-call-to-action';
import CanvasBodyElement from './canvas-body-element';
import Canvas from './canvas';
import PageChangeProposal from './page-change-proposal';
import URL from './url';
import UnifiedThread from './unified-thread';
import Event from './event';
import PagePost from './page-post';
import InsightsResult from './insights-result';
import PageInsightsAsyncExportRun from './page-insights-async-export-run';
import InstantArticle from './instant-article';
import InstantArticleInsightsQueryResult from './instant-article-insights-query-result';
import PageLabel from './page-label';
import User from './user';
import LiveVideo from './live-video';
import Location from './location';
import MediaFingerprint from './media-fingerprint';
import MessagingFeatureReview from './messaging-feature-review';
import MessengerProfile from './messenger-profile';
import LifeEvent from './life-event';
import NativeOffer from './native-offer';
import BusinessRoleRequest from './business-role-request';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import PlaceTopic from './place-topic';
import ProductCatalog from './product-catalog';
import PageSavedFilter from './page-saved-filter';
import SavedMessageResponse from './saved-message-response';
import Tab from './tab';
import PageUpcomingChange from './page-upcoming-change';
import VideoCopyrightRule from './video-copyright-rule';
import VideoCopyright from './video-copyright';
import VideoList from './video-list';

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
  static get Role (): Object {
    return Object.freeze({
      manager: 'MANAGER',
      content_creator: 'CONTENT_CREATOR',
      moderator: 'MODERATOR',
      advertiser: 'ADVERTISER',
      insights_analyst: 'INSIGHTS_ANALYST'
    });
  }
  static get Locale (): Object {
    return Object.freeze({
      en_us: 'EN_US',
      it_it: 'IT_IT',
      fr_fr: 'FR_FR',
      es_es: 'ES_ES',
      es_la: 'ES_LA',
      de_de: 'DE_DE',
      en_gb: 'EN_GB',
      pt_br: 'PT_BR',
      zh_tw: 'ZH_TW',
      zh_hk: 'ZH_HK',
      tr_tr: 'TR_TR',
      ar_ar: 'AR_AR',
      cs_cz: 'CS_CZ',
      da_dk: 'DA_DK',
      fi_fi: 'FI_FI',
      he_il: 'HE_IL',
      hi_in: 'HI_IN',
      hu_hu: 'HU_HU',
      id_id: 'ID_ID',
      ja_jp: 'JA_JP',
      ko_kr: 'KO_KR',
      nb_no: 'NB_NO',
      nl_nl: 'NL_NL',
      pl_pl: 'PL_PL',
      pt_pt: 'PT_PT',
      ro_ro: 'RO_RO',
      ru_ru: 'RU_RU',
      sv_se: 'SV_SE',
      th_th: 'TH_TH',
      vi_vn: 'VI_VN',
      zh_cn: 'ZH_CN'
    });
  }

  createAdminNote (fields, params): PageAdminNote {
    return this.createEdge(
      '/admin_notes',
      fields,
      params,
      PageAdminNote
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

  getBusinessActivities (fields, params, fetchFirstPage = true): BusinessActivityLogEvent {
    return this.getEdge(
      BusinessActivityLogEvent,
      fields,
      params,
      fetchFirstPage,
      '/business_activities'
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

  deleteClaimedUrls (params): AbstractObject {
    return super.deleteEdge(
      '/claimed_urls',
      params
    );
  }

  createClaimedUrl (fields, params): URL {
    return this.createEdge(
      '/claimed_urls',
      fields,
      params,
      URL
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

  getEvents (fields, params, fetchFirstPage = true): Event {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
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

  createInstantArticlesPublish (fields, params): AbstractObject {
    return this.createEdge(
      '/instant_articles_publish',
      fields,
      params

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

  createLeadGenConditionalQuestionsGroup (fields, params): AbstractObject {
    return this.createEdge(
      '/leadgen_conditional_questions_group',
      fields,
      params

    );
  }

  createLeadGenContextCard (fields, params): AbstractObject {
    return this.createEdge(
      '/leadgen_context_cards',
      fields,
      params

    );
  }

  createLeadGenDraftForm (fields, params): Page {
    return this.createEdge(
      '/leadgen_draft_forms',
      fields,
      params,
      Page
    );
  }

  createLeadGenForm (fields, params): Page {
    return this.createEdge(
      '/leadgen_forms',
      fields,
      params,
      Page
    );
  }

  createLeadGenLegalContent (fields, params): AbstractObject {
    return this.createEdge(
      '/leadgen_legal_content',
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

  createLeadGenWhitelistedUser (fields, params): User {
    return this.createEdge(
      '/leadgen_whitelisted_users',
      fields,
      params,
      User
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

  createLiveEncoder (fields, params): AbstractObject {
    return this.createEdge(
      '/live_encoders',
      fields,
      params

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

  createLocation (fields, params): Location {
    return this.createEdge(
      '/locations',
      fields,
      params,
      Location
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

  createMessage (fields, params): AbstractObject {
    return this.createEdge(
      '/messages',
      fields,
      params

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

  createMessengerCode (fields, params): AbstractObject {
    return this.createEdge(
      '/messenger_codes',
      fields,
      params

    );
  }

  deleteMessengerProfile (params): AbstractObject {
    return super.deleteEdge(
      '/messenger_profile',
      params
    );
  }

  createMessengerProfile (fields, params): MessengerProfile {
    return this.createEdge(
      '/messenger_profile',
      fields,
      params,
      MessengerProfile
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

  createNlpConfig (fields, params): AbstractObject {
    return this.createEdge(
      '/nlp_configs',
      fields,
      params

    );
  }

  createOffersV3 (fields, params): AbstractObject {
    return this.createEdge(
      '/offers_v3',
      fields,
      params

    );
  }

  createPageBackedInstagramAccount (fields, params): AbstractObject {
    return this.createEdge(
      '/page_backed_instagram_accounts',
      fields,
      params

    );
  }

  createPassThreadControl (fields, params): AbstractObject {
    return this.createEdge(
      '/pass_thread_control',
      fields,
      params

    );
  }

  deletePendingUsers (params): AbstractObject {
    return super.deleteEdge(
      '/pending_users',
      params
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

  createPendingUser (fields, params): Page {
    return this.createEdge(
      '/pending_users',
      fields,
      params,
      Page
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

  getPublishedPosts (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/published_posts'
    );
  }

  createRequestThreadControl (fields, params): AbstractObject {
    return this.createEdge(
      '/request_thread_control',
      fields,
      params

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

  getSavedFilters (fields, params, fetchFirstPage = true): PageSavedFilter {
    return this.getEdge(
      PageSavedFilter,
      fields,
      params,
      fetchFirstPage,
      '/saved_filters'
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

  getScheduledPosts (fields, params, fetchFirstPage = true): PagePost {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/scheduled_posts'
    );
  }

  createSetting (fields, params): AbstractObject {
    return this.createEdge(
      '/settings',
      fields,
      params

    );
  }

  deleteSubscribedApps (params): AbstractObject {
    return super.deleteEdge(
      '/subscribed_apps',
      params
    );
  }

  createSubscribedApp (fields, params): AbstractObject {
    return this.createEdge(
      '/subscribed_apps',
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

  createTab (fields, params): Tab {
    return this.createEdge(
      '/tabs',
      fields,
      params,
      Tab
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

  createThreadSetting (fields, params): AbstractObject {
    return this.createEdge(
      '/thread_settings',
      fields,
      params

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

  getUpcomingChanges (fields, params, fetchFirstPage = true): PageUpcomingChange {
    return this.getEdge(
      PageUpcomingChange,
      fields,
      params,
      fetchFirstPage,
      '/upcoming_changes'
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

  createVideoList (fields, params): VideoList {
    return this.createEdge(
      '/video_lists',
      fields,
      params,
      VideoList
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

  getVideos (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  createVideo (fields, params): AbstractObject {
    return this.createEdge(
      '/videos',
      fields,
      params

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
