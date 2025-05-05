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
const childBusinessId = process.argv[2];
const appId='<tech-provider-app-id>';

if (childBusinessId == null) {
  console.log("childBusinessId is required");
  process.exit(1);
}

async () => {
  const accountManager = new ThirdPartyAccountManager(appId, techProvBusinessId, systemToken);
  await accountManager.deleteAccount({
    accountId: childBusinessId,
  });

  console.log('Successfully deleted account:', childBusinessId);
}
