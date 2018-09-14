/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * VideoReferenceMatch
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoReferenceMatch extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      conflicting_countries: 'conflicting_countries',
      creation_time: 'creation_time',
      dispute_form_data: 'dispute_form_data',
      expiration_time: 'expiration_time',
      id: 'id',
      is_disputable: 'is_disputable',
      is_possible_conflict: 'is_possible_conflict',
      is_viewed: 'is_viewed',
      match_state: 'match_state',
      matched_reference_asset: 'matched_reference_asset',
      matched_reference_copyright: 'matched_reference_copyright',
      matched_reference_owner_id: 'matched_reference_owner_id',
      matched_reference_owner_name: 'matched_reference_owner_name',
      modification_history: 'modification_history',
      reference_asset: 'reference_asset',
      reference_copyright: 'reference_copyright',
      reference_owner_id: 'reference_owner_id',
      reference_owner_name: 'reference_owner_name',
      rejection_form_data: 'rejection_form_data'
    });
  }

  static get StatusGroup (): Object {
    return Object.freeze({
      conflict: 'CONFLICT',
      possible_conflict: 'POSSIBLE_CONFLICT',
      resolution: 'RESOLUTION'
    });
  }

  get (fields, params): VideoReferenceMatch {
    return this.read(
      fields,
      params
    );
  }
}
