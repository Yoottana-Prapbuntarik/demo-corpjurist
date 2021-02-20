import {HomeCorporateSecretaryPresenter} from './HomeCorporateSecretaryInterface'
import { KeyManager } from "../../manager/keyManager";
export const homeCorporateSecretaryPresenter: HomeCorporateSecretaryPresenter = {
    generalInformation: KeyManager.GeneralInformation,
    shareholderDetails: KeyManager.ShareholderDetails
}