import {
  ShareMyCompanyPresenter,
  ShareHolderItems,
  ShareInformationItems,
  Dashboard
} from './ShareMyCompanyInterface'
import {
  KeyManager
} from '../../manager/keyManager'

const shareHolderItems: ShareHolderItems = {
  keyStatusShare: KeyManager.StatusShare,
  keyShareHolderByName: KeyManager.ShareHolderByName,
  keyTypeShare: KeyManager.TypeShare
}

const shareInformationItems: ShareInformationItems = {
  keyCapitalCall: KeyManager.CapitalCall
}

const dashboard: Dashboard = {
  keyTotalShareHolder: KeyManager.TotalShareHolder,
  keyTotalShare: KeyManager.TotalShare,
  keyTotalRegisterCapital: KeyManager.TotalRegisterCapital,
  keyPercentedCapitalCall: KeyManager.PercentedCapitalCall
}

export const shareMyCompanyPresenter: ShareMyCompanyPresenter = {
  keyHeaderHolders: KeyManager.HeaderHolders,
  keyHeaderShareInformation: KeyManager.HeaderShareInformation,
  keyHeaderDashBoard: KeyManager.HeaderDashBoard,
  keyButtonEdit: KeyManager.Edit,
  keyButtonDelete: KeyManager.Delete,
  keyButtonAddShareHolder: KeyManager.AddShareHolder,
  keyButtonPreference: KeyManager.Preference,
  keyButtonSaveShare: KeyManager.Save,
  shareHolderItems: shareHolderItems,
  shareInformationItems: shareInformationItems,
  dashboard: dashboard
}
