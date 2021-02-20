export interface NameOfShareholderDetail {
    name: string;
    valueNameOfShareholderDetail: string;
}

export interface FamilyNameOfShareholderDetail {
    name: string;
    valueFamilyNameOfShareholderDetail: string;
}

export interface AddressOfShareholderDetail {
    name: string;
    valueAddressOfShareholderDetail: string;
}

export interface TypeOfShareDetail {
    name: string;
    valueTypeOfShareDetail: string;
}

export interface AmountOfShareDetail {
    name: string;
    valueAmountOfShareDetail: string;
}

export interface EmailOfShareDetail {
    name: string;
    valueEmailOfShareDetail: string;
}

export interface PhoneOfShareDetail {
    name: string;
    valuePhoneOfShareDetail: string;
}

export interface NationTel {
    name: string;
    valueNationTel: string;
}

export interface TypeOfShareItems {
    name: string;
}

export interface SharedHolderDetailPresenter {
    labelShareholderDetail: string;
    btnAddShareholder: string;
    btnSave: string;
    headerNumber: string;
    headerFamilyName: string;
    headerAddressFamily: string;
    headerTypeOfShares: string;
    headerAmountHolding: string;
    headerEmail: string;
    headerPhone: string;
    dialogShareholderHeader: string;
    nameOfShareholderDetail: NameOfShareholderDetail;
    familyNameOfShareholderDetail: FamilyNameOfShareholderDetail, 
    addressOfShareholderDetail: AddressOfShareholderDetail;
    typeOfShareDetail: TypeOfShareDetail;
    amountOfShareDetail: AmountOfShareDetail;
    emailOfShareDetail: EmailOfShareDetail;
    phoneOfShareDetail: PhoneOfShareDetail;
    nationTel: NationTel;
    getShareholdersDetail: any;
    isLoading: boolean;
    isAcknowledge: boolean;
    keyMessageAlert: string;
    typeOfShareItems: TypeOfShareItems[]
}

export enum SharedHolderDetailAction {
    startLoading = 'startLoading',
    acceptAcknowledge = 'acceptAcknowledge',
    handleNameOfShareholderDetail = 'handleChangeNameOfShareholderDetail',
    handleFamilyNameOfShareholderDetail = 'handleChangeFamilyNameOfShareholderDetail',
    handleAddressOfShareholderDetail = 'handleChangeAddressOfShareholderDetail',
    handleTypeOfShareDetail = 'handleChangeTypeOfShareDetail',
    handleAmountOfShareDetail = 'handleChangeAmountOfShareDetail',
    handleEmailOfShareDetail = 'handleChangeEmailOfShareDetail',
    handlePhoneOfShareDetail = 'handleChangePhoneOfShareDetail',
    handleChangeValueTelCountry = 'handleChangeValueTelCountry',
}