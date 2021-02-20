import { TableEditNonDisclosurePresenter } from './TableEditNonDisclosureInterface'
import { KeyManager } from '../../manager/keyManager'
export const tableEditNonDisclosurePresenter: TableEditNonDisclosurePresenter = {
  tableHeaderid: KeyManager.Id,
  tableHeaderName: KeyManager.Name,
  tableHeaderAction: KeyManager.Action,
  tableHeaderEmailPartyII: KeyManager.StatusEmail,
  btnTextEdit: KeyManager.Edit,
  btnTextDelete: KeyManager.Delete,
  btnDownload: KeyManager.Download,
  dataGetNonDisclosure: [],
  isLoadingTableEditAction: false,
  isAcknowledgeError: false,
  keyTableEditMessage: '',
  headerInProgress: KeyManager.HeaderInProgress,
  headerEffective: KeyManager.HeaderEffective,
  btnFinally: KeyManager.BtnFinally,
  btnTerminate: KeyManager.BtnTerminate,
  btnArchive: KeyManager.BtnArchive,
  startDateEffective: KeyManager.StartDateEffective,
  endDateEffective: KeyManager.EndDateEffective,
  alert: KeyManager.Alert,
  addEmail: KeyManager.AddEmail
}
