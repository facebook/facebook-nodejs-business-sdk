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
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;

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
  'name' : 'My campaign',
  'objective' : 'OUTCOME_TRAFFIC',
  'status' : 'PAUSED',
  'special_ad_categories' : [],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

fields = [
];
params = {
  'name' : 'Lead generation campaign',
  'objective' : 'OUTCOME_LEADS',
  'status' : 'PAUSED',
  'special_ad_categories' : [],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

fields = [
];
params = {
  'name' : 'Local ad campaign',
  'objective' : 'OUTCOME_AWARENESS',
  'status' : 'PAUSED',
  'special_ad_categories' : [],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

fields = [
];
params = {
  'name' : 'Mobile App Installs Campaign',
  'objective' : 'OUTCOME_APP_PROMOTION',
  'status' : 'PAUSED',
  'special_ad_categories' : [],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

fields = [
];
params = {
  'name' : 'App Installs Campaign with Dynamic Product Ads',
  'objective' : 'OUTCOME_APP_PROMOTION',
  'status' : 'PAUSED',
  'special_ad_categories' : [],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

fields = [
];
params = {
  'name' : 'Video Views campaign',
  'objective' : 'OUTCOME_ENGAGEMENT',
  'status' : 'PAUSED',
  'special_ad_categories' : [],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

fields = [
];
params = {
  'name' : 'My First Campaign',
  'objective' : 'OUTCOME_ENGAGEMENT',
  'status' : 'PAUSED',
  'special_ad_categories' : [],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

fields = [
];
params = {
  'name' : 'My First Campaign',
  'objective' : 'OUTCOME_ENGAGEMENT',
  'status' : 'PAUSED',
  'special_ad_categories' : [],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

fields = [
];
params = {
  'name' : 'My First Campaign with daily budget',
  'objective' : 'OUTCOME_LEADS',
  'status' : 'PAUSED',
  'daily_budget' : '1000',
  'special_ad_categories' : [],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

fields = [
];
params = {
  'name' : 'My First Campaign with special ad categories',
  'objective' : 'OUTCOME_LEADS',
  'status' : 'PAUSED',
  'daily_budget' : '1000',
  'special_ad_categories' : [],
  'special_ad_category_country' : ['MX'],
};
const campaigns = (new AdAccount(id)).createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);