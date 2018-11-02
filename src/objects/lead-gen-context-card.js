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
 * LeadGenContextCard
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenContextCard extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      button_text: 'button_text',
      canvas: 'canvas',
      canvas_jump_to_form_button_text: 'canvas_jump_to_form_button_text',
      content: 'content',
      cover_photo: 'cover_photo',
      format: 'format',
      id: 'id',
      style: 'style',
      title: 'title'
    });
  }

  get (fields, params): LeadGenContextCard {
    return this.read(
      fields,
      params
    );
  }
}
