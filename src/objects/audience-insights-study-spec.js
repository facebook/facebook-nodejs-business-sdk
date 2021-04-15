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
 * AudienceInsightsStudySpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudienceInsightsStudySpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      audience_definition: 'audience_definition',
      author_info: 'author_info',
      creation_time: 'creation_time',
      end_time: 'end_time',
      excluded_rules: 'excluded_rules',
      included_rules: 'included_rules',
      start_time: 'start_time',
      status: 'status',
    });
  }

}
