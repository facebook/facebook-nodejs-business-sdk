'use strict';
const {UserData} = require('facebook-nodejs-business-sdk');
const {describe} = require('mocha');
const sha256 = require('js-sha256');
const assert = require('assert');

describe('ServerSideAPI', function() {
    describe('UserData', function() {
        it('F5 Name field should normalize and hash first 5 characters', function() {

            // Arrange
            const testNameField = 'smith';
            const userData = (new UserData()).setF5First(testNameField);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            assert(normalizedUserData.f5first === sha256(testNameField));
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
            assert(expected === actual);
        });

        it('First Name field should normalize and hash only the first character', function() {

            // Arrange
            const fi = 'john smith';
            const userData = (new UserData()).setFi(fi);

            // Act
            const normalizedUserData = userData.normalize();

            // Assert
            const actual = normalizedUserData.fi;
            const expected = sha256(fi.charAt(0));
            assert(expected === actual);
        });
    })
});
