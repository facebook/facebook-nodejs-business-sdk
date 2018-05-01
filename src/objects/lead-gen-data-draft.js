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
 * LeadGenDataDraft
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenDataDraft extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      allow_organic_lead: 'allow_organic_lead',
      block_display_for_non_targeted_viewer: 'block_display_for_non_targeted_viewer',
      context_card: 'context_card',
      continued_flow_request_method: 'continued_flow_request_method',
      created_time: 'created_time',
      creator_id: 'creator_id',
      expired_leads_count: 'expired_leads_count',
      follow_up_action_url: 'follow_up_action_url',
      id: 'id',
      is_continued_flow: 'is_continued_flow',
      is_optimized_for_quality: 'is_optimized_for_quality',
      leadgen_export_csv_url: 'leadgen_export_csv_url',
      legal_content: 'legal_content',
      locale: 'locale',
      name: 'name',
      page: 'page',
      question_page_custom_headline: 'question_page_custom_headline',
      questions: 'questions',
      status: 'status',
      thank_you_page: 'thank_you_page'
    });
  }

  static get Locale (): Object {
    return Object.freeze({
      en_us: 'EN_US',
      it_it: 'IT_IT',
      fr_fr: 'FR_FR',
      es_es: 'ES_ES',
      es_la: 'ES_LA',
      de_de: 'DE_DE',
      en_gb: 'EN_GB',
      pt_br: 'PT_BR',
      zh_tw: 'ZH_TW',
      zh_hk: 'ZH_HK',
      tr_tr: 'TR_TR',
      ar_ar: 'AR_AR',
      cs_cz: 'CS_CZ',
      da_dk: 'DA_DK',
      fi_fi: 'FI_FI',
      he_il: 'HE_IL',
      hi_in: 'HI_IN',
      hu_hu: 'HU_HU',
      id_id: 'ID_ID',
      ja_jp: 'JA_JP',
      ko_kr: 'KO_KR',
      nb_no: 'NB_NO',
      nl_nl: 'NL_NL',
      pl_pl: 'PL_PL',
      pt_pt: 'PT_PT',
      ro_ro: 'RO_RO',
      ru_ru: 'RU_RU',
      sv_se: 'SV_SE',
      th_th: 'TH_TH',
      vi_vn: 'VI_VN',
      zh_cn: 'ZH_CN'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      deleted: 'DELETED',
      draft: 'DRAFT'
    });
  }

  get (fields, params): LeadGenDataDraft {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): LeadGenDataDraft {
    return super.update(
      params
    );
  }
}
