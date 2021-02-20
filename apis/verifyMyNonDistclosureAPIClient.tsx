import service from './baseAPIs'
import { Dispatch } from 'redux'

export enum VerifyMyNonDistclosureAction {
    verifyMyNonDistclosureSuccess = 'verifyMyNonDistclosureSuccess'
}

export const verificationMyNonDistclosure: any = (pkId: string) => async (dispatch: Dispatch) => {
  const url = `nda_sent_email_acceptance_view/${pkId}/`
  service({
    method: 'get',
    url: url
  }).then(response => {
      if (response) {
        dispatch({
          type: VerifyMyNonDistclosureAction.verifyMyNonDistclosureSuccess,
          verifyData: response.data,
          verifyStatus: response.status
        })        
      }
    })
}
