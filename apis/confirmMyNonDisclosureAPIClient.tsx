import { Dispatch } from 'redux'
import service from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'

export let statusCode: number

export enum ConfirmMyNonDisclosure {
  ConfirmMyNonDisclosureSuccess = 'ConfirmMyNonDisclosureSuccess',
  ConfirmMyNonDisclosureFailed = 'ConfirmMyNonDisclosureFailed'
}

export const confirmMyNonDisclosure: any = (
  customerEmail: string,
  agreementString: string,
  term: string,
  nameI: string,
  nameII: string,
  AddressI: string,
  AddressII: string,
  scopeOfDiscussion: string,
  endDate: string,
  survivePeriod: string,
  jurisdiction: string,
  choiceOfLaw: string,
  nameOfSignatoryPartyI: string,
  nameOfSignatoryPartyII: string,
  titleAndCapacityOfSignatoryPartyI: string,
  titleAndCapacityOfSignatoryPartyII: string,
  other: string,
  id: string
) => async (dispatch: Dispatch) => {
  service({
    method: 'post',
    url: 'nda_sent_email_acceptance/',
    data: params(
      customerEmail,
      agreementString,
      term,
      nameI,
      nameII,
      AddressI,
      AddressII,
      scopeOfDiscussion,
      endDate,
      survivePeriod,
      jurisdiction,
      choiceOfLaw,
      nameOfSignatoryPartyI,
      nameOfSignatoryPartyII,
      titleAndCapacityOfSignatoryPartyI,
      titleAndCapacityOfSignatoryPartyII,
      other,
      id
    )
  }).then((response) => {
    if (response) {
      statusCode = response.status
      dispatch({
        type: ConfirmMyNonDisclosure.ConfirmMyNonDisclosureSuccess,
        keyMessage: KeyManager.SendInformationCompanySuccess
      })
      localStorage.removeItem('pdf_view_link')
      localStorage.removeItem('pdf_id')
    }
  })
}

export const confirmMyNonDisclosureWithApproval: any = (
  idApproval: string,
  agreementString: string,
  term: string,
  nameI: string,
  nameII: string,
  AddressI: string,
  AddressII: string,
  scopeOfDiscussion: string,
  endDate: string,
  survivePeriod: string,
  jurisdiction: string,
  choiceOfLaw: string,
  nameOfSignatoryPartyI: string,
  nameOfSignatoryPartyII: string,
  titleAndCapacityOfSignatoryPartyI: string,
  titleAndCapacityOfSignatoryPartyII: string,
  other: string,
  id: string
) => async (dispatch: Dispatch) => {
  service({
    method: 'put',
    url: `nda/approval_comfirmation/${idApproval}/`,
    data: paramsWithApproval(
      agreementString,
      term,
      nameI,
      nameII,
      AddressI,
      AddressII,
      scopeOfDiscussion,
      endDate,
      survivePeriod,
      jurisdiction,
      choiceOfLaw,
      nameOfSignatoryPartyI,
      nameOfSignatoryPartyII,
      titleAndCapacityOfSignatoryPartyI,
      titleAndCapacityOfSignatoryPartyII,
      other,
      id)

  }).then((response) => {
  if (response) {
    statusCode = response.status
    dispatch({
      type: ConfirmMyNonDisclosure.ConfirmMyNonDisclosureSuccess,
      keyMessage: KeyManager.SendInformationCompanySuccess
    })
    localStorage.removeItem('pdf_view_link')
    localStorage.removeItem('pdf_id')
  }
})
}

const params = (
  customerEmail: string,
  agreementString: string,
  term: string,
  nameI: string,
  nameII: string,
  AddressI: string,
  AddressII: string,
  scopeOfDiscussion: string,
  endDate: string,
  survivePeriod: string,
  jurisdiction: string,
  choiceOfLaw: string,
  nameOfSignatoryPartyI: string,
  nameOfSignatoryPartyII: string,
  titleAndCapacityOfSignatoryPartyI: string,
  titleAndCapacityOfSignatoryPartyII: string,
  other: string,
  id: string
) => {
  if (agreementString === "Reject") {
    return {
      email_party: customerEmail,
      status: agreementString,
      NDADetail: parseInt(id),
      NDADetailReason: [{
        NDADetail: parseInt(id),
        date_of_agreement: term,
        name_1: nameI,
        name_2: nameII,
        address_1: AddressI,
        address_2: AddressII,
        scope_of_discussion: scopeOfDiscussion,
        end_date: endDate,
        survive_period: survivePeriod,
        jurisdiction: jurisdiction,
        choice_of_law: choiceOfLaw,
        name_of_signatory_party_1: nameOfSignatoryPartyI,
        name_of_signatory_party_2: nameOfSignatoryPartyII,
        title_and_capacity_of_signatory_party_1: titleAndCapacityOfSignatoryPartyI,
        title_and_capacity_of_signatory_party_2: titleAndCapacityOfSignatoryPartyII,
        other: other
      }]
    }
  } else {
    return {
      email_party: customerEmail,
      status: agreementString,
      NDADetail: parseInt(id),
    }
  }
}


const paramsWithApproval = (
  agreementString: string,
  term: string,
  nameI: string,
  nameII: string,
  AddressI: string,
  AddressII: string,
  scopeOfDiscussion: string,
  endDate: string,
  survivePeriod: string,
  jurisdiction: string,
  choiceOfLaw: string,
  nameOfSignatoryPartyI: string,
  nameOfSignatoryPartyII: string,
  titleAndCapacityOfSignatoryPartyI: string,
  titleAndCapacityOfSignatoryPartyII: string,
  other: string,
  id: string) => {
  if (agreementString === "Reject") {
    return {
      status: agreementString,
      NDADetailReason: [{
        NDADetail: parseInt(id),
        date_of_agreement: term,
        name_1: nameI,
        name_2: nameII,
        address_1: AddressI,
        address_2: AddressII,
        scope_of_discussion: scopeOfDiscussion,
        end_date: endDate,
        survive_period: survivePeriod,
        jurisdiction: jurisdiction,
        choice_of_law: choiceOfLaw,
        name_of_signatory_party_1: nameOfSignatoryPartyI,
        name_of_signatory_party_2: nameOfSignatoryPartyII,
        title_and_capacity_of_signatory_party_1: titleAndCapacityOfSignatoryPartyI,
        title_and_capacity_of_signatory_party_2: titleAndCapacityOfSignatoryPartyII,
        other: other
      }]
    }
  } else if(agreementString === "Approve") {
    return {
      status: agreementString,
    }
  }
  else{
    return null
  }
}