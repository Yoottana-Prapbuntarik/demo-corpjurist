export interface ChangePasswordPresenter {
    keyTitleChangePassword: string;
    keyNewPassword: string;
    keyConfirmNewPassword: string;
    keySubmitResetPassword: string;
    keyImagePath: string;
    isLoading: boolean;
    isAcknowledge: boolean;
    keyMessageForgotPassword: string;
    isShowFormNewpassword: boolean;
}



export enum ChangePasswordAction {
startLoading = 'startLoading',
acknowledge = 'acknowledge'
}