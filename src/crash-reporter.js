/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */

import FacebookAdsApi from './api';

export default class CrashReporter {

    static _instance: CrashReporter;
    _active: bool;

    constructor() {
      this._active = true;
    }

    static enable() {
      if (this._instance == undefined || this._instance == null) {
        this._instance = new this();
        process
          .on('uncaughtException', err => {
            if (this._instance._active) {
              CrashReporter._processUncaughtException(err);
            } else {
              console.log("disable uncaughtException");
              throw err;
            }
          });
      }
    }

    static _processUncaughtException(err: Error) {
      FacebookAdsApi.getDefaultApi().getAppID()
        .then((data) => {
          if (data["data"] !== undefined && data['data']['app_id'] !== undefined) {
            let appID = data['data']['app_id'];
            // TODO send report
            console.log("active uncaughtException : " + appID);
          }
        })
        .catch((error) => {
          console.log("Not be able to find appID, fail to send report to server.");
        })
        .then(() => {
          throw err;
        });
    }

    static disable() {
      if (this._instance == undefined || this._instance == null) {
        return;
      }
      this._instance._active = false;
    }
}
