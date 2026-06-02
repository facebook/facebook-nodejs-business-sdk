/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {UserData} = require('facebook-nodejs-business-sdk');
const sha256 = require('js-sha256');
const {ParamBuilder, PII_DATA_TYPE} = require('capi-param-builder-nodejs');

const _piiBuilder = new ParamBuilder();
function piiHash(value, dataType) {
    return _piiBuilder.getNormalizedAndHashedPII(value, dataType);
}
function piiHashList(arr, dataType) {
    const out = new Set();
    for (const v of arr) {
        const h = piiHash(v, dataType);
        if (h != null) {
            out.add(h);
        }
    }
    return Array.from(out);
}


describe('UserData', function() {
    describe('normalize', function() {
        test('F5 Name field should normalize and hash first 5 characters', function() {

            // Arrange
            const testNameField = 'smith';
            const userData = (new UserData()).setF5First(testNameField);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            expect(normalizedUserData.f5first).toBe(sha256(testNameField));
        });

        test('normalize returns only the fields that were set', function() {
            const phone = '12223334444';
            const userData = (new UserData()).setPhone(phone);
            const normalizedUserData = userData.normalize();

            expect(normalizedUserData).toEqual({
                'ph': [piiHash(phone, PII_DATA_TYPE.PHONE)],
            });
        });

        test('Multiple value fields should dedup, normalize, and hash.', function() {

            // Arrange
            const emails = ['joe@eg.com', 'mary@eg.com', 'joe@eg.com'];
            const phones = ['14251234567', '2062072009', '2062072009'];
            const genders = ['m', 'f', 'm'];
            const datesOfBirth = ['123456', '01/01/2010', '01/01/2010'];
            const lastNames = ['smith', 'brown', 'brown'];
            const firstNames = ['joe', 'mary', 'mary'];
            const cities = ['seattle', 'sanfrancisco', 'sanfrancisco'];
            const states = ['wa', 'ca', 'ca'];
            const zips = ['98123', '98000', '98000'];
            const countries = ['us', 'ca', 'ca'];
            const externalIds = ['123', '456', '456'];

            const userData = (new UserData()).setEmails(emails)
                .setPhones(phones)
                .setDatesOfBirth(datesOfBirth)
                .setGenders(genders)
                .setLastNames(lastNames)
                .setFirstNames(firstNames)
                .setCities(cities)
                .setStates(states)
                .setZips(zips)
                .setCountries(countries)
                .setExternalIds(externalIds);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            expect(normalizedUserData.em).toEqual(piiHashList(emails, PII_DATA_TYPE.EMAIL));
            expect(normalizedUserData.ph).toEqual(piiHashList(phones, PII_DATA_TYPE.PHONE));
            expect(normalizedUserData.ge).toEqual(piiHashList(genders, PII_DATA_TYPE.GENDER));
            expect(normalizedUserData.db).toEqual(piiHashList(datesOfBirth, PII_DATA_TYPE.DATE_OF_BIRTH));
            expect(normalizedUserData.ln).toEqual(piiHashList(lastNames, PII_DATA_TYPE.LAST_NAME));
            expect(normalizedUserData.fn).toEqual(piiHashList(firstNames, PII_DATA_TYPE.FIRST_NAME));
            expect(normalizedUserData.ct).toEqual(piiHashList(cities, PII_DATA_TYPE.CITY));
            expect(normalizedUserData.st).toEqual(piiHashList(states, PII_DATA_TYPE.STATE));
            expect(normalizedUserData.zp).toEqual(piiHashList(zips, PII_DATA_TYPE.ZIP_CODE));
            expect(normalizedUserData.country).toEqual(piiHashList(countries, PII_DATA_TYPE.COUNTRY));
            expect(normalizedUserData.external_id).toEqual(piiHashList(externalIds, PII_DATA_TYPE.EXTERNAL_ID));
        });

        test('F5 Name field, for a long name, should normalize and hash only first 5 characters', function() {

            // Arrange
            const testNameField = 'smithsonian';
            const userData = (new UserData()).setF5First(testNameField);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            const actual = normalizedUserData.f5first;
            const expected = sha256(testNameField.substring(0,5));
            expect(actual).toBe(expected);
        });

        test('First Initial field should normalize and hash only the first character', function() {

            // Arrange
            const fi = 'john smith';
            const userData = (new UserData()).setFi(fi);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            const actual = normalizedUserData.fi;
            const expected = sha256(fi.charAt(0));
            expect(actual).toBe(expected);
        });

        test('dobd gets normalized', function() {
            const cases = [
                ['1', '01'],
                ['09', '09'],
                ['31', '31'],
            ];

            cases.forEach(pair => {
                const value = pair[0];
                const expected = pair[1];
                const userData = (new UserData()).setDobd(value);
                expect(userData.normalize().dobd).toBe(sha256(expected));
            });
        });

        test('throws an error when dobd is not valid', function() {
            const cases = ['0', '32', '-1', '0a'];

            cases.forEach(value => {
                const userData = (new UserData()).setDobd(value);
                expect(() => userData.normalize()).toThrow(Error);
            });
        });

        test('dobm gets normalized', function() {
            const cases = [
                ['1', '01'],
                ['09', '09'],
                ['12', '12'],
            ];

            cases.forEach(pair => {
                const value = pair[0];
                const expected = pair[1];
                const userData = (new UserData()).setDobm(value);
                expect(userData.normalize().dobm).toBe(sha256(expected));
            });
        });

        test('throws an error when dobm is not valid', function() {
            const cases = ['0', '13', '-1', '0a'];

            cases.forEach(value => {
                const userData = (new UserData()).setDobm(value);
                expect(() => userData.normalize()).toThrow(Error);
            });
        });

        test('doby gets normalized', function() {
            const cases = [
                ['1900', '1900'],
                ['0000', '0000'],
                ['9999', '9999'],
            ];

            cases.forEach(pair => {
                const value = pair[0];
                const expected = pair[1];
                const userData = (new UserData()).setDoby(value);
                expect(userData.normalize().doby).toBe(sha256(expected));
            });
        });

        test('throws an error when doby is not valid', function() {
            const cases = ['0', '12345', '-1', '199a'];

            cases.forEach(value => {
                const userData = (new UserData()).setDoby(value);
                expect(() => userData.normalize()).toThrow(Error);
            });
        });
    });

    describe('Multiple values of customer information parameters', function() {
        test('Getters and setters should work.', function() {
            // Arrange
            const emails = ['joe@eg.com', 'smith@test.com'];
            const phones = ['14251234567', '2062072009'];
            const genders = ['m', 'female'];
            const datesOfBirth = ['123456', '01/01/2010'];
            const lastNames = ['smith', 'brown'];
            const firstNames = ['joe', 'mary'];
            const cities = ['seattle', 'san francisco'];
            const states = ['WA', 'CA'];
            const zips = ['98000', '1234567'];
            const countries = ['USA', 'Canada'];
            const externalIds = ['123', '456'];

            // Act
            const userData = (new UserData()).setEmails(emails)
                .setPhones(phones)
                .setDatesOfBirth(datesOfBirth)
                .setGenders(genders)
                .setLastNames(lastNames)
                .setFirstNames(firstNames)
                .setCities(cities)
                .setStates(states)
                .setZips(zips)
                .setCountries(countries)
                .setExternalIds(externalIds);

            // Assert
            expect(userData.emails).toBe(emails);
            expect(userData.phones).toBe(phones);
            expect(userData.genders).toBe(genders);
            expect(userData.dates_of_birth).toBe(datesOfBirth);
            expect(userData.last_names).toBe(lastNames);
            expect(userData.first_names).toBe(firstNames);
            expect(userData.cities).toBe(cities);
            expect(userData.states).toBe(states);
            expect(userData.zips).toBe(zips);
            expect(userData.countries).toBe(countries);
            expect(userData.external_ids).toBe(externalIds);
        });

        test('Singular constructor should work.', function () {
            // Arrange
            const email = 'joe@eg.com';
            const phone = '14251234567';
            const gender = 'm';
            const dateOfBirth = '123456';
            const lastName = 'smith';
            const firstName = 'joe';
            const city = 'seattle';
            const state = 'WA';
            const zip = '98000';
            const country = 'USA';
            const externalId = '123';

            // Act
            const userData = (new UserData(
                email, phone, gender, firstName, lastName, dateOfBirth, city, state, zip, country, externalId
            ));

            // Assert
            expect(userData.email).toBe(email);
            expect(userData.phone).toBe(phone);
            expect(userData.gender).toBe(gender);
            expect(userData.date_of_birth).toBe(dateOfBirth);
            expect(userData.last_name).toBe(lastName);
            expect(userData.first_name).toBe(firstName);
            expect(userData.city).toBe(city);
            expect(userData.state).toBe(state);
            expect(userData.zip).toBe(zip);
            expect(userData.country).toBe(country);
            expect(userData.external_id).toBe(externalId);
        });

        test('Singular getters/setters should work.', function () {
            // Arrange
            const email = 'joe@eg.com';
            const phone = '14251234567';
            const gender = 'm';
            const dateOfBirth = '123456';
            const lastName = 'smith';
            const firstName = 'joe';
            const city = 'seattle';
            const state = 'WA';
            const zip = '98000';
            const country = 'USA';
            const externalId = '123';

            // Act
            const userData = (new UserData()).setEmail(email)
                .setPhone(phone)
                .setDateOfBirth(dateOfBirth)
                .setGender(gender)
                .setLastName(lastName)
                .setFirstName(firstName)
                .setCity(city)
                .setState(state)
                .setZip(zip)
                .setCountry(country)
                .setExternalId(externalId);

            // Assert
            expect(userData.email).toBe(email);
            expect(userData.phone).toBe(phone);
            expect(userData.gender).toBe(gender);
            expect(userData.date_of_birth).toBe(dateOfBirth);
            expect(userData.last_name).toBe(lastName);
            expect(userData.first_name).toBe(firstName);
            expect(userData.city).toBe(city);
            expect(userData.state).toBe(state);
            expect(userData.zip).toBe(zip);
            expect(userData.country).toBe(country);
            expect(userData.external_id).toBe(externalId);
        });
    });
});

