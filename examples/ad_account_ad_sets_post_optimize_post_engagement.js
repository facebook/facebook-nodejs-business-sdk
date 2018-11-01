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
  'lifetime_budget' : '20000',
  'start_time' : '2018-09-20T12:17:44-0700',
  'end_time' : '2018-09-30T12:17:44-0700',
  'campaign_id' : '<adCampaignLinkClicksID>',
  'bid_amount' : '500',
  'billing_event' : 'IMPRESSIONS',
  'optimization_goal' : 'POST_ENGAGEMENT',
  'targeting' : {'geo_locations':{'countries':['US'],'regions':[{'key':'4081'}],'cities':[{'key':777934,'radius':10,'distance_unit':'mile'}]},'genders':[1],'age_max':24,'age_min':20,'behaviors':[{'id':6002714895372,'name':'All travelers'}],'life_events':[{'id':6002714398172,'name':'Newlywed (1 year)'}],'home_ownership':[{'id':6006371327132,'name':'Renters'}],'publisher_platforms':['facebook'],'device_platforms':['desktop']},
  'status' : 'PAUSED',
};
let adsets = (new AdAccount(id)).createAdSet(
  fields,
  params
);
logApiCallResult('adsets api call complete.', adsets);