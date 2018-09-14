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
const AbstractObject = adsSdk.AbstractObject;

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

// Pagepost delete
fields = [
];
params = {
};
let sample_code = (new PagePost(pagepost_id)).delete(
  fields,
  params
);
logApiCallResult('sample_code api call complete.', sample_code);