import { serviceToken } from './baseAPIs'
import { Dispatch } from 'redux'

export enum getInformationCompanyAction {
  getInformationCompany_Success = 'getInformationCompany_Success',
  getInformationCompany_Failed = 'getInformationCompany_Failed',
}

enum defineIndexInArray {
  indexOne = 0,
}

export const getInformationCompany: any = () => async (dispatch: Dispatch) => {
  serviceToken({
    method: 'get',
    url: 'company_information'
  })

    .then((response) => {
      const dataCompanyAPI = response.data[defineIndexInArray.indexOne]
      if (response) {
        serviceToken({
          method: 'get',
          url: `/address_search/${dataCompanyAPI.province}`
        })
          .then((responseProvince) => {
            serviceToken({
              method: 'get',
              url: `/address_search/${responseProvince.data.data[defineIndexInArray.indexOne].province_id}/${dataCompanyAPI.district}`
            })
              .then((responseDistrict) => {
                serviceToken({
                  method: 'get',
                  url: `/address_search/${responseProvince.data.data[defineIndexInArray.indexOne].province_id}/${responseDistrict.data.data[defineIndexInArray.indexOne].district_id}/${dataCompanyAPI.sub_district}`
                })
                  .then((responseSubDistrict) => {
                    dispatch({
                      type: getInformationCompanyAction.getInformationCompany_Success,
                      keyStatus: response.status,
                      getInformationCompany: dataCompanyAPI,
                      getInformationCompanyProvince: responseProvince.data.data[defineIndexInArray.indexOne],
                      getInformationCompanyDistrict: responseDistrict.data.data[defineIndexInArray.indexOne],
                      getInformationCompanySubDistrict: responseSubDistrict.data.data[defineIndexInArray.indexOne]
                    })
                  })
              })
          })
      }
    })

    .catch(() => {
      dispatch({
        type: getInformationCompanyAction.getInformationCompany_Failed
      })
    })
}
