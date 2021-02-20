import { Dispatch } from 'redux'
import { UserChangePasswordAction } from './UserChangePasswordInterface'
import { userChangePassword, statusCodeUserChangepassword} from "../../apis/userChangePasswordAPIClient";
import { reset } from 'redux-form'
import { FormManager } from '../../manager/formManager'
import Router from 'next/router'
import { routeToChangePassword } from "../../manager/routerManager";

const resetUserChangePasswordForm = (): any => (dispatch: Dispatch) => {
    dispatch({
        type: UserChangePasswordAction.resetUserChangePasswordForm
    })
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({

    handleChangeOldPassword: (event: any) => {
        dispatch({
            type: UserChangePasswordAction.handleChangeOldPassword,
            payload: event
        })
    },

    handleChangeNewPassword: (event: any) => {
        dispatch({
            type: UserChangePasswordAction.handleChangeNewPassword,
            payload: event
        })
    },

    handleChangeConfirmNewPassword: (event: any) => {
        dispatch({
            type: UserChangePasswordAction.handleChangeConfirmNewPassword,
            payload: event
        })
    },


    acknowledge: (event: any) => {
        dispatch({
            type: UserChangePasswordAction.acknowledgeMessageUserChangePassword,
            payload: event
        })
        
        if (statusCodeUserChangepassword === 400 || statusCodeUserChangepassword !== 200 ) {
            Router.replace(routeToChangePassword)
        }
    },

    handldSubmitForm: (event: any) => {
        dispatch({
            type: UserChangePasswordAction.startLoading,
            payload: true
        }),
        dispatch(userChangePassword(event.oldPassword, event.changeNewPassword))
        dispatch(reset(FormManager.UserChangePassword))
        dispatch(resetUserChangePasswordForm())
    },
})