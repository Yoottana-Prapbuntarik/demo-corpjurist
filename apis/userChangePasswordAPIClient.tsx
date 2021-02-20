import { Dispatch } from 'redux'
import { serviceToken } from './baseAPIs'
import { KeyManager } from '../manager/keyManager'

export let statusCodeUserChangepassword: number;

export enum userChangePasswordAction {
  userChangePassword_Success = 'userChangePassword_Success',
  userChangePassword_Failed = 'userChangePassword_Failed',
}

export const userChangePassword: any = (
  oldPassword: string, newPassword: string
) => async (dispatch: Dispatch
) => {
    const url = `/user/password/edit/`

    serviceToken({
      method: 'post',
      url: url,
      data: params(oldPassword, newPassword)
    })

      .then((response) => {
        if (response) {
          statusCodeUserChangepassword = response.status
          dispatch({
            type: userChangePasswordAction.userChangePassword_Success,
            keyMessage: KeyManager.ChangePasswordSuccess
          })
        }
      })

      .catch((error) => {
        if (error) {
          statusCodeUserChangepassword = error.response.status
          dispatch({
            type: userChangePasswordAction.userChangePassword_Failed,
            keyMessage: KeyManager.ChangePasswordFaled
          })
        }
      })
  }

const params = (oldPassword: string, newPassword: string) => {
  return {
    old_password: oldPassword,
    new_password: newPassword,
  }
}