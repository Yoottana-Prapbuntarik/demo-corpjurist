import { MainNonDisclosurePresenter } from './MainNonDisclosureInterface'
import { KeyManager } from '../../manager/keyManager'

export const mainNonDisclosurePresenter: MainNonDisclosurePresenter = {
    comercial: KeyManager.Comercial,
    employment: KeyManager.Employment,
    myCompany: KeyManager.MyCompany,
    corporat: KeyManager.Corporat,
    intellectual: KeyManager.Intellectual,
    notification: KeyManager.Notification,
    checkStatusGeneralInformation: ''
}
