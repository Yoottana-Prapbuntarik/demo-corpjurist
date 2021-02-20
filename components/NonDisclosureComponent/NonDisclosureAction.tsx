import { Dispatch } from 'redux'
import { NonDisclosureAction } from './NonDisclosureInterface'
import { nonDisclosureAPIClient, updateNonDisclosureAPIClient, getNonDisclosureAPIClient, getNonDisclosureReasonAPIClient, statusCode } from '../../apis/nonDisclosureAPIClient'
import { getCompanyBasicInfo } from "../../apis/companyBasicInfoAPIClient";
import { reset, arrayPush } from 'redux-form'
import { FormManager } from '../../manager/formManager'
import { currentDataNonDisclosure, companyBasicInfoId, dataNonDisclosureApi } from './NonDisclosureReducer'
import Router from 'next/router'
import { routeToPageMyNonDisclosureAgreement } from '../../manager/routerManager'
import { NonDisclosureVariable } from "./NonDisclosureVariable";
import { i18n } from "../../i18n";
export let idUpdate = "";

export const mapDispatchToProps = (dispatch: Dispatch) => ({

  acknowledgeError: (event: any) => {
    dispatch({
      type: NonDisclosureAction.acknowledgeError,
      payload: event
    })
    if (statusCode === 200) {
      Router.replace({ pathname: routeToPageMyNonDisclosureAgreement, query: { idEditing: idUpdate } })
    }
  },

  counterWord: (event: string) => {
    dispatch({
      type: NonDisclosureAction.counterWord,
      payload: event
    })
  },

  handldSubmitForm: async (event: any) => {
    let listNameOfSigninI = []
    let listTitleOfSigningI = []

    await event.signatoryAuthority.map(item => {
      listTitleOfSigningI.push(item.title)
      listNameOfSigninI.push(item.name)
    })

    if (event.signatoryAuthority.length === 0) {
      dispatch({
        type: NonDisclosureAction.alertSignatory,
        payload: "invalidSignatory"
      })
    } else {


      dispatch({
        type: NonDisclosureAction.startLoadingNda,
        payload: true
      })

      const getTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
      const currentChoiceOfLaw = event.choiceOfLaw === undefined ? 'Thailand' : event.choiceOfLaw.name
      const currentArbitrationJurisdiction = event.arbitrationJurisdiction === undefined ? 'Thailand' : event.arbitrationJurisdiction.name
      const currentDate = event.date === undefined ? getTime : event.date
      const currentEndDate = event.endDate === undefined ? getTime : event.endDate

      dispatch(nonDisclosureAPIClient(
        currentDate,
        event.disclosureName,
        event.disclosureNameII,
        event.addressI,
        event.addressII,
        event.partyI,
        event.partyII,
        currentEndDate,
        event.periodOfSecret,
        currentArbitrationJurisdiction,
        currentChoiceOfLaw,
        listNameOfSigninI.toString(),
        event.nameOfSigningII,
        event.scopeOfDiscussion,
        listTitleOfSigningI[0],
        event.titleAndCapacityOfSigningII,
        companyBasicInfoId,
        event.ndaLanguage.value.toUpperCase(),
        dataNonDisclosureApi.image_uri
      ))
    }
  },

  getNonDisclosureAPIClient: (id: string) => {
    idUpdate = id;
    if (idUpdate !== undefined || idUpdate !== '') {
      dispatch(getNonDisclosureAPIClient(idUpdate))
      dispatch({
        type: NonDisclosureAction.startLoadingNda,
        payload: true
      })
    }

  },

  getNonDisclosureReasonAPIClient: (id: string) => {
    dispatch(getNonDisclosureReasonAPIClient(id))
  },

  handldUpdateSubmitForm: async (event: any) => {

    let listNameOfSigninI = []
    let listTitleOfSigningI = []

    await event.signatoryAuthority.map(item => {
      listTitleOfSigningI.push(item.title)
      listNameOfSigninI.push(item.name)
    })

    dispatch({
      type: NonDisclosureAction.hideRejectReason,
      payload: true
    })
    dispatch({
      type: NonDisclosureAction.startLoadingNda,
      payload: true
    })
    const currentDisclosureName = event.disclosureName === undefined ? currentDataNonDisclosure.name_1 : event.disclosureName
    const currentDisclosureNameII = event.disclosureNameII === undefined ? currentDataNonDisclosure.name_2 : event.disclosureNameII
    const currentAddressI = event.addressI === undefined ? currentDataNonDisclosure.address_1 : event.addressI
    const currentAddressII = event.addressII === undefined ? currentDataNonDisclosure.address_2 : event.addressII
    const currentChoiceOfLaw = event.choiceOfLaw === undefined ? currentDataNonDisclosure.choice_of_law.name : event.choiceOfLaw.name
    const currentArbitrationJurisdiction = event.arbitrationJurisdiction === undefined ? currentDataNonDisclosure.jurisdiction.name : event.arbitrationJurisdiction.name
    const currentDate = event.date === undefined ? currentDataNonDisclosure.date_of_agreement : event.date
    const currentEndDate = event.endDate === undefined ? currentDataNonDisclosure.end_date : event.endDate
    const currentPeriodOfSecret = event.periodOfSecret === undefined ? currentDataNonDisclosure.survive_period : event.periodOfSecret
    const currentNameOfSigningII = event.nameOfSigningII === undefined ? currentDataNonDisclosure.name_of_signatory_party_2 : event.nameOfSigningII
    const currentScopeOfDiscussion = event.scopeOfDiscussion === undefined ? currentDataNonDisclosure.scope_of_discussion : event.scopeOfDiscussion
    const currenTtitleAndCapacityOfSigningII = event.titleAndCapacityOfSigningII === undefined ? currentDataNonDisclosure.end_date : event.titleAndCapacityOfSigningII
    dispatch(updateNonDisclosureAPIClient(
      idUpdate,
      currentDate,
      currentDisclosureName,
      currentDisclosureNameII,
      currentAddressI,
      currentAddressII,
      event.partyI,
      event.partyII,
      currentEndDate,
      currentPeriodOfSecret,
      currentArbitrationJurisdiction,
      currentChoiceOfLaw,
      listNameOfSigninI.toString(),
      currentNameOfSigningII,
      currentScopeOfDiscussion,
      listTitleOfSigningI.toString(),
      currenTtitleAndCapacityOfSigningII,
      event.ndaLanguage.value.toUpperCase(),
      dataNonDisclosureApi.image_uri
    ))
    dispatch(reset(FormManager.NonDisclosureForm))
  },

  clearFormisNotUpdate: () => {
    dispatch({
      type: NonDisclosureAction.clearFormisNotUpdate
    })
  },

  getCompanyBasicInfo: () => {
    dispatch(getCompanyBasicInfo())
  },

  addSignatory: async (name) => {
    await dispatch({ type: NonDisclosureAction.addSignatory })
    await dispatch(arrayPush(FormManager.NonDisclosureForm, "signatoryAuthority", {
      title: i18n.language === "en" ? NonDisclosureVariable.signatoryTitleEN :
        NonDisclosureVariable.signatoryTitleTH, name: name
    }))
  },

  removeSignatory: () => {
    dispatch({ type: NonDisclosureAction.removeSignatory })
  },

  subScribeNameOfSignatory: (event: any) => {
    dispatch({
      type: NonDisclosureAction.subScribeNameOfSignatory,
      payload: event
    })
  }
})
