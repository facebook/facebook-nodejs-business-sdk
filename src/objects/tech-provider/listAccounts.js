/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import { ThirdPartyAccountManager } from './account';
const techProvBusinessId='<tech-provider-business-id>';
const systemToken='<system-token>'
const appId='<tech-provider-app-id>';

async () => {
    const accountManager = new ThirdPartyAccountManager(appId, techProvBusinessId, systemToken);
    const accounts = await accountManager.listAccounts()

    console.log("List call succeeded");
    console.log(accounts);
}
