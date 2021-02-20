export interface UploadCitizenPresenter {
    fileImagesUpload: any;
    startLoadingUploadCitizen: boolean;
}


export enum UploadCitizenAction {
    handleSubmitUploadCitizen = "handleSubmitUploadCitizen",
    startLoadingUploadCitizen = "startLoadingUploadCitizen"
}