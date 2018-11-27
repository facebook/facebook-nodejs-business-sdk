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
 * LiveWithGuestSession
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveWithGuestSession extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      conference_name: 'conference_name',
      id: 'id',
      participant_call_states: 'participant_call_states',
      server_sdp: 'server_sdp'
    });
  }

  createHangup (fields, params): LiveWithGuestSession {
    return this.createEdge(
      '/hangup',
      fields,
      params,
      LiveWithGuestSession
    );
  }

  createJoin (fields, params): LiveWithGuestSession {
    return this.createEdge(
      '/join',
      fields,
      params,
      LiveWithGuestSession
    );
  }

  createRingUser (fields, params): LiveWithGuestSession {
    return this.createEdge(
      '/ring_users',
      fields,
      params,
      LiveWithGuestSession
    );
  }

  get (fields, params): LiveWithGuestSession {
    return this.read(
      fields,
      params
    );
  }
}
