/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const { SignalUserData, SignalContent, SignalCustomData, SignalEvent, DeliveryCategory } = require('facebook-nodejs-business-sdk');
const { describe } = require('mocha');
const sha256 = require('js-sha256');
const { expect } = require('chai');

describe('Signal Data', function() {
    describe('UserData', function() {
        it('UserData creation by set methods', function() {

            const email = 'xxx@gmail.com',
                phone = '1123456789',
                gender = 'f',
                first_name = 'chrissy',
                last_name = 'smith',
                date_of_birth = '19940919',
                city = 'seattle',
                state = 'wa',
                country = 'us',
                zip = '98121',
                external_id = 'chrissy001',
                client_ip_address = '127.0.0.1',
                client_user_agent = 'chrome',
                fbp = 'xxxfbp',
                fbc = 'xxxfbc',
                subscription_id = 'xxxsubscription',
                fb_login_id = 'xxxlogin',
                lead_id = 'xxxlead',
                dobd = '19',
                dobm = '09',
                doby = '94',
                f5first = 'chris',
                f5last = 'hoooo',
                fi = 'ch',
                address = '1000 westlake ave';

            const userData = (new SignalUserData())
                .setEmail(email)
                .setPhone(phone)
                .setFirstName(first_name)
                .setLastName(last_name)
                .setDateOfBirth(date_of_birth)
                .setCity(city)
                .setState(state)
                .setZip(zip)
                .setCountry(country)
                .setExternalId(external_id)
                .setGender(gender)
                .setClientIpAddress(client_ip_address)
                .setClientUserAgent(client_user_agent)
                .setFbp(fbp)
                .setFbc(fbc)
                .setSubscriptionId(subscription_id)
                .setFbLoginId(fb_login_id)
                .setLeadId(lead_id)
                .setDobd(dobd)
                .setDobm(dobm)
                .setDoby(doby)
                .setF5First(f5first)
                .setF5Last(f5last)
                .setFi(fi)
                .setAddress(address);


            // business data api user data
            expect(userData.email.business_data_api).to.equal(email);
            expect(userData.phone.business_data_api).to.equal(phone);
            expect(userData.first_name.business_data_api).to.equal(first_name);
            expect(userData.last_name.business_data_api).to.equal(last_name);
            expect(userData.date_of_birth.business_data_api).to.equal(date_of_birth);
            expect(userData.city.business_data_api).to.equal(city);
            expect(userData.state.business_data_api).to.equal(state);
            expect(userData.country.business_data_api).to.equal(country);
            expect(userData.zip.business_data_api).to.equal(zip);
            expect(userData.external_id.business_data_api).to.equal(external_id);
            expect(userData.address.business_data_api).to.equal(address);

            // business data api user data
            expect(userData.business_data_user_data.email).to.equal(email);

            // conversion api user data
            expect(userData.email.conversion_api).to.equal(email);
            expect(userData.phone.conversion_api).to.equal(phone);
            expect(userData.first_name.conversion_api).to.equal(first_name);
            expect(userData.last_name.conversion_api).to.equal(last_name);
            expect(userData.date_of_birth.conversion_api).to.equal(date_of_birth);
            expect(userData.city.conversion_api).to.equal(city);
            expect(userData.state.conversion_api).to.equal(state);
            expect(userData.country.conversion_api).to.equal(country);
            expect(userData.zip.conversion_api).to.equal(zip);
            expect(userData.external_id.conversion_api).to.equal(external_id);
            expect(userData.gender.conversion_api).to.equal(gender);
            expect(userData.client_ip_address.conversion_api).to.equal(client_ip_address);
            expect(userData.client_user_agent.conversion_api).to.equal(client_user_agent);
            expect(userData.fbp.conversion_api).to.equal(fbp);
            expect(userData.fbc.conversion_api).to.equal(fbc);
            expect(userData.subscription_id.conversion_api).to.equal(subscription_id);
            expect(userData.fb_login_id.conversion_api).to.equal(fb_login_id);
            expect(userData.lead_id.conversion_api).to.equal(lead_id);
            expect(userData.dobd.conversion_api).to.equal(dobd);
            expect(userData.dobm.conversion_api).to.equal(dobm);
            expect(userData.doby.conversion_api).to.equal(doby);
            expect(userData.f5first.conversion_api).to.equal(f5first);
            expect(userData.f5last.conversion_api).to.equal(f5last);
            expect(userData.fi.conversion_api).to.equal(fi);

            // conversion api user data
            expect(userData.server_user_data.email).to.equal(email);

        });

        it('UserData creation by constructor', function() {

            const email = 'xxx@gmail.com',
                phone = '1123456789',
                gender = 'f',
                first_name = 'chrissy',
                last_name = 'smith',
                date_of_birth = '19940919',
                city = 'seattle',
                state = 'wa',
                country = 'us',
                zip = '98121',
                external_id = 'chrissy001',
                client_ip_address = '127.0.0.1',
                client_user_agent = 'chrome',
                fbp = 'xxxfbp',
                fbc = 'xxxfbc',
                subscription_id = 'xxxsubscription',
                fb_login_id = 'xxxlogin',
                lead_id = 'xxxlead',
                dobd = '19',
                dobm = '09',
                doby = '94',
                f5first = 'chris',
                f5last = 'hoooo',
                fi = 'ch',
                address = '1000 westlake ave';

            // not set state, client_ip_address, address,
            const userData = new SignalUserData(email, phone, first_name, last_name, date_of_birth, city, null, zip, country, external_id, gender,
                null, client_user_agent, fbp, fbc, subscription_id, fb_login_id, lead_id, dobd, dobm, doby, f5first, f5last, fi, null);

            // check business data api
            expect(userData.email.business_data_api).to.equal(email);
            expect(userData.phone.business_data_api).to.equal(phone);
            expect(userData.first_name.business_data_api).to.equal(first_name);
            expect(userData.last_name.business_data_api).to.equal(last_name);
            expect(userData.date_of_birth.business_data_api).to.equal(date_of_birth);
            expect(userData.city.business_data_api).to.equal(city);
            expect(userData.state.business_data_api).to.equal(null);
            expect(userData.country.business_data_api).to.equal(country);
            expect(userData.zip.business_data_api).to.equal(zip);
            expect(userData.external_id.business_data_api).to.equal(external_id);
            expect(userData.address.business_data_api).to.equal(null);

            // check business data api
            expect(userData.business_data_user_data.email).to.equal(email);

            // check conversion api
            expect(userData.email.conversion_api).to.equal(email);
            expect(userData.phone.conversion_api).to.equal(phone);
            expect(userData.first_name.conversion_api).to.equal(first_name);
            expect(userData.last_name.conversion_api).to.equal(last_name);
            expect(userData.date_of_birth.conversion_api).to.equal(date_of_birth);
            expect(userData.city.conversion_api).to.equal(city);
            expect(userData.state.conversion_api).to.equal(null);
            expect(userData.country.conversion_api).to.equal(country);
            expect(userData.zip.conversion_api).to.equal(zip);
            expect(userData.external_id.conversion_api).to.equal(external_id);
            expect(userData.gender.conversion_api).to.equal(gender);
            expect(userData.client_ip_address.conversion_api).to.equal(null);
            expect(userData.client_user_agent.conversion_api).to.equal(client_user_agent);
            expect(userData.fbp.conversion_api).to.equal(fbp);
            expect(userData.fbc.conversion_api).to.equal(fbc);
            expect(userData.subscription_id.conversion_api).to.equal(subscription_id);
            expect(userData.fb_login_id.conversion_api).to.equal(fb_login_id);
            expect(userData.lead_id.conversion_api).to.equal(lead_id);
            expect(userData.dobd.conversion_api).to.equal(dobd);
            expect(userData.dobm.conversion_api).to.equal(dobm);
            expect(userData.doby.conversion_api).to.equal(doby);
            expect(userData.f5first.conversion_api).to.equal(f5first);
            expect(userData.f5last.conversion_api).to.equal(f5last);
            expect(userData.fi.conversion_api).to.equal(fi);

            // check conversion api
            expect(userData.server_user_data.email).to.equal(email);

        });
    });

    describe('Content Data', function() {
        it('Content creation', function() {

            const id = 'xxx',
                quantity = 2,
                price = 12.4,
                item_price = 5.2,
                title = 'Lettuce',
                description = 'California lettuce',
                brand = 'xxxx',
                category = 'xxxxx',
                delivery_category = DeliveryCategory.IN_STORE,
                tax = 2.0,
                external_content_id = 'xxxxxx';

            const content = new SignalContent()
                .setId(id)
                .setQuantity(quantity)
                .setPrice(price)
                .setItemPrice(item_price)
                .setTitle(title)
                .setDescription(description)
                .setBrand(brand)
                .setCategory(category)
                .setDeliveryCategory(delivery_category)
                .setTax(tax)
                .setExternalContentId(external_content_id);

            // check business data api
            expect(content.id.business_data_api).to.equal(id);
            expect(content.quantity.business_data_api).to.equal(quantity);
            expect(content.price.business_data_api).to.equal(price);
            expect(content.title.business_data_api).to.equal(title);
            expect(content.tax.business_data_api).to.equal(tax);
            expect(content.external_content_id.business_data_api).to.equal(external_content_id);

            // check business data api
            expect(content.business_data_content.id).to.equal(id);

            // check converision api
            expect(content.id.conversion_api).to.equal(id);
            expect(content.quantity.conversion_api).to.equal(quantity);
            expect(content.item_price.conversion_api).to.equal(item_price);
            expect(content.title.conversion_api).to.equal(title);
            expect(content.description.conversion_api).to.equal(description);
            expect(content.brand.conversion_api).to.equal(brand);
            expect(content.category.conversion_api).to.equal(category);
            expect(content.delivery_category.conversion_api).to.equal(delivery_category);

            // check converision api
            expect(content.server_content.id).to.equal(id);

        });
    });

    describe('Custom Data', function() {
        it('Custom Data creation', function() {
            const first_name = 'firstname';
            const content_id = 'contentid';
            const content_quantity = 2;
            const custom_prop = {
                'key': 'value'
            };
            const value = 1.0,
                currency = 'usd',
                contents = [{ 'id': content_id, 'quantity': content_quantity }],
                order_id = 'orderid',
                status = 'cancel',
                content_name = 'x',
                content_category = 'xx',
                content_ids = [1, 2, 3],
                content_type = 'xxxx',
                predicted_ltv = 12.0,
                num_items = 10,
                search_string = 'xxxx',
                item_number = 'xxx',
                delivery_category = DeliveryCategory.CURBSIDE,
                external_order_id = 'xxxx',
                original_order_id = 'xxxx',
                message = 'xxxxx';


            const content = (new SignalContent())
                .setId(content_id)
                .setQuantity(content_quantity);

            const billing_contact = (new SignalUserData())
                .setFirstName(first_name)

            const shipping_contact = (new SignalUserData())
                .setFirstName(first_name);

            const custom_data = (new SignalCustomData())
                .setValue(value)
                .setCurrency(currency)
                .setContents([content])
                .setOrderId(order_id)
                .setStatus(status)
                .setContentName(content_name)
                .setContentCategory(content_category)
                .setContentIds(content_ids)
                .setContentType(content_type)
                .setPredictedLtv(predicted_ltv)
                .setNumItems(num_items)
                .setSearchString(search_string)
                .setItemNumber(item_number)
                .setDeliveryCategory(delivery_category)
                .setCustomProperties(custom_prop)
                .setBillingContact(billing_contact)
                .setShippingContact(shipping_contact)
                .setExternalOrderId(external_order_id)
                .setOriginalOrderId(original_order_id)
                .setMessage(message);

            // check business data api
            expect(custom_data.value.business_data_api).to.equal(value);
            expect(custom_data.currency.business_data_api).to.equal(currency);
            expect(custom_data.order_id.business_data_api).to.equal(order_id);
            expect(custom_data.status.business_data_api).to.equal(status);
            expect(custom_data.external_order_id.business_data_api).to.equal(external_order_id);
            expect(custom_data.original_order_id.business_data_api).to.equal(original_order_id);
            expect(custom_data.message.business_data_api).to.equal(message);
            expect(custom_data.contents.business_data_api[0].id).to.equal(content_id);
            expect(custom_data.contents.business_data_api[0].quantity).to.equal(content_quantity);
            expect(custom_data.billing_contact.business_data_api.first_name).to.equal(first_name);
            expect(custom_data.shipping_contact.business_data_api.first_name).to.equal(first_name);

            // check business data api
            expect(custom_data.business_data_custom_data.value).to.equal(value);

            // check converision api
            expect(custom_data.value.conversion_api).to.equal(value);
            expect(custom_data.currency.conversion_api).to.equal(currency);
            expect(custom_data.order_id.conversion_api).to.equal(order_id);
            expect(custom_data.status.conversion_api).to.equal(status);
            expect(custom_data.content_name.conversion_api).to.equal(content_name);
            expect(custom_data.content_category.conversion_api).to.equal(content_category);
            expect(custom_data.content_ids.conversion_api).to.equal(content_ids);
            expect(custom_data.content_type.conversion_api).to.equal(content_type);
            expect(custom_data.predicted_ltv.conversion_api).to.equal(predicted_ltv);
            expect(custom_data.num_items.conversion_api).to.equal(num_items);
            expect(custom_data.search_string.conversion_api).to.equal(search_string);
            expect(custom_data.item_number.conversion_api).to.equal(item_number);
            expect(custom_data.delivery_category.conversion_api).to.equal(delivery_category);
            expect(custom_data.custom_properties.conversion_api).to.equal(custom_prop);
            expect(custom_data.contents.conversion_api[0].id).to.equal(content_id);
            expect(custom_data.contents.conversion_api[0].quantity).to.equal(content_quantity);

            // check converision api
            expect(custom_data.server_custom_data.value).to.equal(value);
        });

    });
    describe('Event', function() {
        it('Event creation', function() {
            const event_name = 'Purchase',
                event_time = '123124125',
                event_source_url = 'xxxx',
                event_id = 'xxxx',
                action_source = 'xxxx',
                opt_out = false,
                data_processing_options = [],
                data_processing_options_country = 1,
                data_processing_options_state = 1000;

            const first_name = 'xxxx';
            const user_data = new SignalUserData()
                .setFirstName(first_name);
            const billing_contact = new SignalUserData()
                .setFirstName(first_name);
            const shipping_contact = new SignalUserData()
                .setFirstName(first_name);

            const content_id = 'contentid';
            const content = (new SignalContent())
                .setId(content_id);

            const value = 123;
            const custom_data = new SignalCustomData()
                .setValue(value)
                .setBillingContact(billing_contact)
                .setShippingContact(shipping_contact)
                .setContents([content]);

            const event = (new SignalEvent())
                .setEventName(event_name)
                .setEventTime(event_time)
                .setEventSourceUrl(event_source_url)
                .setEventId(event_id)
                .setActionSource(action_source)
                .setOptOut(opt_out)
                .setUserData(user_data)
                .setCustomData(custom_data)
                .setDataProcessingOptions(data_processing_options)
                .setDataProcessingOptionsCountry(data_processing_options_country)
                .setDataProcessingOptionsState(data_processing_options_state);

            // check business data api
            expect(event.event_name.business_data_api).to.equal(event_name);
            expect(event.event_time.business_data_api).to.equal(event_time);
            expect(event.event_id.business_data_api).to.equal(event_id);
            expect(event.data_processing_options.business_data_api).to.equal(data_processing_options);
            expect(event.data_processing_options_country.business_data_api).to.equal(data_processing_options_country);
            expect(event.data_processing_options_state.business_data_api).to.equal(data_processing_options_state);
            expect(event.user_data.business_data_api.first_name).to.equal(first_name);
            expect(event.custom_data.business_data_api.value).to.equal(value);
            expect(event.custom_data.business_data_api.billing_contact.first_name).to.equal(first_name);
            expect(event.custom_data.business_data_api.shipping_contact.first_name).to.equal(first_name);
            expect(event.custom_data.business_data_api.contents[0].id).to.equal(content_id);

            // check conversion api
            expect(event.event_name.conversion_api).to.equal(event_name);
            expect(event.event_time.conversion_api).to.equal(event_time);
            expect(event.event_source_url.conversion_api).to.equal(event_source_url);
            expect(event.event_id.conversion_api).to.equal(event_id);
            expect(event.action_source.conversion_api).to.equal(action_source);
            expect(event.opt_out.conversion_api).to.equal(opt_out);
            expect(event.data_processing_options.conversion_api).to.equal(data_processing_options);
            expect(event.data_processing_options_country.conversion_api).to.equal(data_processing_options_country);
            expect(event.data_processing_options_state.conversion_api).to.equal(data_processing_options_state);
            expect(event.user_data.conversion_api.first_name).to.equal(first_name);
            expect(event.custom_data.conversion_api.value).to.equal(value);
            expect(event.custom_data.conversion_api.contents[0].id).to.equal(content_id);

        });
    });
});