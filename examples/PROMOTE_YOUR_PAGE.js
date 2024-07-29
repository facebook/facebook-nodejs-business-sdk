/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;
const AdSet = bizSdk.AdSet;
const AdCreative = bizSdk.AdCreative;
const Ad = bizSdk.Ad;

let access_token = '<ACCESS_TOKEN>';
let app_id = '<APP_ID>';
let account_id = 'act_<ACCOUNT_ID>';
let page_id = '<PAGE_ID>';
let ads_image_hash = '<IMAGE_HASH>';
let page_link = 'https://facebook.com/<PAGE_ID>';

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

void async function() {
  try {
    // Step 1: Create an ad campaign
    fields = [
    ];
    params = {
      'name': 'My campaign',
      'objective': 'OUTCOME_TRAFFIC',
      'status': 'PAUSED',
      'special_ad_categories': [],
    };
    let campaign = await (new AdAccount(account_id)).createCampaign(
      fields,
      params
    );
    let campaign_id = campaign.id;

    // Step 2: Create an adset with some buying options
    fields = [
    ];
    params = {
      'name': 'My adset',
      'optimization_goal': 'REACH',
      'bid_amount': '2',
      'daily_budget': '1000',
      'campaign_id': campaign_id,
      'targeting': {'geo_locations':{'countries':['US']}},
      'status': 'PAUSED',
      'billing_event': 'IMPRESSIONS',
    };
    let ad_set = await (new AdAccount(account_id)).createAdSet(
      fields,
      params
    );
    let ad_set_id = ad_set.id;


    // Step 3: Create an ad creative with your amazing design
    //         This ad creative is promoting your page

    fields = [
    ];
    params = {
      'name' : 'Creative',
      'object_story_spec' : {'page_id':page_id,'link_data':{'image_hash':ads_image_hash,'link':page_link,'message':'Creative message','call_to_action':{'type':'LIKE_PAGE','value':{'page':page_id}}}},
      'degrees_of_freedom_spec' : {'creative_features_spec': {'standard_enhancements': {'enroll_status': 'OPT_IN'}}},
    };
    let creative = await (new AdAccount(account_id)).createAdCreative(
      fields,
      params
    );
    let creative_id = creative.id;

    // Step 4: Create an ad under your ad set with your ad creative
    fields = [
    ];
    params = {
      'status' : 'PAUSED',
      'adset_id' : ad_set_id,
      'name' : 'My Ad',
      'creative' : {'creative_id': creative_id},
      'ad_format' : 'DESKTOP_FEED_STANDARD',
    };
    let ad = await (new AdAccount(account_id)).createAd(
      fields,
      params
    );
    let ad_id = ad.id;
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}();
