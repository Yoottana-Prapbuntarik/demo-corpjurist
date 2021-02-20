export interface RejectVerifyTelephone {
    verifyTelephone: string;
    value: string;
}

export interface RejectVerifyCitizenId {
    verifyCitizenId: string;
    value: string;
}

export interface RejectVerifyFirstName {
    verifyFirstName: string;
    value: string;
}

export interface RejectVerifyLastName {
    verifyLastName: string;
    value: string;
}

export interface RejectVerifyInformationPresenter {
    rejectVerifyTelephone: RejectVerifyTelephone;
    rejectVerifyCitizenId: RejectVerifyCitizenId;
    rejectVerifyFirstName: RejectVerifyFirstName;
    rejectVerifyLastName: RejectVerifyLastName;
    verifyInformationData: any,
    verifyTelephonePlaceholder: string;
    verifyCitizenIdPlaceholder: string;
    citizenPicture: any;
    personPicture: any;
    personVideo: any;
    dataEkyc: any;
    rejectVerifyLoading: boolean;
    ekycReason: any;
    ekycReasonList: Array<any>;
    verifyFirstNamePlaceholder: string;
    verifyLastNamePlaceholder: string;
}


export enum RejectVerifyInformationAction {
    handleSubmitRejectVerifyInofrmation = "handleSubmitRejectVerifyInofrmation",
    handleChangeCitizenPicture = "handleChangeCitizenPicture",
    handleChangePersonPicture = "handleChangePersonPicture",
    handleChangePersonVideo = "handleChangePersonVideo",
    rejectVerifyLoading = "rejectVerifyLoading"
}