/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {UserData} = require('facebook-nodejs-business-sdk');
const {ParamBuilder} = require('capi-param-builder-nodejs');

/**
 * Tests for the PIIUtils integration in UserData.normalize().
 * UserData no longer hashes via ServerSideUtils.normalizeAndHash with a
 * short field code ('em', 'ph', ...); it routes every multi-value PII
 * list through ParamBuilder.getNormalizedAndHashedPII with a PII data
 * type identifier ('email', 'phone', ...).
 *
 * The package returns hashes shaped as `<sha256-hex>.<appendix>` where the
 * appendix is the version tag baked into the package; an empty appendix is
 * also a valid output. So the output shape we assert is
 *   ^[a-f0-9]{64}(\.[A-Za-z0-9_-]+)?$
 */

const PII_DATA_TYPE = Object.freeze({
    EMAIL: 'email',
    PHONE: 'phone',
    GENDER: 'gender',
    DATE_OF_BIRTH: 'date_of_birth',
    LAST_NAME: 'last_name',
    FIRST_NAME: 'first_name',
    CITY: 'city',
    STATE: 'state',
    ZIP_CODE: 'zip_code',
    COUNTRY: 'country',
    EXTERNAL_ID: 'external_id',
});

const HASH_WITH_OPTIONAL_APPENDIX = /^[a-f0-9]{64}(\.[A-Za-z0-9_-]+)?$/;
const _piiBuilder = new ParamBuilder();
function piiHash(value, dataType) {
    return _piiBuilder.getNormalizedAndHashedPII(value, dataType);
}

describe('UserData.normalize() routes PII through ParamBuilder.getNormalizedAndHashedPII', function() {

    test('email is normalized + hashed via PIIUtils, case-insensitive', function() {
        const a = (new UserData()).setEmail('Shopper@Example.com').normalize();
        expect(a.em).toHaveLength(1);
        expect(a.em[0]).toMatch(HASH_WITH_OPTIONAL_APPENDIX);

        // PIIUtils lowercases before hashing, so casing must not affect the hash.
        const b = (new UserData()).setEmail('shopper@example.com').normalize();
        expect(b.em[0]).toBe(a.em[0]);
    });

    test('phone is normalized + hashed via PIIUtils, formatting-insensitive', function() {
        // PIIUtils strips non-digits from phones.
        const a = (new UserData()).setPhone('+1 (415) 555-0100').normalize();
        expect(a.ph).toHaveLength(1);
        expect(a.ph[0]).toMatch(HASH_WITH_OPTIONAL_APPENDIX);

        const b = (new UserData()).setPhone('14155550100').normalize();
        expect(b.ph[0]).toBe(a.ph[0]);
    });

    test('city is normalized + hashed', function() {
        const payload = (new UserData()).setCity(' San Francisco ').normalize();
        expect(payload.ct[0]).toMatch(HASH_WITH_OPTIONAL_APPENDIX);
    });

    test('country is normalized + hashed', function() {
        const payload = (new UserData()).setCountry('US').normalize();
        expect(payload.country[0]).toMatch(HASH_WITH_OPTIONAL_APPENDIX);
    });

    test('zip is normalized + hashed (ZIP+4 trims to 5-digit prefix)', function() {
        const a = (new UserData()).setZip('94105-1234').normalize();
        expect(a.zp).toHaveLength(1);
        expect(a.zp[0]).toMatch(HASH_WITH_OPTIONAL_APPENDIX);
        const b = (new UserData()).setZip('94105').normalize();
        expect(b.zp[0]).toBe(a.zp[0]);
    });

    test('external_id is now routed through PIIUtils (behavior change)', function() {
        // Pre-stack: external_id was deduped raw (NOT hashed).
        // Post-stack: external_id is hashed via PIIUtils, so the output is
        // hex-with-optional-appendix instead of the raw input string.
        const payload = (new UserData()).setExternalId('cust_1234').normalize();
        expect(payload.external_id).toHaveLength(1);
        expect(payload.external_id[0]).toMatch(HASH_WITH_OPTIONAL_APPENDIX);
        expect(payload.external_id[0]).not.toBe('cust_1234');
    });

    test('invalid email is rejected by PIIUtils (drops to empty array)', function() {
        // PHP strips the key entirely; nodejs's normalize() preserves the
        // key with an empty array because the truthy `if (this.emails)`
        // guard fires before the helper sees the rejection. Both convey
        // "no usable values".
        const payload = (new UserData()).setEmail('not-an-email').normalize();
        expect(payload.em).toEqual([]);
    });

    test('empty multi-value list produces an empty array (no entries)', function() {
        const payload = (new UserData())
            .setEmails([])
            .setPhones([])
            .setExternalIds([])
            .normalize();
        expect(payload.em).toEqual([]);
        expect(payload.ph).toEqual([]);
        expect(payload.external_id).toEqual([]);
    });

    test('multi-value dedup happens after PIIUtils normalization', function() {
        // Three case-variants of the same email collapse into one hash.
        const payload = (new UserData())
            .setEmails(['A@b.com', 'a@b.com', 'A@B.COM'])
            .normalize();
        expect(payload.em).toHaveLength(1);
    });

    test('different inputs hash to distinct values', function() {
        const payload = (new UserData())
            .setEmails(['a@b.com', 'c@d.com'])
            .normalize();
        expect(payload.em).toHaveLength(2);
        expect(payload.em[0]).not.toBe(payload.em[1]);
    });

    test('all-rejected list omits the field entirely', function() {
        // Each email is invalid → PIIUtils returns null → the deduped set
        // is empty → field is dropped from normalize() output.
        const payload = (new UserData())
            .setEmails(['', 'not-an-email', 'still-bad'])
            .normalize();
        expect(payload.em).toEqual([]);
    });

    test('UserData output equals direct PIIUtils invocation (no extra transform)', function() {
        const email = 'check@example.com';
        const expected = piiHash(email, PII_DATA_TYPE.EMAIL);
        const actual = (new UserData()).setEmail(email).normalize().em[0];
        expect(actual).toBe(expected);
    });

    test('all eleven PII fields produce hash-shaped output', function() {
        const payload = (new UserData())
            .setEmail('a@b.com')
            .setPhone('14155550100')
            .setGender('m')
            .setDateOfBirth('19900101')
            .setLastName('smith')
            .setFirstName('joe')
            .setCity('seattle')
            .setState('wa')
            .setZip('98101')
            .setCountry('us')
            .setExternalId('id-1')
            .normalize();
        for (const key of ['em', 'ph', 'ge', 'db', 'ln', 'fn', 'ct', 'st', 'zp', 'country', 'external_id']) {
            expect(payload[key]).toHaveLength(1);
            expect(payload[key][0]).toMatch(HASH_WITH_OPTIONAL_APPENDIX);
        }
    });
});
