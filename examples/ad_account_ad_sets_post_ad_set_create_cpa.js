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
  'name' : 'A CPA Ad Set',
  'campaign_id' : '<adCampaignLinkClicksID>',
  'daily_budget' : '5000',
  'start_time' : '2018-08-29T15:26:00-0700',
  'end_time' : '2018-09-05T15:26:00-0700',
  'billing_event' : 'IMPRESSIONS',
  'optimization_goal' : 'REACH',
  'bid_amount' : '1000',
  'promoted_object' : {'page_id':'<pageID>'},
  'targeting' : {'geo_locations':{'countries':['US']}},
  'user_os' : 'iOS',
  'publisher_platforms' : 'facebook',
  'device_platforms' : 'mobile',
};
let adsets = (new AdAccount(id)).createAdSet(
  fields,
  params
);
logApiCallResult('adsets api call complete.', adsets);