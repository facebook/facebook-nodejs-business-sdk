/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {UserData} = require('facebook-nodejs-business-sdk');
const {describe} = require('mocha');
const sha256 = require('js-sha256');
const { expect } = require('chai');

describe('UserData', function() {
    describe('normalize', function() {
        it('F5 Name field should normalize and hash first 5 characters', function() {

            // Arrange
            const testNameField = 'smith';
            const userData = (new UserData()).setF5First(testNameField);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            expect(normalizedUserData.f5first).to.equal(sha256(testNameField));
        });

        it('Multiple value fields should dedup, normalize, and hash.', function() {

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
            validateValues('emails', emails, normalizedUserData.em);
            validateValues('phones', phones, normalizedUserData.ph);
            validateValues('genders', genders, normalizedUserData.ge);
            validateValues('datesOfBirth', datesOfBirth, normalizedUserData.db);
            validateValues('lastNames', lastNames, normalizedUserData.ln);
            validateValues('firstNames', firstNames, normalizedUserData.fn);
            validateValues('cities', cities, normalizedUserData.ct);
            validateValues('states', states, normalizedUserData.st);
            validateValues('zips', zips, normalizedUserData.zp);
            validateValues('countries', countries, normalizedUserData.country);
            expect(normalizedUserData.external_id).to.eql(externalIds.slice(0, 2));
        });

        it('F5 Name field, for a long name, should normalize and hash only first 5 characters', function() {

            // Arrange
            const testNameField = 'smithsonian';
            const userData = (new UserData()).setF5First(testNameField);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            const actual = normalizedUserData.f5first;
            const expected = sha256(testNameField.substring(0,5));
            expect(actual).to.equal(expected);
        });

        it('First Initial field should normalize and hash only the first character', function() {

            // Arrange
            const fi = 'john smith';
            const userData = (new UserData()).setFi(fi);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            const actual = normalizedUserData.fi;
            const expected = sha256(fi.charAt(0));
            expect(actual).to.equal(expected);
        });

        it('dobd gets normalized', function() {
            const cases = [
                ['1', '01'],
                ['09', '09'],
                ['31', '31'],
            ];

            cases.forEach(pair => {
                const value = pair[0];
                const expected = pair[1];
                const userData = (new UserData()).setDobd(value);
                expect(userData.normalize().dobd).to.equal(sha256(expected));
            });
        });

        it('throws an error when dobd is not valid', function() {
            const cases = ['0', '32', '-1', '0a'];

            cases.forEach(value => {
                const userData = (new UserData()).setDobd(value);
                expect(() => userData.normalize()).to.throw(Error);
            });
        });

        it('dobm gets normalized', function() {
            const cases = [
                ['1', '01'],
                ['09', '09'],
                ['12', '12'],
            ];

            cases.forEach(pair => {
                const value = pair[0];
                const expected = pair[1];
                const userData = (new UserData()).setDobm(value);
                expect(userData.normalize().dobm).to.equal(sha256(expected));
            });
        });

        it('throws an error when dobm is not valid', function() {
            const cases = ['0', '13', '-1', '0a'];

            cases.forEach(value => {
                const userData = (new UserData()).setDobm(value);
                expect(() => userData.normalize()).to.throw(Error);
            });
        });

        it('doby gets normalized', function() {
            const cases = [
                ['1900', '1900'],
                ['0000', '0000'],
                ['9999', '9999'],
            ];

            cases.forEach(pair => {
                const value = pair[0];
                const expected = pair[1];
                const userData = (new UserData()).setDoby(value);
                expect(userData.normalize().doby).to.equal(sha256(expected));
            });
        });

        it('throws an error when doby is not valid', function() {
            const cases = ['0', '12345', '-1', '199a'];

            cases.forEach(value => {
                const userData = (new UserData()).setDoby(value);
                expect(() => userData.normalize()).to.throw(Error);
            });
        });
    });

    describe('Multiple values of customer information parameters', function() {
        it('Getters and setters should work.', function() {
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
            expect(userData.emails).to.equal(emails);
            expect(userData.phones).to.equal(phones);
            expect(userData.genders).to.equal(genders);
            expect(userData.dates_of_birth).to.equal(datesOfBirth);
            expect(userData.last_names).to.equal(lastNames);
            expect(userData.first_names).to.equal(firstNames);
            expect(userData.cities).to.equal(cities);
            expect(userData.states).to.equal(states);
            expect(userData.zips).to.equal(zips);
            expect(userData.countries).to.equal(countries);
            expect(userData.external_ids).to.equal(externalIds);
        });

        it('Singular constructor should work.', function () {
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
            expect(userData.email).to.equal(email);
            expect(userData.phone).to.equal(phone);
            expect(userData.gender).to.equal(gender);
            expect(userData.date_of_birth).to.equal(dateOfBirth);
            expect(userData.last_name).to.equal(lastName);
            expect(userData.first_name).to.equal(firstName);
            expect(userData.city).to.equal(city);
            expect(userData.state).to.equal(state);
            expect(userData.zip).to.equal(zip);
            expect(userData.country).to.equal(country);
            expect(userData.external_id).to.equal(externalId);
        });

        it('Singular getters/setters should work.', function () {
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
            expect(userData.email).to.equal(email);
            expect(userData.phone).to.equal(phone);
            expect(userData.gender).to.equal(gender);
            expect(userData.date_of_birth).to.equal(dateOfBirth);
            expect(userData.last_name).to.equal(lastName);
            expect(userData.first_name).to.equal(firstName);
            expect(userData.city).to.equal(city);
            expect(userData.state).to.equal(state);
            expect(userData.zip).to.equal(zip);
            expect(userData.country).to.equal(country);
            expect(userData.external_id).to.equal(externalId);
        });
    });
});

/**
 * Helper function to assert on each value of multi-value fields
 */
function validateValues(fieldName, rawValues, actualNormalizedValues) {
    var expectedValues = new Set();
    for (let i in rawValues) {
        expectedValues.add(sha256(rawValues[i]));
    }
    expect(actualNormalizedValues, fieldName.concat(' values do not match.')).to.eql(Array.from(expectedValues));
}

