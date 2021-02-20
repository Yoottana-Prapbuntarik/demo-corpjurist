export interface DisclosureName {
    readonly name: string;
    valueName: string;
}

export interface Address {
    readonly name: string;
    valueAddress: string
}

export interface Date {
    readonly name: string;
    valueDate: any;
}

export interface ScopeOfDiscussion {
    readonly name: string,
    valueScopeDiscussion: string;
}

export interface EndDate {
    readonly name: string;
    valueDate: any;
}
export interface PeriodOfSecret {
    readonly name: string;
    valuePeriodOfSecret: string;
}

export interface ArbitrationJurisdiction {
    readonly name: string;
    valueArbitrationJurisdiction: string;
}

export interface ChoiceOfLaw {
    readonly name: string;
    valueChoiceOfLaw: string;
}

export interface NameOfSigning {
    readonly name: string;
    valueNameOfSigning: string;
}

export interface NdaLanguage {
    readonly name: string;
    valueNdaLanguage: string;
}

export interface TitleAndCapacityOfSigning {
    readonly name: string;
    valueTitleAndCapacityOfSigning: string;
}

export interface SignatoryItems {
    name: any;
    title: any;
}

export interface NonDisclosurePresenter {
    titleNonDisclosureI: string;
    titleNonDisclosureII: string;
    addressNonDisclosureI: string;
    addressNonDisclosureII: string;
    disclosureNameI: DisclosureName;
    disclosureNameII: DisclosureName;
    addressI: Address;
    addressII: Address;
    date: Date;
    scopeOfDiscussion: ScopeOfDiscussion;
    endDate: EndDate;
    periodOfSecret: PeriodOfSecret;
    ndaLanguage: NdaLanguage;
    arbitrationJurisdiction: ArbitrationJurisdiction;
    choiceOfLaw: ChoiceOfLaw;
    nameOfSigningCompanyI: NameOfSigning;
    nameOfSigningCompanyII: NameOfSigning;
    titleAndCapacityOfSigningCompanyI: TitleAndCapacityOfSigning;
    titleAndCapacityOfSigningCompanyII: TitleAndCapacityOfSigning;
    keyPleaseSignin: string;
    buttonSubmit: string;
    keyStatueAPI: string,
    getApi: any,
    getReasonApi: any,
    isLoadingGenerateNda: boolean;
    isAcknowledgeError: boolean;
    hideRejectReason: boolean;
    keyGenerateNdaFalse: string;
    counterWord: number;
    getCompanyBasicInfo: any;
    signatoryAuthority: SignatoryItems;
    authorisedItem: any;
    addSignatory: number;
}

export enum NonDisclosureAction {
    handleChangeDisclosureNameI = 'handleChangeDisclosureNameI',
    handleChangeDisclosureNameII = 'handleChangeDisclosureNameII',
    handleChangeDisclosureAddressI = 'handleChangeDisclosureAddressI',
    handleChangeDisclosureAddressII = 'handleChangeDisclosureAddressII',
    handleChangeDate = 'handleChangeDate',
    handleChangeScopeOfDiscussion = 'handleChangeScopeOfDiscussion',
    handleChangeEndDate = 'handleChangeEndDate',
    handleChangeNdaLanguage = 'handleChangeNdaLanguage',
    handleChangePeriodOfSecret = 'handleChangePeriodOfSecret',
    handleChangeArbitrationJurisdiction = 'handleChangeArbitrationJurisdiction',
    handleChangeChoiceOfLaw = 'handleChangeChoiceOfLaw',
    handleChangeNameOfSigningCompanyI = 'handleChangeNameOfSigningCompanyI',
    handleChangeNameOfSigningCompanyII = 'handleChangeNameOfSigningCompanyII',
    handleChangetitleAndCapacityOfSigningCompanyI = 'handleChangetitleAndCapacityOfSigningCompanyI',
    handleChangetitleAndCapacityOfSigningCompanyII = 'handleChangetitleAndCapacityOfSigningCompanyII',
    startLoadingNda = 'startLoadingNda',
    acknowledgeError = 'acknowledgeError',
    clearFormisNotUpdate = 'clearFormisNotUpdate',
    hideRejectReason = 'hideRejectReason',
    handleChangeSignatoryItems = 'handleChangeSignatoryItems',
    addSignatory = "addSignatory",
    counterWord = "counterWord",
    removeSignatory = "removeSignatory",
    alertSignatory = "alertSignatory",
    nonDisclosureChangeLanguage = "nonDisclosureChangeLanguage",
    subScribeNameOfSignatory = "subScribeNameOfSignatory"
}
