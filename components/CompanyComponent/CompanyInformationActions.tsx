import { Dispatch } from 'redux'
import {
  CompanyInformationAction
} from './CompanyInformationInterfaces'
import {
  chooseProvinces,
  chooseDistrict,
  chooseSubDistrict,
  chooseZipCode
} from '../../apis/addressAPIClient'
import {
  companyInformationForm,
  updateCompanyInformationForm
} from '../../apis/companyInformationAPIClient'
import {
  reset
} from 'redux-form'
import {
  getInformationCompany
} from '../../apis/getInformationCompanyAPIClient'
import { FormManager } from '../../manager/formManager'
import { currentIDIformation } from './CompanyInformationReducer'

let provinceItems: any
let districtItems: any
let subDistrictItems: any

export const mapDispatchToProps = (dispatch: Dispatch) => ({

  showAllProvinces: () => { dispatch(chooseProvinces()) },

  getCurrentCompanyInformation: async () => {
    await dispatch(getInformationCompany())
    await dispatch(chooseProvinces())
  },

  formSelectProvinces: (provinceData: any, event: any) => {
    provinceData.map(item => {
      if (item.province_id === parseInt(event)) {
        provinceItems = { province_id: item.province_id, name: item.name }
      }
    })

    dispatch(chooseDistrict(provinceItems.province_id))
  },

  formSelectDistrict: (districtData, event: any) => {
    districtData.map(item => {
      if (item.district_id === parseInt(event)) {
        districtItems = { district_id: item.district_id, name: item.name }
      }
    })

    dispatch(chooseSubDistrict(provinceItems.province_id,
      districtItems.district_id))
  },

  formSelectSubDistrict: (subDistrictData, event: any) => {
    subDistrictData.map(item => {
      if (item.sub_district_id === parseInt(event)) {
        subDistrictItems = { sub_district_id: item.sub_district_id, name: item.name }
      }
    })

    dispatch(chooseZipCode(provinceItems.province_id,
      districtItems.district_id,
      subDistrictItems.sub_district_id))
  },

  changeTextFieldCompanyName1: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeCompanyName1,
      payload: event
    })
  },

  changeTextFieldCompanyName2: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeCompanyName2,
      payload: event
    })
  },

  changeTextFieldCompanyName3: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeCompanyName3,
      payload: event
    })
  },

  changeTextFieldRegistrationNumber: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handChangeRegistrationNumber,
      payload: event
    })
  },

  changeTextFieldAddressNumber: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handChangeAddressNumber,
      payload: event
    })
  },

  changeTextFieldVillage: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handChangeVillage,
      payload: event
    })
  },

  changeTextFieldRoad: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handChangeRoad,
      payload: event
    })
  },

  changeTextFieldAuditorLicense: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeAuditorLicense,
      payload: event
    })
  },

  changeTextFieldAuditor: (event: any) => {
    dispatch({
      type: CompanyInformationAction.handleChangeAuditor,
      payload: event
    })
  },

  submitCompanyInformation: (event: any) => {
    dispatch(companyInformationForm(event.companyName1,
      event.companyName2,
      event.companyName3,
      event.registrationNumber,
      event.addressNumber,
      event.village,
      event.road,
      provinceItems.name,
      districtItems.name,
      subDistrictItems.name,
      event.zipCode,
      event.auditorLicense,
      event.auditorName))

    dispatch(reset(FormManager.InformationForm))
  },

  updateCompanyInformation: async (event: any) => {
    await dispatch(updateCompanyInformationForm(currentIDIformation,
      event.companyName1,
      event.companyName2,
      event.companyName3,
      event.registrationNumber,
      event.addressNumber,
      event.village,
      event.road,
      provinceItems.name,
      districtItems.name,
      subDistrictItems.name,
      event.zipCode,
      event.auditorLicense,
      event.auditorName))

    dispatch(reset(FormManager.InformationForm))
  }

})
