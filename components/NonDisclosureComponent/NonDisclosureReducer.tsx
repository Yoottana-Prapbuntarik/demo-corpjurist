import {
  NonDisclosureAction
} from './NonDisclosureInterface'
import {
  nonDisclosurePresenter
} from './NonDisclosurePresenter'
import {
  KeyManager
} from '../../manager/keyManager'
import { NonDisclosureAPIClient } from '../../apis/nonDisclosureAPIClient'
import { CompanyBasicInfoAction } from "../../apis/companyBasicInfoAPIClient";
import countryEn from "../../country/countryEn.json";
import countryTH from "../../country/countryTH.json";
import ndaLanguageEN from "../../ndaLanguage/ndaLanguageEN.json";
import ndaLanguageTH from "../../ndaLanguage/ndaLanguageTH.json";
import { i18n } from "../../i18n";
import { actionTypes as formActionTypes } from 'redux-form'
import { idUpdate } from "./NonDisclosureAction";
import Router from "next/router";
import { routeToPageMyNonDisclosureAgreement } from '../../manager/routerManager'
import { NonDisclosureVariable } from "./NonDisclosureVariable";
export let currentDataNonDisclosure: any
export let choiceOfLaw: any
export let jurisdiction: any
export let startDate: string
export let endDate: string
export let ndaLanguage: string
export let initialNameOfSignatory: any
export let companyBasicInfoId: number
export let dataNonDisclosureApi: any

export const nonDisclosureReducer = (state: any = nonDisclosurePresenter, action: any): any => {
  if (action.dataAPI !== undefined) {
    startDate = action.dataAPI.date_of_agreement
    endDate = action.dataAPI.end_date
  }

  switch (action.type) {
    case NonDisclosureAction.subScribeNameOfSignatory:
      return {
        ...state,
        signatoryAuthority: {
          value: state.signatoryAuthority.value = action.payload
        },
      }

    case NonDisclosureAction.nonDisclosureChangeLanguage:
      const createNewSignatory = state.signatoryAuthority.value.map(item => {
        return {
          name: item.name,
          title: i18n.language === "en" ? NonDisclosureVariable.signatoryTitleTH :
            NonDisclosureVariable.signatoryTitleEN
        }
      })

      return {
        ...state,
        signatoryAuthority: {
          value: state.signatoryAuthority.value = createNewSignatory
        },
      }

    case NonDisclosureAction.addSignatory:
      return {
        ...state,
        addSignatory: state.addSignatory + 1
      }

    case NonDisclosureAction.removeSignatory:
      return {
        ...state,
        addSignatory: state.addSignatory - 1
      }

    case NonDisclosureAction.counterWord:
      return {
        ...state,
        counterWord: action.payload
      }


    case NonDisclosureAction.alertSignatory:
      return {
        ...state,
        isAcknowledgeError: true,
        keyGenerateNdaFalse: action.payload
      }

    case NonDisclosureAPIClient.nonDisclosureAPIClientSuccess:
      Router.replace({ pathname: routeToPageMyNonDisclosureAgreement })
      return {
        ...state,
        isLoadingGenerateNda: false,
        isAcknowledgeError: false,
        keyGenerateNdaFalse: action.keyMessage
      }

    case NonDisclosureAPIClient.nonDisclosureAPIClientFailed:
      return {
        ...state,
        isLoadingGenerateNda: false,
        isAcknowledgeError: true,
        keyGenerateNdaFalse: action.keyMessage
      }

    case NonDisclosureAction.acknowledgeError:
      return {
        ...state,
        isAcknowledgeError: action.payload
      }

    case NonDisclosureAction.startLoadingNda:
      return {
        ...state,
        isLoadingGenerateNda: action.payload
      }

    case NonDisclosureAPIClient.updateDisclosureAPIClientSuccess:
      Router.replace({ pathname: routeToPageMyNonDisclosureAgreement, query: { idEditing: idUpdate } })
      return {
        ...state,
        isLoadingGenerateNda: false,
        isAcknowledgeError: false,
        keyGenerateNdaFalse: action.keyMessage
      }

    case NonDisclosureAction.hideRejectReason:
      return {
        ...state,
        hideRejectReason: action.payload,
      }

    case NonDisclosureAPIClient.updateDisclosureAPIClientFailed:
      return {
        ...state,
        isLoadingGenerateNda: false,
        isAcknowledgeError: true,
        keyGenerateNdaFalse: action.keyMessage
      }

    case NonDisclosureAPIClient.getDisclosureReasonAPIClientSuccess:
      return {
        ...state,
        getReasonApi: action.dataReasonAPI,
        isLoadingGenerateNda: false,
      }

    case NonDisclosureAPIClient.getDisclosureAPIClientSuccess:
      if (action.dataAPI !== undefined) {
        let value = action.dataAPI.name_of_signatory_party_1.split(",").map((value, index) => {
          return { name: value, title: action.dataAPI.title_and_capacity_of_signatory_party_1.split(",")[index] }
        })

        currentDataNonDisclosure = action.dataAPI
        const nonDisclosurePresenter = {
          keyStatueAPI: state.keyStatueAPI = action.keyStatus,
          disclosureNameI: {
            name: KeyManager.DisclosureNameI,
            valueName: state.disclosureNameI.valueName = action.dataAPI.name_1
          },

          disclosureNameII: {
            name: KeyManager.DisclosureNameII,
            valueName: state.disclosureNameII.valueName = action.dataAPI.name_2
          },

          addressI: {
            name: KeyManager.AddressI,
            valueAddress: state.addressI.valueAddress = action.dataAPI.address_1
          },

          addressII: {
            name: KeyManager.AddressII,
            valueAddress: state.addressII.valueAddress = action.dataAPI.address_2
          },
          date: {
            name: KeyManager.Date,
            valueDate: state.date.valueDate = startDate
          },

          ndaLanguage: {
            name: KeyManager.NdaLanguage,
            valueNdaLanguage: state.ndaLanguage.valueNdaLanguage = action.dataAPI.language.toLowerCase()
          },

          scopeOfDiscussion: {
            name: KeyManager.ScopeOfDiscussion,
            valueScopeDiscussion: state.scopeOfDiscussion.valueScopeDiscussion = action.dataAPI.scope_of_discussion
          },

          endDate: {
            name: KeyManager.EndDate,
            valueDate: state.endDate.valueDate = endDate
          },

          periodOfSecret: {
            name: KeyManager.PeriodOfSecret,
            valuePeriodOfSecret: state.periodOfSecret.valuePeriodOfSecret = action.dataAPI.survive_period
          },

          arbitrationJurisdiction: {
            name: KeyManager.ArbitrationJurisdiction,
            valueArbitrationJurisdiction: state.arbitrationJurisdiction.valueArbitrationJurisdiction = action.dataAPI.jurisdiction
          },

          choiceOfLaw: {
            name: KeyManager.ChoiceOfLaw,
            valueChoiceOfLaw: state.choiceOfLaw.valueChoiceOfLaw = action.dataAPI.choice_of_law
          },
          counterWord: state.counterWord = action.dataAPI.scope_of_discussion.length,
          nameOfSigningCompanyI: {
            name: KeyManager.NameOfSigningCompany1,
            valueNameOfSigning: state.nameOfSigningCompanyI.valueNameOfSigning = action.dataAPI.name_of_signatory_party_1
          },

          nameOfSigningCompanyII: {
            name: KeyManager.NameOfSigningCompany2,
            valueNameOfSigning: state.nameOfSigningCompanyII.valueNameOfSigning = action.dataAPI.name_of_signatory_party_2
          },

          titleAndCapacityOfSigningCompanyI: {
            name: KeyManager.TitleAndCapacityOfSigningCompany1,
            valueTitleAndCapacityOfSigning: state.titleAndCapacityOfSigningCompanyI.valueTitleAndCapacityOfSigning = action.dataAPI.title_and_capacity_of_signatory_party_1
          },

          titleAndCapacityOfSigningCompanyII: {
            name: KeyManager.TitleAndCapacityOfSigningCompany2,
            valueTitleAndCapacityOfSigning: state.titleAndCapacityOfSigningCompanyII.valueTitleAndCapacityOfSigning = action.dataAPI.title_and_capacity_of_signatory_party_2
          },

          signatoryAuthority: {
            value: state.signatoryAuthority.value = value
          },

          addSignatory: state.addSignatory = state.addSignatory + value.length,
          isLoadingGenerateNda: state.isLoadingGenerateNda = false,

        }
        return {
          ...state,
          nonDisclosurePresenter,
          keyStatueAPI: action.keyStatus,
          getApi: action.dataAPI,
        }
      } else {
        return state
      }

    case NonDisclosureAPIClient.getDisclosureAPIClientFailed:
      return {
        ...state,
        isLoadingGenerateNda: false
      }

    case NonDisclosureAction.clearFormisNotUpdate:
      const nonDisclosurePresenter = {
        disclosureNameI: {
          name: KeyManager.DisclosureNameI,
          valueName: state.disclosureNameI.valueName = ''
        },

        disclosureNameII: {
          name: KeyManager.DisclosureNameII,
          valueName: state.disclosureNameII.valueName = ''
        },

        addressI: {
          name: KeyManager.AddressI,
          valueAddress: state.addressI.valueAddress = ''
        },

        addressII: {
          name: KeyManager.AddressII,
          valueAddress: state.addressII.valueAddress = ''
        },
        date: {
          name: KeyManager.Date,
          valueDate: state.date.valueDate = ''
        },

        scopeOfDiscussion: {
          name: KeyManager.ScopeOfDiscussion,
          valueScopeDiscussion: state.scopeOfDiscussion.valueScopeDiscussion = ''
        },

        counterWord: state.counterWord = 0,
        addSignatory: state.addSignatory = 0,

        endDate: {
          name: KeyManager.EndDate,
          valueDate: state.endDate.valueDate = ''
        },

        ndaLanguage: {
          name: KeyManager.NdaLanguage,
          valueNdaLanguage: state.ndaLanguage.valueNdaLanguage = i18n.language === 'en' ? ndaLanguageEN[0].value : ndaLanguageTH[0].value
        },

        periodOfSecret: {
          name: KeyManager.PeriodOfSecret,
          valuePeriodOfSecret: state.periodOfSecret.valuePeriodOfSecret = ''
        },

        arbitrationJurisdiction: {
          name: KeyManager.ArbitrationJurisdiction,
          valueArbitrationJurisdiction: state.arbitrationJurisdiction.valueArbitrationJurisdiction = i18n.language === 'en' ? countryEn[0].name : countryTH[0].name
        },

        choiceOfLaw: {
          name: KeyManager.ChoiceOfLaw,
          valueChoiceOfLaw: state.choiceOfLaw.valueChoiceOfLaw = i18n.language === 'en' ? countryEn[0].name : countryTH[0].name
        },

        nameOfSigningCompanyI: {
          name: KeyManager.NameOfSigningCompany1,
          valueNameOfSigning: state.nameOfSigningCompanyI.valueNameOfSigning = ''
        },

        nameOfSigningCompanyII: {
          name: KeyManager.NameOfSigningCompany2,
          valueNameOfSigning: state.nameOfSigningCompanyII.valueNameOfSigning = ''
        },

        titleAndCapacityOfSigningCompanyI: {
          name: KeyManager.TitleAndCapacityOfSigningCompany1,
          valueTitleAndCapacityOfSigning: state.titleAndCapacityOfSigningCompanyI.valueTitleAndCapacityOfSigning = ''
        },

        titleAndCapacityOfSigningCompanyII: {
          name: KeyManager.TitleAndCapacityOfSigningCompany2,
          valueTitleAndCapacityOfSigning: state.titleAndCapacityOfSigningCompanyII.valueTitleAndCapacityOfSigning = ''
        },
        signatoryAuthority: {
          name: state.signatoryAuthority.name = [],
          title: state.signatoryAuthority.title = [],
          value: state.signatoryAuthority.value = []
        },
      }
      return {
        ...state,
        nonDisclosurePresenter,
      }

    case formActionTypes.INITIALIZE:
      const nonDisclosurePresenterInit = {
        disclosureNameI: {
          name: KeyManager.DisclosureNameI,
          valueName: state.disclosureNameI.valueName
        },

        disclosureNameII: {
          name: KeyManager.DisclosureNameII,
          valueName: state.disclosureNameII.valueName
        },

        addressI: {
          name: KeyManager.AddressI,
          valueAddress: state.addressI.valueAddress
        },

        addressII: {
          name: KeyManager.AddressII,
          valueAddress: state.addressII.valueAddress
        },
        date: {
          name: KeyManager.Date,
          valueDate: state.date.valueDate = state.date.valueDate
        },

        scopeOfDiscussion: {
          name: KeyManager.ScopeOfDiscussion,
          valueScopeDiscussion: state.scopeOfDiscussion.valueScopeDiscussion
        },

        counterWord: 0,
        endDate: {
          name: KeyManager.EndDate,
          valueDate: state.endDate.valueDate = state.endDate.valueDate
        },

        periodOfSecret: {
          name: KeyManager.PeriodOfSecret,
          valuePeriodOfSecret: state.periodOfSecret.valuePeriodOfSecret
        },

        arbitrationJurisdiction: {
          name: KeyManager.ArbitrationJurisdiction,
          valueArbitrationJurisdiction: state.arbitrationJurisdiction.valueArbitrationJurisdiction
        },

        ndaLanguage: {
          name: KeyManager.NdaLanguage,
          valueNdaLanguage: state.ndaLanguage.valueNdaLanguage
        },
        choiceOfLaw: {
          name: KeyManager.ChoiceOfLaw,
          valueChoiceOfLaw: state.choiceOfLaw.valueChoiceOfLaw
        },

        nameOfSigningCompanyI: {
          name: KeyManager.NameOfSigningCompany1,
          valueNameOfSigning: state.nameOfSigningCompanyI.valueNameOfSigning
        },

        nameOfSigningCompanyII: {
          name: KeyManager.NameOfSigningCompany2,
          valueNameOfSigning: state.nameOfSigningCompanyII.valueNameOfSigning
        },

        titleAndCapacityOfSigningCompanyI: {
          name: KeyManager.TitleAndCapacityOfSigningCompany1,
          valueTitleAndCapacityOfSigning: state.titleAndCapacityOfSigningCompanyI.valueTitleAndCapacityOfSigning
        },

        titleAndCapacityOfSigningCompanyII: {
          name: KeyManager.TitleAndCapacityOfSigningCompany2,
          valueTitleAndCapacityOfSigning: state.titleAndCapacityOfSigningCompanyII.valueTitleAndCapacityOfSigning
        },

        signatoryAuthority: {
          name: state.signatoryAuthority.name,
          title: state.signatoryAuthority.title
        },
      }
      return {
        ...state,
        nonDisclosurePresenterInit,
      }

    case CompanyBasicInfoAction.getCompanyBasicInfoSuccess:
      companyBasicInfoId = action.getCompanyBasicInfo[0].id
      dataNonDisclosureApi = action.getCompanyBasicInfo[0]
      let authorisedItems = action.getCompanyBasicInfo[0].authorised_signatory.map((item) =>
        item.name
      )

      return {
        ...state,
        getCompanyBasicInfo: action.getCompanyBasicInfo[0],
        disclosureNameI: {
          name: KeyManager.DisclosureNameI,
          valueName: action.getCompanyBasicInfo[0].name
        },
        addressI: {
          name: KeyManager.AddressI,
          valueAddress: action.getCompanyBasicInfo[0].hq_address
        },
        authorisedItem: authorisedItems
      }

    default:
      return state
  }
}