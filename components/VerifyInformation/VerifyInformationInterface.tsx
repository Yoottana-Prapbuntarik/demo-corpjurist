export interface VerifyEmail {
    verifyEmail: string;
    value: string;
}
export interface VerifyTelephone {
    verifyTelephone: string;
    value: string;
}

export interface VerifyFirstName {
    verifyFirstName: string;
    value: string;
}

export interface VerifyLastName {
    verifyLastName: string;
    value: string;
}

export interface VerifyCitizenId {
    verifyCitizenId: string;
    value: string;
}

export interface VerifyInformationPresenter {
    verifyEmail: VerifyEmail;
    verifyTelephone: VerifyTelephone;
    verifyFirstName: VerifyFirstName;
    verifyLastName: VerifyLastName;
    verifyCitizenId: VerifyCitizenId;
    keyImagePath: string,
    verifyInformationData: any,
    verifyEmailPlaceholder: string;
    verifyTelephonePlaceholder: string;
    verifyFirstNamePlaceholder: string;
    verifyLastNamePlaceholder: string;
    verifyCitizenIdPlaceholder: string;
    isHasEkyc: any;
    isLoadingEkycData: boolean;

}


export enum VerifyInformationAction {
    handleSubmitVerifyInformation = "handleSubmitVerifyInformation",
    isLoadingEkycData = "isLoadingEkycData"
}