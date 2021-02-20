import { Dispatch } from 'redux'
import { serviceToken } from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'

export enum SendInformationCompany {
    SendInformationCompany_Success = 'SendInformationCompany_Success',
    SendInformationCompany_Failed = 'SendInformationCompany_Failed'
}

export const companyInformationForm: any = (companyName1: string, companyName2: string, companyName3: string,
  registrationNumber: string, addressNumber: string, village: string, road: string,
  province: string, district: string, subDistrict: string, zipcode: string,
  licenseNumber: string, auditorName: string) => async (dispatch: Dispatch
) => {
  serviceToken({
    method: 'post',
    url: 'company_information/',
    data: params(companyName1, companyName2, companyName3,
      registrationNumber, addressNumber, village, road,
      province, district, subDistrict, zipcode,
      licenseNumber, auditorName)
  })

    .then((response) => {
      if (response) {
        dispatch({
          type: SendInformationCompany.SendInformationCompany_Success,
          keyMessage: KeyManager.SendInformationCompanySuccess
        })
      }
    })
}

export const updateCompanyInformationForm: any = (currentIdInformation: number, companyName1: string, companyName2: string, companyName3: string,
  registrationNumber: string, addressNumber: string, village: string, road: string,
  province: string, district: string, subDistrict: string, zipcode: string,
  licenseNumber: string, auditorName: string) => async (dispatch: Dispatch
) => {
  serviceToken({
    method: 'put',
    url: `company_information/${currentIdInformation}/edit/`,
    data: params(companyName1, companyName2, companyName3,
      registrationNumber, addressNumber, village, road,
      province, district, subDistrict, zipcode,
      licenseNumber, auditorName)
  })

    .then((response) => {
      if (response) {
        dispatch({
          type: SendInformationCompany.SendInformationCompany_Success,
          keyMessage: KeyManager.SendInformationCompanySuccess
        })
      }
    })

    .catch((error) => {
      if (error.response) {
        dispatch({
          type: SendInformationCompany.SendInformationCompany_Failed,
          keyMessage: error.response.data.detail
        })
      }
    })
}

const params = (companyName1: string, companyName2: string, companyName3: string,
  registrationNumber: string, addressNumber: string, village: string, road: string,
  province: string, district: string, subDistrict: string, zipcode: string,
  licenseNumber: string, auditorName: string) => {
  return {
    company_name_1: companyName1,
    company_name_2: companyName2,
    company_name_3: companyName3,
    registration_no: registrationNumber,
    address_no: addressNumber,
    village: village,
    road: road,
    province: province,
    district: district,
    sub_district: subDistrict,
    zipcode: zipcode,
    license_number: licenseNumber,
    auditor_name: auditorName
  }
}
