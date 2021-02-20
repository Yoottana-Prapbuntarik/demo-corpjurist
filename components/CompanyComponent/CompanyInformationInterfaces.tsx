export interface LabelCompanyName {
    readonly name: string
    readonly keyCompanyName: string;
    valueCompanyName: string;
}

export interface LabelAddress {
    readonly keyLabelName: string;
    readonly name: string;
    valueLabelAddress:string
}

export interface LabelAddressDropdown {
    readonly keyLabelNameDropdown: string;
}

export interface LabelCheckbox {
    readonly keyCheckboxAddress: string;
    readonly keyCheckboxAuditor: string;
}

export interface LabelAuditorLicense {
    readonly keyLicense: string;
    valueLicense: string;
}

export interface LabelAuditor{
    readonly keyAuditorName: string;
    valueAuditorName: string;
}

export interface ProvincesItem {
    readonly provinceID: number;
    readonly name: string;
}

export interface DistrictItem {
    readonly districtID: number;
    readonly name: string;
}

export interface SubDistrictItem {
    readonly subDistrictID: number;
    readonly name: string;
}

export interface ZipCode {
    readonly zipcode: string;
}

export interface CompanyInformationPresenter {
    readonly keyTitleCompany: string;
    readonly keyTitleAddress: string;
    readonly keyTitleAuditor: string;
    readonly keySubmit: string;
    readonly labelRegistrationNumber: LabelAddress;
    readonly labelAddressNumber: LabelAddress;
    readonly labelVillage: LabelAddress;
    readonly labelRoad: LabelAddress;
    readonly labelAddressDropdown: LabelAddressDropdown[];
    readonly labelCheckbox: LabelCheckbox;
    readonly labelAuditor: LabelAuditor;
    readonly labelAuditorLicense: LabelAuditorLicense;
    readonly labelCompanyName1: LabelCompanyName;
    readonly labelCompanyName2: LabelCompanyName;
    readonly labelCompanyName3: LabelCompanyName;
    readonly keyPleaseSignin: string;
    readonly keyGetCurrentInfomationStatus: number;
    readonly provincesItem: ProvincesItem[];
    readonly districtItem: DistrictItem[];
    readonly subDistrictItem: SubDistrictItem[];
    readonly zipCode: ZipCode[];
}

export enum CompanyInformationAction {
handleChangeCompanyName1 = 'handleChangeCompanyName1',
handleChangeCompanyName2 = 'handleChangeCompanyName2',
handleChangeCompanyName3 = 'handleChangeCompanyName3',
handChangeRegistrationNumber = 'handChangeRegistrationNumber',
handChangeAddressNumber = 'handChangeAddressNumber',
handChangeVillage = 'handChangeVillage',
handChangeRoad = 'handChangeRoad',
handleChangeAuditorLicense = 'handleChangeAuditorLicense',
handleChangeAuditor = 'handleChangeAuditor',
}
