/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {Content, CustomData} = require('facebook-nodejs-business-sdk');
const {describe} = require('mocha');
const { expect } = require('chai');

describe('CustomData', function() {
    describe('normalize', function() {
        it('normalizes the fields', function() {
            const expected = {
            	'value': 1,
            	'currency': 'usd',
            	'content_name': 'content_name-2',
            	'content_category': 'content_category-3',
            	'content_ids': [4, 5, 6],
            	'contents': [{'id': 'id-1', 'quantity': 2}],
            	'content_type': 'content_type-7',
            	'order_id': 'order_id-8',
            	'predicted_ltv': 9.99,
            	'num_items': 10,
            	'search_string': 'search_string-11',
            	'status': 'status-12',
                'item_number': 'item_number-13',
                'k1': 'v1',
                'k2': 'v2'
            };
            const content = (new Content())
                .setId('id-1')
                .setQuantity(2);
            const custom_data = (new CustomData())
            	.setValue(expected['value'])
            	.setCurrency('USD')
            	.setContentName(expected['content_name'])
            	.setContentCategory(expected['content_category'])
            	.setContentIds(expected['content_ids'])
            	.setContents([content])
            	.setContentType(expected['content_type'])
            	.setOrderId(expected['order_id'])
            	.setPredictedLtv(expected['predicted_ltv'])
            	.setNumItems(expected['num_items'])
            	.setSearchString(expected['search_string'])
            	.setStatus(expected['status'])
                .setItemNumber(expected['item_number'])
            	.setCustomProperties({
                    'k1': 'v1',
                    'k2': 'v2'
                });

            expect(custom_data.normalize()).to.deep.equal(expected);
        });
    })
});
