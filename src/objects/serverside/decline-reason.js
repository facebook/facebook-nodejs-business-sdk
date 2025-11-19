/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * Decline reasons.
 */

const DeclineReason = Object.freeze({
    ATTRIBUTE_TO_OTHER_SOURCE : 'attribute_to_other_source',
    OUT_OF_LOOKBACK_WINDOW : 'out_of_lookback_window',
    VIEW_THROUGH_DISABLED : 'view_through_disabled',
    WITHIN_INACTIVE_WINDOW : 'within_inactive_window',
    INACTIVE : 'inactive',
    FRAUD_DETECTED : 'fraud_detected',
    UNKNOWN : 'unknown',
    REINSTALL_ATTRIBUTION_DISABLED : 'reinstall_attribution_disabled',
    LOOKBACK : 'lookback',
    NOT_PMOD_MATCH : 'not_pmod_match',
    VALIDATION_RULE_DETECTED : 'validation_rule_detected',
    PRELOAD_INSTALL : 'preload_install',
    MIN_TIME_BETWEEN_RE_ENGAGEMENTS : 'min_time_between_re_engagements',
    DUPLICATED : 'duplicated',
    PMOD_DISABLED : 'pmod_disabled'
});

export default DeclineReason;
