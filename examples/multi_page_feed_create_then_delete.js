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
const AbstractObject = bizSdk.AbstractObject;

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

// Pagepost delete
fields = [
];
params = {
};
const sample_code = (new PagePost(pagepost_id)).delete(
  fields,
  params
);
logApiCallResult('sample_code api call complete.', sample_code);