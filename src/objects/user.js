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
import Cursor from './../cursor';
import Page from './page';
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import Album from './album';
import AppRequestFormerRecipient from './app-request-former-recipient';
import AppRequest from './app-request';
import ProductCatalog from './product-catalog';
import BusinessUser from './business-user';
import Business from './business';
import Event from './event';
import FriendList from './friend-list';
import Group from './group';
import UserIDForApp from './user-id-for-app';
import UserIDForPage from './user-id-for-page';
import LiveEncoder from './live-encoder';
import LiveVideo from './live-video';
import Permission from './permission';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import Domain from './domain';
import RequestHistory from './request-history';
import UserTaggableFriend from './user-taggable-friend';
import UnifiedThread from './unified-thread';
import AdVideo from './ad-video';

/**
 * User
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class User extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      about: 'about',
      address: 'address',
      admin_notes: 'admin_notes',
      age_range: 'age_range',
      birthday: 'birthday',
      can_review_measurement_request: 'can_review_measurement_request',
      cover: 'cover',
      currency: 'currency',
      devices: 'devices',
      education: 'education',
      email: 'email',
      employee_number: 'employee_number',
      favorite_athletes: 'favorite_athletes',
      favorite_teams: 'favorite_teams',
      first_name: 'first_name',
      gender: 'gender',
      hometown: 'hometown',
      id: 'id',
      inspirational_people: 'inspirational_people',
      install_type: 'install_type',
      installed: 'installed',
      interested_in: 'interested_in',
      is_famedeeplinkinguser: 'is_famedeeplinkinguser',
      is_shared_login: 'is_shared_login',
      is_verified: 'is_verified',
      labels: 'labels',
      languages: 'languages',
      last_name: 'last_name',
      link: 'link',
      local_news_megaphone_dismiss_status: 'local_news_megaphone_dismiss_status',
      local_news_subscription_status: 'local_news_subscription_status',
      locale: 'locale',
      location: 'location',
      meeting_for: 'meeting_for',
      middle_name: 'middle_name',
      name: 'name',
      name_format: 'name_format',
      payment_pricepoints: 'payment_pricepoints',
      political: 'political',
      profile_pic: 'profile_pic',
      public_key: 'public_key',
      quotes: 'quotes',
      relationship_status: 'relationship_status',
      religion: 'religion',
      security_settings: 'security_settings',
      shared_login_upgrade_required_by: 'shared_login_upgrade_required_by',
      short_name: 'short_name',
      significant_other: 'significant_other',
      sports: 'sports',
      test_group: 'test_group',
      third_party_id: 'third_party_id',
      timezone: 'timezone',
      token_for_business: 'token_for_business',
      updated_time: 'updated_time',
      verified: 'verified',
      video_upload_limits: 'video_upload_limits',
      viewer_can_send_gift: 'viewer_can_send_gift',
      website: 'website',
      work: 'work',
    });
  }

  static get Tasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      create_content: 'CREATE_CONTENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }
  static get LocalNewsMegaphoneDismissStatus (): Object {
    return Object.freeze({
      no: 'NO',
      yes: 'YES',
    });
  }
  static get LocalNewsSubscriptionStatus (): Object {
    return Object.freeze({
      status_off: 'STATUS_OFF',
      status_on: 'STATUS_ON',
    });
  }
  static get ResumeType (): Object {
    return Object.freeze({
      bot_action: 'BOT_ACTION',
      native: 'NATIVE',
    });
  }
  static get Filtering (): Object {
    return Object.freeze({
      ema: 'ema',
      groups: 'groups',
      groups_social: 'groups_social',
    });
  }
  static get Type (): Object {
    return Object.freeze({
      content_update: 'content_update',
      generic: 'generic',
    });
  }
  static get ServiceType (): Object {
    return Object.freeze({
      aim: 'AIM',
      ask_fm: 'ASK_FM',
      bbm: 'BBM',
      bbm_ppid: 'BBM_PPID',
      cyworld: 'CYWORLD',
      ebuddy: 'EBUDDY',
      foursquare: 'FOURSQUARE',
      gadu: 'GADU',
      github: 'GITHUB',
      groupwise: 'GROUPWISE',
      gtalk: 'GTALK',
      hyves: 'HYVES',
      icloud: 'ICLOUD',
      icq: 'ICQ',
      instagram: 'INSTAGRAM',
      jabber: 'JABBER',
      kakaotalk: 'KAKAOTALK',
      kik: 'KIK',
      line: 'LINE',
      linked_in: 'LINKED_IN',
      mailru: 'MAILRU',
      medium: 'MEDIUM',
      mixi: 'MIXI',
      msn: 'MSN',
      myspace: 'MYSPACE',
      nateon: 'NATEON',
      ok: 'OK',
      orkut: 'ORKUT',
      others: 'OTHERS',
      pinterest: 'PINTEREST',
      qip: 'QIP',
      qq: 'QQ',
      rediff_bol: 'REDIFF_BOL',
      skype: 'SKYPE',
      snapchat: 'SNAPCHAT',
      sound_cloud: 'SOUND_CLOUD',
      spotify: 'SPOTIFY',
      tumblr: 'TUMBLR',
      twitch: 'TWITCH',
      twitter: 'TWITTER',
      vimeo: 'VIMEO',
      vkontakte: 'VKONTAKTE',
      wechat: 'WECHAT',
      whatsapp: 'WHATSAPP',
      yahoo: 'YAHOO',
      yahoo_jp: 'YAHOO_JP',
      you_tube: 'YOU_TUBE',
    });
  }

  createAccessToken (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/access_tokens',
      fields,
      params,
      User
    );
  }

  deleteAccessTokens (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/accesstokens',
      params
    );
  }

  getAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/accounts'
    );
  }

  createAccount (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/accounts',
      fields,
      params,
      Page
    );
  }

  createAchievement (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/achievements',
      fields,
      params,
      
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

  getAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  getAlbums (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Album,
      fields,
      params,
      fetchFirstPage,
      '/albums'
    );
  }

  createApplication (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/applications',
      fields,
      params,
      User
    );
  }

  getAppRequestFormerRecipients (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AppRequestFormerRecipient,
      fields,
      params,
      fetchFirstPage,
      '/apprequestformerrecipients'
    );
  }

  getAppRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AppRequest,
      fields,
      params,
      fetchFirstPage,
      '/apprequests'
    );
  }

  getAssignedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_ad_accounts'
    );
  }

  getAssignedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/assigned_pages'
    );
  }

  getAssignedProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/assigned_product_catalogs'
    );
  }

  getBooks (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/books'
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

  deleteBusinesses (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/businesses',
      params
    );
  }

  getBusinesses (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/businesses'
    );
  }

  getEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  getFamily (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/family'
    );
  }

  createFeed (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/feed',
      fields,
      params,
      
    );
  }

  getFriendLists (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      FriendList,
      fields,
      params,
      fetchFirstPage,
      '/friendlists'
    );
  }

  getFriends (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/friends'
    );
  }

  createGameItem (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/game_items',
      fields,
      params,
      
    );
  }

  createGameTime (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/game_times',
      fields,
      params,
      
    );
  }

  getGames (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/games'
    );
  }

  createGamesAchieve (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/games.achieves',
      fields,
      params,
      
    );
  }

  createGamesStat (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/games_stats',
      fields,
      params,
      
    );
  }

  createGamesPlay (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/gamesplays',
      fields,
      params,
      
    );
  }

  getGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/groups'
    );
  }

  getIdsForApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserIDForApp,
      fields,
      params,
      fetchFirstPage,
      '/ids_for_apps'
    );
  }

  getIdsForBusiness (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserIDForApp,
      fields,
      params,
      fetchFirstPage,
      '/ids_for_business'
    );
  }

  getIdsForPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserIDForPage,
      fields,
      params,
      fetchFirstPage,
      '/ids_for_pages'
    );
  }

  getLikes (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  getLiveEncoders (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LiveEncoder,
      fields,
      params,
      fetchFirstPage,
      '/live_encoders'
    );
  }

  createLiveEncoder (fields: Array<string>, params: Object = {}): Promise<LiveEncoder> {
    return this.createEdge(
      '/live_encoders',
      fields,
      params,
      LiveEncoder
    );
  }

  getLiveVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields: Array<string>, params: Object = {}): Promise<LiveVideo> {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo
    );
  }

  createMfsAccountPinReset (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/mfs_account_pin_reset',
      fields,
      params,
      User
    );
  }

  createMomentsLinkInviteConvert (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/moments_link_invite_convert',
      fields,
      params,
      User
    );
  }

  createMomentsUniversalLinkInvite (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/moments_universal_link_invite',
      fields,
      params,
      User
    );
  }

  getMovies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/movies'
    );
  }

  getMusic (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/music'
    );
  }

  createNotification (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/notifications',
      fields,
      params,
      User
    );
  }

  createPaymentCurrency (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/payment_currencies',
      fields,
      params,
      User
    );
  }

  deletePermissions (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/permissions',
      params
    );
  }

  getPermissions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Permission,
      fields,
      params,
      fetchFirstPage,
      '/permissions'
    );
  }

  getPersonalAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/personal_ad_accounts'
    );
  }

  getPhotos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Photo,
      fields,
      params,
      fetchFirstPage,
      '/photos'
    );
  }

  createPhoto (fields: Array<string>, params: Object = {}): Promise<Photo> {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo
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

  createPlace (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/places',
      fields,
      params,
      
    );
  }

  getPromotableDomains (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Domain,
      fields,
      params,
      fetchFirstPage,
      '/promotable_domains'
    );
  }

  getPromotableEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/promotable_events'
    );
  }

  getRequestHistory (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      RequestHistory,
      fields,
      params,
      fetchFirstPage,
      '/request_history'
    );
  }

  createScreenName (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/screennames',
      fields,
      params,
      User
    );
  }

  createStagingResource (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/staging_resources',
      fields,
      params,
      User
    );
  }

  getTaggableFriends (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UserTaggableFriend,
      fields,
      params,
      fetchFirstPage,
      '/taggable_friends'
    );
  }

  getTelevision (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/television'
    );
  }

  getThreads (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/threads'
    );
  }

  getVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  createVideo (fields: Array<string>, params: Object = {}): Promise<AdVideo> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): User {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): User {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
