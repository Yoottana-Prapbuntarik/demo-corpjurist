import {
    RejectVerifyTelephone,
    RejectVerifyCitizenId,
    RejectVerifyInformationPresenter,
    RejectVerifyFirstName,
    RejectVerifyLastName
} from './RejectEkycInterface'

import { KeyManager } from '../../manager/keyManager'


const rejectVerifyTelephone: RejectVerifyTelephone = {
    verifyTelephone: KeyManager.RejectVerifyTelephone,
    value: ''
}

const rejectVerifyCitizenId: RejectVerifyCitizenId = {
    verifyCitizenId: KeyManager.RejectCitizenId,
    value: ''
}

const rejectVerifyFirstName: RejectVerifyFirstName = {
    verifyFirstName: KeyManager.RejectVerifyFirstName,
    value: ''
}
const rejectVerifyLastName: RejectVerifyLastName = {
    verifyLastName: KeyManager.RejectVerifyLastName,
    value: ''
}

export const rejectVerifyInformationPresenter: RejectVerifyInformationPresenter = {
    rejectVerifyTelephone: rejectVerifyTelephone,
    rejectVerifyCitizenId: rejectVerifyCitizenId,
    rejectVerifyFirstName: rejectVerifyFirstName,
    rejectVerifyLastName: rejectVerifyLastName,
    verifyInformationData: '',
    verifyTelephonePlaceholder: KeyManager.Phone,
    verifyCitizenIdPlaceholder: KeyManager.CitizenId,
    verifyFirstNamePlaceholder: KeyManager.FirstName,
    verifyLastNamePlaceholder: KeyManager.FamilyName,
    citizenPicture: "",
    personPicture: "",
    personVideo: "",
    dataEkyc: "",
    ekycReason: {},
    ekycReasonList: [],
    rejectVerifyLoading: false
}