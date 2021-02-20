import {
    RejectVerifyInformationAction
} from './RejectEkycInterface'

import {
    rejectVerifyInformationPresenter
} from './RejectEkycPresenter'
import { KeyManager } from "../../manager/keyManager";
import { actionTypes as formActionTypes } from 'redux-form'
import Router from "next/router";
import { ekycAction } from "../../apis/ekycAPIClient";
export const rejectEkycReducer = (state: any = rejectVerifyInformationPresenter, action: any) => {
    switch (action.type) {
        case ekycAction.getEkycSuccess:
            return {
                ...state,
                dataEkyc: action.data
            }

        case ekycAction.getEkycReasonSuccess:
            let dataReason = convertObjToArray(action.data)

            return {
                ...state,
                ekycReason: action.data,
                ekycReasonList: dataReason
            }

        case ekycAction.updateEkycSuccess:

            Router.replace("/waitForVerifyEkyc")
            return {
                ...state,
                citizenPicture: '',
                personPicture: '',
                personVideo: '',
                rejectVerifyLoading: false
            }

        case ekycAction.updateEkycFailed:
            return {
                ...state,
                rejectVerifyLoading: false
            }

        case RejectVerifyInformationAction.handleChangeCitizenPicture:
            return {
                ...state,
                citizenPicture: action.payload

            }

        case RejectVerifyInformationAction.handleChangePersonPicture:
            return {
                ...state,
                personPicture: action.payload

            }

        case RejectVerifyInformationAction.handleChangePersonVideo:
            return {
                ...state,
                personVideo: action.payload

            }

        case RejectVerifyInformationAction.handleSubmitRejectVerifyInofrmation:

            return {
                ...state,
                rejectVerifyCitizenId: {
                    verifyCitizenId: KeyManager.VerifyCitizenId,
                    value: action.payload.verifyCitizenId
                },
                rejectVerifyTelephone: {
                    verifyTelephone: KeyManager.VerifyTelephone,
                    value: action.payload.verifyTelephone
                },
                verifyInformationData: action.payload,
            }

        case RejectVerifyInformationAction.rejectVerifyLoading:
            return {
                ...state,
                rejectVerifyLoading: true
            }

        case formActionTypes.INITIALIZE:
            const rejectVerifyInformationPresenterInit = {

                rejectVerifyTelephone: {
                    verifyTelephone: KeyManager.VerifyTelephone,
                    value: ''
                },

                rejectVerifyCitizenId: {
                    verifyCitizenId: KeyManager.VerifyCitizenId,
                    value: ''
                },

                verifyInformationData: ''
            }
            return {
                ...state,
                rejectVerifyInformationPresenterInit,
            }

        default:
            return state;
    }
}


let convertObjToArray = (data) => {

    let array = Object.entries(data).map(([key, value]) => ({ item: [key, value] }));
    array = array.filter(item => item.item[1] !== "" && typeof(item.item[1]) === "string")
    return array
}