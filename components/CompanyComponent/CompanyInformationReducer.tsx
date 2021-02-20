import Router from 'next/router'
import {
  CompanyInformationPresenter,
  CompanyInformationAction
} from './CompanyInformationInterfaces'
import {
  companyInformationPresenter
} from './CompanyInformationPresenter'
import {
  KeyManager
} from '../../manager/keyManager'
import {
  TextManager
} from '../../manager/TextManager'
import {
  AddressAction
} from '../../apis/addressAPIClient'
import {
  SendInformationCompany
} from '../../apis/companyInformationAPIClient'
import {
  getInformationCompanyAction
} from '../../apis/getInformationCompanyAPIClient'
import {
  i18n
} from '../../i18n'

export let currentIDIformation = 0

enum DefineIndexArray {
  FirstIndex = 0
}

const DataFormApi = {
  ProvinceAPI: [],
  DistrictAPI: [],
  SubDistrictAPI: [],
  zipCodeAPI: []
}

export const companyInformationReducer =
  (state: CompanyInformationPresenter = companyInformationPresenter,
    action: any): any => {
    switch (action.type) {
      case CompanyInformationAction.handleChangeCompanyName1:
        return {
          ...state,
          labelCompanyName1: {
            name: KeyManager.CompanyName1,
            keyCompanyName: KeyManager.CompanyName1,
            valueCompanyName: action.payload
          }
        }
      case CompanyInformationAction.handleChangeCompanyName2:
        return {
          ...state,
          labelCompanyName2: {
            name: KeyManager.CompanyName2,
            keyCompanyName: KeyManager.CompanyName2,
            valueCompanyName: action.payload
          }
        }
      case CompanyInformationAction.handleChangeCompanyName3:
        return {
          ...state,
          labelCompanyName3: {
            name: KeyManager.CompanyName3,
            keyCompanyName: KeyManager.CompanyName3,
            valueCompanyName: action.payload
          }
        }
      case CompanyInformationAction.handChangeRegistrationNumber:
        return {
          ...state,
          labelRegistrationNumber: {
            keyLabelName: KeyManager.RegistrationNumber,
            valueLabelAddress: action.payload,
            name: KeyManager.RegistrationNumber
          }
        }
      case CompanyInformationAction.handChangeAddressNumber:
        return {
          ...state,
          labelAddressNumber: {
            keyLabelName: KeyManager.AddressNumber,
            valueLabelAddress: action.payload,
            name: KeyManager.AddressNumber
          }
        }
      case CompanyInformationAction.handChangeVillage:
        return {
          ...state,
          labelVillage: {
            keyLabelName: KeyManager.Village,
            valueLabelAddress: action.payload,
            name: KeyManager.Village
          }
        }

      case CompanyInformationAction.handChangeRoad:
        return {
          ...state,
          labelRoad: {
            keyLabelName: KeyManager.Road,
            valueLabelAddress: action.payload,
            name: KeyManager.Road
          }
        }

      case CompanyInformationAction.handleChangeAuditorLicense:
        return {
          ...state,
          labelAuditorLicense: {
            keyLicense: KeyManager.AuditorLicense,
            valueLicense: action.payload
          }
        }

      case CompanyInformationAction.handleChangeAuditor:
        return {
          ...state,
          labelAuditor: {
            keyAuditorName: KeyManager.AuditorName,
            valueAuditorName: action.payload
          }
        }

      case AddressAction.chooseProvincesSuccess: {
        const resetProvinces = [{
          province_id: 1,
          name: TextManager.DefaultProvince
        }]
        const newProvincesAction = resetProvinces.concat(action.provinces)
        return {
          ...state,
          provincesItem: newProvincesAction
        }
      }
      case AddressAction.chooseDistrictSuccess: {
        const resetDistrict = [{
          district_id: 0,
          name: TextManager.SelectData
        }]
        const newDistrictAction = resetDistrict.concat(action.district)
        return {
          ...state,
          districtItem: newDistrictAction
        }
      }
      case AddressAction.chooseDistrictFailed: {
        const chooseDistrictFailed = [{
          district_id: 0,
          name: TextManager.SelectData
        }]
        return {
          ...state,
          districtItem: chooseDistrictFailed
        }
      }
      case AddressAction.chooseSubDistrictSuccess: {
        const resetSubDistrict = [{
          sub_district_id: 0,
          name: TextManager.SelectData
        }]
        const newSubDistrictAction = resetSubDistrict.concat(action.subDistrict)
        return {
          ...state,
          subDistrictItem: newSubDistrictAction
        }
      }
      case AddressAction.chooseSubDistrictFailed: {
        const chooseSubDistrictFailed = [{
          sub_district_id: 0,
          name: TextManager.SelectData
        }]
        return {
          ...state,
          subDistrictItem: chooseSubDistrictFailed
        }
      }
      case AddressAction.chooseZipCodeSuccess: {
        const resetZipCode = [{ zipcode: TextManager.SelectData }]
        const newZipCodeAction = resetZipCode.concat(action.zipCode)
        return {
          ...state,
          zipCode: newZipCodeAction
        }
      }
      case AddressAction.chooseZipCodeFailed: {
        const chooseZipCodeFailed = [{ zipcode: TextManager.SelectData }]
        return {
          ...state,
          zipCode: chooseZipCodeFailed
        }
      }
      case SendInformationCompany.SendInformationCompany_Success:
        alert(i18n.t(action.keyMessage))
        Router.push('/')
        return state

      case SendInformationCompany.SendInformationCompany_Failed:
        alert(i18n.t(action.keyMessage))
        return state

      case getInformationCompanyAction.getInformationCompany_Success: {
        if (action.getInformationCompany !== undefined) {
          currentIDIformation = action.getInformationCompany.id
          DataFormApi.ProvinceAPI = state.provincesItem
          DataFormApi.ProvinceAPI[DefineIndexArray.FirstIndex] = {
            province_id: action.getInformationCompanyProvince.province_id,
            name: action.getInformationCompanyProvince.name
          }

          DataFormApi.DistrictAPI = state.districtItem
          DataFormApi.DistrictAPI[DefineIndexArray.FirstIndex] = {
            district_id: action.getInformationCompanyDistrict.district_id,
            name: action.getInformationCompanyDistrict.name
          }

          DataFormApi.SubDistrictAPI = state.subDistrictItem
          DataFormApi.SubDistrictAPI[DefineIndexArray.FirstIndex] = {
            sub_district_id: action.getInformationCompanySubDistrict.sub_district_id,
            name: action.getInformationCompanySubDistrict.name
          }
          DataFormApi.zipCodeAPI = state.zipCode
          DataFormApi.zipCodeAPI[DefineIndexArray.FirstIndex] = {
            zipcode: action.getInformationCompany.zipcode
          }

          const companyInformationPresenter = {
            keyGetCurrentInfomationStatus: action.keyStatus,
            labelCompanyName1: {
              name: KeyManager.CompanyName1,
              keyCompanyName: KeyManager.CompanyName1,
              valueCompanyName: state.labelCompanyName1.valueCompanyName = action.getInformationCompany.company_name_1
            },
            labelCompanyName2: {
              name: KeyManager.CompanyName2,
              keyCompanyName: KeyManager.CompanyName2,
              valueCompanyName: state.labelCompanyName2.valueCompanyName = action.getInformationCompany.company_name_2
            },
            labelCompanyName3: {
              name: KeyManager.CompanyName3,
              keyCompanyName: KeyManager.CompanyName3,
              valueCompanyName: state.labelCompanyName3.valueCompanyName = action.getInformationCompany.company_name_3
            },
            labelRegistrationNumber: {
              keyLabelName: KeyManager.RegistrationNumber,
              valueLabelAddress: state.labelRegistrationNumber.valueLabelAddress = action.getInformationCompany.registration_no,
              name: KeyManager.RegistrationNumber
            },
            labelAddressNumber: {
              keyLabelName: KeyManager.AddressNumber,
              valueLabelAddress: state.labelAddressNumber.valueLabelAddress = action.getInformationCompany.address_no,
              name: KeyManager.AddressNumber
            },
            labelVillage: {
              keyLabelName: KeyManager.Village,
              valueLabelAddress: state.labelVillage.valueLabelAddress = action.getInformationCompany.village,
              name: KeyManager.Village
            },
            labelRoad: {
              keyLabelName: KeyManager.Road,
              valueLabelAddress: state.labelRoad.valueLabelAddress = action.getInformationCompany.road,
              name: KeyManager.Road
            },
            provincesItem: DataFormApi.ProvinceAPI,
            districtItem: DataFormApi.DistrictAPI,
            subDistrictItem: DataFormApi.SubDistrictAPI,
            zipCode: DataFormApi.zipCodeAPI,
            labelAuditorLicense: {
              keyLicense: KeyManager.AuditorLicense,
              valueLicense: state.labelAuditorLicense.valueLicense = action.getInformationCompany.license_number
            },
            labelAuditor: {
              keyAuditorName: KeyManager.AuditorName,
              valueAuditorName: state.labelAuditor.valueAuditorName = action.getInformationCompany.auditor_name
            }
          }
          return {
            ...state,
            companyInformationPresenter,
            keyGetCurrentInfomationStatus: action.keyStatus
          }
        } else {
          return state
        }
      }

      default:
        return state
    }
  }
