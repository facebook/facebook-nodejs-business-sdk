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
  'name' : 'Dynamic Ad Template Creative Sample',
  'object_story_spec' : {'page_id':'<pageID>','template_data':{'message':'English Test {{product.name | titleize}}','link':'http://www.example.com/englishurl','name':'English Headline {{product.price}}','description':'English Description {{product.description}}','customization_rules_spec':[{'customization_spec':{'language':'en_XX'}},{'customization_spec':{'language':'fr_XX'},'message':'French Test {{product.name | titleize}}','link':'http://www.example.com/frenchurl','name':'French Headline {{product.price}}','description':'French Description {{product.description}}','template_url_spec':{'web':{'url':'http://www.example.com/frenchdeeplink'}}}]}},
  'product_set_id' : '<productSetID>',
  'template_url_spec' : {'web':{'url':'http://www.example.com/englishdeeplink'}},
};
const adcreatives = (new AdAccount(id)).createAdCreative(
  fields,
  params
);
logApiCallResult('adcreatives api call complete.', adcreatives);