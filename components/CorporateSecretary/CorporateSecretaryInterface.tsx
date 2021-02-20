export interface BusinessRegistration {
    readonly name: string;
    valueBusinessRegistration: string;
}

export interface BusinessName {
    readonly name: string;
    valueBusinessName: string;
}

export interface HQAddress {
    readonly name: string;
    valueHqAddress: string;
}

export interface RegistrateredCapital {
    readonly name: string;
    valueRegistrateredCapital: string;
}

export interface SignatoryItems {
    readonly formName?: string;
    placeholder: string;
    formType: string;
    value: any;
}

export interface PopupItems {
    isOpen: Boolean;
    dataSubmitForm: any;
}

export interface CorporateSecretaryPresenter {
    labelCompany: string;
    subLabelCompany: string;
    businessRegistration: BusinessRegistration;
    businessName: BusinessName;
    hqAddress: HQAddress;
    registrateredCapital: RegistrateredCapital;
    labelAuthoisedSignatory: string
    headerAuthorised: string;
    action: string;
    labelSignatoryAuthority: string;
    btnAdd: string;
    btnDelete: string;
    btnSave: string;
    btnShareholder: string;
    btnOrganize: string;
    signingAuthority: string;
    no: string;
    isLoading: boolean
    isAcknowledge: boolean
    keyMessageAlert: string;
    dataAPI: any;
    addNewSignatoryAndauthorised: boolean;
    authorisedSignatory: SignatoryItems;
    signatoryAuthority: SignatoryItems;
    detailCreateSignatory: string;
    detailEditSignatory: string;
    popupItems: PopupItems;
    previewLogo: any;
    checkCreatedForm: any;
}

export enum CorporateSecretaryAction {
    addAuthorisedSignatoryItems = "addAuthorisedSignatoryItems",
    addSignatoryAuthorityItems = "addSignatoryAuthorityItems",
    startLoading = "startLoading",
    acceptAcknowledge = "acceptAcknowledge",
    handleChangeBusinessRegistration = "handleChangeBusinessRegistration",
    handleChangeName = "handleChangeName",
    handleChangeHqAddress = "handleChangeHqAddress",
    handleChangeCapital = "handleChangeCapital",
    handleChangeTotalAmount = "handleChangeTotalAmount",
    handleChangeAuthorised = "handleChangeAuthorised",
    handleChangeSignatory = "handleChangeSignatory",
    clearAllState = "clearAllState",
    addNewSignatoryAndauthorised = "addNewSignatoryAndauthorised",
    acknowledge = "acknowledge",
    setPopup = "setPopup",
    handleNullSignatory = "handleNullSignatory",
    uploadLogo = "uploadLogo",
    errorTypeFile = "errorTypeFile",
    checkAuthorisedAndUploadLogo = "checkAuthorisedAndUploadLogo"
}