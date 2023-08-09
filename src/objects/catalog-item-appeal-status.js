/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * CatalogItemAppealStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemAppealStatus extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      handle: 'handle',
      item_id: 'item_id',
      status: 'status',
      use_cases: 'use_cases',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      this_item_cannot_be_appealed_as_it_is_either_approved_or_already_has_an_appeal: 'This item cannot be appealed as it is either approved or already has an appeal',
      this_item_is_not_rejected_for_any_of_channels: 'This item is not rejected for any of channels',
      weve_encountered_unexpected_error_while_processing_this_request_please_try_again_later_: 'Weve encountered unexpected error while processing this request. Please try again later !',
      youve_reached_the_maximum_number_of_item_requests_you_can_make_this_week_youll_be_able_to_request_item_reviews_again_within_the_next_7_days_: 'Youve reached the maximum number of item requests you can make this week. Youll be able to request item reviews again within the next 7 days.',
      your_request_was_received_see_information_below_to_learn_more_: 'Your request was received. See information below to learn more.',
    });
  }
}
