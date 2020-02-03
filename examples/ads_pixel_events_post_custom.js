/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const ServerEvent = bizSdk.ServerEvent;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const CustomData = bizSdk.CustomData;
const Content = bizSdk.Content;

const access_token = '<ACCESS_TOKEN>';
const pixel_id = '<ADS_PIXEL_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date() / 1000);

const userData = (new UserData())
                .setEmail('joe@eg.com')
                .setFbp('fb.1.1558571054389.1098115397')
                .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');

const serverEvent = (new ServerEvent())
                .setEventName('PageView')
                .setEventTime(current_timestamp)
                .setUserData(userData);

const eventsData = [serverEvent];
const eventRequest = (new EventRequest(access_token, pixel_id))
                .setEvents(eventsData);


eventRequest.execute();