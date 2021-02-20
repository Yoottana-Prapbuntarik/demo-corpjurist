export interface ProfileComponentPresenter {
    buttonDeleteAccount: string;
    buttonChangePassword: string;
    buttonSignout: string;
    choose: string;
    messageConfirmSignOut: string;
    messageConfirmDeleteAccount: string;
    userProfile: any;
    isAcknowledge: boolean;
    isLoadingUserProfile: boolean;
    keyMessageManageUser: string;
    profileHeader: string;
    userFirstName: string;
    userLastName: string;
    userEmail: string;
}

export enum ProfileComponentAction {
    signout = 'signout',
    acknowledge = 'acknowledge',
    loading = 'loading'
}