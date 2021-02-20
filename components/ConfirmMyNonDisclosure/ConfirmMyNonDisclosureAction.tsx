import { Dispatch } from 'redux'
import { ConfirmMyNonDisclosureAction } from './ConfirmMyNonDisclosureInterface'
import { verificationMyNonDistclosure } from '../../apis/verifyMyNonDistclosureAPIClient'
import { confirmMyNonDisclosure, confirmMyNonDisclosureWithApproval } from '../../apis/confirmMyNonDisclosureAPIClient'
import { verificationEmail } from "./ConfirmMyNonDisclosureReducer";
export const mapDispatchToProp = (dispatch: Dispatch, ownProps: any) => ({
  handleChangeTextFieldInformationReason: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldInformationReason,
      payload: event
    })
  },

  handleChangeTextFieldScopeReason: (event: any) => {    
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldScopeReason,
      payload: event
    })
  },

  handleChangeTextFieldTermReason: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldTermReason,
      payload: event
    })
  },

  handleChangeTextFieldJurisdictionReason: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldJurisdictionReason,
      payload: event
    })
  },

  handleChangeTextFieldChoiceOfLawsReason: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldChoiceOfLawsReason,
      payload: event
    })
  },

  handleChangeTextFieldServivalReason: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldServivalReason,
      payload: event
    })
  },

  handlechangeTextFieldOtherReason: (event: any) => {    
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldOtherReason,
      payload: event
    })
  },

  handleChangeTextFieldAddressI: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldAddressI,
      payload: event
    })
  },

  handleChangeTextFieldAddressII: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldAddressII,
      payload: event
    })
  },

  handleChangeTextFieldEndDate: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldEndDate,
      payload: event
    })
  },

  handleChangeTextFieldNameI: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldNameI,
      payload: event
    })
  },

  handleChangeTextFieldNameII: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldNameII,
      payload: event
    })
  },

  handleChangeTextFieldNameOfSignatoryPartyI: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldNameOfSignatoryPartyI,
      payload: event
    })
  },

  handleChangeTextFieldNameOfSignatoryPartyII: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldNameOfSignatoryPartyII,
      payload: event
    })
  },

  handleChangeTextFieldTitleAndCapacityOfSignatoryPartyI: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldTitleAndCapacityOfSignatoryPartyI,
      payload: event
    })
  },

  handleChangeTextFieldTitleAndCapacityOfSignatoryPartyII: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.handleChangeTextFieldTitleAndCapacityOfSignatoryPartyII,
      payload: event
    })
  },

  verificationMyNonDistclosure: () => {
      dispatch(verificationMyNonDistclosure(ownProps.pkId))
  },
  verificationMyNonDistclosureReject: (id) => {
      dispatch(verificationMyNonDistclosure(id))
  },

  acknowledgeError: (event: any) => {
    dispatch({
      type: ConfirmMyNonDisclosureAction.acknowledgeError,
      payload: event
    })
  },

  handldSubmitForm: (event: any) => {
    let agreementString = ''
    const addressI = event.reasonAddressI !== '' ? event.reasonAddressI : ''
    const addressII = event.reasonAddressII !== '' ? event.reasonAddressII : ''
    const nameI = event.reasonDisclosureNameI !== '' ? event.reasonDisclosureNameI : ''
    const nameII = event.reasonDisclosureNameII !== '' ? event.reasonDisclosureNameII : ''
    const nameOfSignatoryPartyI = event.reasonNameOfSigningCompanyI !== '' ? event.reasonNameOfSigningCompanyI : ''
    const nameOfSignatoryPartyII = event.reasonNameOfSigningCompanyII !== '' ? event.reasonNameOfSigningCompanyII : ''
    const titleAndCapacityOfSignatoryPartyI = event.reasonTitleAndCapacityOfSigningCompanyI !== '' ? event.reasonTitleAndCapacityOfSigningCompanyI : ''
    const titleAndCapacityOfSignatoryPartyII = event.reasonTitleAndCapacityOfSigningCompanyII !== '' ? event.reasonTitleAndCapacityOfSigningCompanyII : ''
    const scopeOfDiscussion = event.reasonScopeOfDiscussion !== '' ? event.reasonScopeOfDiscussion : ''
    const term = event.reasonDate !== '' ? event.reasonDate : ''
    const endDate = event.reasonEndDate !== '' ? event.reasonEndDate : ''
    const survivePeriod = event.reasonPeriodOfSecret !== '' ? event.reasonPeriodOfSecret : ''
    const jurisdiction = event.reasonArbitrationJurisdiction !== '' ? event.reasonArbitrationJurisdiction : ''
    const choiceOfLaw = event.reasonChoiceOfLaw !== '' ? event.reasonChoiceOfLaw : ''
    const other = event.reasonOther !== '' ? event.reasonOther : ''
    
    if (event.Approve === true) {
      agreementString = 'Approve'
    }
    else {
      agreementString = 'Reject'
    }

    dispatch({
      type: ConfirmMyNonDisclosureAction.startLoadingConfirmMyNonDisclosure,
      payload: true
    })
    if (ownProps.typeOfUser === "approval" || event.user === "approval") {
      dispatch(confirmMyNonDisclosureWithApproval(
        verificationEmail.nda_approval.id,
        agreementString,
        term,
        nameI,
        nameII,
        addressI,
        addressII,
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
        verificationEmail.nda_email.NDADetail
      ))
    } else if (ownProps.typeOfUser === "party" || event.user === "party") {
      dispatch(confirmMyNonDisclosure(
        verificationEmail.nda_email.email_party,
        agreementString,
        term,
        nameI,
        nameII,
        addressI,
        addressII,
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
        verificationEmail.nda_email.NDADetail
      ))
    }
  }
})