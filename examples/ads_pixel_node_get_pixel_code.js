/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 const adsSdk = require('facebook-nodejs-ads-sdk');
const AdsPixel = adsSdk.AdsPixel;

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
  'code',
];
params = {
};
let sample_code = (new AdsPixel(id)).get(
  fields,
  params
);
logApiCallResult('sample_code api call complete.', sample_code);