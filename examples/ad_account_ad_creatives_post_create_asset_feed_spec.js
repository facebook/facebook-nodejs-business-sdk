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
const AdCreative = bizSdk.AdCreative;

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
  'name' : 'Dynamic Ad Creative with Asset Feed Spec Sample',
  'object_story_spec' : {'page_id':'<pageID>'},
  'asset_feed_spec' : {'images':[{'hash':'<imageHash>'}],'bodies':[{'text':'Begin Your Adventure'},{'text':'Once a Trainer, always a Trainer.'}],'titles':[{'text':'Level Up'},{'text':'Swipe to evolve'}],'descriptions':[{'text':'First Dynamic Ad Creative Sample'}],'ad_formats':['SINGLE_IMAGE'],'call_to_action_types':['SHOP_NOW'],'link_urls':[{'website_url':'https://www.example.com/'}],'videos':[]},
};
const adcreatives = (new AdAccount(id)).createAdCreative(
  fields,
  params
);
logApiCallResult('adcreatives api call complete.', adcreatives);