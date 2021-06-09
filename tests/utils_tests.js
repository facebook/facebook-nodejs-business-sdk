/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { ServerSideUtils } = require('facebook-nodejs-business-sdk');

const { describe } = require('mocha');
const { expect } = require('chai');
const sha256 = require('js-sha256');

describe('ServerSideUtils', () => {
    describe('normalizeAndHash', () => {
        it('normalizes and hashes the input', () => {
            const value = '  Eg  ';
            const expected = sha256('eg');
            const actual = ServerSideUtils.normalizeAndHash(value, 'ln');

            expect(actual).to.equal(expected);
        });

        it('does not double hash sha256', () => {
            const value = sha256('11234567890');
            const actual = ServerSideUtils.normalizeAndHash(value, 'ph');

            expect(actual).to.equal(value);
        });

        it('does not double hash md5', () => {
            const value = '2a6a84e9e44441afbd75cc19ce28be37';
            const actual = ServerSideUtils.normalizeAndHash(value, 'ln');

            expect(actual).to.equal(value);
        });

        it('validates the input', () => {
            const normalizeAndHash = () => {
                ServerSideUtils.normalizeAndHash('1234', 'em');
            }
            expect(normalizeAndHash).to.throw();
        });
    });

    describe('toSHA256', () => {
        it('hashes the value', () => {
            const value = 'test123';
            const expected = sha256(value);

            expect(ServerSideUtils.toSHA256(value)).to.equal(expected);
        });
    });
});
