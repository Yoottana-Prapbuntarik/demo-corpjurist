import { Dispatch } from "redux";
import { serviceToken } from "../apis/baseAPIs";
import { KeyManager } from "../manager/keyManager";
export let statusCode: number, statusGetCompanyBasicInfo: number
export let companyBasicInfoId: string;

export enum CompanyBasicInfoAction {
    companyBasicInfoSuccess = 'companyBasicInfoSuccess',
    companyBasicInfoFailed = 'companyBasicInfoFailed',
    getCompanyBasicInfoSuccess = 'getCompanyBasicInfoSuccess',
    getCompanyBasicInfoFailed = 'getCompanyBasicInfoFailed',
    removeAuthorisedSignatorySuccess = 'removeAuthorisedSignatorSuccess',
    removeSigningAuthoritySucces = 'removeSigningAuthoritySucces',
    checkGeneraldInformationSuccess = 'checkGeneraldInformationSuccess',
    checkGeneraldInformationFailed = 'checkGeneraldInformationFailed'

}

export const companyBasicInfoAPIClient: any = (
    imageUpload,
    bussinessRegistrationNumber: string,
    name: string,
    hqAddress: string,
    registeredCapital: string,
    authorisedSignatory: any,
    signingAuthority: any

) => async (dispatch: Dispatch) => {

    const formData = new FormData()
    if (imageUpload !== "" && imageUpload !== undefined) {
        formData.append('file', imageUpload)
    }
    formData.append('bussiness_registration_no', bussinessRegistrationNumber)
    formData.append('name', name)
    formData.append('hq_address', hqAddress)
    formData.append('registered_capital', registeredCapital)
    for (let i = 0; i < authorisedSignatory.length; i++) {
        formData.append(`authorised_signatory[${i}]name`, authorisedSignatory[i].name)
    }

    formData.append('signing_authority[0]name', signingAuthority[0].name)
    serviceToken({
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'post',
        url: '/company_secretary/company_basic_info/',

        data: formData
    }).then(response => {
        if (response) {
            statusCode = response.status
            companyBasicInfoId = response.data.id
            dispatch({
                type: CompanyBasicInfoAction.companyBasicInfoSuccess,
                keyMessage: KeyManager.SendInformationCompanySuccess,
                DataCompanyBasicInfo: response.data,
                statusCreate: response.status
            })
        }
    }).catch(error => {
        if (error) {
            dispatch({
                type: CompanyBasicInfoAction.companyBasicInfoFailed,
                keyMessage: error.response.statusText
            })
        }
    })
}

export const updateCompanyBasicInfoAPIClient: any = (
    id: string,
    imageUpload: any,
    bussinessRegistrationNumber: string,
    name: string,
    hqAddress: string,
    registeredCapital: string,
    authorisedSignatory: any,
    signingAuthority: any,
    authorisedSignatoryCreated: any,
    authorisedSignatoryDelete: any,

) => async (dispatch: Dispatch) => {
    const formData = new FormData()

    if (imageUpload !== "" && imageUpload !== undefined) {
        formData.append('file', imageUpload)
    }

    formData.append('bussiness_registration_no', bussinessRegistrationNumber)
    formData.append('name', name)
    formData.append('hq_address', hqAddress)
    formData.append('registered_capital', registeredCapital)

    // update
    for (let index = 0; index < authorisedSignatory.length; index++) {
        formData.append(`authorised_signatory[${index}]id`, authorisedSignatory[index].id)
        formData.append(`authorised_signatory[${index}]name`, authorisedSignatory[index].name)
    }

    formData.append('signing_authority[0]id', signingAuthority[0].id)
    formData.append('signing_authority[0]name', signingAuthority[0].name)

    // create 
    for (let index = 0; index < authorisedSignatoryCreated.length; index++) {
        formData.append(`created[0]authorised_signatory[${index}]name`, authorisedSignatoryCreated[index].name)
    }

    // delete
    for (let index = 0; index < authorisedSignatoryDelete.length; index++) {
        formData.append(`deleted_authorised_signatory`, authorisedSignatoryDelete[index])
    }

    serviceToken({
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'patch',
        url: `/company_secretary/company_basic_info/${id}/`,
        data: formData
    }).then(response => {

        if (response) {
            companyBasicInfoId = response.data.id
            dispatch({
                type: CompanyBasicInfoAction.companyBasicInfoSuccess,
                keyMessage: KeyManager.SendInformationCompanySuccess,
                DataCompanyBasicInfo: response.data
            })
        }
    }).catch(error => {
        if (error) {
            dispatch({
                type: CompanyBasicInfoAction.companyBasicInfoFailed,
                keyMessage: error.response.statusText
            })
        }
    })
}

export const getCompanyBasicInfo: any = () => async (dispatch: Dispatch) => {
    serviceToken({
        method: 'get',
        url: `company_secretary/general_information/`
    })
        .then(response => {
            dispatch({
                type: CompanyBasicInfoAction.getCompanyBasicInfoSuccess,
                getCompanyBasicInfo: response.data,
                statusCreate: response.status
            })
        })
        .catch(() => {
            dispatch({
                type: CompanyBasicInfoAction.getCompanyBasicInfoFailed,
            })
        })
}

export const checkGeneralInformaion: any = () => async (dispatch: Dispatch) => {
    serviceToken({
        method: 'get',
        url: `company_secretary/check_generald_information/`
    })
        .then(response => {
            dispatch({
                type: CompanyBasicInfoAction.checkGeneraldInformationSuccess,
                checkGeneraldInformation: response.data,
                checkGeneraldStatus: response.status
            })
        })
        .catch((error) => {
            console.log(error)
            dispatch({
                type: CompanyBasicInfoAction.checkGeneraldInformationFailed,
                checkGeneraldStatus: error.response.status
            })
        })
}