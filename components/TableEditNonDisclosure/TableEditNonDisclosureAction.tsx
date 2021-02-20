import { Dispatch } from 'redux'
import { KeyManager } from "../../manager/keyManager";
import {
  getNonDisclosure,
  deleteNonDisclosure,
  statusDelete,
  archiveStatus,
  statusFinalize,
  finalizeNonDisclosure,
  archiveNonDisclosure
} from '../../apis/tableEditNonDisclosureAPIClient'
import { TableEditNonDisclosureAction } from './TableEditNonDisclosureInterface'
export const mapDispatchToProps = (dispatch: Dispatch) => ({

  getNonDisclosure: async () => {
    dispatch(getNonDisclosure()),
      dispatch({
        type: TableEditNonDisclosureAction.startLoadingTableEditAction,
        payload: true
      })
  },

  acknowledgeError: async (event: any) => {
    if (archiveStatus === 204) {
      await dispatch(getNonDisclosure())
      dispatch(getNonDisclosure())
    }
    if (statusDelete === 204 || statusFinalize === 200) {
      dispatch(getNonDisclosure())
      if (statusFinalize === 200) {
        dispatch(getNonDisclosure())
      }
    }
    dispatch({
      type: TableEditNonDisclosureAction.acknowledgeError,
      payload: event
    })
  },

  deleteNonDisclosure: async (event: any) => {
    dispatch({
      type: TableEditNonDisclosureAction.startLoadingTableEditAction,
      payload: true
    })
    await dispatch(deleteNonDisclosure(event))
  },

  getNonDisclosureForEdit: async (event: any, approvalData: any) => {
    await dispatch({
      type: TableEditNonDisclosureAction.getNonDisclosureEdit,
      payload: event,
      approvalData: approvalData
    })
  },

  finalizeNonDisclosure: async (event: any) => {
    dispatch({
      type: TableEditNonDisclosureAction.startLoadingTableEditAction,
      payload: true
    })
    await dispatch(finalizeNonDisclosure(event))
  },

  archiveNonDisclosure: async (id: any, Pdf: any) => {
    let allowedExtensions =  /^.+\.(([pP][dD][fF]))/
    if (!allowedExtensions.test(Pdf[0].name)) {      
      dispatch({
        type: TableEditNonDisclosureAction.errorTypeFile,
        payload: KeyManager.FilesNotValid
      })
    } else {
      dispatch({
        type: TableEditNonDisclosureAction.startLoadingTableEditAction,
        payload: true
      })
      await dispatch(archiveNonDisclosure(id, Pdf[0]))
    }
  }
})