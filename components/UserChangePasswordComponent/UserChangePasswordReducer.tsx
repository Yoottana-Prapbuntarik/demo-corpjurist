import { UserChangePasswordAction, UserChangePasswordPresenter } from './UserChangePasswordInterface'
import { userChangePasswordPresenter } from './UserChangePasswordPresenter'
import { KeyManager } from '../../manager/keyManager'
import { TextManager } from "../../manager/TextManager";
import { userChangePasswordAction } from "../../apis/userChangePasswordAPIClient";
import Router from 'next/router'            
import { routeToSignin } from "../../manager/routerManager";

export const userChangePasswordReducer = (state: UserChangePasswordPresenter = userChangePasswordPresenter, action: any): any => {
  switch (action.type) {
    case UserChangePasswordAction.handleChangeOldPassword:
      return {
        ...state,
        oldPassword: {
          name: KeyManager.OldPassword,
          placeholder: TextManager.TextOldPassword,
          valueOldPassword: action.payload
        }
      }

    case UserChangePasswordAction.resetUserChangePasswordForm:
      return {
        ...state,
        oldPassword: {
          name: KeyManager.OldPassword,
          placeholder: TextManager.TextOldPassword,
          valueOldPassword: ''
        },
        newPassword: {
          name: KeyManager.ChangeNewPassword,
          placeholder: TextManager.TextNewPassword,
          valueNewPassword: ''
        },
        confirmNewPassword: {
          name: KeyManager.ConfirmNewPassword,
          placeholder: TextManager.TextConfirmNewPassword,
          valueConfirmNewPassword: ''
        },

      }
      
    case UserChangePasswordAction.handleChangeNewPassword:
      return {
        ...state,
        newPassword: {
          name: KeyManager.ChangeNewPassword,
          placeholder: TextManager.TextNewPassword,
          valueNewPassword: action.payload
        }
      }

    case UserChangePasswordAction.handleChangeConfirmNewPassword:
      return {
        ...state,
        confirmNewPassword: {
          name: KeyManager.ConfirmNewPassword,
          placeholder: TextManager.TextConfirmNewPassword,
          valueConfirmNewPassword: action.payload
        }
      }

    case userChangePasswordAction.userChangePassword_Success:
        localStorage.removeItem('access-token')
        Router.replace(routeToSignin)
        return {
          ...state,
          isLoadingUserChangePassword: false,
        }
        
        case userChangePasswordAction.userChangePassword_Failed:
      return {
        ...state,
        isLoadingUserChangePassword: false,
        isAcknowledge: true,
        userChangePasswordMessage: action.keyMessage
      }

    case UserChangePasswordAction.acknowledgeMessageUserChangePassword:
      return {
        ...state,
        isAcknowledge: action.payload,
        isLoadingUserChangePassword: false,
      }

    case UserChangePasswordAction.startLoading:
      return {
        ...state,
        isLoadingUserChangePassword: action.payload
      }

    default:
      return state
  }
}