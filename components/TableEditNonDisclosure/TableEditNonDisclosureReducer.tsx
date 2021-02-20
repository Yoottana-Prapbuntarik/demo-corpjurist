import { TableEditNonDisclosurePresenter, TableEditNonDisclosureAction } from './TableEditNonDisclosureInterface'
import { tableEditNonDisclosurePresenter } from './TableEditNonDisclosurePresenter'
import { getNonDisclosureAction } from '../../apis/tableEditNonDisclosureAPIClient'
import Router from 'next/router'
import { KeyManager } from '../../manager/keyManager'
import { routeToPageNonDisclosure } from '../../manager/routerManager'

export const tableEditNonDisclosureReducer = (state: TableEditNonDisclosurePresenter = tableEditNonDisclosurePresenter, action: any): any => {
  switch (action.type) {
    case getNonDisclosureAction.getNonDisclosureSuccess:
      return {
        ...state,
        dataGetNonDisclosure: action.getNonDisclosure,
        isLoadingTableEditAction: false,
      }

    case getNonDisclosureAction.deleteNonDisclosureSuccess:
      return {
        ...state,
        isLoadingTableEditAction: false,
        isAcknowledgeError: true,
        keyTableEditMessage: KeyManager.DeleteNdaSuccess
      }

    case getNonDisclosureAction.deleteNonDisclosureFailed:
      return {
        ...state,
        isLoadingTableEditAction: false,
        isAcknowledgeError: true,
        keyTableEditMessage: KeyManager.DeleteNdaFailed
      }

    case TableEditNonDisclosureAction.acknowledgeError:
      return {
        ...state,
        isAcknowledgeError: action.payload
      }

    case TableEditNonDisclosureAction.startLoadingTableEditAction:

      return {
        ...state,
        isLoadingTableEditAction: action.payload
      }

    case TableEditNonDisclosureAction.getNonDisclosureEdit:

      Router.replace({ pathname: routeToPageNonDisclosure, query: { idEditing: action.payload, statusApproval: action.approvalData !== null ? action.approvalData.status : "null" } })
      return state

    case getNonDisclosureAction.finalizeNonDisclosureSuccess:
      return {
        ...state,
        keyTableEditMessage: KeyManager.FinalizeSuccess,
        isAcknowledgeError: true,
        isLoadingTableEditAction: false,
      }
    case TableEditNonDisclosureAction.errorTypeFile:
      return {
        ...state,
        keyTableEditMessage: action.payload,
        isAcknowledgeError: true
      }

    case getNonDisclosureAction.archiveNonDisclosureSuccess:
      return {
        ...state,
        keyTableEditMessage: KeyManager.ArchiveSuccess,
        isAcknowledgeError: true,
        isLoadingTableEditAction: false,
      }

    default:
      return state
  }
}
