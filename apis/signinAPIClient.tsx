import service from './baseAPIs'
import { Dispatch } from 'redux'
import { KeyManager } from '../manager/keyManager'

export let statusCode: number

export enum SigninAction {
  Signin_Success = 'Signin_Success',
  Signin_Failed = 'Signin_Failed'
}

export const signin: any = (email: string, password: string, isRemember?: boolean) => async (dispatch: Dispatch) => {
  service({
    method: 'post',
    url: 'user/login/',
    data: params(email, password, isRemember)
  })
    .then((response) => {
      if (response) {
        statusCode = response.status
        dispatch({
          type: SigninAction.Signin_Success,
          dataAPI: response.data,
          keyMessage: KeyManager.SigninSuccess
        })
      }
      localStorage.setItem('access-token', response.data.token)
    })
    .catch((error) => {      
      if (error) {
        statusCode = error.response.status
        dispatch({
          type: SigninAction.Signin_Failed,
          keyMessage: error.response.data[KeyManager.Message]
        })
      }
    })
}


const params = (email: string, password: string, isRemember?: boolean) => {
  if (isRemember === undefined) {
    return {
      email: email,
      password: password
    }
  }

  return {
    email: email,
    password: password,
    is_remember: isRemember
  }
}
