import { Dispatch } from "redux";
import { SharedHolderDetailAction } from "./SharedHolderDetailInterface";
import { reset } from "redux-form";
import { FormManager } from "../../manager/formManager";
import { addShareholdersDetail, getShareholdersDetail, statusAddedSuccess } from "../../apis/shareholdersDetailAPIClient";
import Router from "next/router";
export const mapDispatchToProps = (dispatch: Dispatch) => ({

    acceptAcknowledge: (event: any) => {
        dispatch({
            type: SharedHolderDetailAction.acceptAcknowledge,
            payload: event
        })
        if (statusAddedSuccess) {
            Router.reload()
        }
    },

    handleNameOfShareholderDetail: (event) => {
        dispatch({
            type: SharedHolderDetailAction.handleNameOfShareholderDetail,
            payload: event
        })
    },

    handleFamilyNameOfShareholderDetail: (event) => {
        dispatch({
            type: SharedHolderDetailAction.handleFamilyNameOfShareholderDetail,
            payload: event
        })
    },

    handleAddressOfShareholderDetail: (event) => {
        dispatch({
            type: SharedHolderDetailAction.handleAddressOfShareholderDetail,
            payload: event
        })
    },

    handleTypeOfShareDetail: (event) => {
        dispatch({
            type: SharedHolderDetailAction.handleTypeOfShareDetail,
            payload: event
        })
    },
    handleAmountOfShareDetail: (event) => {
        dispatch({
            type: SharedHolderDetailAction.handleAmountOfShareDetail,
            payload: event
        })
    },
    handleEmailOfShareDetail: (event) => {
        dispatch({
            type: SharedHolderDetailAction.handleEmailOfShareDetail,
            payload: event
        })
    },
    handlePhoneOfShareDetail: (event) => {
        dispatch({
            type: SharedHolderDetailAction.handlePhoneOfShareDetail,
            payload: event
        })
    },
    handleChangeValueTelCountry: (event) => {
        dispatch({
            type: SharedHolderDetailAction.handleChangeValueTelCountry,
            payload: event
        })
    },

    handldSubmitForm: (event: any) => {
        dispatch({
            type: SharedHolderDetailAction.startLoading,
            payload: true
        })
        const formatName = event.nameOfShareholderDetail === undefined && event.familyNameOfShareDetail === undefined ? '' :
            event.nameOfShareholderDetail + ' ' + event.familyNameOfShareDetail
        const setDefaultPrefixNumber = event.nationTel === undefined ? '+66' : event.nationTel
        const setDefaultTypeOfShareDetail = event.typeOfShareDetail === undefined ? 'Common' : event.typeOfShareDetail
        dispatch(addShareholdersDetail(
            formatName,
            event.addressOfShareholderDetail,
            setDefaultTypeOfShareDetail,
            event.amountOfShareDetail,
            event.emailOfShareDetail,
            setDefaultPrefixNumber + event.phoneOfShareDetail
        ))
        dispatch({
            type: SharedHolderDetailAction.startLoading,
            payload: true
        })
        dispatch(reset(FormManager.SharedHolderDetailFrom))
    },

    getShareholdersDetail: () => {
        dispatch(getShareholdersDetail())
        dispatch({
            type: SharedHolderDetailAction.startLoading,
            payload: true
        })
    }
})