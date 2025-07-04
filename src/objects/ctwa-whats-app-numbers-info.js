 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * CTWAWhatsAppNumbersInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CTWAWhatsAppNumbersInfo extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      can_manage_wa_flows: 'can_manage_wa_flows',
      formatted_whatsapp_number: 'formatted_whatsapp_number',
      is_business_number: 'is_business_number',
      is_calling_enabled: 'is_calling_enabled',
      number_country_prefix: 'number_country_prefix',
      page_whatsapp_number_id: 'page_whatsapp_number_id',
      waba_id: 'waba_id',
      whatsapp_number: 'whatsapp_number',
      whatsapp_smb_device: 'whatsapp_smb_device',
    });
  }

}
