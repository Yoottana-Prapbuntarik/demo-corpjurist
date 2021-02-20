export interface TextReason {
    name: string;
}

export interface AddressI {
    name: string;
    labelName: string;
    addressReasonI: string;
}

export interface AddressII {
    name: string;
    labelName: string;
    addressReasonII: string;
}

export interface EndDate {
    name: string;
    labelName: string;
    endDateReason: string;
} 

export interface  NameI {
    name: string;
    labelName: string;
    nameReasonI: string;
} 

export interface  NameII {
    name: string;
    labelName: string;
    nameReasonII: string;
}

export interface NameOfSignatoryPartyI {
    name: string;
    labelName: string;
    nameOfSignatoryPartyReasonI: string;
} 

export interface NameOfSignatoryPartyII {
    name: string;
    labelName: string;
    nameOfSignatoryPartyReasonII: string;
} 

export interface TitleAndCapacityOfSignatoryPartyI {
    name: string;
    labelName: string;
    titleAndCapacityOfSignatoryPartyReasonI: string;
} 

export interface TitleAndCapacityOfSignatoryPartyII {
    name: string;
    labelName: string;
    titleAndCapacityOfSignatoryPartyReasonII: string;
} 

export interface InformationReason {
    name: string;
    labelName: string;
    informationReason: string
}

export interface ScopeReason {
    readonly name: string;
    labelName: string;
    scopeReason: string;
}

export interface TermReason {
    readonly name: string;
    labelName: string;
    termReason: string;
}

export interface JurisdictionReason {
    readonly name: string;
    labelName: string;
    jurisdictionReason: string;
}

export interface ChoiceOfLawsReason {
    readonly name: string;
    labelName: string;
    choiceOfLawsReason: string;
}

export interface ServivalReason {
    readonly name: string;
    labelName: string;
    servivalReason: string;
}

export interface OtherReason {
    readonly name: string;
    labelName: string;
    otherReason: string;
}

export interface ConfirmMyNonDisclosurePresenter {
    headerConfirmMyNonDisclosure: string;
    titlePopupConfirmNDA: string;
    choose: string;
    textReason: TextReason;
    informationReason: InformationReason;
    scopeReason: ScopeReason;
    termReason: TermReason;
    jurisdictionReason: JurisdictionReason;
    choiceOfLawsReason: ChoiceOfLawsReason;
    servivalReason: ServivalReason;
    otherReason: OtherReason;
    buttonSend: string;
    textApprove: string;
    textReject: string;
    isLoadingConfirmMyNonDisclosure: boolean;
    isAcknowledgeError: boolean;
    keyConfirmMyNonDisclosureNdaFalse: string;
    pdfReader: string;
    addressI: AddressI;
    addressII: AddressII;
    endDate: EndDate;
    nameI: NameI;
    nameII: NameII;
    nameOfSignatoryPartyI: NameOfSignatoryPartyI;
    nameOfSignatoryPartyII: NameOfSignatoryPartyII;
    titleAndCapacityOfSignatoryPartyI: TitleAndCapacityOfSignatoryPartyI;
    titleAndCapacityOfSignatoryPartyII: TitleAndCapacityOfSignatoryPartyII;
    placeholderSelectRejectReason: string;
	detailSelectRejectReason: string;
    guidelineRejectReasonTopic: string;
    rejectTitle: string;
    isShowPage: any;
}

export enum ConfirmMyNonDisclosureAction {
    handleChangeTextFieldInformationReason = 'handleChangeTextFieldInformationReason',
    handleChangeTextFieldScopeReason = 'handleChangeTextFieldScopeReason',
    handleChangeTextFieldTermReason = 'handleChangeTextFieldTermReason',
    handleChangeTextFieldJurisdictionReason = 'handleChangeTextFieldJurisdictionReason',
    handleChangeTextFieldChoiceOfLawsReason = 'handleChangeTextFieldChoiceOfLawsReason',
    handleChangeTextFieldServivalReason = 'handleChangeTextFieldServivalReason',
    handleChangeTextFieldOtherReason = 'handleChangeTextFieldOtherReason',
    startLoadingConfirmMyNonDisclosure = 'startLoadingConfirmMyNonDisclosure',
    acknowledgeError = 'acknowledgeError',
    handleChangeTextFieldAddressI = 'handleChangeAddressI', 
    handleChangeTextFieldAddressII = 'handleChangeAddressII',    
    handleChangeTextFieldEndDate = 'handleChangeEndDate', 
    handleChangeTextFieldNameI = 'handleChangeNameI', 
    handleChangeTextFieldNameII = 'handleChangeNameII', 
    handleChangeTextFieldNameOfSignatoryPartyI = 'handleChangeNameOfSignatoryPartyI', 
    handleChangeTextFieldNameOfSignatoryPartyII = 'handleChangeNameOfSignatoryPartyII', 
    handleChangeTextFieldTitleAndCapacityOfSignatoryPartyI = 'handleChangeTitleAndCapacityOfSignatoryPartyI', 
    handleChangeTextFieldTitleAndCapacityOfSignatoryPartyII = 'handleChangeTitleAndCapacityOfSignatoryPartyII' 
}