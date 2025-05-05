/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import { ThirdPartyAccountManager } from './account';
const techProvBusinessId='<tech-provider-business-id>'
const systemToken='<system-token>'
const accountId = process.argv[2]; // third party account id
const appId='<meta-app-id>'

if (accountId == null) {
    console.log("childBusinessId is required");
    process.exit(1);
}

async () => {
    const accountManager = new ThirdPartyAccountManager(appId, techProvBusinessId, systemToken);
    let account = await accountManager.getAccount(accountId);
    let page = await account.getFacebookPageId();

    console.log('Successfully fetched account:', account);
    console.log('Account has connected Facebook Page with ID:', page);
}
