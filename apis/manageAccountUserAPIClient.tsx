import { serviceToken } from "../apis/baseAPIs";
import { Dispatch } from 'redux'
import { KeyManager } from "../manager/keyManager";

export let getProfileStatusCode: number, deleteProfileStatusCode: number

export enum manageAccountUserAction {
  getProfileSuccess = 'getProfileSuccess',
  getProfileFailed = 'getProfileFailed',
  deleteAccountSuccess = 'deleteAccountSuccess',
  deleteAccountFailed = 'deleteAccountFailed',
  signOutSuccess = 'signOutSuccess',
  signOutFailed = 'signOutFailed'
}

export const getAccountUser: any = () => async (dispatch: Dispatch) => {
  serviceToken({
    method: 'get',
    url: '/user/profile/'
  })
    .then((response) => {
      if (response) {
        getProfileStatusCode = response.status

        dispatch({
          type: manageAccountUserAction.getProfileSuccess,
          userProfile: response.data[0],
        })
      }
    })
    .catch((error) => {
      if (error) {
        getProfileStatusCode = error.response.status
        dispatch({
          type: manageAccountUserAction.getProfileFailed,
        })
      }
    })
}

export const deleteAccountUser: any = (password: string) => async (dispatch: Dispatch) => {
  serviceToken({
    method: 'post',
    url: `/user/profile/delete`,
    data: {
      password: password
    }
  })
    .then(response => {
      if (response) {
        deleteProfileStatusCode = response.status
      }
      dispatch({
        type: manageAccountUserAction.deleteAccountSuccess,
        keyMessage: response.data
      })
    })
    .catch((error) => {
      if (error) {

        dispatch({
          type: manageAccountUserAction.deleteAccountFailed,
          keyMessage: KeyManager.CanNotRemoveAccount
        })
      }
    })
}

export const userSignout: any = () => async (dispatch: Dispatch) => {
  serviceToken({
    method: 'post',
    url: `/user/logout/`,
  })
    .then(response => {      
      if (response) {
        deleteProfileStatusCode = response.status
      }
      dispatch({
        type: manageAccountUserAction.signOutSuccess,
        keyMessage: response.data
      })
    })
    .catch((error) => {
      if (error) {
        dispatch({
          type: manageAccountUserAction.signOutFailed,
          keyMessage: KeyManager.CanNotRemoveAccount
        })
      }
    })
}