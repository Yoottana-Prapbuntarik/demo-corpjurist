import {
  ConfirmMyNonDisclosurePresenter,
  TextReason,
  InformationReason,
  ScopeReason,
  TermReason,
  JurisdictionReason,
  ChoiceOfLawsReason,
  ServivalReason,
  OtherReason,
  AddressI,
  AddressII,
  EndDate,
  NameI,
  NameII,
  NameOfSignatoryPartyI,
  NameOfSignatoryPartyII,
  TitleAndCapacityOfSignatoryPartyI,
  TitleAndCapacityOfSignatoryPartyII,
} from './ConfirmMyNonDisclosureInterface'
import { KeyManager } from '../../manager/keyManager'

const textReason: TextReason = {
  name: KeyManager.RejectReason,
}

const informationReason: InformationReason = {
  name: KeyManager.ReasonInformation,
  labelName: KeyManager.ReasonInformation,
  informationReason: ''
}

const scopeReason: ScopeReason = {
  name: KeyManager.ReasonScopeOfDiscussion,
  labelName: KeyManager.ReasonScopeOfDiscussion,
  scopeReason: ''
}

const termReason: TermReason = {
  name: KeyManager.ReasonDate,
  labelName: KeyManager.ReasonDate,
  termReason: ''
}

const jurisdictionReason: JurisdictionReason = {
  name: KeyManager.ReasonArbitrationJurisdiction,
  labelName: KeyManager.ReasonArbitrationJurisdiction,
  jurisdictionReason: ''
}

const choiceOfLawsReason: ChoiceOfLawsReason = {
  name: KeyManager.ReasonChoiceOfLaw,
  labelName: KeyManager.ReasonChoiceOfLaw,
  choiceOfLawsReason: ''
}

const servivalReason: ServivalReason = {
  name: KeyManager.ReasonPeriodOfSecret,
  labelName: KeyManager.ReasonPeriodOfSecret,
  servivalReason: ''
}

const otherReason: OtherReason = {
  name: KeyManager.ReasonOther,
  labelName: KeyManager.ReasonOther,
  otherReason: ''
}

const addressI: AddressI = {
  name: KeyManager.ReasonAddressI,
  labelName: KeyManager.ReasonAddressI,
  addressReasonI: ''
}

const addressII: AddressII = {
  name: KeyManager.ReasonAddressII,
  labelName: KeyManager.ReasonAddressII,
  addressReasonII: ''
}

const endDate: EndDate = {
  name: KeyManager.ReasonEndDate,
  labelName: KeyManager.ReasonEndDate,
  endDateReason: ''
}

const nameI: NameI = {
  name: KeyManager.ReasonDisclosureNameI,
  labelName: KeyManager.ReasonDisclosureNameI,
  nameReasonI: ''

}

const nameII: NameII = {
  name: KeyManager.ReasonDisclosureNameII,
  labelName: KeyManager.ReasonDisclosureNameII,
  nameReasonII: ''
}

const nameOfSignatoryPartyI: NameOfSignatoryPartyI = {
  name: KeyManager.ReasonNameOfSigningCompanyI,
  labelName: KeyManager.ReasonNameOfSigningCompanyI,
  nameOfSignatoryPartyReasonI: ''
}

const nameOfSignatoryPartyII: NameOfSignatoryPartyII = {
  name: KeyManager.ReasonNameOfSigningCompanyII,
  labelName: KeyManager.ReasonNameOfSigningCompanyII,
  nameOfSignatoryPartyReasonII: ''
}

const titleAndCapacityOfSignatoryPartyI: TitleAndCapacityOfSignatoryPartyI = {
  name: KeyManager.ReasonTitleAndCapacityOfSigningCompanyI,
  labelName: KeyManager.ReasonTitleAndCapacityOfSigningCompanyI,
  titleAndCapacityOfSignatoryPartyReasonI: ''
}

const titleAndCapacityOfSignatoryPartyII: TitleAndCapacityOfSignatoryPartyII = {
  name: KeyManager.ReasonTitleAndCapacityOfSigningCompanyII,
  labelName: KeyManager.ReasonTitleAndCapacityOfSigningCompanyII,
  titleAndCapacityOfSignatoryPartyReasonII: ''
}

export const confirmMyNonDisclosurePresenter: ConfirmMyNonDisclosurePresenter = {
  headerConfirmMyNonDisclosure: KeyManager.DiscloreTitlePage,
  textReason: textReason,
  titlePopupConfirmNDA: 'titlePopupConfirmNda',
  choose: "chooseApprove",
  buttonSend: 'send',
  textApprove: 'approve',
  textReject: 'reject',
  isLoadingConfirmMyNonDisclosure: false,
  isAcknowledgeError: false,
  informationReason,
  scopeReason,
  termReason,
  jurisdictionReason,
  choiceOfLawsReason,
  servivalReason,
  otherReason,
  keyConfirmMyNonDisclosureNdaFalse: '',
  pdfReader: '',
  addressI,
  addressII,
  endDate,
  nameI,
  nameII,
  nameOfSignatoryPartyI,
  nameOfSignatoryPartyII,
  titleAndCapacityOfSignatoryPartyI,
  titleAndCapacityOfSignatoryPartyII,
  placeholderSelectRejectReason: "placeholderSelectRejectReason",
  detailSelectRejectReason: "detailSelectRejectReason",
  guidelineRejectReasonTopic: "guidelineRejectReasonTopic",
  rejectTitle: "rejectTitle",
  isShowPage: false
}