import { Dispatch } from 'redux'
import { MyNonDisclosureAction } from './MyNonDisclosureInterface'
import { myNonDisclosureAPIClient, statusCode } from '../../apis/myNonDisclosureAPIClient'
import { getNonDisclosureAPIClient } from '../../apis/nonDisclosureAPIClient'
import { reset } from 'redux-form'
import { FormManager } from '../../manager/formManager'
import Router from 'next/router'
import { routeToPageMainNonDisclosure } from "../../manager/routerManager";

let ndaId: string;
export const mapDispatchToProps = (dispatch: Dispatch) => ({

  getNonDisclosureReasonAPIClient: (id: string) => {
    ndaId = id
    dispatch(getNonDisclosureAPIClient(id))
  },

  handleChangeApproval: (event: any) => {
    dispatch({
      type: MyNonDisclosureAction.handleChangeApproval,
      payload: event
    })
  },

  handleChangePartyII: (event: any) => {
    dispatch({
      type: MyNonDisclosureAction.handleChangePartyII,
      payload: event
    })
  },

  acknowledgeError: (event: any) => {
    dispatch({
      type: MyNonDisclosureAction.acknowledgeError,
      payload: event
    })
    if (statusCode === 200 || statusCode === 201) {
      Router.replace(routeToPageMainNonDisclosure)
    }
  },

  handldSubmitForm: (event: any) => {
    let id = ""
    let emailApproval = ""
    emailApproval = event.approval !== undefined ? event.approval : ''
    if (ndaId === null || ndaId === undefined) {
      id = localStorage.getItem('pdf_id')
    } else {
      id = ndaId
    }

    dispatch({
      type: MyNonDisclosureAction.startLoadingMyNonDisclosure,
      payload: true
    })

    dispatch(myNonDisclosureAPIClient(
      emailApproval,
      event.emailPartyII,
      "Waiting",
      id,
      []
    ))

    dispatch(reset(FormManager.MyNonDisclosureForm))
  },

  clearFormisNotEmailPartyII: () => {
    dispatch({
      type: MyNonDisclosureAction.clearFormisNotEmailPartyII
    })
  }
})