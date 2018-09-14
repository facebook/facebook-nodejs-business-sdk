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
import AdExportPreset from './ad-export-preset';
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import AdContract from './ad-contract';
import Group from './group';
import InsightsQueryResult from './insights-query-result';
import AdSavedReport from './ad-saved-report';
import Album from './album';
import AppRequestFormerRecipient from './app-request-former-recipient';
import AppRequest from './app-request';
import WithAsset3D from './with-asset3-d';
import Application from './application';
import BusinessResourceGroup from './business-resource-group';
import AdMonetizationProperty from './ad-monetization-property';
import ProductCatalog from './product-catalog';
import WhatsAppBusinessAccount from './whats-app-business-account';
import AtlasNotification from './atlas-notification';
import AtlasUser from './atlas-user';
import BlindPig from './blind-pig';
import BlockedUserInfo from './blocked-user-info';
import BusinessActivityLogEvent from './business-activity-log-event';
import BusinessUser from './business-user';
import Business from './business';
import AtlasCompany from './atlas-company';
import ContactsMessengerSyncConfig from './contacts-messenger-sync-config';
import UnifiedThread from './unified-thread';
import CreditCard from './credit-card';
import PageUserMessageThreadLabel from './page-user-message-thread-label';
import Domain from './domain';
import Event from './event';
import FAMEKumo from './fame-kumo';
import FavoriteRequest from './favorite-request';
import FBLiteToNTTransitions from './fb-lite-to-nt-transitions';
import FPlugSave from './f-plug-save';
import FriendList from './friend-list';
import FundraiserPersonToCharity from './fundraiser-person-to-charity';
import GameItem from './game-item';
import GameTime from './game-time';
import GamesStat from './games-stat';
import HashedUser from './hashed-user';
import UserIDForApp from './user-id-for-app';
import UserIDForPage from './user-id-for-page';
import InstagramBusiness from './instagram-business';
import UserInvitableFriend from './user-invitable-friend';
import LeadgenForm from './leadgen-form';
import Link from './link';
import LiveEncoder from './live-encoder';
import LiveVideo from './live-video';
import NativeMegaphone from './native-megaphone';
import MobileAppAlert from './mobile-app-alert';
import UserMobileConfig from './user-mobile-config';
import UserNotificationSeenStateData from './user-notification-seen-state-data';
import UserNuxStatuses from './user-nux-statuses';
import OpenGraphObject from './open-graph-object';
import PageStatusCard from './page-status-card';
import Permission from './permission';
import PersistentStreamProfile from './persistent-stream-profile';
import PersonalAdsPersona from './personal-ads-persona';
import ScimCompanyUserPhoneNumber from './scim-company-user-phone-number';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import EventTour from './event-tour';
import RequestHistory from './request-history';
import Canvas from './canvas';
import PlatformSessionKey from './platform-session-key';
import Status from './status';
import StreamFilter from './stream-filter';
import UserTaggableFriend from './user-taggable-friend';
import PlaceTag from './place-tag';
import TrustMetrics from './trust-metrics';
import VaultDeletedImage from './vault-deleted-image';
import VaultDevice from './vault-device';
import VaultImage from './vault-image';
import VideoGroup from './video-group';
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
      bio: 'bio',
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
      username: 'username',
      verified: 'verified',
      video_upload_limits: 'video_upload_limits',
      viewer_can_send_gift: 'viewer_can_send_gift',
      website: 'website',
      work: 'work'
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
  static get LocalNewsMegaphoneDismissStatus (): Object {
    return Object.freeze({
      yes: 'YES',
      no: 'NO'
    });
  }
  static get LocalNewsSubscriptionStatus (): Object {
    return Object.freeze({
      status_on: 'STATUS_ON',
      status_off: 'STATUS_OFF'
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
      groups: 'groups',
      groups_social: 'groups_social',
      ema: 'ema'
    });
  }
  static get Type (): Object {
    return Object.freeze({
      generic: 'generic',
      content_update: 'content_update'
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

  getActivities (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/activities'
    );
  }

  getAdExportPresets (fields, params, fetchFirstPage = true): AdExportPreset {
    return this.getEdge(
      AdExportPreset,
      fields,
      params,
      fetchFirstPage,
      '/ad_export_presets'
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

  getAdminedGroups (fields, params, fetchFirstPage = true): Group {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/admined_groups'
    );
  }

  getAdNetworkAnalytics (fields, params, fetchFirstPage = true): InsightsQueryResult {
    return this.getEdge(
      InsightsQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics'
    );
  }

  getAdSavedReports (fields, params, fetchFirstPage = true): AdSavedReport {
    return this.getEdge(
      AdSavedReport,
      fields,
      params,
      fetchFirstPage,
      '/adsavedreports'
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

  getAppFriends (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/app_friends'
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

  getAssignedAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_ad_accounts'
    );
  }

  getAssignedApps (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/assigned_apps'
    );
  }

  getAssignedBusinessResourceGroups (fields, params, fetchFirstPage = true): BusinessResourceGroup {
    return this.getEdge(
      BusinessResourceGroup,
      fields,
      params,
      fetchFirstPage,
      '/assigned_business_resource_groups'
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

  getAssignedWhatsAppBusinessAccounts (fields, params, fetchFirstPage = true): WhatsAppBusinessAccount {
    return this.getEdge(
      WhatsAppBusinessAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_whatsapp_business_accounts'
    );
  }

  getAtlasNotifications (fields, params, fetchFirstPage = true): AtlasNotification {
    return this.getEdge(
      AtlasNotification,
      fields,
      params,
      fetchFirstPage,
      '/atlas_notifications'
    );
  }

  getAtlasUsers (fields, params, fetchFirstPage = true): AtlasUser {
    return this.getEdge(
      AtlasUser,
      fields,
      params,
      fetchFirstPage,
      '/atlas_users'
    );
  }

  getBlindPigs (fields, params, fetchFirstPage = true): BlindPig {
    return this.getEdge(
      BlindPig,
      fields,
      params,
      fetchFirstPage,
      '/blind_pigs'
    );
  }

  getBlocked (fields, params, fetchFirstPage = true): BlockedUserInfo {
    return this.getEdge(
      BlockedUserInfo,
      fields,
      params,
      fetchFirstPage,
      '/blocked'
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

  createCheckIn (fields, params): AbstractObject {
    return this.createEdge(
      '/checkins',
      fields,
      params

    );
  }

  getCompanies (fields, params, fetchFirstPage = true): AtlasCompany {
    return this.getEdge(
      AtlasCompany,
      fields,
      params,
      fetchFirstPage,
      '/companies'
    );
  }

  createContactsPhoto (fields, params): AbstractObject {
    return this.createEdge(
      '/contacts_photos',
      fields,
      params

    );
  }

  getContactsMessengerSync (fields, params, fetchFirstPage = true): ContactsMessengerSyncConfig {
    return this.getEdge(
      ContactsMessengerSyncConfig,
      fields,
      params,
      fetchFirstPage,
      '/contactsmessengersync'
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

  getCreditCards (fields, params, fetchFirstPage = true): CreditCard {
    return this.getEdge(
      CreditCard,
      fields,
      params,
      fetchFirstPage,
      '/credit_cards'
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

  createEvent (fields, params): Event {
    return this.createEdge(
      '/events',
      fields,
      params,
      Event
    );
  }

  getFameKumo (fields, params, fetchFirstPage = true): FAMEKumo {
    return this.getEdge(
      FAMEKumo,
      fields,
      params,
      fetchFirstPage,
      '/fame_kumo'
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

  getFbLiteToNtTransitions (fields, params, fetchFirstPage = true): FBLiteToNTTransitions {
    return this.getEdge(
      FBLiteToNTTransitions,
      fields,
      params,
      fetchFirstPage,
      '/fblite_to_nt_transitions'
    );
  }

  createFeed (fields, params): AbstractObject {
    return this.createEdge(
      '/feed',
      fields,
      params

    );
  }

  getFPlugSaves (fields, params, fetchFirstPage = true): FPlugSave {
    return this.getEdge(
      FPlugSave,
      fields,
      params,
      fetchFirstPage,
      '/fplug_saves'
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

  createFriendList (fields, params): FriendList {
    return this.createEdge(
      '/friendlists',
      fields,
      params,
      FriendList
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

  getFundraisers (fields, params, fetchFirstPage = true): FundraiserPersonToCharity {
    return this.getEdge(
      FundraiserPersonToCharity,
      fields,
      params,
      fetchFirstPage,
      '/fundraisers'
    );
  }

  getGameItems (fields, params, fetchFirstPage = true): GameItem {
    return this.getEdge(
      GameItem,
      fields,
      params,
      fetchFirstPage,
      '/game_items'
    );
  }

  createGameItem (fields, params): GameItem {
    return this.createEdge(
      '/game_items',
      fields,
      params,
      GameItem
    );
  }

  getGameTimes (fields, params, fetchFirstPage = true): GameTime {
    return this.getEdge(
      GameTime,
      fields,
      params,
      fetchFirstPage,
      '/game_times'
    );
  }

  createGameTime (fields, params): GameTime {
    return this.createEdge(
      '/game_times',
      fields,
      params,
      GameTime
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

  getGamesStats (fields, params, fetchFirstPage = true): GamesStat {
    return this.getEdge(
      GamesStat,
      fields,
      params,
      fetchFirstPage,
      '/games_stats'
    );
  }

  createGamesStat (fields, params): GamesStat {
    return this.createEdge(
      '/games_stats',
      fields,
      params,
      GamesStat
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

  getHashedFriends (fields, params, fetchFirstPage = true): HashedUser {
    return this.getEdge(
      HashedUser,
      fields,
      params,
      fetchFirstPage,
      '/hashed_friends'
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

  getInstagramBusinesses (fields, params, fetchFirstPage = true): InstagramBusiness {
    return this.getEdge(
      InstagramBusiness,
      fields,
      params,
      fetchFirstPage,
      '/instagram_businesses'
    );
  }

  getInterests (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/interests'
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

  getLeadGenForms (fields, params, fetchFirstPage = true): LeadgenForm {
    return this.getEdge(
      LeadgenForm,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_forms'
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

  getLinks (fields, params, fetchFirstPage = true): Link {
    return this.getEdge(
      Link,
      fields,
      params,
      fetchFirstPage,
      '/links'
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

  createLoggedOutPushSetNonce (fields, params): User {
    return this.createEdge(
      '/loggedoutpushsetnonces',
      fields,
      params,
      User
    );
  }

  createLoginApprovalsKey (fields, params): AbstractObject {
    return this.createEdge(
      '/loginapprovalskeys',
      fields,
      params

    );
  }

  getMAnAgeDGroups (fields, params, fetchFirstPage = true): Group {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/managed_groups'
    );
  }

  getManagers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/managers'
    );
  }

  getMegaphoneTopStories (fields, params, fetchFirstPage = true): NativeMegaphone {
    return this.getEdge(
      NativeMegaphone,
      fields,
      params,
      fetchFirstPage,
      '/megaphone_top_stories'
    );
  }

  getMegaphones (fields, params, fetchFirstPage = true): MobileAppAlert {
    return this.getEdge(
      MobileAppAlert,
      fields,
      params,
      fetchFirstPage,
      '/megaphones'
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

  getMobileConfigs (fields, params, fetchFirstPage = true): UserMobileConfig {
    return this.getEdge(
      UserMobileConfig,
      fields,
      params,
      fetchFirstPage,
      '/mobile_configs'
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

  getMusicPreferences (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/music_preferences'
    );
  }

  createNote (fields, params): AbstractObject {
    return this.createEdge(
      '/notes',
      fields,
      params

    );
  }

  getNotificationSeenStates (fields, params, fetchFirstPage = true): UserNotificationSeenStateData {
    return this.getEdge(
      UserNotificationSeenStateData,
      fields,
      params,
      fetchFirstPage,
      '/notification_seen_states'
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

  getNuxStatuses (fields, params, fetchFirstPage = true): UserNuxStatuses {
    return this.getEdge(
      UserNuxStatuses,
      fields,
      params,
      fetchFirstPage,
      '/nux_statuses'
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

  getOwnedProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/owned_product_catalogs'
    );
  }

  getPageStatusCards (fields, params, fetchFirstPage = true): PageStatusCard {
    return this.getEdge(
      PageStatusCard,
      fields,
      params,
      fetchFirstPage,
      '/page_status_cards'
    );
  }

  createPaymentAccountEmail (fields, params): AbstractObject {
    return this.createEdge(
      '/payment_account_emails',
      fields,
      params

    );
  }

  createPaymentAccountPhone (fields, params): AbstractObject {
    return this.createEdge(
      '/payment_account_phones',
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

  getPersistentStreamProfiles (fields, params, fetchFirstPage = true): PersistentStreamProfile {
    return this.getEdge(
      PersistentStreamProfile,
      fields,
      params,
      fetchFirstPage,
      '/persistent_stream_profiles'
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

  getPersonalAdsPersona (fields, params, fetchFirstPage = true): PersonalAdsPersona {
    return this.getEdge(
      PersonalAdsPersona,
      fields,
      params,
      fetchFirstPage,
      '/personal_ads_persona'
    );
  }

  getPhones (fields, params, fetchFirstPage = true): ScimCompanyUserPhoneNumber {
    return this.getEdge(
      ScimCompanyUserPhoneNumber,
      fields,
      params,
      fetchFirstPage,
      '/phones'
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

  getProductCatalogs (fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
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

  getPromotableTours (fields, params, fetchFirstPage = true): EventTour {
    return this.getEdge(
      EventTour,
      fields,
      params,
      fetchFirstPage,
      '/promotable_tours'
    );
  }

  getReports (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/reports'
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

  getSeenNuxes (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/seen_nuxes'
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

  getStatuses (fields, params, fetchFirstPage = true): Status {
    return this.getEdge(
      Status,
      fields,
      params,
      fetchFirstPage,
      '/statuses'
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

  getTagGeDPlaces (fields, params, fetchFirstPage = true): PlaceTag {
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

  getTrustMetrics (fields, params, fetchFirstPage = true): TrustMetrics {
    return this.getEdge(
      TrustMetrics,
      fields,
      params,
      fetchFirstPage,
      '/trust_metrics'
    );
  }

  getVaultDeletedImages (fields, params, fetchFirstPage = true): VaultDeletedImage {
    return this.getEdge(
      VaultDeletedImage,
      fields,
      params,
      fetchFirstPage,
      '/vaultdeletedimages'
    );
  }

  getVaultDevices (fields, params, fetchFirstPage = true): VaultDevice {
    return this.getEdge(
      VaultDevice,
      fields,
      params,
      fetchFirstPage,
      '/vaultdevices'
    );
  }

  getVaultImages (fields, params, fetchFirstPage = true): VaultImage {
    return this.getEdge(
      VaultImage,
      fields,
      params,
      fetchFirstPage,
      '/vaultimages'
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

  getVideoGroups (fields, params, fetchFirstPage = true): VideoGroup {
    return this.getEdge(
      VideoGroup,
      fields,
      params,
      fetchFirstPage,
      '/video_groups'
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
