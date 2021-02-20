import service from './baseAPIs';
import { Dispatch } from 'redux';

export enum ForgotAction {
	ResetPassword_Success = 'ResetPassword_Success',
	ResetPassword_Failed = 'ResetPassword_Failed'
}

export const fotgotPasswordForm: any = (email: string) => async (dispatch: Dispatch) => {
	service({
		method: 'post',
		url: 'user/password_reset/',
		data: params(email)
	})
		.then((response) => {
			if (response) {
				dispatch({
					type: ForgotAction.ResetPassword_Success,
					keyMessage: 'forgotPasswordSuccess'
				});
			}
		})
		.catch((error) => {
			if (error) {
				dispatch({
					type: ForgotAction.ResetPassword_Failed,
					keyMessage: 'forgotPasswordFailed'

				});
			}
		});
};

const params = (email: string) => {
	return {
		email: email
	}
};