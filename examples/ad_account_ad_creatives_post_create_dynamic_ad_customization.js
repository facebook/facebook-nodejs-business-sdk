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
const AdCreative = adsSdk.AdCreative;

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
  'name' : 'Dynamic Ad Template Creative Sample',
  'object_story_spec' : {'page_id':'<pageID>','template_data':{'message':'English Test {{product.name | titleize}}','link':'http://www.example.com/englishurl','name':'English Headline {{product.price}}','description':'English Description {{product.description}}','customization_rules_spec':[{'customization_spec':{'language':'en_XX'}},{'customization_spec':{'language':'fr_XX'},'message':'French Test {{product.name | titleize}}','link':'http://www.example.com/frenchurl','name':'French Headline {{product.price}}','description':'French Description {{product.description}}','template_url_spec':{'web':{'url':'http://www.example.com/frenchdeeplink'}}}]}},
  'product_set_id' : '<productSetID>',
  'template_url_spec' : {'web':{'url':'http://www.example.com/englishdeeplink'}},
};
let adcreatives = (new AdAccount(id)).createAdCreative(
  fields,
  params
);
logApiCallResult('adcreatives api call complete.', adcreatives);