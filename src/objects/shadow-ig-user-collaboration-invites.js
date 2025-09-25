 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ShadowIGUserCollaborationInvites
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUserCollaborationInvites extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      caption: 'caption',
      media_id: 'media_id',
      media_owner_username: 'media_owner_username',
      media_url: 'media_url',
    });
  }

}
