/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Lead from './lead';

/**
 * LeadgenForm
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadgenForm extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      allow_organic_lead: 'allow_organic_lead',
      block_display_for_non_targeted_viewer: 'block_display_for_non_targeted_viewer',
      context_card: 'context_card',
      created_time: 'created_time',
      creator: 'creator',
      creator_id: 'creator_id',
      cusomized_tcpa_content: 'cusomized_tcpa_content',
      expired_leads_count: 'expired_leads_count',
      extra_details: 'extra_details',
      follow_up_action_text: 'follow_up_action_text',
      follow_up_action_url: 'follow_up_action_url',
      id: 'id',
      is_optimized_for_quality: 'is_optimized_for_quality',
      leadgen_export_csv_url: 'leadgen_export_csv_url',
      leads_count: 'leads_count',
      legal_content: 'legal_content',
      locale: 'locale',
      messenger_welcome_message: 'messenger_welcome_message',
      name: 'name',
      organic_leads_count: 'organic_leads_count',
      page: 'page',
      page_id: 'page_id',
      privacy_policy_url: 'privacy_policy_url',
      qualifiers: 'qualifiers',
      question_page_custom_headline: 'question_page_custom_headline',
      questions: 'questions',
      status: 'status',
      tcpa_compliance: 'tcpa_compliance',
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

  getLeads (fields, params, fetchFirstPage = true): Lead {
    return this.getEdge(
      Lead,
      fields,
      params,
      fetchFirstPage,
      '/leads'
    );
  }

  createLead (fields, params): LeadgenForm {
    return this.createEdge(
      '/leads',
      fields,
      params,
      LeadgenForm
    );
  }

  createTestLead (fields, params): LeadgenForm {
    return this.createEdge(
      '/test_leads',
      fields,
      params,
      LeadgenForm
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): LeadgenForm {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): LeadgenForm {
    return super.update(
      params
    );
  }
}
