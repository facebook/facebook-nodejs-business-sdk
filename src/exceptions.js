/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
function FacebookError (error) {
  this.name = 'FacebookError';
  this.message = error.message;
  this.stack = (new Error()).stack;
}
FacebookError.prototype = Object.create(Error.prototype);
FacebookError.prototype.constructor = FacebookError;

/**
 * Raised when an api request fails.
 */
export class FacebookRequestError extends FacebookError {
  /**
   * @param  {[Object}  response
   * @param  {String}   method
   * @param  {String}   url
   * @param  {Object}   data
   */
  constructor (response, method, url, data) {
    let error = response.body.error;
    let message = error.error_user_msg
      ? `${error.error_user_title}: ${error.error_user_msg}`
      : error.message;
    super(message);
    this.name = 'FacebookRequestError';
    this.message = message;
    this.status = response.status;
    this.response = response.body;
    this.method = method;
    this.url = url;
    if (data) this.data = data;
  }
}
