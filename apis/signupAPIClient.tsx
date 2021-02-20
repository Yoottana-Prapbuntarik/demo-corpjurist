import service from './baseAPIs'
import { Dispatch } from 'redux'

export let statusCode: number
export let statusRegisterWithToken: number

export enum SignupAction {
  Signup_Success = 'Signup_Success',
  Signup_Failed = 'Signin_Failed',
  GetTokenSignup_Success = 'GetTokenSignup_Success',
  GetTokenSignup_Failed = 'GetTokenSignup_Failed',
}

export const signup: any = (firstName: string, lastName: string, email: string, password: string
  ,tel: string, id_card: string) => async (
    dispatch: Dispatch
  ) => {
    service({
      method: 'post',
      url: 'user/register/',
      data: params(firstName, lastName, email, password, tel, id_card)
    })

      .then((response) => {
        if (response) {
          statusCode = response.status
          dispatch({
            type: SignupAction.Signup_Success,
            keyMessage: 'isSignup',
          })
        }
      })

      .catch((error) => {
        if (error) {
          statusCode = error.response.status
          dispatch({
            type: SignupAction.Signup_Failed,
            keyMessage: 'notSignup'
          })
        }
      })
  }

export const signupWithToken: any = (token: string, firstName: string, lastName: string, email: string, password: string,
  tel: string, id_card: string) => async (
    dispatch: Dispatch
  ) => {
    service({
      method: 'post',
      url: `/user/register/${token}/`,
      data: params(firstName, lastName, email, password, tel, id_card)
    })

      .then((response) => {
        if (response) {
          statusRegisterWithToken = response.status
          dispatch({
            type: SignupAction.Signup_Success,
            keyMessage: 'isSignup',
          })
        }
      })

      .catch((error) => {
        if (error) {
          statusRegisterWithToken = error.response.status
          dispatch({
            type: SignupAction.Signup_Failed,
            keyMessage: 'notSignup'
          })
        }
      })
  }

export const checkTokenSignup: any = (token: any) => async (
  dispatch: Dispatch
) => {
  service({
    method: 'get',
    url: `user/register/${token}/`,
  })

    .then((response) => {
      if (response) {
        dispatch({
          type: SignupAction.GetTokenSignup_Success,
          GetTokenSignupData: response.data
        })
      }
    })

    .catch((error) => {
      if (error) {
        console.log(error.response)
        dispatch({
          type: SignupAction.GetTokenSignup_Failed,
          GetTokenSignupData: ''
        })
      }
    })
}

const params = (firstName: string, lastName: string, email: string, password: string,
  tel: string,
  id_card: string) => {
  return {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    tel: tel,
    id_card: id_card,
  }
}
