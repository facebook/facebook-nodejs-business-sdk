/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import VaultImage from './vault-image';

/**
 * VaultDevice
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VaultDevice extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      completed_nux: 'completed_nux',
      enabled: 'enabled',
      id: 'id',
      identifier_value: 'identifier_value',
      last_sync_time: 'last_sync_time',
      name: 'name',
      owner: 'owner',
      sync_mode: 'sync_mode',
      sync_older_photos: 'sync_older_photos'
    });
  }

  getVaultImages (fields, params, fetchFirstPage = true): VaultImage {
    return this.getEdge(
      VaultImage,
      fields,
      params,
      fetchFirstPage,
      '/vaultimages'
    );
  }

  getVaultLocalImages (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/vaultlocalimages'
    );
  }

  get (fields, params): VaultDevice {
    return this.read(
      fields,
      params
    );
  }
}
