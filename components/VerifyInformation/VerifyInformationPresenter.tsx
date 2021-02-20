import {
    VerifyEmail,
    VerifyTelephone,
    VerifyFirstName,
    VerifyLastName,
    VerifyCitizenId,
    VerifyInformationPresenter
} from './VerifyInformationInterface'

import { KeyManager } from '../../manager/keyManager'


const verifyEmail: VerifyEmail = {
    verifyEmail: KeyManager.VerifyEmail,
    value: ''
}
const verifyTelephone: VerifyTelephone = {
    verifyTelephone: KeyManager.VerifyTelephone,
    value: ''
}
const verifyFirstName: VerifyFirstName = {
    verifyFirstName: KeyManager.VerifyFirstName,
    value: ''
}
const verifyLastName: VerifyLastName = {
    verifyLastName: KeyManager.VerifyLastName,
    value: ''
}
const verifyCitizenId: VerifyCitizenId = {
    verifyCitizenId: KeyManager.VerifyCitizenId,
    value: ''
}

export const verifyInformationPresenter: VerifyInformationPresenter = {
    verifyEmail: verifyEmail,
    verifyTelephone: verifyTelephone,
    verifyFirstName: verifyFirstName,
    verifyLastName: verifyLastName,
    verifyCitizenId: verifyCitizenId,
    verifyInformationData: '',
    keyImagePath: '/assets/images/verify-ekyc.jpg',
    verifyEmailPlaceholder: KeyManager.Email,
    verifyTelephonePlaceholder: KeyManager.Phone,
    verifyFirstNamePlaceholder: KeyManager.FirstName,
    verifyLastNamePlaceholder: KeyManager.FamilyName,
    verifyCitizenIdPlaceholder: KeyManager.CitizenId,
    isHasEkyc: '',
    isLoadingEkycData: false
}