import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import { ForgotAction, fotgotPasswordForm } from '../../apis/forgotPasswordAPIClient';
import { withTranslation } from '../../i18n';
import { ForgotPasswordPresenter, ForgotPasswordAction } from './ForgotPasswordInterface';
import { Dispatch } from 'redux';
import { FormManager } from '../../manager/formManager';
import ForgotPassword from './ForgotPassword';
import validate from '../../validate/forgotPassword/forgotPasswordValidator';
import Router from 'next/router';
import { routeToSignin } from '../../manager/routerManager';

export let forgotPasswordSuccess = false
const forgotPasswordPresenter: ForgotPasswordPresenter = {
	keyEmail: 'email',
	keyHeader: 'forgotHeader',
	keySubtitle: 'forgotySubtitle',
	keyButtonName: 'buttonForgotPassword',
	keyBackToLogin: 'backToLogin',
	keyImagePath: 'assets/images/forgotpassword/forgotpassword.jpg',
	isLoading: false,
	isAcknowledge: false,
	keyMessageForgotPassword: ''
};

export const forgotPasswordReducer = (state: ForgotPasswordPresenter = forgotPasswordPresenter, action: any) => {
	switch (action.type) {
		case ForgotPasswordAction.startLoading:
			return {
				...state,
				isLoading: action.payload
			}

		case ForgotPasswordAction.acknowledge:
			return {
				...state,
				isAcknowledge: action.payload,
				isLoading: false
			}
			
		case ForgotAction.ResetPassword_Success:
			forgotPasswordSuccess = true
			return {
				...state,
				isLoading: false,
				isAcknowledge: true,
				keyMessageForgotPassword: action.keyMessage
			}
		case ForgotAction.ResetPassword_Failed:
			forgotPasswordSuccess = false
			return {
				...state,
				isLoading: false,
				isAcknowledge: true,
				keyMessageForgotPassword: action.keyMessage
			}

		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	forgotPasswordPresenter: state.forgotPasswordReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	submitResetPassword: (event: any) => {
		dispatch({
			type: ForgotPasswordAction.startLoading,
			payload: true
		})
		dispatch(fotgotPasswordForm(event.email));
		dispatch(reset(FormManager.ForgotPasswordForm));
	},
	acknowledgeError: (event: any) => {
		dispatch({
			type: ForgotPasswordAction.acknowledge,
			payload: event
		})
		dispatch(reset(FormManager.SignupForm))
		if (forgotPasswordSuccess === true) {
			setTimeout(() => {
				Router.replace(routeToSignin)
			}, 100);
		}
	}
});

const form = reduxForm({ form: FormManager.ForgotPasswordForm, validate })(ForgotPassword);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));