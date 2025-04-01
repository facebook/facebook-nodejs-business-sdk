/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import ServerSideUtils from './utils';

/**
 * UserData represents the User Data Parameters(user_data) of a Conversions API Event Request.
 * 'user_data' is a set of identifiers Facebook can use for targeted attribution. See Custom Audiences from CRM Data for details on how to normalize and hash the data you send.
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters}
 */

export default class UserData {

	_emails: string[];
	_phones: string[];
	_genders: string[];
	_first_names: string[];
	_last_names: string[];
	_dates_of_birth: string[];
	_cities: string[];
	_states: string[];
	_zips: string[];
	_countries: string[];
	_external_ids: string[];
	_client_ip_address: string;
	_client_user_agent: string;
	_fbc: string;
	_fbp: string;
	_subscription_id: string;
	_fb_login_id: string;
	_lead_id: string;
	_f5first: string;
	_f5last: string;
	_fi : string;
	_dobd : string;
	_dobm : string;
	_doby : string;
	_madid: string;
	_anon_id: string;
	_app_user_id: string;
	_ctwa_clid: string;
	_page_id: string;
	_whatsapp_business_account_id: string;

	/**
	 * @param {String} email An email address, in lowercase.
	 * @param {String} phone A phone number. Include only digits with country code, area code, and number.
	 * @param {String} gender Gender, in lowercase. Either f or m.
	 * @param {String} first_name A first name in lowercase.
	 * @param {String} last_name A last name in lowercase.
	 * @param {String} date_of_birth A date of birth given as year, month, and day in YYYYMMDD format.
	 * @param {String} city A city in lower-case without spaces or punctuation.
	 * @param {String} state A two-letter state code in lowercase.
	 * @param {String} zip Postal code of the city in your country standard
	 * @param {String} country A two-letter country code in lowercase.
	 * @param {String} external_id Any unique ID from the advertiser,
	 * @param {String} client_ip_address The IP address of the browser corresponding to the event.
	 * @param {String} client_user_agent The user agent for the browser corresponding to the event.
	 * @param {String} fbp The Facebook click ID value stored in the _fbc browser cookie under your domain.
	 * @param {String} fbc The Facebook browser ID value stored in the _fbp browser cookie under your domain.
	 * @param {String} subscription_id The subscription ID for the user in this transaction.
	 * @param {String} fb_login_id The FB login ID for the user.
	 * @param {String} lead_id The Id associated with a lead generated by Facebook's Lead Ads.
	 * @param {String} dobd The date of birth day in DD format.
	 * @param {String} dobm The date of birth month in MM format.
	 * @param {String} doby The date of birth year in YYYY format.
	 * @param {String} madid
	 * @param {String} anon_id
	 * @param {String} app_user_id
	 * @param {String} ctwa_clid ID of a conversation that was started on WhatsApp
	 * @param {String} page_id ID of the page that the ad is associated with
	 * @param {String} whatsapp_business_account_id WABA ID for a conversation that was started on WhatsApp.
	 */
	constructor(email: string, phone: string, gender: string, first_name: string, last_name: string, date_of_birth: string,
		city: string, state: string, zip: string, country: string, external_id: string, client_ip_address: string, client_user_agent: string,
		fbp: string, fbc: string, subscription_id: string, fb_login_id: string, lead_id: string, dobd: string, dobm: string, doby: string,
		madid: string, anon_id: string, app_user_id: string, ctwa_clid: string, page_id: string, whatsapp_business_account_id: string) {
		if (email != null) {
			this._emails = new Array(email);
		}
		if (phone != null) {
			this._phones = new Array(phone);
		}
		if (gender != null) {
			this._genders = new Array(gender);
		}
		if (first_name != null) {
			this._first_names = new Array(first_name);
		}
		if (last_name != null) {
			this._last_names = new Array(last_name);
		}
		if (date_of_birth != null) {
			this._dates_of_birth = new Array(date_of_birth);
		}
		if (city != null) {
			this._cities = new Array(city);
		}
		if (state != null) {
			this._states = new Array(state);
		}
		if (country != null) {
			this._countries = new Array(country);
		}
		if (zip != null) {
			this._zips = new Array(zip);
		}
		if (external_id != null) {
			this._external_ids = new Array(external_id);
		}
		this._client_ip_address = client_ip_address;
		this._client_user_agent = client_user_agent;
		this._fbp = fbp;
		this._fbc = fbc;
		this._subscription_id = subscription_id;
		this._fb_login_id = fb_login_id;
		this._lead_id = lead_id;
		this._dobd = dobd;
		this._dobm = dobm;
		this._doby = doby;
		this._madid = madid;
		this._anon_id = anon_id;
		this._app_user_id = app_user_id;
		this._ctwa_clid = ctwa_clid;
		this._page_id = page_id;
		this._whatsapp_business_account_id = whatsapp_business_account_id;
	}

	static get Gender(): Object {
		return Object.freeze({
			MALE: 'm',
			FEMALE: 'f',
		});
	}


	/**
	 * Gets the email address for the user data field.
	 * An email address, in lowercase.
	 * Example: joe@eg.com
	 */
	get email() {
		return this._emails == null ? null : this._emails[0];
	}

	/**
	 * Gets email addresses for the user data field.
	 * Email addresses, in lowercase.
	 * Example: ['joe@eg.com', 'smith@test.com']
	 */
	get emails() {
		return this._emails;
	}

	/**
	 * Sets the email address for the user data field.
	 * @param email An email address, in lowercase.
	 * Example: joe@eg.com
	 */
	set email(email: string) {
		this._emails = new Array(email);
	}

	/**
	 * Sets email addresses for the user data field.
	 * @param emails Email addresses, in lowercase.
	 * Example: ['joe@eg.com', 'smith@test.com']
	 */
	set emails(emails: string[]) {
		this._emails = emails;
	}

	/**
	 * Sets the email address for the user data field.
	 * @param {String} email An email address, in lowercase.
	 * Example: joe@eg.com
	 */
	setEmail(email: string) : UserData {
		this._emails = new Array(email);
		return this;
	}

	/**
	 * Sets email addresses for the user data field.
	 * @param emails Email addresses, in lowercase.
	 * Example: ['joe@eg.com', 'smith@test.com']
	 */
	setEmails(emails: string[]) : UserData {
		this._emails = emails;
		return this;
	}

	/**
	 * Gets the phone number for the user data.
	 * A phone number. Include only digits with country code, area code, and number.
	 * Example: 16505551212
	 */
	get phone() {
		return this._phones == null ? null : this._phones[0];
	}

	/**
	 * Gets the phone numbers for the user data.
	 * Phone numbers. Include only digits with country code, area code, and number.
	 * Example: ['16505551212', '12062072008']
	 */
	get phones() {
		return this._phones;
	}

	/**
	 * Sets the phone number for the user data.
	 * @param phone A phone number. Include only digits with country code, area code, and number.
	 * Example: 16505551212
	 */
	set phone(phone: string) {
		this._phones = new Array(phone);
	}

	/**
	 * Sets the phone numbers for the user data.
	 * @param phones Phone numbers. Include only digits with country code, area code, and number.
	 * Example: ['16505551212', '12062072008']
	 */
	set phones(phones: string[]) {
		this._phones = phones;
	}

	/**
	 * Sets the phone number for the user data.
	 * @param {String} phone A phone number. Include only digits with country code, area code, and number.
	 * Example: 16505551212
	 */
	setPhone(phone: string) : UserData {
		this._phones = new Array(phone);
		return this;
	}

	/**
	 * Sets the phone numbers for the user data.
	 * @param phones Phone numbers. Include only digits with country code, area code, and number.
	 * Example: ['16505551212', '12062072008']
	 */
	setPhones(phones: string[]) : UserData {
		this._phones = phones;
		return this;
	}

	/**
	 * Gets the gender value for the user data.
	 * Gender in lowercase. Either f for FEMALE or m for MALE.
	 * Example: f
	 */
	get gender() {
		return this._genders == null ? null : this.genders[0];
	}

	/**
	 * Gets the gender values for the user data.
	 * Genders in lowercase. Either f for FEMALE or m for MALE.
	 * Example: [f, m]
	 */
	get genders() {
		return this._genders;
	}

	/**
	 * Sets the gender value for the user data.
	 * @param gender Gender in lowercase. Either f for FEMALE or m for MALE.
	 * Example: f
	 */
	set gender(gender: string) {
		this._genders = new Array(gender);
	}

	/**
	 * Sets the gender values for the user data.
	 * @param genders Genders in lowercase. Either f for FEMALE or m for MALE.
	 * Example: [f, m]
	 */
	set genders(genders: string[]) {
		this._genders = genders;
	}

	/**
	 * Sets the gender value for the user data.
	 * @param {String} gender Gender in lowercase. Either f for FEMALE or m for MALE.
	 * Example: f
	 */
	setGender(gender: string) : UserData {
		this._genders = new Array(gender);
		return this;
	}

	/**
	 * Sets the gender values for the user data.
	 * @param genders Genders in lowercase. Either f for FEMALE or m for MALE.
	 * Example: [f, m]
	 */
	setGenders(genders: string[]) : UserData {
		this._genders = genders;
		return this;
	}

	/**
	 * Gets the date of birth for the user data.
	 * A date of birth given as year, month, and day in the Format YYYYMMDD
	 * Example: 19971226 for December 26, 1997.
	 */
	get date_of_birth() {
		return this._dates_of_birth == null ? null : this._dates_of_birth[0];
	}

	/**
	 * Gets the dates of birth for the user data.
	 * A date of birth given as year, month, and day in the Format YYYYMMDD
	 * Example: 19971226 for December 26, 1997.
	 */
	get dates_of_birth() {
		return this._dates_of_birth;
	}

	/**
	 * Sets the date of birth for the user data.
	 * @param date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
	 * Example: 19971226 for December 26, 1997.
	 */
	set date_of_birth(date_of_birth: string) {
		this._dates_of_birth = new Array(date_of_birth);
	}

	/**
	 * Sets the dates of birth for the user data.
	 * @param dates_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
	 * Example: 19971226 for December 26, 1997.
	 */
	set dates_of_birth(dates_of_birth: string[]) {
		this._dates_of_birth = dates_of_birth;
	}

	/**
	 * Sets the date of birth for the user data.
	 * @param {String} date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
	 * Example: 19971226 for December 26, 1997.
	 */
	setDateOfBirth(date_of_birth: string) : UserData {
		this._dates_of_birth = new Array(date_of_birth);
		return this;
	}

	/**
	 * Sets the dates of birth for the user data.
	 * @param {String} dates_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
	 * Example: 19971226 for December 26, 1997.
	 */
	setDatesOfBirth(dates_of_birth: string[]) : UserData {
		this._dates_of_birth = dates_of_birth;
		return this;
	}

	/**
	 * Gets the last name for the user data.
	 * last_name is the last name in lowercase.
	 * Example: smith
	 */
	get last_name() {
		return this._last_names == null ? null : this._last_names[0];
	}

	/**
	 * Gets the last names for the user data.
	 * last_name is the last name in lowercase.
	 * Example: ['smith', 'wilson']
	 */
	get last_names() {
		return this._last_names;
	}

	/**
	 * Sets the last name for the user data.
	 * @param last_name is last name in lowercase.
	 * Example: smith
	 */
	set last_name(last_name: string) {
		this._last_names = new Array(last_name);
	}

	/**
	 * Sets the last names for the user data.
	 * @param last_names is last name in lowercase.
	 * Example: ['smith', 'wilson']
	 */
	set last_names(last_names: string[]) {
		this._last_names = last_names;
	}

	/**
	 * Sets the last name for the user data.
	 * @param {String} last_name is last name in lowercase.
	 * Example: smith
	 */
	setLastName(last_name: string) : UserData {
		this._last_names = new Array(last_name);
		return this;
	}

	/**
	 * Sets the last name for the user data.
	 * @param last_names is last name in lowercase.
	 * Example: ['smith', 'wilson']
	 */
	setLastNames(last_names: string[]) : UserData {
		this._last_names = last_names;
		return this;
	}

	/**
	 * Gets the first name for the user data.
	 * first_name is first name in lowercase.
	 * Example: joe
	 */
	get first_name() {
		return this._first_names == null ? null : this._first_names[0];
	}

  /**
	 * Gets the first names for the user data.
	 * first_name is first name in lowercase.
	 * Example: ['joe', 'mary']
	 */
	get first_names() {
		return this._first_names;
	}

	/**
	 * Sets the first name for the user data.
	 * @param first_name is first name in lowercase.
	 * Example: joe
	 */
	set first_name(first_name: string) {
		this._first_names = new Array(first_name);
	}

  /**
	 * Sets the first names for the user data.
	 * @param first_names is first name in lowercase.
	 * Example: ['joe', 'mary']
	 */
	set first_names(first_names: string[]) {
		this._first_names = first_names;
	}

	/**
	 * Sets the first name for the user data.
	 * @param {String} first_name is first name in lowercase.
	 * Example: joe
	 */
	setFirstName(first_name: string) : UserData {
		this._first_names = new Array(first_name);
		return this;
	}

	/**
	 * Sets the first names for the user data.
	 * @param {String} first_names is first name in lowercase.
	 * Example: joe
	 */
	setFirstNames(first_names: string[]) : UserData {
		this._first_names = first_names;
		return this;
	}

	/**
	 * Gets the city for the user data.
	 * city is city in lower-case without spaces or punctuation.
	 * Example: menlopark
	 */
	get city() {
		return this._cities == null ? null : this._cities[0];
	}

	/**
	 * Gets the cities for the user data.
	 * city is city in lower-case without spaces or punctuation.
	 * Example:['menlopark', 'seattle']
	 */
	get cities() {
		return this._cities;
	}

	/**
	 * Sets the city for the user data.
	 * @param city is city in lower-case without spaces or punctuation.
	 * Example: menlopark
	 */
	set city(city: string) {
		this._cities = new Array(city);
	}

	/**
	 * Sets the cities for the user data.
	 * @param cities is city in lower-case without spaces or punctuation.
	 * Example: ['menlopark', 'seattle']
	 */
	set cities(cities: string[]) {
		this._cities = cities;
	}

	/**
	 * Sets the city for the user data.
	 * @param {String} city is city in lower-case without spaces or punctuation.
	 * Example: menlopark
	 */
	setCity(city: string) : UserData {
		this._cities = new Array(city);
		return this;
	}

	/**
	 * Sets the cities for the user data.
	 * @param cities is city in lower-case without spaces or punctuation.
	 * Example: ['menlopark', 'seattle']
	 */
	setCities(cities: string[]) : UserData {
		this._cities = cities;
		return this;
	}

	/**
	 * Gets the zip/postal code for the user data.
	 * zip is a five-digit zip code for United States.For other locations, follow each country's standards.
	 * Example: 98121 (for United States zip code)
	 */
	get zip() {
		return this._zips == null ? null : this._zips[0];
	}

	/**
	 * Gets the zip/postal codes for the user data.
	 * zip is a five-digit zip code for United States.For other locations, follow each country's standards.
	 * Example: 98121 (for United States zip code)
	 */
	get zips() {
		return this._zips;
	}

	/**
	 * Sets the zip/postal code for the user data.
	 * @param zip is a five-digit zip code for United States.For other locations, follow each country's standards.
	 * Example: 98121 (for United States zip code)
	 */
	set zip(zip: string) {
		this._zips = new Array(zip);
	}

	/**
	 * Sets the zip/postal codes for the user data.
	 * @param zips is a five-digit zip code for United States.For other locations, follow each country's standards.
	 * Example: 98121 (for United States zip code)
	 */
	set zips(zips: string[]) {
		this._zips = zips;
	}

	/**
	 * Sets the zip/postal code for the user data.
	 * @param {String} zip is a five-digit zip code for United States.For other locations, follow each country's standards.
	 * Example: 98121 (for United States zip code)
	 */
	setZip(zip: string) : UserData{
		this._zips = new Array(zip);
		return this;
	}

	/**
	 * Sets the zip/postal codes for the user data.
	 * @param zips is a five-digit zip code for United States.For other locations, follow each country's standards.
	 * Example: 98121 (for United States zip code)
	 */
	setZips(zips: string[]) : UserData{
		this._zips = zips;
		return this;
	}

	/**
	 * Gets the state for the user data.
	 * state is state in lower-case without spaces or punctuation.
	 * Example: ca
	 */
	get state() {
		return this._states == null ? null : this._states[0];
	}

	/**
	 * Gets the states for the user data.
	 * state is state in lower-case without spaces or punctuation.
	 * Example: ca
	 */
	get states() {
		return this._states;
	}

	/**
	 * Sets the state for the user data.
	 * @param state is state in lower-case without spaces or punctuation.
	 * Example: ca
	 */
	set state(state: string) {
		this._states = new Array(state);
	}

	/**
	 * Sets the states for the user data.
	 * @param states is state in lower-case without spaces or punctuation.
	 * Example: ca
	 */
	set states(states: string[]) {
		this._states = states;
	}

	/**
	 * Sets the state for the user data.
	 * @param {String} state is state in lower-case without spaces or punctuation.
	 * Example: ca
	 */
	setState(state: string) : UserData {
		this._states = new Array(state);
		return this;
	}

	/**
	 * Sets the states for the user data.
	 * @param states is state in lower-case without spaces or punctuation.
	 * Example: ca
	 */
	setStates(states: string[]) : UserData {
		this._states = states;
		return this;
	}

	/**
	 * Gets the country for the user data.
	 * country is A two-letter country code in lowercase.
	 * Example: usa
	 */
	get country() {
		return this._countries == null ? null : this._countries[0];
	}

	/**
	 * Gets the countries for the user data.
	 * country is A two-letter country code in lowercase.
	 * Example: usa
	 */
	get countries() {
		return this._countries;
	}

	/**
	 * Sets the country for the user data.
	 * @param country is A two-letter country code in lowercase.
	 * Example: usa
	 */
	set country(country: string) {
		this._countries = new Array(country);
	}

	/**
	 * Sets the countries for the user data.
	 * @param countries is A two-letter country code in lowercase.
	 * Example: usa
	 */
	set countries(countries: string[]) {
		this._countries = countries;
	}

	/**
	 * Sets the country for the user data.
	 * @param {String} country is A two-letter country code in lowercase.
	 * Example: usa
	 */
	setCountry(country: string) : UserData {
		this._countries = new Array(country);
		return this;
	}

	/**
	 * Sets the countries for the user data.
	 * @param countries is A two-letter country code in lowercase.
	 * Example: usa
	 */
	setCountries(countries: string[]) : UserData {
		this._countries = countries;
		return this;
	}

	/**
	 * Gets the external id for the user data.
	 * external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
	 * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
	 * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
	 * @see {@link https://www.facebook.com/business/help/104039186799009}
	 */
	get external_id() {
		return this._external_ids == null ? null : this._external_ids[0];
	}

	/**
	 * Gets the external ids for the user data.
	 * external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
	 * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
	 * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
	 * @see {@link https://www.facebook.com/business/help/104039186799009}
	 */
	get external_ids() {
		return this._external_ids;
	}

	/**
	 * Sets the external id for the user data.
	 * @param external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
	 * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
	 * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
	 * @see {@link https://www.facebook.com/business/help/104039186799009}
	 */
	set external_id(external_id: string) {
		this._external_ids = new Array(external_id);
	}

	/**
	 * Sets the external id for the user data.
	 * @param external_ids is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
	 * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
	 * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
	 * @see {@link https://www.facebook.com/business/help/104039186799009}
	 */
	set external_ids(external_ids: string[]) {
		this._external_ids = external_ids;
	}

	/**
	 * Sets the external id for the user data.
	 * @param {String} external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
	 * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
	 * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
	 * @see {@link https://www.facebook.com/business/help/104039186799009}
	 */
	setExternalId(external_id: string) : UserData {
		this._external_ids = new Array(external_id);
		return this;
	}

	/**
	 * Sets the external ids for the user data.
	 * @param external_ids is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
	 * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
	 * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
	 * @see {@link https://www.facebook.com/business/help/104039186799009}
	 */
	setExternalIds(external_ids: string[]) : UserData {
		this._external_ids = external_ids;
		return this;
	}


	/**
	 * Gets the client ip address for the user data.
	 * client_ip_address is the IP address of the browser corresponding to the event.
	 */
	get client_ip_address() {
		return this._client_ip_address;
	}

	/**
	 * Sets the client ip address for the user data.
	 * @param client_ip_address is the IP address of the browser corresponding to the event.
	 */
	set client_ip_address(client_ip_address: string) {
		this._client_ip_address = client_ip_address;
	}

	/**
	 * Sets the client ip address for the user data.
	 * @param {String} client_ip_address is the IP address of the browser corresponding to the event.
	 */
	setClientIpAddress(client_ip_address: string) : UserData {
		this._client_ip_address = client_ip_address;
		return this;
	}

	/**
	 * Gets the client user agent for the user data.
	 * client_user_agent is the user agent for the browser corresponding to the event.
	 */
	get client_user_agent() {
		return this._client_user_agent;
	}

	/**
	 * Sets the client user agent for the user data.
	 * @param client_user_agent is the user agent for the browser corresponding to the event.
	 */
	set client_user_agent(client_user_agent: string) {
		this._client_user_agent = client_user_agent;
	}

	/**
	 * Sets the client user agent for the user data.
	 * @param {String} client_user_agent is the user agent for the browser corresponding to the event.
	 */
	setClientUserAgent(client_user_agent: string) : UserData {
		this._client_user_agent = client_user_agent;
		return this;
	}

	/**
	 * Gets the fbc for the user data.
	 * fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbc},
	 * You can also generate this value from a fbclid query parameter.
	 */
	get fbc() {
		return this._fbc;
	}

	/**
	 * Sets the fbc for the user data.
	 * @param fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbc},
	 * You can also generate this value from a fbclid query parameter.
	 */
	set fbc(fbc: string) {
		this._fbc = fbc;
	}

	/**
	 * Sets the fbc for the user data.
	 * @param {String} fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbc},
	 * You can also generate this value from a fbclid query parameter.
	 */
	setFbc(fbc: string) : UserData {
		this._fbc = fbc;
		return this;
	}


	/**
	 * Gets the fbp for the user data.
	 * fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbp},
	 */
	get fbp() {
		return this._fbp;
	}

	/**
	 * Sets the fbp for the user data.
	 * @param fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbp},
	 */
	set fbp(fbp: string) {
		this._fbp = fbp;
	}

	/**
	 * Sets the fbp for the user data.
	 * @param {String} fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbp},
	 */
	setFbp(fbp: string) : UserData {
		this._fbp = fbp;
		return this;
	}

	/**
	 * Gets the subscription id for the user data.
	 * @return subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
	 * Example: anid1234.
	 */
	get subscription_id() {
		return this._subscription_id;
	}

	/**
	 * Sets the subscription id for the user data.
	 * @param {String} subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
	 * Example: anid1234.
	 */
	set subscription_id(subscription_id: string) {
		this._subscription_id = subscription_id;
	}

	/**
	 * Sets the subscription id for the user data.
	 * @param {String} subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
	 * Example: anid1234.
	 */
	setSubscriptionId(subscription_id: string) : UserData {
		this._subscription_id = subscription_id;
		return this;
	}

	/**
	 *
	 * Gets the fb_login_id for the user data.
	 */
	get fb_login_id() {
		return this._fb_login_id;
	}

	/**
	 * Sets the fb_login_id for the user data.
	 */
	set fb_login_id(fb_login_id: string) {
		this._fb_login_id = fb_login_id;
	}

	/**
	 * Sets the fb_login_id for the user data.
	 */
	setFbLoginId(fb_login_id: string) : UserData {
		this._fb_login_id = fb_login_id;
		return this;
	}

	/**
	 *
	 * Gets the lead_id for the user data. Lead ID is associated with a lead generated by Facebook's Lead Ads.
	 */
	get lead_id() {
		return this._lead_id;
	}

	/**
	 * Sets the lead_id for the user data. Lead ID is associated with a lead generated by Facebook's Lead Ads.
	 */
	set lead_id(lead_id: string) {
		this._lead_id = lead_id;
	}

	/**
	 * Sets the lead_id for the user data. Lead ID is associated with a lead generated by Facebook's Lead Ads.
	 */
	setLeadId(lead_id: string) : UserData {
		this._lead_id = lead_id;
		return this;
	}

	/**
	 *
	 * Gets the first 5 characters of the FirstName.
	 */
	get f5first() {
		return this._f5first;
	}

	/**
	 * Sets the Gets the first 5 characters of the FirstName.
	 */
	set f5first(f5first: string) {
		this._f5first = f5first;
	}

	/**
	 * Sets the first 5 characters of the FirstName.
	 */
	setF5First(f5first: string) : UserData {
		this._f5first = f5first;
		return this;
	}

	/**
	 *
	 * Gets the first 5 characters of the LastName.
	 */
	get f5last() {
		return this._f5last;
	}

	/**
	 * Sets the first 5 characters of the LastName.
	 */
	set f5last(f5last: string) {
		this._f5last = f5last;
	}

	/**
	 * Sets the first 5 characters of the LastName.
	 */
	setF5Last(f5last: string) : UserData {
		this._f5last = f5last;
		return this;
	}

	/**
	 *
	 * Gets the first Name Initial.
	 */
	get fi() {
		return this._fi;
	}

	/**
	 * Sets the first Name Initial.
	 */
	set fi(fi: string) {
		this._fi = fi;
	}

	/**
	 * Sets the first Name Initial.
	 */
	setFi(fi: string) : UserData {
		this._fi = fi;
		return this;
	}

	/**
	 *
	 * Gets the date of birth day.
	 */
	get dobd() {
		return this._dobd;
	}

	/**
	 * Sets the date of birth day.
	 */
	set dobd(dobd: string) {
		this._dobd = dobd;
	}

	/**
	 * Sets the date of birth day.
	 */
	setDobd(dobd: string) : UserData {
		this._dobd = dobd;
		return this;
	}

	/**
	 *
	 * Gets the date of birth month.
	 */
	get dobm() {
		return this._dobm;
	}

	/**
	 * Sets the date of birth month.
	 */
	set dobm(dobm: string) {
		this._dobm = dobm;
	}

	/**
	 * Sets the date of birth month.
	 */
	setDobm(dobm: string) : UserData {
		this._dobm = dobm;
		return this;
	}

	/**
	 *
	 * Gets the date of birth year.
	 */
	get doby() {
		return this._doby;
	}

	/**
	 * Sets the date of birth year.
	 */
	set doby(doby: string) {
		this._doby = doby;
	}

	/**
	 * Sets the date of birth year.
	 */
	setDoby(doby: string) : UserData {
		this._doby = doby;
		return this;
	}
	/**
	 *
	 */
	get madid() {
		return this._madid;
	}

	/**
	 *
	 */
	set madid(madid: string) {
		this._madid = madid;
	}

	/**
	 *
	 */
	setMadid(madid: string) : UserData {
		this._madid = madid;
		return this;
	}

	/**
	 *
	 */
	get anon_id() {
		return this._anon_id;
	}

	/**
	 *
	 */
	set anon_id(anon_id: string) {
		this._anon_id = anon_id;
	}

	/**
	 *
	 */
	setAnonId(anon_id: string) : UserData {
		this._anon_id = anon_id;
		return this;
	}

	/**
	 *
	 */
	get app_user_id() {
		return this._app_user_id;
	}

	/**
	 *
	 */
	set app_user_id(app_user_id: string) {
		this._app_user_id = app_user_id;
	}

	/**
	 *
	 */
	setAppUserId(app_user_id: string) : UserData {
		this._app_user_id = app_user_id;
		return this;
	}

	/**
	 *
	 */
	get ctwa_clid() {
		return this._ctwa_clid;
	}

	/**
	 *
	 */
	set ctwa_clid(ctwa_clid: string) {
		this._ctwa_clid = ctwa_clid;
	}

	/**
	 *
	 */
	setCtwaClid(ctwa_clid: string): UserData {
		this._ctwa_clid = ctwa_clid;
		return this;
	}

	/**
	 *
	 */
	get page_id() {
		return this._page_id;
	}

	/**
	 *
	 */
	set page_id(page_id: string) {
		this._page_id = page_id;
	}

	/**
	 *
	 */
	setPageId(page_id: string): UserData {
		this._page_id = page_id;
		return this;
	}

	/**
	 *
	 */
	get whatsapp_business_account_id () {
		return this._whatsapp_business_account_id;
	}

	/**
	 *
	 */
	set whatsapp_business_account_id (whatsapp_business_account_id: string) {
		this._whatsapp_business_account_id = whatsapp_business_account_id;
	}

	/**
	 *
	 */
	setWhatsappBusinessAccountId (whatsapp_business_account_id: string): UserData {
		this._whatsapp_business_account_id = whatsapp_business_account_id;
		return this;
	}

	/**
	 * Returns the normalized payload for the user_data parameter.
	 * @returns {Object} normalized user data payload.
	 */
	normalize(): Object {
		const userData = {};

		if (this.emails) {
			userData['em'] = this.normalizeAndHashMultiValues(this.emails, 'em');
		}

		if (this.phones) {
			userData['ph'] = this.normalizeAndHashMultiValues(this.phones, 'ph');
		}

		if (this.genders) {
			userData['ge'] = this.normalizeAndHashMultiValues(this.genders, 'ge');
		}

		if (this.dates_of_birth) {
			userData['db'] = this.normalizeAndHashMultiValues(this.dates_of_birth, 'db');
		}

		if (this.last_names) {
			userData['ln'] = this.normalizeAndHashMultiValues(this.last_names, 'ln');
		}

		if (this.first_names) {
			userData['fn'] = this.normalizeAndHashMultiValues(this.first_names, 'fn');
		}

		if (this.cities) {
			userData['ct'] = this.normalizeAndHashMultiValues(this.cities, 'ct');
		}

		if (this.states) {
			userData['st'] = this.normalizeAndHashMultiValues(this.states, 'st');
		}

		if (this.zips) {
			userData['zp'] = this.normalizeAndHashMultiValues(this.zips, 'zp');
		}

		if (this.countries) {
			userData['country'] = this.normalizeAndHashMultiValues(this.countries, 'country');
		}

		if (this.external_ids) {
			userData['external_id'] = this.dedupArray(this.external_ids);
		}

		if (this.client_ip_address) {
			userData['client_ip_address'] = this.client_ip_address;
		}

		if (this.client_user_agent) {
			userData['client_user_agent'] = this.client_user_agent;
		}

		if (this.fbc) {
			userData['fbc'] = this.fbc;
		}

		if (this.fbp) {
			userData['fbp'] = this.fbp;
		}

		if (this.subscription_id) {
			userData['subscription_id'] = this.subscription_id;
		}

		if (this.fb_login_id) {
			userData['fb_login_id'] = this.fb_login_id;
		}

		if (this.lead_id) {
			userData['lead_id'] = this.lead_id;
		}

		if (this.f5first) {
			userData['f5first'] = ServerSideUtils.normalizeAndHash(this.f5first, 'f5first');
		}

		if (this.f5last) {
			userData['f5last'] = ServerSideUtils.normalizeAndHash(this.f5last, 'f5last');
		}

		if (this.fi) {
			userData['fi'] = ServerSideUtils.normalizeAndHash(this.fi, 'fi');
		}

		if (this.dobd) {
			userData['dobd'] = ServerSideUtils.normalizeAndHash(this.dobd, 'dobd');
		}

		if (this.dobm) {
			userData['dobm'] = ServerSideUtils.normalizeAndHash(this.dobm, 'dobm');
		}

		if (this.doby) {
			userData['doby'] = ServerSideUtils.normalizeAndHash(this.doby, 'doby');
		}

		if(this.madid) {
			userData['madid'] = this.madid;
		}

		if(this.anon_id) {
			userData['anon_id'] = this.anon_id;
		}

		if(this.app_user_id) {
			userData['app_user_id'] = ServerSideUtils.normalizeAndHash(this.app_user_id, 'app_user_id');
		}

		if (this.ctwa_clid) {
			userData['ctwa_clid'] = this.ctwa_clid;
		}

		if (this.page_id) {
			userData['page_id'] = this.page_id;
		}

		if (this.whatsapp_business_account_id) {
			userData['whatsapp_business_account_id'] = this.whatsapp_business_account_id;
		}

		return userData;
	}

  /**
  * Returns the deduped and normalized payload for the given array of values and the field.
  * @returns {string[]} dedupped and normalized values.
  */
  normalizeAndHashMultiValues(arr: string[], fieldName: String): string[]{
    let normalizedArray = arr.map(value => ServerSideUtils.normalizeAndHash(value, fieldName));
    return this.dedupArray(normalizedArray);
  }

	/**
	 * Returns the deduped payload for the given array of values.
	 * This can be applied to fields that do not require normalization or hashing.
	 * @returns {string[]} deduped values.
	 */
	dedupArray(arr: string[]): string[]{
		let dedupSet = new Set(arr);
		return Array.from(dedupSet);
	}
}
