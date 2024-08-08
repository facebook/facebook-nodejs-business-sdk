/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * Attribution models.
 */

const AttributionModel = Object.freeze({
    CUSTOMIZED_MULTI_TOUCH : 'customized_multi_touch',
    FIRST_TOUCH : 'first_touch',
    LAST_CLICK :'last_click',
    LAST_TOUCH : 'last_touch',
    LINEAR : 'linear',
    POSITION_BASED : 'position_based',
    TIME_DECAY : 'time_decay',
    UNKNOWN : 'unknown'
});

export default AttributionModel;
