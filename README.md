# Facebook Ads API SDK for NodeJS

[![License](https://img.shields.io/badge/license-Facebook%20Platform-blue.svg?style=flat-square)](https://github.com/facebook/facebook-nodejs-ads-sdk/blob/master/LICENSE)

This Ads API SDK is built to facilitate application development for [Facebook Ads API](https://developers.facebook.com/docs/ads-api).
This SDK can be used for both server side as well as client side. It comes with ECMAScript 5 bundled minified distribution with source maps of AMD, CommonJS modules, IIFE, as UMD and as Browser Globals.

### Dependencies

[Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) should be installed globally. Install depencencies:

``` bash
npm install
bower install
```

Checkout `gulpfile.js` for all available tasks.


## Installation

NPM

npm install --save facebook-nodejs-ads-sdk

Bower

bower install --save facebook-nodejs-ads-sdk

## Usage

### Access Token

To instantiate an Api object you will need a valid [access token](https://developers.facebook.com/docs/marketing-api/authentication) for an app with the `ads_management` permission. A quick way to obtaining a short-lived token is using the [Graph API Explorer](https://developers.facebook.com/tools/explorer/). Instantiate the API using the token:

```javaScript
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
```

### Api main class

The `FacebookAdsApi` object is the foundation of the Ads SDK which encapsulates the logic to execute requests against the Graph API.
Once instantiated, the Api object will allows you to start making requests to the Ads API.

### Facebook Objects

Facebook Ads entities are defined as classes under the `src/objects` directory.

```javascript
// instantiating an object
const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount(accountId);
console.log(account.id) // fields can be accessed as properties
```

### Fields

Due to the high number of field names in the Ads API existing objects, in order to facilitate your code maintainability, enum-like field objects are provided within each node class.
The fields are stored within node object classes which are stored under the `src/objects` directory.
You can access object properties like this,

```javaScript
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('<AD_ACCOUNT_ID>');

console.log(account.id) // fields can be accessed as properties
account
  .createCampaign(
    [Campaign.Fields.Id],
    {
      [Campaign.Fields.name]: 'Page likes campaign', // Each object contains a fields map with a list of fields supported on that object.
      [Campaign.Fields.status]: Campaign.Status.paused,
      [Campaign.Fields.objective]: Campaign.Objective.page_likes
    }
  )
  .then((result) => {
  })
  .catch((error) => {
  });
```

#### Read Objects

```javascript
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount('<AD_ACCOUNT_ID>');
account
  .read([AdAccount.Fields.name, AdAccount.Fields.age])
  .then((account) => {
    logPassedTest(test1 + ':Pass', account);
  })
  .catch((error) => {
  });
```

Requesting an high number of fields may cause the response time to visibly increase, you should always request only the fields you really need.

#### Create Objects

```javascript
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('<AD_ACCOUNT_ID>');
account
  .createCampaign(
    [],
    {
      [Campaign.Fields.name]: 'Page likes campaign',
      [Campaign.Fields.status]: Campaign.Status.paused,
      [Campaign.Fields.objective]: Campaign.Objective.page_likes
    }
  )
  .then((campaign) => {
  })
  .catch((error) => {
  });
```

#### Update Objects

```javascript
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const Campaign = adsSdk).Campaign;
const campaignId = <CAMPAIGN_ID>;
new Campaign(campaignId, {
  [Campaign.Fields.id]: campaign.id,
  [Campaign.Fields.name]: 'Campaign - Updated' })
  .update();
```

#### Delete Objects

```javascript
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const Campaign = adsSdk.Campaign;
const campaignId = <CAMPAIGN_ID>;
new Campaign(campaignId);
.delete();
```

### Pagination

Since the release of the Facebook Graph API 2.0, pagination is handled through [cursors](https://developers.facebook.com/docs/graph-api/using-graph-api/v2.2#paging).
Here cursors are defined as in `src\cursor.js`. When fetching nodes related to another (Edges) or a collection in the graph, the results are paginated in a `Cursor` class.
Here the `Cursor` is a superpowered `Array` (with all it's native helpful operations) with `next` and `previous` methods that when resolved fills itself with the new set of objects.

```javascript
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('<AD_ACCOUNT_ID>');
account.getCampaigns([Campaign.Fields.name], { limit: 2 })
.then((campaigns) => {
  if (campaigns.length >= 2 && campaigns.hasNext()) {
    return campaigns.next();
  } else {
    Promise.reject(
      new Error('campaigns length < 2 or not enough campaigns')
    );
  }
})
.then((campaigns) => {
  if (campaigns.hasNext() && campaigns.hasPrevious()) {
    return campaigns.previous();
  } else {
    Promise.reject(
      new Error('previous or next is not true')
    );
  }
  return campaigns.previous();
})
.catch((error) => {
});
```

#### Debugging

A `FacebookAdsApi` object offers a debugging mode that will log all requests. To enable it just call `api.setDebug(true)` on an API instance.

```javascript
const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = '<VALID_ACCESS_TOKEN>';
const api = adsSdk.FacebookAdsApi.init(accessToken);
api.setDebug(true);
```

### Style

This package uses type safe javascript. [Flow](https://flow.org/). Inconsistent code will break builds.

## Join the Facebook Marketing Developer community
* Website: https://www.facebook.com/groups/pmdcommunity
* Facebook page: https://www.facebook.com/marketingdevelopers/
See the CONTRIBUTING file for how to help out.

## License
Facebook Ads API SDK for NodeJS is licensed under the LICENSE file in the root directory of this source tree.
```
