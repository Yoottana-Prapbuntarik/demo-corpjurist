import { connect } from 'react-redux';
import ChangePassword from './ChangePassword';
import { reduxForm, reset } from 'redux-form';
import validate from '../../validate/changePasswordValidator/changePasswordValidator';
import { ChangePasswordPresenter, ChangePasswordAction } from './ChangePasswordInterface';
import { FormManager } from '../../manager/formManager';
import { changePassword, changePasswordAction, checkTokenForChangePassword } from '../../apis/changePasswordAPIClient';
import { withTranslation } from '../../i18n';
import { Dispatch } from 'redux';
import Router from 'next/router';
import { routeToSignin, routeToNotFoundData } from '../../manager/routerManager';

export let changePasswordSuccess = false;

const changePasswordPresenter: ChangePasswordPresenter = {
    keyTitleChangePassword: "titleChangePassword",
    keyNewPassword: "newPassword",
    keyConfirmNewPassword: "placeholderConfirmPasswordSignup",
    keySubmitResetPassword: "changePassword",
    keyImagePath: '../../../assets/images/changepassword/changepassword.jpg',
    isLoading: false,
    isAcknowledge: false,
    keyMessageForgotPassword: '',
    isShowFormNewpassword: false
}

export const changePasswordReducer = (state: ChangePasswordPresenter = changePasswordPresenter, action: any) => {
    switch (action.type) {
        case ChangePasswordAction.startLoading:
            return {
                ...state,
                isLoading: action.payload
            }

        case ChangePasswordAction.acknowledge:
            Router.replace(routeToSignin)
            return {
                ...state,
                isAcknowledge: action.payload,
                isLoading: false,
            }

        case changePasswordAction.changePassword_Success:
            return {
                ...state,
                isLoading: false,
                isAcknowledge: true,
                keyMessageForgotPassword: action.keyMessage
            }
        case changePasswordAction.changePassword_Failed:
            return {
                ...state,
                isLoading: false,
                isAcknowledge: true,
                keyMessageForgotPassword: action.keyMessage
            }

        case changePasswordAction.getTokenChangePassword_Success:
            if (action.isHasToken === 204) {
                Router.replace(routeToNotFoundData)
            }
            return {
                ...state,
                isShowFormNewpassword: action.isHasToken === 204 ? false : true,
            }

        default:
            return state;
    }
}

const mapStateToProps = (state: any) => ({
    changePasswordPresenter: state.changePasswordReducer
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
    changePassword: (event: any) => {
        dispatch({
            type: ChangePasswordAction.startLoading,
            payload: true
        })
        dispatch(changePassword(event.password, ownProps.tokenID));
        dispatch(reset(FormManager.ChangePasswordForm));
    },
    checkTokenForChangePassword: (): any => {
        dispatch(checkTokenForChangePassword(ownProps.tokenID))
    },

    acknowledgeError: (event: any) => {
        dispatch({
            type: ChangePasswordAction.acknowledge,
            payload: event
        })
        dispatch(reset(FormManager.SignupForm))
    }
});

const form = reduxForm({ form: FormManager.ChangePasswordForm, validate })(ChangePassword);

export default withTranslation("common")(connect(mapStateToProps, mapDispatchToProps)(form));