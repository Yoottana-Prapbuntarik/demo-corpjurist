export interface SingupItemsInputform {
readonly keyPlaceholderFirstNameSignup: string;
readonly keyPlaceholderLastNameSignup: string;
readonly keyPlaceholderEmailSignup: string;
readonly keyPlaceholderReEnterEmailSignup: string;
readonly keyPlaceholderPasswordSignup: string;
readonly keyPlaceholderConfirmPasswordSignup: string;
readonly keyPlaceholderTelephone: string;
readonly keyPlaceholderCitizenId: string;
readonly keySubmitSignup: string;
readonly keyHaveAccount: string;
readonly keySigninAccount: string;
readonly keyimagePath: string;
}

export interface Email {
    name: string;
    value: string;
}
export interface ConfirmEmail {
    name: string;
    value: string;
}

export interface SignupPresenter {
    readonly keySignupHeader: string;
    readonly signupItemInputform: SingupItemsInputform;
    email: Email;
    confirmEmail: ConfirmEmail;
    isAcknowledgeError: boolean;
    isLoadingSignup: boolean;
    isLoadingGetTokenSignup: boolean;
    keySignupFalse: string;
    getTokenSignup: any;
}