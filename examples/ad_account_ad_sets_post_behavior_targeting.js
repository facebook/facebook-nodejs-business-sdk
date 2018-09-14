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
  'name' : 'My AdSet',
  'optimization_goal' : 'REACH',
  'billing_event' : 'IMPRESSIONS',
  'bid_amount' : '2',
  'daily_budget' : '1000',
  'campaign_id' : '<adCampaignConversionsID>',
  'targeting' : {'geo_locations':{'countries':['US']},'behaviors':[{'id':6007101597783,'name':'Business Travelers'},{'id':6004386044572,'name':'Android Owners (All)'}]},
};
let adsets = (new AdAccount(id)).createAdSet(
  fields,
  params
);
logApiCallResult('adsets api call complete.', adsets);