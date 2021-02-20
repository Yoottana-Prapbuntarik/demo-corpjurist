export interface LabelFirstName {
    name: string;
    valueName: string;
}
export interface LabelMiddleName {
    name: string;
    valueMiddleName: string;
}

export interface LabelFamilyName {
    name: string;
    valueFamilyName: string;
}

export interface LabelPassportId {
    name: string;
    valuePassportId: string;
}

export interface LabelEmail {
    name: string;
    valueEmail: string;
}

export interface LabelTelephone {
    name: string;
    valueTelephone: string;
}

export interface LabelAddressCheckbox {
    name: string;
}

export interface LabelAddressNumber {
    name: string;
    valueAddressNumber: string;
}

export interface LabelVillage {
    name: string;
    valueVillage: string;
}

export interface LabelRoad {
    name: string;
    valueRoad: string;
}

export interface LabelProvicne {
    name: string;
    valueProvince: string;
}

export interface LabelDistrict {
    name: string;
    valueDistrict: string;
}

export interface LabelSubDistrict {
    name: string;
    valueSubDistrict: string;
}

export interface LabelZipCode {
    name: string;
    valueZipCode: string;
}

export interface LabelTotalShare {
    name: string;
    valueTotalShare: string;
}

export interface ButtonSubmitProperty {
    name: string;
}

export interface ShareHolderManagerPresenter {
    readonly keyHaderShareHolderManager: string;
    readonly labelFirstName: LabelFirstName;
    readonly labelMiddleName: LabelMiddleName;
    readonly labelFamilyName: LabelFamilyName;
    readonly labelPassportId: LabelPassportId;
    readonly labelEmail: LabelEmail;
    readonly labelTelephone: LabelTelephone;
    readonly labelAddressCheckbox: LabelAddressCheckbox;
    readonly labelAddressNumber: LabelAddressNumber;
    readonly labelVillage: LabelVillage;
    readonly labelRoad: LabelRoad;
    readonly labelProvicne: LabelProvicne;
    readonly labelDistrict: LabelDistrict;
    readonly labelSubDistrict: LabelSubDistrict;
    readonly labelZipCode: LabelZipCode;
    readonly labelTotalShare: LabelTotalShare;
    readonly buttonOtherShareHolder: ButtonSubmitProperty;
    readonly buttonFinish: ButtonSubmitProperty;
    readonly keyPopoverShareHolderI: string;
    readonly keyPopoverShareHolderII: string;
    readonly keyHeaderPopoverShareHolder: string;
}
