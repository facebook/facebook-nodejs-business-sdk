/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 const adsSdk = require('facebook-nodejs-ads-sdk');
const User = adsSdk.User;
const Page = adsSdk.Page;
const PagePost = adsSdk.PagePost;
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const AdSet = adsSdk.AdSet;
const AdCreative = adsSdk.AdCreative;
const Ad = adsSdk.Ad;

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
// User get
fields = [
];
params = {
};
let user = (new User(id)).get(
  fields,
  params
);
logApiCallResult('user api call complete.', user);
let user_id = user.id;
console.log(user_id);

// Get page access token and page_id
fields = [
  'access_token',
];
params = {
};
let pages = (new User(id)).getAccounts(
  fields,
  params
);
logApiCallResult('pages api call complete.', pages);
let page_id = pages[0].id;
console.log(page_id);

// Switch access token to page access token
adsSdk.FacebookAdsApi.init(pages[0].access_token);
// Page feed create
fields = [
];
params = {
  'message' : 'This is a test value',
};
let pagepost = (new Page(page_id)).createFeed(
  fields,
  params
);
logApiCallResult('pagepost api call complete.', pagepost);
let pagepost_id = pagepost.id;
console.log(pagepost_id);

// Switch access token back to user access token
adsSdk.FacebookAdsApi.init(access_token);
// User adaccounts get
fields = [
];
params = {
};
let adaccounts = (new User(user_id)).getAdAccounts(
  fields,
  params
);
logApiCallResult('adaccounts api call complete.', adaccounts);
let adaccount_id = adaccounts[0].id;
console.log(adaccount_id);

// AdCampaign create
fields = [
];
params = {
  'name' : 'My campaign',
  'objective' : 'LINK_CLICKS',
  'status' : 'PAUSED',
};
let adcampaign = (new AdAccount(adaccount_id)).createCampaign(
  fields,
  params
);
logApiCallResult('adcampaign api call complete.', adcampaign);
let adcampaign_id = adcampaign.id;
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
  'targeting' : {'geo_locations':{'countries':['US']}},
  'status' : 'PAUSED',
  'promoted_object' : {'page_id':page_id},
};
let adset = (new AdAccount(adaccount_id)).createAdSet(
  fields,
  params
);
logApiCallResult('adset api call complete.', adset);
let adset_id = adset.id;
console.log(adset_id);

// AdCreative create page post
fields = [
];
params = {
  'name' : 'Sample Promoted Post',
  'object_story_id' : page_id + '_' + pagepost_id,
};
let adcreative = (new AdAccount(adaccount_id)).createAdCreative(
  fields,
  params
);
logApiCallResult('adcreative api call complete.', adcreative);
let adcreative_id = adcreative.id;
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
let adgroup = (new AdAccount(adaccount_id)).createAd(
  fields,
  params
);
logApiCallResult('adgroup api call complete.', adgroup);