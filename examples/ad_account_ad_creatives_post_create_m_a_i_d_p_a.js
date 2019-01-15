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
  'object_story_spec' : {'page_id':'<pageID>','template_data':{'call_to_action':{'type':'INSTALL_MOBILE_APP','value':{'link':'http://www.example.com/appstoreurl'}},'message':'Test {{product.name | titleize}}','link':'http://www.example.com/appstoreurl','name':'Headline {{product.price}}','description':'Description {{product.description}}'}},
  'product_set_id' : '<productSetID>',
};
const adcreatives = (new AdAccount(id)).createAdCreative(
  fields,
  params
);
logApiCallResult('adcreatives api call complete.', adcreatives);