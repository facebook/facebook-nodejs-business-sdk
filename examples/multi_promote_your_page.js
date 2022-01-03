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
const User = bizSdk.User;
const Page = bizSdk.Page;
const PagePost = bizSdk.PagePost;
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;
const AdSet = bizSdk.AdSet;
const AdCreative = bizSdk.AdCreative;
const Ad = bizSdk.Ad;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<ID>';
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
// User get
fields = [
];
params = {
};
const user = (new User(id)).get(
  fields,
  params
);
logApiCallResult('user api call complete.', user);
const user_id = user.id;
console.log(user_id);

// Get page access token and page_id
fields = [
  'access_token',
];
params = {
};
const pages = (new User(id)).getAccounts(
  fields,
  params
);
logApiCallResult('pages api call complete.', pages);
const page_id = pages[0].id;
console.log(page_id);

// Switch access token to page access token
bizSdk.FacebookAdsApi.init(pages[0].access_token);
// Page feed create
fields = [
];
params = {
  'message' : 'This is a test value',
};
const pagepost = (new Page(page_id)).createFeed(
  fields,
  params
);
logApiCallResult('pagepost api call complete.', pagepost);
const pagepost_id = pagepost.id;
console.log(pagepost_id);

// Switch access token back to user access token
bizSdk.FacebookAdsApi.init(access_token);
// User adaccounts get
fields = [
];
params = {
};
const adaccounts = (new User(user_id)).getAdAccounts(
  fields,
  params
);
logApiCallResult('adaccounts api call complete.', adaccounts);
const adaccount_id = adaccounts[0].id;
console.log(adaccount_id);

// AdCampaign create
fields = [
];
params = {
  'name' : 'My campaign',
  'objective' : 'LINK_CLICKS',
  'status' : 'PAUSED',
  'special_ad_categories' : [],
};
const adcampaign = (new AdAccount(adaccount_id)).createCampaign(
  fields,
  params
);
logApiCallResult('adcampaign api call complete.', adcampaign);
const adcampaign_id = adcampaign.id;
console.log(adcampaign_id);

// AdSet create
fields = [
];
params = {
  'name' : 'My Reach Ad Set',
  'optimization_goal' : 'REACH',
  'billing_event' : 'IMPRESSIONS',
  'bid_amount' : '2',
  'daily_budget' : '1000',
  'campaign_id' : adcampaign_id,
  'targeting' : {'geo_locations':{'countries':['US']},'facebook_positions':['feed']},
  'status' : 'PAUSED',
  'promoted_object' : {'page_id':page_id},
};
const adset = (new AdAccount(adaccount_id)).createAdSet(
  fields,
  params
);
logApiCallResult('adset api call complete.', adset);
const adset_id = adset.id;
console.log(adset_id);

// AdCreative create page post
fields = [
];
params = {
  'name' : 'Sample Promoted Post',
  'object_story_id' : page_id + '_' + pagepost_id,
};
const adcreative = (new AdAccount(adaccount_id)).createAdCreative(
  fields,
  params
);
logApiCallResult('adcreative api call complete.', adcreative);
const adcreative_id = adcreative.id;
console.log(adcreative_id);

// AdGroup create
fields = [
];
params = {
  'name' : 'My Ad',
  'adset_id' : adset_id,
  'creative' : {'creative_id':adcreative_id},
  'status' : 'PAUSED',
};
const adgroup = (new AdAccount(adaccount_id)).createAd(
  fields,
  params
);
logApiCallResult('adgroup api call complete.', adgroup);