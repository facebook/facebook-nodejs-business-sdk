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
const CustomAudience = adsSdk.CustomAudience;

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
  'name' : 'Test Iphone Product Audience',
  'product_set_id' : '<productSetID>',
  'inclusions' : [{'retention_seconds':86400,'rule':{'and':[{'event':{'eq':'AddToCart'}},{'userAgent':{'i_contains':'iPhone'}}]}}],
  'exclusions' : [{'retention_seconds':172800,'rule':{'event':{'eq':'Purchase'}}}],
};
let product_audiences = (new AdAccount(id)).createProductAudience(
  fields,
  params
);
logApiCallResult('product_audiences api call complete.', product_audiences);