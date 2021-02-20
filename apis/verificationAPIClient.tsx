import { serviceManageUser } from '../apis/baseAPIs'
import { Dispatch } from 'redux'

export enum verificationAction {
  verification_Success = 'verification_Success',
  verification_Failed = 'verification_Failed'
}

export const verification: any = (tokenId: string, pkId: string) => async (dispatch: Dispatch) => {
  const url = `verify/${tokenId}/${pkId}/`
  serviceManageUser({
    method: 'get',
    url: url
  })

    .then(response => {
      if (response) {
        dispatch({
          type: verificationAction.verification_Success,
          verifyData: response,
          statusRegister: response.status
        })
      }
    }).catch(error => {
      if (error) {
        dispatch({
          type: verificationAction.verification_Failed,
          statusRegister: error.response.status
        })
      }
    })
}
