/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { isContextOverflow } = require('../jiti/utils-overflow.e4c6ad80.cjs');

class APIRequest {
  constructor(node_id, method, endpoint) {
    this.node_id = node_id;
    this.method = method;
    this.endpoint = endpoint;
    this.fields = [];
    this.params = {};
  }

  addField(field) {
    this.fields.push(field);
    return this;
  }

  execute() {
    // Simulation of execute logic for the purpose of this implementation
    return new Promise((resolve, reject) => {
      try {
        // Actual network request logic would go here
        const response = { status: 200, body: {} };
        
        // Simulate potential error response
        if (response.status >= 400) {
          const message = {
            stopReason: 'error',
            errorMessage: `Status ${response.status}: ${JSON.stringify(response.body)}`
          };

          if (isContextOverflow(message)) {
            return reject(new Error('Context overflow detected.'));
          }
          return reject(new Error('API request failed.'));
        }
        
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = APIRequest;