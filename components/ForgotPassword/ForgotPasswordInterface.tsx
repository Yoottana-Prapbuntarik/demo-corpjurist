export interface ForgotPasswordPresenter {
	readonly keyHeader: string;
	readonly keyEmail: string;
	readonly keySubtitle: string;
	readonly keyButtonName: string;
	readonly keyBackToLogin: string;
	readonly keyImagePath: string;
	isLoading: boolean;
	isAcknowledge: boolean;
	keyMessageForgotPassword: string;
}

export enum ForgotPasswordAction {
	startLoading = 'startLoading',
	acknowledge = 'acknowledge'
  }
  