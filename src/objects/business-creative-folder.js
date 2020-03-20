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
import Cursor from './../cursor';
import Business from './business';
import AssignedUser from './assigned-user';

/**
 * BusinessCreativeFolder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessCreativeFolder extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      creation_time: 'creation_time',
      creative_insight_permissions: 'creative_insight_permissions',
      description: 'description',
      id: 'id',
      media_library_url: 'media_library_url',
      name: 'name',
      parent_folder: 'parent_folder',
    });
  }

  static get PermittedTasks (): Object {
    return Object.freeze({
      create_content: 'CREATE_CONTENT',
      manage_content: 'MANAGE_CONTENT',
      manage_permissions: 'MANAGE_PERMISSIONS',
      view_content: 'VIEW_CONTENT',
      view_insights: 'VIEW_INSIGHTS',
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      create_content: 'CREATE_CONTENT',
      manage_content: 'MANAGE_CONTENT',
      manage_permissions: 'MANAGE_PERMISSIONS',
      view_content: 'VIEW_CONTENT',
      view_insights: 'VIEW_INSIGHTS',
    });
  }

  deleteAgencies (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createAgency (fields: Array<string>, params: Object = {}): Promise<BusinessCreativeFolder> {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      BusinessCreativeFolder
    );
  }

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields: Array<string>, params: Object = {}): Promise<BusinessCreativeFolder> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      BusinessCreativeFolder
    );
  }

  getSubFolders (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessCreativeFolder,
      fields,
      params,
      fetchFirstPage,
      '/subfolders'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessCreativeFolder {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): BusinessCreativeFolder {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
