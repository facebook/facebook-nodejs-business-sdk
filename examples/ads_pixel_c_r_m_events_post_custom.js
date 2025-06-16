/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

 'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token = '<ACCESS_TOKEN>';
const pixel_id = '<ADS_PIXEL_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date() / 1000);

const userData = (new UserData())
                .setEmails(['joe@eg.com'])
                .setPhones(['12345678901', '14251234567'])
                .setLeadId['525645896321548'])

const customData = (new CustomData())
                .setCustomProperties({ 'lead_event_source' : 'Salesforce'});

const serverEvent = (new ServerEvent())
                .setEventName('QualifiedLead')
                .setEventTime(current_timestamp)
                .setUserData(userData)
                .setActionSource('system_generated');

const eventsData = [serverEvent];
const eventRequest = (new EventRequest(access_token, pixel_id))
                .setEvents(eventsData);

eventRequest.execute().then(
  response => {
    console.log('Response: ', response);
  },
  err => {
    console.error('Error: ', err);
  }
);