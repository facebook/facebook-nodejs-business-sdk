/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const AdSet = adsSdk.AdSet;

let access_token = '<ACCESS_TOKEN>';
let app_secret = '<APP_SECRET>';
let app_id = '<APP_ID>';
let id = '<ID>';
const api = adsSdk.FacebookAdsApi.init(access_token);
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
  'name' : 'My Adset with bid multiplier',
  'campaign_id' : '<adCampaignLinkClicksID>',
  'daily_budget' : '3000',
  'billing_event' : 'IMPRESSIONS',
  'optimization_goal' : 'OFFSITE_CONVERSIONS',
  'bid_amount' : '500',
  'bid_adjustments' : {'user_groups':{'gender':{'male':0.8,'female':1}}},
  'promoted_object' : {'product_set_id':'<productSetID>','custom_event_type':'ADD_TO_CART'},
  'targeting' : {'geo_locations':{'countries':['US']}},
  'status' : 'PAUSED',
};
let adsets = (new AdAccount(id)).createAdSet(
  fields,
  params
);
logApiCallResult('adsets api call complete.', adsets);