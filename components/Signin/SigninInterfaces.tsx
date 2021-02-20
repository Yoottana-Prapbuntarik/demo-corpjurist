export interface SigninItem {
readonly keySigninLabelUsername: string;
readonly keySigninPlaceholderUsername: string;
readonly keySigninLabelPassword: string;
readonly keySigninPlaceholderPassword: string;
readonly keyForgotPassword: string;
readonly keySigninSubmit: string;
readonly keySignupAccount: string;
readonly keySignupButton: string;
readonly keyimagePath: string;
}

export interface SiginPresenter {
readonly keySigninHeader: string;
readonly signinItem: SigninItem;
isAcknowledgeError: boolean;
isLoadingSignin: boolean;
keySigninFalse: string;
readonly keyDetailSignin: string;
}
