import { Dispatch } from "redux";
import { serviceToken } from "../apis/baseAPIs";
// import { KeyManager } from "../manager/keyManager";

export let statusAddedSuccess: number, getShareholdersStatus: number

export enum ShareholdersDetailActionAPI {
    ShareholdersDetailSuccess = 'shareholdersDetailSuccess',
    ShareholdersDetailFailed = 'shareholdersDetailFailed',
    getShareholdersDetailSuccess = 'getShareholdersDetailSuccess',
    getShareholdersDetailFailed = 'getShareholdersDetailFailed',

}

export const getShareholdersDetail: any = () => async (dispatch: Dispatch) => {
    serviceToken({
        method: 'get',
        url: 'company_secretary/shareholders_detail',
    }).then(response =>{
        getShareholdersStatus = response.status
        dispatch({
            type: ShareholdersDetailActionAPI.getShareholdersDetailSuccess,
            getShareholdersDetail: response.data
        })
    }).catch(error =>{
        if(error)
        dispatch({
            type: ShareholdersDetailActionAPI.getShareholdersDetailFailed,
        })
    })
}
export const addShareholdersDetail: any = (
    nameOfShareholderDetail: string,
    addressOfShareholderDetail: string,
    typeOfShareDetail: string,
    amountOfShareDetail: number,
    emailOfShareDetail: string,
    phoneOfShareDetail: string,
) => async (dispatch: Dispatch) => {
    serviceToken({
        method: 'post',
        url: 'company_secretary/shareholders_detail/',
        data: params(
            nameOfShareholderDetail,
            addressOfShareholderDetail,
            typeOfShareDetail,
            amountOfShareDetail,
            emailOfShareDetail,
            phoneOfShareDetail,
        )
    }).then(response => {
        if (response) {
            statusAddedSuccess = response.status
            dispatch({
                type: ShareholdersDetailActionAPI.ShareholdersDetailSuccess,
                keyMessage: 'Save Success',
                DataCompanyBasicInfo: response.data
            })
        }
    }).catch(error => {
        if (error) {
            dispatch({
                type: ShareholdersDetailActionAPI.ShareholdersDetailFailed,
                keyMessage: 'error'
            })
        }
    })
}

const params = (
    nameOfShareholderDetail: string,
    addressOfShareholderDetail: string,
    typeOfShareDetail: string,
    amountOfShareDetail: number,
    emailOfShareDetail: string,
    phoneOfShareDetail: string,
) => {
    return {
        name_family: nameOfShareholderDetail,
        address: addressOfShareholderDetail,
        type_of_share: typeOfShareDetail,
        amount_holding: amountOfShareDetail,
        email: emailOfShareDetail,
        phone: phoneOfShareDetail
    }
}