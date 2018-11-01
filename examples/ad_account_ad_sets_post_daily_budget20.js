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
  'name' : 'My First Adset',
  'daily_budget' : '2000',
  'start_time' : '2018-09-20T12:15:38-0700',
  'end_time' : '2018-09-27T12:15:38-0700',
  'campaign_id' : '<adCampaignLinkClicksID>',
  'bid_amount' : '100',
  'billing_event' : 'LINK_CLICKS',
  'optimization_goal' : 'LINK_CLICKS',
  'targeting' : {'geo_locations':{'countries':['US']}},
  'status' : 'PAUSED',
};
let adsets = (new AdAccount(id)).createAdSet(
  fields,
  params
);
logApiCallResult('adsets api call complete.', adsets);