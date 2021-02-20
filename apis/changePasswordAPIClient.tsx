import { Dispatch } from 'redux'
import { serviceManageUser } from './baseAPIs'
import { KeyManager } from '../manager/keyManager'
export enum changePasswordAction {
  changePassword_Success = 'changePassword_Success',
  changePassword_Failed = 'changePassword_Failed',
  getTokenChangePassword_Success = 'getTokenChangePassword_Success',
  getTokenChangePassword_Failed = 'getTokenChangePassword_Failed'
}

export const changePassword: any = (password: string, tokenID: string) => async (dispatch: Dispatch
) => {
  const url = `password_reset_confirm/${tokenID}/`

  serviceManageUser({
    method: 'post',
    url: url,
    data: params(password)
  })

    .then((response) => {
      if (response) {
        dispatch({
          type: changePasswordAction.changePassword_Success,
          keyMessage: KeyManager.ChangePasswordSuccess
        })
      }
    })

    .catch((error) => {
      if (error) {
        dispatch({
          type: changePasswordAction.changePassword_Failed,
          keyMessage: KeyManager.ChangePasswordFaled
        })
      }
    })
}

export const checkTokenForChangePassword: any = (tokenID: string) => async (dispatch: Dispatch
) => {
  const url = `password_reset_confirm/${tokenID}/`

  serviceManageUser({
    method: 'get',
    url: url,
  })

    .then((response) => {
      if (response) {
        dispatch({
          type: changePasswordAction.getTokenChangePassword_Success,
          isHasToken : response.status
        })
      }
    })

    .catch((error) => {
      if (error) {
        dispatch({
          type: changePasswordAction.getTokenChangePassword_Failed,
        })
      }
    })
}


const params = (password: string) => {
  return {
    new_password: password
  }
}
