export interface OldPassword {
    name: string;
    valueOldPassword: string;
    placeholder: string;
}

export interface NewPassword {
    name: string;
    valueNewPassword: string;
    placeholder: string;
}

export interface ConfirmNewPassword {
    name: string;
    valueConfirmNewPassword: string;
    placeholder: string;
}

export interface UserChangePasswordPresenter {
    titleChangePassword: string;
    oldPassword: OldPassword;
    newPassword: NewPassword;
    confirmNewPassword: ConfirmNewPassword;
    buttonSubmitChangePassword: string;
    isLoadingUserChangePassword: boolean;
    isAcknowledge: boolean;
    userChangePasswordMessage: string;
    imageChangePassword: string;
}

export enum UserChangePasswordAction {
    handleChangeOldPassword = 'handleChangeOldPassword',
    handleChangeNewPassword = 'handleChangeNewPassword',
    handleChangeConfirmNewPassword = 'handleChangeConfirmNewPassword',
    startLoading = 'startLoading',
    acknowledgeMessageUserChangePassword = 'acknowledgeMessageUserChangePassword',
    clearFormisNotEmailPartyII = 'clearFormisNotEmailPartyII',
    resetUserChangePasswordForm = 'resetUserChangePasswordForm'
}