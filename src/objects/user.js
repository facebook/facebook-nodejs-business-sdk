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
import WithAsset3D from './with-asset3-d';
import BusinessAssetGroup from './business-asset-group';
import AdMonetizationProperty from './ad-monetization-property';
import ProductCatalog from './product-catalog';
import BusinessUser from './business-user';
import Business from './business';
import UnifiedThread from './unified-thread';
import PageUserMessageThreadLabel from './page-user-message-thread-label';
import Domain from './domain';
import Event from './event';
import FriendList from './friend-list';
import Group from './group';
import UserIDForApp from './user-id-for-app';
import UserIDForPage from './user-id-for-page';
import InsightsResult from './insights-result';
import LiveEncoder from './live-encoder';
import LiveVideo from './live-video';
import OpenGraphObject from './open-graph-object';
import Permission from './permission';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import Post from './post';
import RequestHistory from './request-history';
import Canvas from './canvas';
import PlatformSessionKey from './platform-session-key';
import StreamFilter from './stream-filter';
import UserTaggableFriend from './user-taggable-friend';
import PlaceTag from './place-tag';
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
      auth_method: 'auth_method',
      birthday: 'birthday',
      can_review_measurement_request: 'can_review_measurement_request',
      context: 'context',
      cover: 'cover',
      currency: 'currency',
      devices: 'devices',
      education: 'education',
      email: 'email',
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
      is_guest_user: 'is_guest_user',
      is_shared_login: 'is_shared_login',
      is_verified: 'is_verified',
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
      oculus: 'OCULUS',
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

  deleteAccessTokens (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/access_tokens',
      params
    );
  }

  createAccessToken (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/access_tokens',
      fields,
      params,
      User
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

  getAchievements (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/achievements'
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

  createAdStudy (fields: Array<string>, params: Object = {}): Promise<AdStudy> {
    return this.createEdge(
      '/ad_studies',
      fields,
      params,
      AdStudy
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

  createAlbum (fields: Array<string>, params: Object = {}): Promise<Album> {
    return this.createEdge(
      '/albums',
      fields,
      params,
      Album
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

  getAsset3Ds (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      WithAsset3D,
      fields,
      params,
      fetchFirstPage,
      '/asset3ds'
    );
  }

  createAsset3D (fields: Array<string>, params: Object = {}): Promise<WithAsset3D> {
    return this.createEdge(
      '/asset3ds',
      fields,
      params,
      WithAsset3D
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

  getAssignedBusinessAssetGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetGroup,
      fields,
      params,
      fetchFirstPage,
      '/assigned_business_asset_groups'
    );
  }

  getAssignedMonetizationProperties (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdMonetizationProperty,
      fields,
      params,
      fetchFirstPage,
      '/assigned_monetization_properties'
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

  deleteBulkContacts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/bulkcontacts',
      params
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

  createBusiness (fields: Array<string>, params: Object = {}): Promise<Business> {
    return this.createEdge(
      '/businesses',
      fields,
      params,
      Business
    );
  }

  getConversations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/conversations'
    );
  }

  getCustomLabels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageUserMessageThreadLabel,
      fields,
      params,
      fetchFirstPage,
      '/custom_labels'
    );
  }

  getDomains (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Domain,
      fields,
      params,
      fetchFirstPage,
      '/domains'
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

  createGamesPlay (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/games_plays',
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

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  deleteLikes (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/likes',
      params
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

  createLike (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/likes',
      fields,
      params,
      User
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

  createLoggedOutPushSetNonce (fields: Array<string>, params: Object = {}): Promise<User> {
    return this.createEdge(
      '/loggedoutpushsetnonces',
      fields,
      params,
      User
    );
  }

  createLoginApprovalsKey (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/loginapprovalskeys',
      fields,
      params,
      
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

  getObjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OpenGraphObject,
      fields,
      params,
      fetchFirstPage,
      '/objects'
    );
  }

  createObject (fields: Array<string>, params: Object = {}): Promise<OpenGraphObject> {
    return this.createEdge(
      '/objects',
      fields,
      params,
      OpenGraphObject
    );
  }

  createOpenGraphActionFeed (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/open_graph_action_feed',
      fields,
      params,
      
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

  getPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/posts'
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

  getRichMediaDocuments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Canvas,
      fields,
      params,
      fetchFirstPage,
      '/rich_media_documents'
    );
  }

  deleteScreenNames (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/screennames',
      params
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

  getSessionKeys (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PlatformSessionKey,
      fields,
      params,
      fetchFirstPage,
      '/session_keys'
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

  getStreamFilters (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      StreamFilter,
      fields,
      params,
      fetchFirstPage,
      '/stream_filters'
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

  getTaggedPlaces (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PlaceTag,
      fields,
      params,
      fetchFirstPage,
      '/tagged_places'
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

  getVideoBroadcasts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/video_broadcasts'
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
