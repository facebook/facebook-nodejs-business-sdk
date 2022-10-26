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
const AdAccount = bizSdk.AdAccount;
const AdSet = bizSdk.AdSet;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<AD_ACCOUNT_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  'name' : 'My Offer Claim AdSet',
  'lifetime_budget' : '56000',
  'start_time' : '2022-05-23T13:26:58-0700',
  'end_time' : '2022-05-30T13:26:58-0700',
  'campaign_id' : '<adCampaignLinkClicksID>',
  'billing_event' : 'LINK_CLICKS',
  'optimization_goal' : 'LINK_CLICKS',
  'bid_amount' : '1000',
  'promoted_object' : {'page_id':'<pageID>','offer_id':'<offerID>'},
  'targeting' : {'geo_locations':{'countries':['US']},'genders':[1],'age_min':'25','age_max':'55','facebook_positions':['feed']},
};
const adsets = (new AdAccount(id)).createAdSet(
  fields,
  params
);
logApiCallResult('adsets api call complete.', adsets);