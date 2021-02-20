import { SharedHolderDetailPresenter, SharedHolderDetailAction } from "./SharedHolderDetailInterface";
import { sharedHolderDetailPresenter } from "./SharedHolderDetailPresenter";
import { KeyManager } from "../../manager/keyManager";
import { ShareholdersDetailActionAPI } from "../../apis/shareholdersDetailAPIClient";
export const sharedHolderDetailReducer = (state: SharedHolderDetailPresenter = sharedHolderDetailPresenter, action: any): any => {

    switch (action.type) {
        case SharedHolderDetailAction.acceptAcknowledge:
            return {
                ...state,
                isAcknowledge: action.payload
            }

        case SharedHolderDetailAction.handleNameOfShareholderDetail:
            return {
                ...state,
                nameOfShareholderDetail: {
                    name: KeyManager.NameOfShareholderDetail,
                    valueNameOfShareholderDetail: action.payload
                }
            }

        case SharedHolderDetailAction.handleFamilyNameOfShareholderDetail:
            return {
                ...state,
                familyNameOfShareholderDetail: {
                    name: KeyManager.FamilyNameOfShareDetail,
                    valueFamilyNameOfShareholderDetail: action.payload
                }
            }

        case SharedHolderDetailAction.handleAddressOfShareholderDetail:
            return {
                ...state,
                addressOfShareholderDetail: {
                    name: KeyManager.AddressOfShareholderDetail,
                    valueAddressOfShareholderDetail: action.payload
                }
            }

        case SharedHolderDetailAction.handleTypeOfShareDetail:
            return {
                ...state,
                typeOfShareDetail: {
                    name: KeyManager.TypeOfShareDetail,
                    valueTypeOfShareDetail: action.payload
                }
            }

        case SharedHolderDetailAction.handleAmountOfShareDetail:
            return {
                ...state,
                amountOfShareDetail: {
                    name: KeyManager.AmountOfShareDetail,
                    valueAmountOfShareDetail: action.payload
                }
            }

        case SharedHolderDetailAction.handleEmailOfShareDetail:
            return {
                ...state,
                emailOfShareDetail: {
                    name: KeyManager.EmailOfShareDetail,
                    valueEmailOfShareDetail: action.payload
                }
            }

        case SharedHolderDetailAction.handlePhoneOfShareDetail:
            return {
                ...state,
                phoneOfShareDetail: {
                    name: KeyManager.PhoneOfShareDetail,
                    valueEmailOfShareDetail: action.payload
                }
            }

        case SharedHolderDetailAction.handlePhoneOfShareDetail:
            return {
                ...state,
                totalAmountSheet: {
                    name: KeyManager.TotalAmountSheet,
                    valuePhoneOfShareDetail: action.payload
                }
            }

        case SharedHolderDetailAction.handleChangeValueTelCountry:
            return {
                ...state,
                nationTel: {
                    name: 'nationTel',
                    valueNationTel: action.payload
                }
            }


        case SharedHolderDetailAction.startLoading:
            return {
                ...state,
                isLoading: action.payload
            }

        case ShareholdersDetailActionAPI.ShareholdersDetailSuccess:
            return {
                ...state,
                isLoading: false,
                isAcknowledge: true,
                keyMessageAlert: action.keyMessage
            }

        case ShareholdersDetailActionAPI.ShareholdersDetailFailed:
            return {
                ...state,
                isLoading: false,
                isAcknowledge: true,
                keyMessageAlert: action.keyMessage
            }

        case ShareholdersDetailActionAPI.getShareholdersDetailSuccess:
            return {
                ...state,
                isLoading: false,
                getShareholdersDetail: action.getShareholdersDetail
            }

        case ShareholdersDetailActionAPI.getShareholdersDetailFailed:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }
}