import {
    CorporateSecretaryPresenter,
    BusinessName,
    BusinessRegistration,
    HQAddress,
    RegistrateredCapital,
    SignatoryItems,
    PopupItems
} from "./CorporateSecretaryInterface"
import { KeyManager } from "../../manager/keyManager"
import { FormManager } from "../../manager/formManager"
import { keyManagerFieldArray } from "../../manager/keyManagerFieldArray";

const businessRegistration: BusinessRegistration = {
    name: KeyManager.BusinessRegistration,
    valueBusinessRegistration: ''
}

const businessName: BusinessName = {
    name: KeyManager.BusinessName,
    valueBusinessName: ''
}

const hqAddress: HQAddress = {
    name: KeyManager.HqAddress,
    valueHqAddress: ''
}

const registrateredCapital: RegistrateredCapital = {
    name: KeyManager.RegistrateredCapital,
    valueRegistrateredCapital: ''
}

const authorisedSignatory: SignatoryItems = {
    formName: FormManager.CorporateSecretaryForm,
    formType: keyManagerFieldArray.authorisedSignatory,
    placeholder: KeyManager.AuthoisedSignatory,
    value: []
}
const signatoryAuthority: SignatoryItems = {
    // formName: FormManager.CorporateSecretaryForm,
    formType: keyManagerFieldArray.signatoryAuthority,
    placeholder: KeyManager.SignatoryAuthority,
    value: ""
}

const popupItems: PopupItems = {
    isOpen: false,
    dataSubmitForm: {}
}

export const corporateSecretaryPresenter: CorporateSecretaryPresenter = {
    labelCompany: KeyManager.GeneralInformation,
    subLabelCompany: KeyManager.SubLabelCompany,
    businessRegistration: businessRegistration,
    businessName: businessName,
    hqAddress: hqAddress,
    registrateredCapital: registrateredCapital,
    labelAuthoisedSignatory: KeyManager.AuthoisedSignatory,
    headerAuthorised: KeyManager.AuthoisedSignatory,
    action: KeyManager.Action,
    no: KeyManager.No,
    labelSignatoryAuthority: KeyManager.SignatoryAuthority,
    btnAdd: KeyManager.Add,
    btnDelete: KeyManager.Delete,
    btnSave: KeyManager.Save,
    btnShareholder: KeyManager.BtnShareholder,
    signingAuthority: KeyManager.SigningAuthority,
    btnOrganize: KeyManager.BtnOrganize,
    isLoading: false,
    isAcknowledge: false,
    keyMessageAlert: '',
    dataAPI: '',
    addNewSignatoryAndauthorised: false,
    authorisedSignatory: authorisedSignatory,
    signatoryAuthority: signatoryAuthority,
    detailCreateSignatory: KeyManager.DetailCreateSignatory,
    detailEditSignatory: KeyManager.DetailEditSignatory,
    popupItems: popupItems,
    previewLogo: "",
    checkCreatedForm: ""
}