import {
    VerifyInformationAction
} from './VerifyInformationInterface'

import {
    verifyInformationPresenter
} from './VerifyInformationPresenter'
import Router from "next/router";
import { KeyManager } from "../../manager/keyManager";
import { actionTypes as formActionTypes } from 'redux-form'
import { manageAccountUserAction } from "../../apis/manageAccountUserAPIClient";
import { ekycAction } from "../../apis/ekycAPIClient";
export const verifyInformationReducer = (state: any = verifyInformationPresenter, action: any) => {
    switch (action.type) {

        case ekycAction.getEkycSuccess:
            return {
                ...state,
                isHasEkyc: action.data,
                isLoadingEkycData: false
            }

        case ekycAction.getEkycFailed:
            return {
                ...state,
                isLoadingEkycData: false
            }


        case VerifyInformationAction.isLoadingEkycData:
            return {
                ...state,
                isLoadingEkycData: true
            }

        case manageAccountUserAction.getProfileSuccess:
            return {
                ...state,
                verifyEmail: {
                    verifyEmail: KeyManager.VerifyEmail,
                    value: action.userProfile.email
                },
                verifyFirstName: {
                    verifyFirstName: KeyManager.VerifyFirstName,
                    value: action.userProfile.first_name
                },
                verifyLastName: {
                    verifyLastName: KeyManager.VerifyLastName,
                    value: action.userProfile.last_name
                },
                verifyCitizenId: {
                    verifyCitizenId: KeyManager.VerifyCitizenId,
                    value: action.userProfile.id_card
                },
                verifyTelephone: {
                    verifyTelephone: KeyManager.VerifyTelephone,
                    value: action.userProfile.tel
                },
            }
        case VerifyInformationAction.handleSubmitVerifyInformation:
            Router.push("/uploadCitizen")
            return {
                ...state,
                verifyCitizenId: {
                    verifyCitizenId: KeyManager.VerifyCitizenId,
                    value: action.payload.verifyCitizenId
                },
                verifyTelephone: {
                    verifyTelephone: KeyManager.VerifyTelephone,
                    value: action.payload.verifyTelephone
                },

                verifyInformationData: action.payload
            }

        case formActionTypes.INITIALIZE:
            const verifyInformationPresenterInit = {
                verifyEmail: {
                    verifyEmail: KeyManager.VerifyEmail,
                    value: ''
                },
                verifyTelephone: {
                    verifyTelephone: KeyManager.VerifyTelephone,
                    value: ''
                },
                verifyFirstName: {
                    verifyFirstName: KeyManager.VerifyFirstName,
                    value: ''
                },
                verifyLastName: {
                    verifyLastName: KeyManager.VerifyLastName,
                    value: ''
                },
                verifyCitizenId: {
                    verifyCitizenId: KeyManager.VerifyCitizenId,
                    value: ''
                },
                verifyInformationData: ''
            }
            return {
                ...state,
                verifyInformationPresenterInit,
            }

        default:
            return state;
    }
}