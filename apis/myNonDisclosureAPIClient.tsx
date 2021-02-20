import { Dispatch } from 'redux'
import service from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'

export let statusCode: number

export enum MyNonDisclosureAPIClient {
  MyNonDisclosureAPIClientSuccess = 'MyNonDisclosureAPIClientSuccess',
  MyNonDisclosureAPIClientFailed = 'MyNonDisclosureAPIClientFailed'
}

export const myNonDisclosureAPIClient: any = (
  emailApproval: string,
  emailParty2: string,
  status: string,
  id: string,
  NDADetailReason: Array<string>

) => async (dispatch: Dispatch) => {
  service({
    method: 'post',
    url: 'nda_sent_email_acceptance/',
    data: params(
      emailParty2,
      status,
      id,
      NDADetailReason,
      emailApproval
    )
  }).then((response) => {
    if (response) {
      statusCode = response.status
      dispatch({
        type: MyNonDisclosureAPIClient.MyNonDisclosureAPIClientSuccess,
        keyMessage: KeyManager.SaveAgreement
      })
    }

  }).catch(error => {
    if (error) {
      statusCode = error.response.status
      dispatch({
        type: MyNonDisclosureAPIClient.MyNonDisclosureAPIClientFailed,
        keyMessage: "Send Email Failed"
      })
    }
  })
}

const params = (
  emailParty2: string,
  status: string,
  id: string,
  NDADetailReason: Array<string>,
  emailApproval: string
) => {
  if (emailApproval !== '') {
    return {
      email_party: emailParty2,
      status: status,
      NDADetail: parseInt(id),
      NDADetailReason: NDADetailReason,
      nda_email_approval: emailApproval
    }
  } else {

    return {
      email_party: emailParty2,
      status: status,
      NDADetail: parseInt(id),
      NDADetailReason: NDADetailReason,
    }
  }
}
