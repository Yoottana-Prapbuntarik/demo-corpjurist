import { ConfirmMyNonDisclosureAction, ConfirmMyNonDisclosurePresenter } from './ConfirmMyNonDisclosureInterface'
import { confirmMyNonDisclosurePresenter } from './ConfirmMyNonDisclosurePresenter'
import { VerifyMyNonDistclosureAction } from '../../apis/verifyMyNonDistclosureAPIClient'
import { ConfirmMyNonDisclosure } from '../../apis/confirmMyNonDisclosureAPIClient'
import Router from 'next/router'
import { routeToSuccessPage, routeToNotFoundData } from "../../manager/routerManager";
import { KeyManager } from '../../manager/keyManager'

export let verificationEmail: any;

export const confirmMyNonDisclosureReducer = (state: ConfirmMyNonDisclosurePresenter = confirmMyNonDisclosurePresenter, action: any): any => {
  switch (action.type) {
    case ConfirmMyNonDisclosureAction.handleChangeTextFieldInformationReason:
      return {
        ...state,
        informationReason: {
          name: KeyManager.ReasonInformation,
          labelName: KeyManager.ReasonInformation,
          informationReason: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldScopeReason:      
      return {
        ...state,
        scopeReason: {
          name: KeyManager.ReasonScopeOfDiscussion,
          labelName: KeyManager.ReasonScopeOfDiscussion,
          scopeReason: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldTermReason:
      return {
        ...state,
        termReason: {
          name: KeyManager.ReasonDate,
          labelName: KeyManager.ReasonDate,
          termReason: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldJurisdictionReason:
      return {
        ...state,
        jurisdictionReason: {
          name: KeyManager.ReasonArbitrationJurisdiction,
          labelName: KeyManager.ReasonArbitrationJurisdiction,
          jurisdictionReason: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldChoiceOfLawsReason:
      return {
        ...state,
        choiceOfLawsReason: {
          name: KeyManager.ReasonChoiceOfLaw,
          labelName: KeyManager.ReasonChoiceOfLaw,
          choiceOfLawsReason: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldServivalReason:
      return {
        ...state,
        servivalReason: {
          name: KeyManager.ReasonPeriodOfSecret,
          labelName: KeyManager.ReasonPeriodOfSecret,
          servivalReason: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldOtherReason:
      return {
        ...state,
        otherReason: {
          name: KeyManager.ReasonOther,
          labelName: KeyManager.ReasonOther,
          otherReason: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldAddressI:
      return {
        ...state,
        addressI: {
          name: KeyManager.ReasonAddressI,
          labelName: KeyManager.ReasonAddressI,
          addressReasonI: action.payload
        }

      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldAddressII:
      return {
        ...state,
        addressII: {
          name: KeyManager.ReasonAddressII,
          labelName: KeyManager.ReasonAddressII,
          addressReasonII: action.payload
        }

      }
    case ConfirmMyNonDisclosureAction.handleChangeTextFieldEndDate:
      return {
        ...state,
        endDate: {
          name: KeyManager.ReasonEndDate,
          labelName: KeyManager.ReasonEndDate,
          endDateReason: action.payload
        }

      }
    case ConfirmMyNonDisclosureAction.handleChangeTextFieldNameI:
      return {
        ...state,
        nameI: {
          name: KeyManager.ReasonDisclosureNameI,
          labelName: KeyManager.ReasonDisclosureNameI,
          nameReasonI: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldNameII:
      return {
        ...state,
        nameII: {
          name: KeyManager.ReasonDisclosureNameII,
          labelName: KeyManager.ReasonDisclosureNameII,
          nameReasonII: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldNameOfSignatoryPartyI:
      return {
        ...state,
        nameOfSignatoryPartyI: {
          name: KeyManager.ReasonNameOfSigningCompanyI,
          labelName: KeyManager.ReasonNameOfSigningCompanyI,
          nameOfSignatoryPartyReasonI: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldNameOfSignatoryPartyII:
      return {
        ...state,
        nameOfSignatoryPartyII: {
          name: KeyManager.ReasonNameOfSigningCompanyII,
          labelName: KeyManager.ReasonNameOfSigningCompanyII,
          nameOfSignatoryPartyReasonII: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldTitleAndCapacityOfSignatoryPartyI:
      return {
        ...state,
        titleAndCapacityOfSignatoryPartyI: {
          name: KeyManager.ReasonTitleAndCapacityOfSigningCompanyI,
          labelName: KeyManager.ReasonTitleAndCapacityOfSigningCompanyI,
          titleAndCapacityOfSignatoryPartyReasonI: action.payload
        }
      }

    case ConfirmMyNonDisclosureAction.handleChangeTextFieldTitleAndCapacityOfSignatoryPartyII:
      return {
        ...state,
        titleAndCapacityOfSignatoryPartyII: {
          name: KeyManager.ReasonTitleAndCapacityOfSigningCompanyII,
          labelName: KeyManager.ReasonTitleAndCapacityOfSigningCompanyII,
          titleAndCapacityOfSignatoryPartyReasonII: action.payload
        }
      }


    case ConfirmMyNonDisclosureAction.startLoadingConfirmMyNonDisclosure:
      return {
        ...state,
        isLoadingConfirmMyNonDisclosure: action.payload
      }

    case VerifyMyNonDistclosureAction.verifyMyNonDistclosureSuccess:
      verificationEmail = action.verifyData
      if(action.verifyStatus === 204){
        Router.replace(routeToNotFoundData)
      }
      return {
        ...state,
        pdfReader: action.verifyData.pdf_view_link,
        isShowPage: action.verifyStatus === 204 ? false : true
      }

    case ConfirmMyNonDisclosure.ConfirmMyNonDisclosureSuccess:
      Router.replace(routeToSuccessPage)
      return {
        ...state,
        isLoadingConfirmMyNonDisclosure: false,
        isAcknowledgeError: false,
        keyConfirmMyNonDisclosureNdaFalse: action.keyMessage
      }

    default:
      return state
  }
}