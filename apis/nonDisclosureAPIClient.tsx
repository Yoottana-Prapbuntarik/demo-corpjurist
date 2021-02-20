import { Dispatch } from 'redux'
import { serviceToken } from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'

export let statusCode: number

export enum NonDisclosureAPIClient {
  nonDisclosureAPIClientSuccess = 'nonDisclosureAPIClient_Success',
  nonDisclosureAPIClientFailed = 'nonDisclosureAPIClient_Failed',
  getDisclosureAPIClientSuccess = 'getDisclosureAPIClient_Success',
  getDisclosureAPIClientFailed = 'getDisclosureAPIClient_Failed',
  getDisclosureReasonAPIClientSuccess = 'getDisclosureReasonAPIClient_Success',
  updateDisclosureAPIClientSuccess = 'updateDisclosureAPIClient_Success',
  updateDisclosureAPIClientFailed = 'updateDisclosureAPIClient_Failed',
}

export const nonDisclosureAPIClient: any = (date: string,
  disclosureName: string,
  disclosureNameII: string,
  address: string,
  addressII: string,
  partyI: string,
  partyII: string,
  endDate: string,
  periodOfSecret: string,
  arbitrationJurisdiction: string,
  choiceOfLaw: string,
  nameOfSigning1: string,
  nameOfSigning2: string,
  scopeOfDiscussion: string,
  titleAndCapacityOfSigning1: string,
  titleAndCapacityOfSigning2: string,
  companyBasicInfoId: number,
  language: string,
  imageUrl: string
  ) => async (dispatch: Dispatch
  ) => {
    serviceToken({
      method: 'post',
      url: 'nda/',
      data: params(
        date,
        disclosureName,
        disclosureNameII,
        address,
        addressII,
        partyI,
        partyII,
        endDate,
        periodOfSecret,
        arbitrationJurisdiction,
        choiceOfLaw,
        nameOfSigning1,
        nameOfSigning2,
        scopeOfDiscussion,
        titleAndCapacityOfSigning1,
        titleAndCapacityOfSigning2,
        companyBasicInfoId,
        language,
        imageUrl
        )
    }).then((response) => {
      if (response) {
        statusCode = response.status
        dispatch({
          type: NonDisclosureAPIClient.nonDisclosureAPIClientSuccess,
          keyMessage: KeyManager.SaveAgreement
        })

        localStorage.setItem('pdf_view_link', response.data.pdf_view_link)
        localStorage.setItem('pdf_id', response.data.id)
      }
    }).catch((error) => {
      statusCode = error.response.status
      dispatch({
        type: NonDisclosureAPIClient.nonDisclosureAPIClientFailed,
        keyMessage: error
      })
    })
  }

export const updateNonDisclosureAPIClient: any = (
  id: string,
  date: string,
  disclosureName: string,
  disclosureNameII: string,
  address: string,
  addressII: string,
  partyI: string,
  partyII: string,
  endDate: string,
  periodOfSecret: string,
  arbitrationJurisdiction: string,
  choiceOfLaw: string,
  nameOfSigning1: string,
  nameOfSigning2: string,
  scopeOfDiscussion: string,
  titleAndCapacityOfSigning1: string,
  titleAndCapacityOfSigning2: string,
  CompanyBasicInfo: number,
  language: string,
  imageUrl: string
  ) => async (dispatch: Dispatch
  ) => {
    serviceToken({
      method: 'put',
      url: `nda/${parseInt(id)}/edit/`,
      data: params(
        date,
        disclosureName,
        disclosureNameII,
        address,
        addressII,
        partyI,
        partyII,
        endDate,
        periodOfSecret,
        arbitrationJurisdiction,
        choiceOfLaw,
        nameOfSigning1,
        nameOfSigning2,
        scopeOfDiscussion,
        titleAndCapacityOfSigning1,
        titleAndCapacityOfSigning2,
        CompanyBasicInfo,
        language,
        imageUrl
        )
    }).then((response) => {
        if (response) {
          statusCode = response.status          
          dispatch({
            type: NonDisclosureAPIClient.updateDisclosureAPIClientSuccess,
            keyMessage: KeyManager.SendInformationCompanySuccess
          })

          localStorage.setItem('pdf_view_link', response.data.pdf_view_link)
          localStorage.setItem('pdf_id', response.data.id)
        }
      })

      .catch((error) => {
        statusCode = error.response.status
        dispatch({
          type: NonDisclosureAPIClient.updateDisclosureAPIClientFailed,
          keyMessage: error
        })
      })
  }

export const getNonDisclosureAPIClient: any = (id: string) => async (dispatch: Dispatch) => {
  serviceToken({
    method: 'get',
    url: `nda/${id}/edit/`
  }).then(response => {
    if (response) {
      dispatch({
        type: NonDisclosureAPIClient.getDisclosureAPIClientSuccess,
        dataAPI: response.data,
        keyStatus: response.status
      })
    }
  }).catch(error =>{
    if(error){
      dispatch({
        type: NonDisclosureAPIClient.getDisclosureAPIClientFailed,
      })
    }
  })
}

export const getNonDisclosureReasonAPIClient: any = (id: string) => async (dispatch: Dispatch) => {
  serviceToken({
    method: 'get',
    url: `nda_reason/${id}/`
  }).then(response => {
    if (response) {
      dispatch({
        type: NonDisclosureAPIClient.getDisclosureReasonAPIClientSuccess,
        dataReasonAPI: response.data,
      })
    }
  })
}

const params = (
  date: string,
  disclosureName: string,
  disclosureNameII: string,
  address: string,
  addressII: string,
  partyI: string,
  partyII: string,
  endDate: string,
  periodOfSecret: string,
  arbitrationJurisdiction: string,
  choiceOfLaw: string,
  nameOfSigning1: string,
  nameOfSigning2: string,
  scopeOfDiscussion: string,
  titleAndCapacityOfSigning1: string,
  titleAndCapacityOfSigning2: string,
  companyBasicInfoId: number,
  language: string,
  imageUrl: string
) => {
  return {
    date_of_agreement: date,
    name_1: disclosureName,
    name_2: disclosureNameII,
    address_1: address,
    address_2: addressII,
    party_1: partyI,
    party_2: partyII,
    scope_of_discussion: scopeOfDiscussion,
    end_date: endDate,
    survive_period: periodOfSecret,
    jurisdiction: arbitrationJurisdiction,
    choice_of_law: choiceOfLaw,
    name_of_signatory_party_1: nameOfSigning1,
    name_of_signatory_party_2: nameOfSigning2,
    title_and_capacity_of_signatory_party_1: titleAndCapacityOfSigning1,
    title_and_capacity_of_signatory_party_2: titleAndCapacityOfSigning2,
    CompanyBasicInfo: companyBasicInfoId,
    language: language,
    imageUrl: imageUrl
  }
}
