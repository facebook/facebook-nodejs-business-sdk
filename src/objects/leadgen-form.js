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
      tracking_parameters: 'tracking_parameters',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      deleted: 'DELETED',
      draft: 'DRAFT',
    });
  }
  static get Locale (): Object {
    return Object.freeze({
      ar_ar: 'AR_AR',
      cs_cz: 'CS_CZ',
      da_dk: 'DA_DK',
      de_de: 'DE_DE',
      en_gb: 'EN_GB',
      en_us: 'EN_US',
      es_es: 'ES_ES',
      es_la: 'ES_LA',
      fi_fi: 'FI_FI',
      fr_fr: 'FR_FR',
      he_il: 'HE_IL',
      hi_in: 'HI_IN',
      hu_hu: 'HU_HU',
      id_id: 'ID_ID',
      it_it: 'IT_IT',
      ja_jp: 'JA_JP',
      ko_kr: 'KO_KR',
      nb_no: 'NB_NO',
      nl_nl: 'NL_NL',
      pl_pl: 'PL_PL',
      pt_br: 'PT_BR',
      pt_pt: 'PT_PT',
      ro_ro: 'RO_RO',
      ru_ru: 'RU_RU',
      sv_se: 'SV_SE',
      th_th: 'TH_TH',
      tr_tr: 'TR_TR',
      vi_vn: 'VI_VN',
      zh_cn: 'ZH_CN',
      zh_hk: 'ZH_HK',
      zh_tw: 'ZH_TW',
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

  getTestLeads (fields, params, fetchFirstPage = true): Lead {
    return this.getEdge(
      Lead,
      fields,
      params,
      fetchFirstPage,
      '/test_leads'
    );
  }

  createTestLead (fields, params): Lead {
    return this.createEdge(
      '/test_leads',
      fields,
      params,
      Lead
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
