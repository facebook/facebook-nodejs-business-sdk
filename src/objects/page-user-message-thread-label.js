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

/**
 * PageUserMessageThreadLabel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUserMessageThreadLabel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name',
    });
  }


  deleteLabel (params): AbstractObject {
    return super.deleteEdge(
      '/label',
      params
    );
  }

  createLabel (fields, params): PageUserMessageThreadLabel {
    return this.createEdge(
      '/label',
      fields,
      params,
      PageUserMessageThreadLabel
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): PageUserMessageThreadLabel {
    return this.read(
      fields,
      params
    );
  }
}
