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
import Page from './page';
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import AdContract from './ad-contract';
import Album from './album';
import AppRequestFormerRecipient from './app-request-former-recipient';
import AppRequest from './app-request';
import WithAsset3D from './with-asset3-d';
import AdMonetizationProperty from './ad-monetization-property';
import ProductCatalog from './product-catalog';
import BusinessActivityLogEvent from './business-activity-log-event';
import BusinessUser from './business-user';
import Business from './business';
import UnifiedThread from './unified-thread';
import PageUserMessageThreadLabel from './page-user-message-thread-label';
import Domain from './domain';
import Event from './event';
import FavoriteRequest from './favorite-request';
import FriendList from './friend-list';
import Group from './group';
import UserIDForApp from './user-id-for-app';
import UserIDForPage from './user-id-for-page';
import UserInvitableFriend from './user-invitable-friend';
import LiveEncoder from './live-encoder';
import LiveVideo from './live-video';
import OpenGraphObject from './open-graph-object';
import Permission from './permission';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
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
      birthday: 'birthday',
      can_review_measurement_request: 'can_review_measurement_request',
      context: 'context',
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
      work: 'work'
    });
  }

  static get Tasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      create_content: 'CREATE_CONTENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES'
    });
  }
  static get LocalNewsMegaphoneDismissStatus (): Object {
    return Object.freeze({
      no: 'NO',
      yes: 'YES'
    });
  }
  static get LocalNewsSubscriptionStatus (): Object {
    return Object.freeze({
      status_off: 'STATUS_OFF',
      status_on: 'STATUS_ON'
    });
  }
  static get ResumeType (): Object {
    return Object.freeze({
      bot_action: 'BOT_ACTION',
      native: 'NATIVE'
    });
  }
  static get Filtering (): Object {
    return Object.freeze({
      ema: 'ema',
      groups: 'groups',
      groups_social: 'groups_social'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      content_update: 'content_update',
      generic: 'generic'
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
      you_tube: 'YOU_TUBE'
    });
  }

  createPaymentCurrency (fields, params): User {
    return this.createEdge(
      '/PaymentCurrencies',
      fields,
      params,
      User
    );
  }

  createAccessToken (fields, params): User {
    return this.createEdge(
      '/access_tokens',
      fields,
      params,
      User
    );
  }

  deleteAccessTokens (params): AbstractObject {
    return super.deleteEdge(
      '/accesstokens',
      params
    );
  }

  getAccounts (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/accounts'
    );
  }

  createAccount (fields, params): Page {
    return this.createEdge(
      '/accounts',
      fields,
      params,
      Page
    );
  }

  getAchievements (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/achievements'
    );
  }

  createAchievement (fields, params): AbstractObject {
    return this.createEdge(
      '/achievements',
      fields,
      params

    );
  }

  getAdStudies (fields, params, fetchFirstPage = true): AdStudy {
    return this.getEdge(
      AdStudy,
      fields,
      params,
      fetchFirstPage,
      '/ad_studies'
    );
  }

  createAdStudy (fields, params): AdStudy {
    return this.createEdge(
      '/ad_studies',
      fields,
      params,
      AdStudy
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

  getAdContracts (fields, params, fetchFirstPage = true): AdContract {
    return this.getEdge(
      AdContract,
      fields,
      params,
      fetchFirstPage,
      '/adcontracts'
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

  createApplication (fields, params): User {
    return this.createEdge(
      '/applications',
      fields,
      params,
      User
    );
  }

  getAppRequestFormerRecipients (fields, params, fetchFirstPage = true): AppRequestFormerRecipient {
    return this.getEdge(
      AppRequestFormerRecipient,
      fields,
      params,
      fetchFirstPage,
      '/apprequestformerrecipients'
    );
  }

  getAppRequests (fields, params, fetchFirstPage = true): AppRequest {
    return this.getEdge(
      AppRequest,
      fields,
      params,
      fetchFirstPage,
      '/apprequests'
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

  createAsset3D (fields, params): WithAsset3D {
    return this.createEdge(
      '/asset3ds',
      fields,
      params,
      WithAsset3D
    );
  }

  getAssignedAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_ad_accounts'
    );
  }

  getAssignedMonetizationProperties (fields, params, fetchFirstPage = true): AdMonetizationProperty {
    return this.getEdge(
      AdMonetizationProperty,
      fields,
      params,
      fetchFirstPage,
      '/assigned_monetization_properties'
    );
  }

  getAssignedPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/assigned_pages'
    );
  }

  getAssignedProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/assigned_product_catalogs'
    );
  }

  getBooks (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/books'
    );
  }

  deleteBulkContacts (params): AbstractObject {
    return super.deleteEdge(
      '/bulkcontacts',
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

  getBusinessUsers (fields, params, fetchFirstPage = true): BusinessUser {
    return this.getEdge(
      BusinessUser,
      fields,
      params,
      fetchFirstPage,
      '/business_users'
    );
  }

  deleteBusinesses (params): AbstractObject {
    return super.deleteEdge(
      '/businesses',
      params
    );
  }

  getBusinesses (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/businesses'
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

  getCustomLabels (fields, params, fetchFirstPage = true): PageUserMessageThreadLabel {
    return this.getEdge(
      PageUserMessageThreadLabel,
      fields,
      params,
      fetchFirstPage,
      '/custom_labels'
    );
  }

  getDomains (fields, params, fetchFirstPage = true): Domain {
    return this.getEdge(
      Domain,
      fields,
      params,
      fetchFirstPage,
      '/domains'
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

  getFamily (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/family'
    );
  }

  getFavoriteRequests (fields, params, fetchFirstPage = true): FavoriteRequest {
    return this.getEdge(
      FavoriteRequest,
      fields,
      params,
      fetchFirstPage,
      '/favorite_requests'
    );
  }

  createFavoriteRequest (fields, params): FavoriteRequest {
    return this.createEdge(
      '/favorite_requests',
      fields,
      params,
      FavoriteRequest
    );
  }

  createFeed (fields, params): AbstractObject {
    return this.createEdge(
      '/feed',
      fields,
      params

    );
  }

  getFriendLists (fields, params, fetchFirstPage = true): FriendList {
    return this.getEdge(
      FriendList,
      fields,
      params,
      fetchFirstPage,
      '/friendlists'
    );
  }

  getFriends (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/friends'
    );
  }

  createGameItem (fields, params): AbstractObject {
    return this.createEdge(
      '/game_items',
      fields,
      params

    );
  }

  createGameTime (fields, params): AbstractObject {
    return this.createEdge(
      '/game_times',
      fields,
      params

    );
  }

  getGames (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/games'
    );
  }

  createGamesStat (fields, params): AbstractObject {
    return this.createEdge(
      '/games_stats',
      fields,
      params

    );
  }

  createGamesAchieve (fields, params): AbstractObject {
    return this.createEdge(
      '/gamesachieves',
      fields,
      params

    );
  }

  createGamesPlay (fields, params): AbstractObject {
    return this.createEdge(
      '/gamesplays',
      fields,
      params

    );
  }

  getGroups (fields, params, fetchFirstPage = true): Group {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/groups'
    );
  }

  getIdsForApps (fields, params, fetchFirstPage = true): UserIDForApp {
    return this.getEdge(
      UserIDForApp,
      fields,
      params,
      fetchFirstPage,
      '/ids_for_apps'
    );
  }

  getIdsForBusiness (fields, params, fetchFirstPage = true): UserIDForApp {
    return this.getEdge(
      UserIDForApp,
      fields,
      params,
      fetchFirstPage,
      '/ids_for_business'
    );
  }

  getIdsForPages (fields, params, fetchFirstPage = true): UserIDForPage {
    return this.getEdge(
      UserIDForPage,
      fields,
      params,
      fetchFirstPage,
      '/ids_for_pages'
    );
  }

  getInvitableFriends (fields, params, fetchFirstPage = true): UserInvitableFriend {
    return this.getEdge(
      UserInvitableFriend,
      fields,
      params,
      fetchFirstPage,
      '/invitable_friends'
    );
  }

  deleteLikes (params): AbstractObject {
    return super.deleteEdge(
      '/likes',
      params
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

  createLike (fields, params): User {
    return this.createEdge(
      '/likes',
      fields,
      params,
      User
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

  createLoggedOutPushSetNonce (fields, params): User {
    return this.createEdge(
      '/loggedoutpushsetnonces',
      fields,
      params,
      User
    );
  }

  createLogInApprovalsKey (fields, params): AbstractObject {
    return this.createEdge(
      '/loginapprovalskeys',
      fields,
      params

    );
  }

  createMfsAccountPinReset (fields, params): User {
    return this.createEdge(
      '/mfs_account_pin_reset',
      fields,
      params,
      User
    );
  }

  createMomentsLinkInvite (fields, params): AbstractObject {
    return this.createEdge(
      '/moments_link_invite',
      fields,
      params

    );
  }

  createMomentsLinkInviteConvert (fields, params): User {
    return this.createEdge(
      '/moments_link_invite_convert',
      fields,
      params,
      User
    );
  }

  createMomentsUniversalLinkInvite (fields, params): User {
    return this.createEdge(
      '/moments_universal_link_invite',
      fields,
      params,
      User
    );
  }

  getMovies (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/movies'
    );
  }

  getMusic (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/music'
    );
  }

  createNotification (fields, params): User {
    return this.createEdge(
      '/notifications',
      fields,
      params,
      User
    );
  }

  getObjects (fields, params, fetchFirstPage = true): OpenGraphObject {
    return this.getEdge(
      OpenGraphObject,
      fields,
      params,
      fetchFirstPage,
      '/objects'
    );
  }

  createObject (fields, params): OpenGraphObject {
    return this.createEdge(
      '/objects',
      fields,
      params,
      OpenGraphObject
    );
  }

  createOpenGraphActionFeed (fields, params): AbstractObject {
    return this.createEdge(
      '/opengraphactionfeed',
      fields,
      params

    );
  }

  deletePermissions (params): AbstractObject {
    return super.deleteEdge(
      '/permissions',
      params
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

  getPersonalAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/personal_ad_accounts'
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

  createPlace (fields, params): AbstractObject {
    return this.createEdge(
      '/places',
      fields,
      params

    );
  }

  getPromotableDomains (fields, params, fetchFirstPage = true): Domain {
    return this.getEdge(
      Domain,
      fields,
      params,
      fetchFirstPage,
      '/promotable_domains'
    );
  }

  getPromotableEvents (fields, params, fetchFirstPage = true): Event {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/promotable_events'
    );
  }

  getRequestHistory (fields, params, fetchFirstPage = true): RequestHistory {
    return this.getEdge(
      RequestHistory,
      fields,
      params,
      fetchFirstPage,
      '/request_history'
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

  deleteScreenNames (params): AbstractObject {
    return super.deleteEdge(
      '/screennames',
      params
    );
  }

  createScreenName (fields, params): User {
    return this.createEdge(
      '/screennames',
      fields,
      params,
      User
    );
  }

  getSessionKeys (fields, params, fetchFirstPage = true): PlatformSessionKey {
    return this.getEdge(
      PlatformSessionKey,
      fields,
      params,
      fetchFirstPage,
      '/session_keys'
    );
  }

  createStagingResource (fields, params): User {
    return this.createEdge(
      '/stagingresources',
      fields,
      params,
      User
    );
  }

  getStreamFilters (fields, params, fetchFirstPage = true): StreamFilter {
    return this.getEdge(
      StreamFilter,
      fields,
      params,
      fetchFirstPage,
      '/stream_filters'
    );
  }

  createSubscription (fields, params): AbstractObject {
    return this.createEdge(
      '/subscriptions',
      fields,
      params

    );
  }

  getTaggableFriends (fields, params, fetchFirstPage = true): UserTaggableFriend {
    return this.getEdge(
      UserTaggableFriend,
      fields,
      params,
      fetchFirstPage,
      '/taggable_friends'
    );
  }

  getTaggedPlaces (fields, params, fetchFirstPage = true): PlaceTag {
    return this.getEdge(
      PlaceTag,
      fields,
      params,
      fetchFirstPage,
      '/tagged_places'
    );
  }

  getTelevision (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/television'
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

  getVideoBroadcasts (fields, params, fetchFirstPage = true): LiveVideo {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/video_broadcasts'
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

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): User {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): User {
    return super.update(
      params
    );
  }
}
