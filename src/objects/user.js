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
import AdAccount from './ad-account';
import Album from './album';
import UnifiedThread from './unified-thread';
import LeadgenForm from './leadgen-form';
import LiveVideo from './live-video';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import Domain from './domain';
import Event from './event';

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
      is_payment_enabled: 'is_payment_enabled',
      is_shared_login: 'is_shared_login',
      is_verified: 'is_verified',
      labels: 'labels',
      languages: 'languages',
      last_ad_referral: 'last_ad_referral',
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

  getAccounts (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/accounts'
    );
  }

  createAccount (fields, params): AbstractObject {
    return this.createEdge(
      '/accounts',
      fields,
      params

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

  createAlbum (fields, params): Album {
    return this.createEdge(
      '/albums',
      fields,
      params,
      Album
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

  getLeadGenForms (fields, params, fetchFirstPage = true): LeadgenForm {
    return this.getEdge(
      LeadgenForm,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_forms'
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

  getThreads (fields, params, fetchFirstPage = true): UnifiedThread {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/threads'
    );
  }

  get (fields, params): User {
    return this.read(
      fields,
      params
    );
  }
}
