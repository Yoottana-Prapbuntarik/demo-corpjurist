import { Dispatch } from 'redux'
import { serviceToken } from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'

export let statusCode: number

export enum ekycAction {
    sendEkycSuccess = 'sendEkycSuccess',
    sendEkycFailed = 'sendEkycFailed',
    getEkycSuccess = 'getEkycSuccess',
    getEkycFailed = 'getEkycFailed',
    getEkycReasonSuccess = 'getEkycReasonSuccess',
    getEkReasonycFailed = 'getEkycReasonFailed',
    updateEkycSuccess = 'updateEkycSuccess',
    updateEkycFailed = 'updateEkycFailed',
}

export const sendEkycAction: any = (
    email: string,
    telephone: string,
    firstName: string,
    lastName: string,
    idCard: string,
    personImage: string,
    idCardImages: string,
    verifyVideo: string,

) => async (dispatch: Dispatch) => {
    serviceToken({
        method: 'post',
        url: '/user/eKyc/',
        data: params(
            email,
            telephone,
            firstName,
            lastName,
            idCard,
            personImage,
            idCardImages,
            verifyVideo)

    }).then((response) => {
        if (response) {
            statusCode = response.status
            dispatch({
                type: ekycAction.sendEkycSuccess,
                keyMessage: KeyManager.SendInformationCompanySuccess
            })
        }

    }).catch(error => {
        if (error) {
            statusCode = error.response.status
            dispatch({
                type: ekycAction.sendEkycFailed,
                keyMessage: KeyManager.EkycFailed
            })
        }
    })
}

export const updateEkycAction: any = (
    id: any,
    firstName: string,
    lastName: string,
    telephone: string,
    idCard: string,
    personImage: string,
    idCardImages: string,
    verifyVideo: string,

) => async (dispatch: Dispatch) => {
    serviceToken({
        method: 'patch',
        url: `/user/eKyc/${id}/`,
        data: paramsUpdate(
            firstName,
            lastName,
            telephone,
            idCard,
            personImage,
            idCardImages,
            verifyVideo
        )

    }).then((response) => {
        if (response) {
            statusCode = response.status
            dispatch({
                type: ekycAction.updateEkycSuccess,
                keyMessage: KeyManager.SendInformationCompanySuccess
            })
        }

    }).catch(error => {
        if (error) {
            statusCode = error.response.status
            dispatch({
                type: ekycAction.updateEkycFailed,
                keyMessage: KeyManager.EkycFailed
            })
        }
    })
}

export const getEkycReasonAction: any = (id: any) => async (dispatch: Dispatch) => {
    serviceToken({
        method: 'get',
        url: `/user/eKyc_reason/${id}/`,
    }).then((response) => {
        if (response) {
            statusCode = response.status
            dispatch({
                type: ekycAction.getEkycReasonSuccess,
                data: response.data
            })
        }

    }).catch(error => {
        if (error) {
            statusCode = error.response.status
            dispatch({
                type: ekycAction.getEkReasonycFailed,
                data: {}
            })
        }
    })
}

export const getEkycAction: any = () => async (dispatch: Dispatch) => {
    serviceToken({
        method: 'get',
        url: '/user/eKyc/',
    }).then((response) => {
        if (response) {
            statusCode = response.status
            dispatch({
                type: ekycAction.getEkycSuccess,
                data: response.data[0]
            })
        }

    }).catch(error => {
        if (error) {
            statusCode = error.response.status
            dispatch({
                type: ekycAction.getEkycFailed,
                data: {}
            })
        }
    })
}

const params = (
    email: string,
    telephone: string,
    firstName: string,
    lastName: string,
    idCard: string,
    personImage: string,
    idCardImages: string,
    verifyVideo: string,
) => {
    return {

        email: email,
        tel: telephone,
        first_name: firstName,
        last_name: lastName,
        id_card: idCard,
        person_image_uri: personImage,
        id_card_uri: idCardImages,
        verify_video_uri: verifyVideo
    }
}

const paramsUpdate = (
    firstName: string,
    lastName: string,
    telephone: string,
    idCard: string,
    personImage: string,
    idCardImages: string,
    verifyVideo: string,
) => {

    let data = {
        first_name: firstName,
        last_name: lastName,
        tel: telephone,
        id_card: idCard,
        person_image_uri: personImage,
        id_card_uri: idCardImages,
        verify_video_uri: verifyVideo
    }


    let filterNullItem = Object.keys(data).reduce((newObj, key) => {
        const value = data[key];
        if (value !== null && value !== undefined && value !== '') {
            newObj[key] = value;
        }
        return newObj;
    }, {});

    return filterNullItem;
}
