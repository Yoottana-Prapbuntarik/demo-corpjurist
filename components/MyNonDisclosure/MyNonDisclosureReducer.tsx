import { MyNonDisclosureAction, MyNonDisclosurePresenter } from './MyNonDisclosureInterface'
import { myNonDisclosurePresenter } from './MyNonDisclosurePresenter'
import { MyNonDisclosureAPIClient } from '../../apis/myNonDisclosureAPIClient'
import { KeyManager } from '../../manager/keyManager'
import { NonDisclosureAPIClient } from '../../apis/nonDisclosureAPIClient'
import { actionTypes as formActionTypes } from 'redux-form'
export const myNonDisclosureReducer = (state: MyNonDisclosurePresenter = myNonDisclosurePresenter, action: any): any => {
  switch (action.type) {
    case MyNonDisclosureAction.handleChangeApproval:
      return {
        ...state,
        partyI: {
          name: KeyManager.Approval,
          valueEmailParty: action.payload,
          placeholder: KeyManager.Email
        }
      }

    case MyNonDisclosureAction.handleChangePartyII:
      return {
        ...state,
        partyII: {
          name: KeyManager.EmailPartyII,
          valueEmailParty: action.payload,
          placeholder: KeyManager.Email
        }
      }

    case MyNonDisclosureAPIClient.MyNonDisclosureAPIClientSuccess:
      return {
        ...state,
        isLoadingMyNonDisclosure: false,
        isAcknowledgeError: true,
        keyMyNonDisclosureFalse: action.keyMessage
      }

    case MyNonDisclosureAPIClient.MyNonDisclosureAPIClientFailed:
      return {
        ...state,
        isLoadingMyNonDisclosure: false,
        isAcknowledgeError: true,
        keyMyNonDisclosureFalse: action.keyMessage
      }

    case MyNonDisclosureAction.acknowledgeError:
      return {
        ...state,
        isAcknowledgeError: action.payload
      }

    case MyNonDisclosureAction.startLoadingMyNonDisclosure:
      return {
        ...state,
        isLoadingMyNonDisclosure: action.payload
      }

    case NonDisclosureAPIClient.getDisclosureAPIClientSuccess:
      let currentEmail;
      currentEmail = action.dataAPI.nda_email === null ? null : action.dataAPI.nda_email.email_party;
      return {
        ...state,
        partyII: {
          name: KeyManager.EmailPartyII,
          valueEmailParty: currentEmail,
          placeholder: KeyManager.EmailPartyII
        }
      }

      case formActionTypes.INITIALIZE:
        const myNonDisclosurePresenterInit = {
          partyII: {
            name: KeyManager.EmailPartyII,
            valueEmailParty: state.partyII.valueEmailParty,
            placeholder: KeyManager.EmailPartyII
          }
        }
        return{
          ...state,
          myNonDisclosurePresenterInit,
        }
    case MyNonDisclosureAction.clearFormisNotEmailPartyII:
      return {
        ...state,
        partyII: {
          name: KeyManager.EmailPartyII,
          valueEmailParty: '',
          placeholder: KeyManager.EmailPartyII
        }
      }
    default:
      return state
  }
}
