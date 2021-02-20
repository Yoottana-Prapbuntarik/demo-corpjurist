import { MyNonDisclosurePresenter, PartyApproval, PartyII } from './MyNonDisclosureInterface'
import { KeyManager } from '../../manager/keyManager'

const partyApproval: PartyApproval = {
  name: KeyManager.Approval,
  valueEmailPartyApproval: '',
  placeholder: KeyManager.Email
}

const partyII: PartyII = {
  name: KeyManager.EmailPartyII,
  valueEmailParty: '',
  placeholder: KeyManager.Email
}

export const myNonDisclosurePresenter: MyNonDisclosurePresenter = {
  headerMyNonDisclosure: 'disclosureAgreement',
  partyApproval: partyApproval,
  partyII: partyII,
  buttonSendData: KeyManager.Send,
  isLoadingMyNonDisclosure: false,
  isAcknowledgeError: false,
  keyMyNonDisclosureFalse: ''
}
