/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {AttributionData, AttributionModel, AttributionMethod, DeclineReason, AttributionSetting} = require('facebook-nodejs-business-sdk');


describe('AttributionData', function() {
    describe('Getters and Setters', function() {
        test('Constructor should work with all parameters', function() {
            // Arrange
            const scope = 'click';
            const visitTime = 1234567890;
            const adId = '123456';
            const adsetId = '789012';
            const campaignId = '345678';
            const attributionShare = 0.5;
            const attributionModel = AttributionModel.LAST_CLICK;
            const attrWindow = 7;
            const attributionValue = 100.50;
            const attributionSource = 'AMM';
            const touchpointType = 'click';
            const touchpointTs = 1234567800;
            const attributionMethod = AttributionMethod.ARD;
            const declineReason = DeclineReason.ATTRIBUTE_TO_OTHER_SOURCE;
            const auditingToken = 'token_123456';
            const linkageKey = 'key_123456';

            // Act
            const attributionData = new AttributionData(
                scope,
                visitTime,
                adId,
                adsetId,
                campaignId,
                attributionShare,
                attributionModel,
                attrWindow,
                attributionValue,
                attributionSource,
                touchpointType,
                touchpointTs,
                attributionMethod,
                declineReason,
                auditingToken,
                linkageKey
            );

            // Assert
            expect(attributionData.scope).toBe(scope);
            expect(attributionData.visit_time).toBe(visitTime);
            expect(attributionData.ad_id).toBe(adId);
            expect(attributionData.adset_id).toBe(adsetId);
            expect(attributionData.campaign_id).toBe(campaignId);
            expect(attributionData.attribution_share).toBe(attributionShare);
            expect(attributionData.attribution_model).toBe(attributionModel);
            expect(attributionData.attr_window).toBe(attrWindow);
            expect(attributionData.attribution_value).toBe(attributionValue);
            expect(attributionData.attribution_source).toBe(attributionSource);
            expect(attributionData.touchpoint_type).toBe(touchpointType);
            expect(attributionData.touchpoint_ts).toBe(touchpointTs);
            expect(attributionData.attribution_method).toBe(attributionMethod);
            expect(attributionData.decline_reason).toBe(declineReason);
            expect(attributionData.auditing_token).toBe(auditingToken);
            expect(attributionData.linkage_key).toBe(linkageKey);
        });

        test('Setter methods should work for new AMM fields', function() {
            // Arrange
            const attributionData = new AttributionData();
            const attributionMethod = AttributionMethod.DEEPLINK;
            const declineReason = DeclineReason.OUT_OF_LOOKBACK_WINDOW;
            const auditingToken = 'token_abc';
            const linkageKey = 'key_xyz';

            // Act
            attributionData.setAttributionMethod(attributionMethod);
            attributionData.setDeclineReason(declineReason);
            attributionData.setAuditingToken(auditingToken);
            attributionData.setLinkageKey(linkageKey);

            // Assert
            expect(attributionData.attribution_method).toBe(attributionMethod);
            expect(attributionData.decline_reason).toBe(declineReason);
            expect(attributionData.auditing_token).toBe(auditingToken);
            expect(attributionData.linkage_key).toBe(linkageKey);
        });

        test('Setter methods should return AttributionData instance for chaining', function() {
            // Arrange
            const attributionData = new AttributionData();
            const attributionMethod = AttributionMethod.GPIR;
            const declineReason = DeclineReason.FRAUD_DETECTED;
            const auditingToken = 'chain_token';
            const linkageKey = 'chain_key';

            // Act
            const result = attributionData
                .setAttributionMethod(attributionMethod)
                .setDeclineReason(declineReason)
                .setAuditingToken(auditingToken)
                .setLinkageKey(linkageKey);

            // Assert
            expect(result).toBe(attributionData);
            expect(result.attribution_method).toBe(attributionMethod);
            expect(result.decline_reason).toBe(declineReason);
            expect(result.auditing_token).toBe(auditingToken);
            expect(result.linkage_key).toBe(linkageKey);
        });

        test('Property setters should work for new AMM fields', function() {
            // Arrange
            const attributionData = new AttributionData();
            const attributionMethod = AttributionMethod.MIR;
            const declineReason = DeclineReason.WITHIN_INACTIVE_WINDOW;
            const auditingToken = 'property_token';
            const linkageKey = 'property_key';

            // Act
            attributionData.attribution_method = attributionMethod;
            attributionData.decline_reason = declineReason;
            attributionData.auditing_token = auditingToken;
            attributionData.linkage_key = linkageKey;

            // Assert
            expect(attributionData.attribution_method).toBe(attributionMethod);
            expect(attributionData.decline_reason).toBe(declineReason);
            expect(attributionData.auditing_token).toBe(auditingToken);
            expect(attributionData.linkage_key).toBe(linkageKey);
        });

        test('Setter methods should work for attribution_setting field', function() {
            // Arrange
            const attributionData = new AttributionData();
            const attributionSetting = new AttributionSetting(24, 168);

            // Act
            attributionData.setAttributionSetting(attributionSetting);

            // Assert
            expect(attributionData.attribution_setting).toBe(attributionSetting);
            expect(attributionData.attribution_setting.inactivity_window_hours).toBe(24);
            expect(attributionData.attribution_setting.reattribution_window_hours).toBe(168);
        });

        test('Property setter should work for attribution_setting field', function() {
            // Arrange
            const attributionData = new AttributionData();
            const attributionSetting = new AttributionSetting(48, 336);

            // Act
            attributionData.attribution_setting = attributionSetting;

            // Assert
            expect(attributionData.attribution_setting).toBe(attributionSetting);
            expect(attributionData.attribution_setting.inactivity_window_hours).toBe(48);
            expect(attributionData.attribution_setting.reattribution_window_hours).toBe(336);
        });
    });

    describe('AttributionMethod enum', function() {
        test('All AttributionMethod enum values should be valid', function() {
            expect(AttributionMethod.ARD).toBe('ard');
            expect(AttributionMethod.DEEPLINK).toBe('deeplink');
            expect(AttributionMethod.GPIR).toBe('gpir');
            expect(AttributionMethod.INVALID_RESPONSE).toBe('invalid_response');
            expect(AttributionMethod.MIR).toBe('mir');
            expect(AttributionMethod.SRN).toBe('srn');
        });

        test('AttributionMethod should be frozen', function() {
            expect(Object.isFrozen(AttributionMethod)).toBe(true);
        });

        test('AttributionMethod enum values can be used as types', function() {
            const attributionData = new AttributionData();

            attributionData.setAttributionMethod(AttributionMethod.ARD);
            expect(attributionData.attribution_method).toBe(AttributionMethod.ARD);

            attributionData.setAttributionMethod(AttributionMethod.DEEPLINK);
            expect(attributionData.attribution_method).toBe(AttributionMethod.DEEPLINK);

            attributionData.setAttributionMethod(AttributionMethod.GPIR);
            expect(attributionData.attribution_method).toBe(AttributionMethod.GPIR);
        });
    });

    describe('DeclineReason enum', function() {
        test('All DeclineReason enum values should be valid', function() {
            expect(DeclineReason.ATTRIBUTE_TO_OTHER_SOURCE).toBe('attribute_to_other_source');
            expect(DeclineReason.OUT_OF_LOOKBACK_WINDOW).toBe('out_of_lookback_window');
            expect(DeclineReason.VIEW_THROUGH_DISABLED).toBe('view_through_disabled');
            expect(DeclineReason.WITHIN_INACTIVE_WINDOW).toBe('within_inactive_window');
            expect(DeclineReason.INACTIVE).toBe('inactive');
            expect(DeclineReason.FRAUD_DETECTED).toBe('fraud_detected');
            expect(DeclineReason.UNKNOWN).toBe('unknown');
            expect(DeclineReason.REINSTALL_ATTRIBUTION_DISABLED).toBe('reinstall_attribution_disabled');
            expect(DeclineReason.LOOKBACK).toBe('lookback');
            expect(DeclineReason.NOT_PMOD_MATCH).toBe('not_pmod_match');
            expect(DeclineReason.VALIDATION_RULE_DETECTED).toBe('validation_rule_detected');
            expect(DeclineReason.PRELOAD_INSTALL).toBe('preload_install');
            expect(DeclineReason.MIN_TIME_BETWEEN_RE_ENGAGEMENTS).toBe('min_time_between_re_engagements');
            expect(DeclineReason.DUPLICATED).toBe('duplicated');
            expect(DeclineReason.PMOD_DISABLED).toBe('pmod_disabled');
        });

        test('DeclineReason should be frozen', function() {
            expect(Object.isFrozen(DeclineReason)).toBe(true);
        });

        test('DeclineReason enum values can be used as types', function() {
            const attributionData = new AttributionData();

            attributionData.setDeclineReason(DeclineReason.ATTRIBUTE_TO_OTHER_SOURCE);
            expect(attributionData.decline_reason).toBe(DeclineReason.ATTRIBUTE_TO_OTHER_SOURCE);

            attributionData.setDeclineReason(DeclineReason.FRAUD_DETECTED);
            expect(attributionData.decline_reason).toBe(DeclineReason.FRAUD_DETECTED);

            attributionData.setDeclineReason(DeclineReason.UNKNOWN);
            expect(attributionData.decline_reason).toBe(DeclineReason.UNKNOWN);
        });
    });

    describe('normalize', function() {
        test('normalize should include all new AMM fields when set', function() {
            // Arrange
            const attributionData = new AttributionData();
            attributionData.setScope('click');
            attributionData.setVisitTime(1234567890);
            attributionData.setAdId('123456');
            attributionData.setAttributionMethod(AttributionMethod.ARD);
            attributionData.setDeclineReason(DeclineReason.OUT_OF_LOOKBACK_WINDOW);
            attributionData.setAuditingToken('test_token');
            attributionData.setLinkageKey('test_key');

            // Act
            const normalized = attributionData.normalize();

            // Assert
            expect(normalized.scope).toBe('click');
            expect(normalized.visit_time).toBe(1234567890);
            expect(normalized.ad_id).toBe('123456');
            expect(normalized.attribution_method).toBe(AttributionMethod.ARD);
            expect(normalized.decline_reason).toBe(DeclineReason.OUT_OF_LOOKBACK_WINDOW);
            expect(normalized.auditing_token).toBe('test_token');
            expect(normalized.linkage_key).toBe('test_key');
        });

        test('normalize should not include new AMM fields when not set', function() {
            // Arrange
            const attributionData = new AttributionData();
            attributionData.setScope('click');
            attributionData.setVisitTime(1234567890);

            // Act
            const normalized = attributionData.normalize();

            // Assert
            expect(normalized.scope).toBe('click');
            expect(normalized.visit_time).toBe(1234567890);
            expect(normalized.attribution_method).toBeUndefined();
            expect(normalized.decline_reason).toBeUndefined();
            expect(normalized.auditing_token).toBeUndefined();
            expect(normalized.linkage_key).toBeUndefined();
        });

        test('normalize should return only the fields that were set', function() {
            // Arrange
            const attributionMethod = AttributionMethod.SRN;
            const auditingToken = 'only_token';
            const attributionData = new AttributionData();
            attributionData.setAttributionMethod(attributionMethod);
            attributionData.setAuditingToken(auditingToken);

            // Act
            const normalized = attributionData.normalize();

            // Assert
            expect(normalized).toEqual({
                attribution_method: attributionMethod,
                auditing_token: auditingToken,
            });
        });

        test('normalize should work with all fields including new AMM fields', function() {
            // Arrange
            const attributionData = new AttributionData();
            attributionData.setScope('click');
            attributionData.setVisitTime(1234567890);
            attributionData.setAdId('123456');
            attributionData.setAdsetId('789012');
            attributionData.setCampaignId('345678');
            attributionData.setAttributionShare(0.75);
            attributionData.setAttributionModel(AttributionModel.LAST_CLICK);
            attributionData.setAttrWindow(28);
            attributionData.setAttributionValue(250.99);
            attributionData.setAttributionSource('AMM');
            attributionData.setTouchpointType('impression');
            attributionData.setTouchpointTs(1234567800);
            attributionData.setAttributionMethod(AttributionMethod.INVALID_RESPONSE);
            attributionData.setDeclineReason(DeclineReason.VALIDATION_RULE_DETECTED);
            attributionData.setAuditingToken('full_token');
            attributionData.setLinkageKey('full_key');

            // Act
            const normalized = attributionData.normalize();

            // Assert
            expect(normalized).toEqual({
                scope: 'click',
                visit_time: 1234567890,
                ad_id: '123456',
                adset_id: '789012',
                campaign_id: '345678',
                attribution_share: 0.75,
                attribution_model: AttributionModel.LAST_CLICK,
                attr_window: 28,
                attribution_value: 250.99,
                attribution_source: 'AMM',
                touchpoint_type: 'impression',
                touchpoint_ts: 1234567800,
                attribution_method: AttributionMethod.INVALID_RESPONSE,
                decline_reason: DeclineReason.VALIDATION_RULE_DETECTED,
                auditing_token: 'full_token',
                linkage_key: 'full_key',
            });
        });

        test('normalize should include attribution_setting when set', function() {
            // Arrange
            const attributionData = new AttributionData();
            const attributionSetting = new AttributionSetting(24, 168);
            attributionData.setScope('click');
            attributionData.setAttributionSetting(attributionSetting);

            // Act
            const normalized = attributionData.normalize();

            // Assert
            expect(normalized.scope).toBe('click');
            expect(normalized.attribution_setting).toBeDefined();
            expect(normalized.attribution_setting.inactivity_window_hours).toBe(24);
            expect(normalized.attribution_setting.reattribution_window_hours).toBe(168);
        });

        test('normalize should not include attribution_setting when not set', function() {
            // Arrange
            const attributionData = new AttributionData();
            attributionData.setScope('click');
            attributionData.setVisitTime(1234567890);

            // Act
            const normalized = attributionData.normalize();

            // Assert
            expect(normalized.scope).toBe('click');
            expect(normalized.visit_time).toBe(1234567890);
            expect(normalized.attribution_setting).toBeUndefined();
        });
    });

    describe('AttributionSetting', function() {
        test('Constructor should work with all parameters', function() {
            // Arrange
            const inactivityWindowHours = 24;
            const reattributionWindowHours = 168;

            // Act
            const attributionSetting = new AttributionSetting(
                inactivityWindowHours,
                reattributionWindowHours
            );

            // Assert
            expect(attributionSetting.inactivity_window_hours).toBe(inactivityWindowHours);
            expect(attributionSetting.reattribution_window_hours).toBe(reattributionWindowHours);
        });

        test('Setter methods should work for all fields', function() {
            // Arrange
            const attributionSetting = new AttributionSetting(24, 168);

            // Act
            attributionSetting.setInactivityWindowHours(48);
            attributionSetting.setReattributionWindowHours(336);

            // Assert
            expect(attributionSetting.inactivity_window_hours).toBe(48);
            expect(attributionSetting.reattribution_window_hours).toBe(336);
        });

        test('Setter methods should return AttributionSetting instance for chaining', function() {
            // Arrange
            const attributionSetting = new AttributionSetting(24, 168);

            // Act
            const result = attributionSetting
                .setInactivityWindowHours(72)
                .setReattributionWindowHours(504);

            // Assert
            expect(result).toBe(attributionSetting);
            expect(result.inactivity_window_hours).toBe(72);
            expect(result.reattribution_window_hours).toBe(504);
        });

        test('Property setters should work for all fields', function() {
            // Arrange
            const attributionSetting = new AttributionSetting(24, 168);

            // Act
            attributionSetting.inactivity_window_hours = 96;
            attributionSetting.reattribution_window_hours = 672;

            // Assert
            expect(attributionSetting.inactivity_window_hours).toBe(96);
            expect(attributionSetting.reattribution_window_hours).toBe(672);
        });

        test('normalize should return all fields when set', function() {
            // Arrange
            const attributionSetting = new AttributionSetting(24, 168);

            // Act
            const normalized = attributionSetting.normalize();

            // Assert
            expect(normalized).toEqual({
                inactivity_window_hours: 24,
                reattribution_window_hours: 168,
            });
        });
    });
});
