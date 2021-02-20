import { CorporateSecretaryPresenter, CorporateSecretaryAction } from "./CorporateSecretaryInterface";
import { corporateSecretaryPresenter } from "./CorporateSecretaryPresenter";
import { KeyManager } from '../../manager/keyManager'
import { actionTypes as formActionTypes } from 'redux-form'
import { FormManager } from "../../manager/formManager"
import { keyManagerFieldArray } from "../../manager/keyManagerFieldArray";
import { CompanyBasicInfoAction } from "../../apis/companyBasicInfoAPIClient";

export let getCompanyBasicInfoId: number
export let dataAPI: any

export const corporateSecretaryReducer = (state: CorporateSecretaryPresenter = corporateSecretaryPresenter, action: any): any => {
    switch (action.type) {

        case CorporateSecretaryAction.uploadLogo:
            return {
                ...state,
                previewLogo: URL.createObjectURL(action.payload)
            }
        case CorporateSecretaryAction.errorTypeFile:
            return {
                ...state,
                isAcknowledge: true,
                keyMessageAlert: action.payload
            }

        case CorporateSecretaryAction.checkAuthorisedAndUploadLogo:
            return {
                ...state,
                isLoading: false,
                isAcknowledge: true,
                keyMessageAlert: action.payload
            }

        case CorporateSecretaryAction.handleNullSignatory:
            return {
                ...state,
                isAcknowledge: true,
                keyMessageAlert: action.payload
            }

        case CorporateSecretaryAction.acceptAcknowledge:
            return {
                ...state,
                isAcknowledge: action.payload
            }

        case CorporateSecretaryAction.handleChangeBusinessRegistration:
            return {
                ...state,
                businessRegistration: {
                    name: KeyManager.BusinessRegistration,
                    valueBusinessRegistration: action.payload
                }
            }

        case CorporateSecretaryAction.handleChangeName:
            return {
                ...state,
                businessName: {
                    name: KeyManager.BusinessName,
                    valueBusinessName: action.payload
                }

            }

        case CorporateSecretaryAction.handleChangeHqAddress:
            return {
                ...state,
                hqAddress: {
                    name: KeyManager.HqAddress,
                    valueHqAddress: action.payload
                }
            }

        case CorporateSecretaryAction.handleChangeCapital:
            return {
                ...state,
                registrateredCapital: {
                    name: KeyManager.RegistrateredCapital,
                    valueRegistrateredCapital: action.payload
                }
            }

        case CorporateSecretaryAction.startLoading:
            return {
                ...state,
                isLoading: action.payload
            }

        case CorporateSecretaryAction.addAuthorisedSignatoryItems:
            return {
                ...state,
                authorisedSignatoryItems: action.payload
            }

        case CorporateSecretaryAction.addSignatoryAuthorityItems:
            return {
                ...state,
                signatoryAuthorityItems: action.payload
            }

        case CompanyBasicInfoAction.companyBasicInfoSuccess:
            if(action.statusCreate === 201){
                return {
                    ...state,
                    isLoading: false,
                    isAcknowledge: false,
                    keyMessageAlert: action.keyMessage,
                    checkCreatedForm: action.statusCreate
                }
            }else{
                return {
                    ...state,
                    isLoading: false,
                    isAcknowledge: true,
                    keyMessageAlert: action.keyMessage,
                    checkCreatedForm: action.statusCreate
                }
            }

        case CompanyBasicInfoAction.removeAuthorisedSignatorySuccess:
            return {
                ...state,
                isLoading: false,
            }

        case CompanyBasicInfoAction.removeSigningAuthoritySucces:
            return {
                ...state,
                isLoading: false,
            }

        case CorporateSecretaryAction.addNewSignatoryAndauthorised:
            return {
                ...state,
                addNewSignatoryAndauthorised: action.payload
            }

        case CompanyBasicInfoAction.companyBasicInfoFailed:
            return {
                ...state,
                isLoading: false,
                isAcknowledge: true,
                keyMessageAlert: action.keyMessage
            }

        case CompanyBasicInfoAction.getCompanyBasicInfoFailed:
            return {
                ...state,
                isLoading: false
            }

        case CompanyBasicInfoAction.getCompanyBasicInfoSuccess:

            if (action.getCompanyBasicInfo !== undefined) {

                getCompanyBasicInfoId = action.getCompanyBasicInfo[0].id
                dataAPI = action.getCompanyBasicInfo[0]
                let authorisedSignatory = action.getCompanyBasicInfo[0].authorised_signatory.map((row) => {
                    return { id: row.id, name: row.name }
                })

                const corporateSecretaryPresenter = {
                    businessRegistration: {
                        name: KeyManager.BusinessRegistration,
                        valueBusinessRegistration: state.businessRegistration.valueBusinessRegistration = action.getCompanyBasicInfo[0].bussiness_registration_no
                    },
                    businessName: {
                        name: KeyManager.BusinessName,
                        valueBusinessName: state.businessName.valueBusinessName = action.getCompanyBasicInfo[0].name
                    },

                    hqAddress: {
                        name: KeyManager.HqAddress,
                        valueHqAddress: state.hqAddress.valueHqAddress = action.getCompanyBasicInfo[0].hq_address
                    },

                    registrateredCapital: {
                        name: KeyManager.RegistrateredCapital,
                        valueRegistrateredCapital: state.registrateredCapital.valueRegistrateredCapital = action.getCompanyBasicInfo[0].registered_capital
                    },

                    authorisedSignatory: {
                        formName: FormManager.CorporateSecretaryForm,
                        formType: keyManagerFieldArray.authorisedSignatory,
                        value: state.authorisedSignatory.value = authorisedSignatory,
                        placeholder: KeyManager.AuthoisedSignatory,
                    },

                    signatoryAuthority: {
                        formType: keyManagerFieldArray.signatoryAuthority,
                        value: state.signatoryAuthority.value = action.getCompanyBasicInfo[0].signing_authority[0].name,
                        placeholder: KeyManager.SignatoryAuthority,
                    },

                    previewLogo: state.previewLogo = action.getCompanyBasicInfo[0].image_uri,
                    dataAPI: state.dataAPI = action.getCompanyBasicInfo,
                    checkCreatedForm: action.statusCreate
                }
                return {
                    ...state,
                    corporateSecretaryPresenter,
                    isLoading: false
                }
            } else {
                return state
            }

        case formActionTypes.INITIALIZE:
            const corporateSecretaryPresenterInit = {
                businessRegistration: {
                    name: KeyManager.BusinessRegistration,
                    valueBusinessRegistration: state.businessRegistration.valueBusinessRegistration
                },
                businessName: {
                    name: KeyManager.BusinessName,
                    valueBusinessName: state.businessName.valueBusinessName
                },

                hqAddress: {
                    name: KeyManager.HqAddress,
                    valueHqAddress: state.hqAddress.valueHqAddress
                },

                registrateredCapital: {
                    name: KeyManager.RegistrateredCapital,
                    valueRegistrateredCapital: state.registrateredCapital.valueRegistrateredCapital
                },

                authorisedSignatory: {
                    formName: FormManager.CorporateSecretaryForm,
                    formType: keyManagerFieldArray.authorisedSignatory,
                    value: state.authorisedSignatory.value,
                    placeholder: KeyManager.AuthoisedSignatory,
                },

                signatoryAuthority: {
                    formType: keyManagerFieldArray.signatoryAuthority,
                    value: state.signatoryAuthority.value,
                    placeholder: KeyManager.SignatoryAuthority,
                },
            }
            return {
                ...state,
                corporateSecretaryPresenterInit,
            }

        case CorporateSecretaryAction.handleChangeAuthorised:
            return {
                ...state,
                authorisedSignatory: {
                    formName: FormManager.CorporateSecretaryForm,
                    formType: keyManagerFieldArray.authorisedSignatory,
                    value: action.payload,
                    placeholder: KeyManager.AuthoisedSignatory,
                },
            }

        case CorporateSecretaryAction.handleChangeSignatory:
            return {
                ...state,
                signatoryAuthority: {
                    formType: keyManagerFieldArray.signatoryAuthority,
                    value: action.payload,
                    placeholder: KeyManager.SignatoryAuthority,
                },
            }

        case CorporateSecretaryAction.setPopup:
            return {
                ...state,
                popupItems: {
                    isOpen: !state.popupItems.isOpen,
                    dataSubmitForm: action.payload
                }
            }

        case CorporateSecretaryAction.clearAllState:
            return {
                ...state,
                businessRegistration: {
                    name: KeyManager.BusinessRegistration,
                    valueBusinessRegistration: state.businessRegistration.valueBusinessRegistration = ''
                },
                businessName: {
                    name: KeyManager.BusinessName,
                    valueBusinessName: state.businessName.valueBusinessName = ''
                },

                hqAddress: {
                    name: KeyManager.HqAddress,
                    valueHqAddress: state.hqAddress.valueHqAddress = ''
                },

                registrateredCapital: {
                    name: KeyManager.RegistrateredCapital,
                    valueRegistrateredCapital: state.registrateredCapital.valueRegistrateredCapital = ''
                },
                dataAPI: '',
                authorisedSignatory: {
                    formName: FormManager.CorporateSecretaryForm,
                    formType: keyManagerFieldArray.authorisedSignatory,
                    value: [],
                    placeholder: KeyManager.AuthoisedSignatory,
                },
                signatoryAuthority: {
                    formType: keyManagerFieldArray.signatoryAuthority,
                    value: "",
                    placeholder: KeyManager.SignatoryAuthority,
                },
                popupItems: {
                    isOpen: false,
                    dataSubmitForm: {}
                }
            }
        default:
            return state
    }
}