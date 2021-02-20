import { serviceToken, serviceUpload } from './baseAPIs'
import { Dispatch } from 'redux'

export let statusDelete: number
export let statusFinalize: number
export let archiveStatus: number

export enum getNonDisclosureAction {
  getNonDisclosureSuccess = 'getNonDisclosureSuccess',
  finalizeNonDisclosureSuccess = 'finalizeNonDisclosureSuccess',
  archiveNonDisclosureSuccess = 'archiveNonDisclosureSuccess',
  getNonDisclosureFailed = 'getNonDisclosureFailed',
  deleteNonDisclosureSuccess = 'deleteNonDisclosureSuccess',
  deleteNonDisclosureFailed = 'deleteNonDisclosureFailed',
}

export const getNonDisclosure: any = () => async (dispatch: Dispatch) => {
  serviceToken({
    method: 'get',
    url: 'nda_notification_center/'
  })
    .then(response => {
      dispatch({
        type: getNonDisclosureAction.getNonDisclosureSuccess,
        getNonDisclosure: response.data
      })
    })
    .catch(() => {
      dispatch({
        type: getNonDisclosureAction.getNonDisclosureFailed,
        getNonDisclosure: []
      })
    })
}

export const deleteNonDisclosure: any = (id: string) => async (dispatch: Dispatch) => {
  serviceToken({
    method: 'delete',
    url: `nda/${parseInt(id)}/edit/`
  })
    .then(response => {
      if (response) {
        statusDelete = response.status
      }
      dispatch({
        type: getNonDisclosureAction.deleteNonDisclosureSuccess,
        keyMessage: response.data
      })
    })
    .catch(() => {
      dispatch({
        type: getNonDisclosureAction.deleteNonDisclosureFailed
      })
    })
}

export const finalizeNonDisclosure: any = (idFinalize: string) => async (dispatch: Dispatch) => {
  serviceToken({
    method: 'put',
    url: `nda/${parseInt(idFinalize)}/finalize/`,
    data: { is_finalize: true }
  })
    .then(response => {
      if (response) {
        statusFinalize = response.status
        dispatch({
          type: getNonDisclosureAction.finalizeNonDisclosureSuccess,
          keyMessage: response.data
        })
      }
    })
    .catch(() => {
    })
}

export const archiveNonDisclosure: any = (ndaDetailId: string, file: any) => async (dispatch: Dispatch) => {
  const formData = new FormData()
  formData.append('file', file)
  serviceUpload({
    method: 'post',
    url: `nda/upload_file/${parseInt(ndaDetailId)}/`,
    data: formData
  })
    .then(response => {
      if (response) {        
        archiveStatus = response.status        
        dispatch({
          type: getNonDisclosureAction.finalizeNonDisclosureSuccess,
          keyMessage: response.data
        })
      }
    })
    .catch(() => { })
}