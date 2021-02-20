import {
    SharedHolderDetailPresenter,
    NameOfShareholderDetail,
    AddressOfShareholderDetail,
    TypeOfShareDetail,
    AmountOfShareDetail,
    EmailOfShareDetail,
    PhoneOfShareDetail,
    FamilyNameOfShareholderDetail,
    NationTel,
    TypeOfShareItems,
} from "./SharedHolderDetailInterface"
import { KeyManager } from "../../manager/keyManager";

const nameOfShareholderDetail: NameOfShareholderDetail = {
    name: KeyManager.NameOfShareholderDetail,
    valueNameOfShareholderDetail: ''
}

const familyNameOfShareholderDetail: FamilyNameOfShareholderDetail = {
    name: KeyManager.FamilyNameOfShareDetail,
    valueFamilyNameOfShareholderDetail: ''
}

const addressOfShareholderDetail: AddressOfShareholderDetail = {
    name: KeyManager.AddressOfShareholderDetail,
    valueAddressOfShareholderDetail: ''
}

const typeOfShareDetail: TypeOfShareDetail = {
    name: KeyManager.TypeOfShareDetail,
    valueTypeOfShareDetail: ''
}

const amountOfShareDetail: AmountOfShareDetail = {
    name: KeyManager.AmountOfShareDetail,
    valueAmountOfShareDetail: ''
}

const emailOfShareDetail: EmailOfShareDetail = {
    name: KeyManager.EmailOfShareDetail,
    valueEmailOfShareDetail: ''
}

const phoneOfShareDetail: PhoneOfShareDetail = {
    name: KeyManager.PhoneOfShareDetail,
    valuePhoneOfShareDetail: ''
}

const nationTel: NationTel = {
    name: 'nationTel',
    valueNationTel: '+66'
}

const typeOfShareItems: TypeOfShareItems[] = [
    { name: 'typeCommon' },
    { name: 'typePreference' }
]

export const sharedHolderDetailPresenter: SharedHolderDetailPresenter = {
    labelShareholderDetail: KeyManager.ShareholderDetails,
    btnAddShareholder: KeyManager.BtnAddShareholder,
    btnSave: KeyManager.Save,
    headerNumber: KeyManager.No,
    headerFamilyName: KeyManager.HeaderFamilyName,
    headerAddressFamily: KeyManager.HeaderAddressFamily,
    headerTypeOfShares: KeyManager.HeaderTypeOfShares,
    headerAmountHolding: KeyManager.HeaderAmountHolding,
    headerEmail: KeyManager.Email,
    headerPhone: KeyManager.HeaderPhone,
    dialogShareholderHeader: KeyManager.DialogShareholderHeader,
    familyNameOfShareholderDetail: familyNameOfShareholderDetail,
    nameOfShareholderDetail: nameOfShareholderDetail,
    addressOfShareholderDetail: addressOfShareholderDetail,
    typeOfShareDetail: typeOfShareDetail,
    amountOfShareDetail: amountOfShareDetail,
    emailOfShareDetail: emailOfShareDetail,
    phoneOfShareDetail: phoneOfShareDetail,
    nationTel: nationTel,
    getShareholdersDetail: '',
    isLoading: false,
    isAcknowledge: false,
    keyMessageAlert: '',
    typeOfShareItems: typeOfShareItems
}