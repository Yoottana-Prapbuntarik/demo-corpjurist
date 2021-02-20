import {
    connect
} from "react-redux";

import { withTranslation } from '../../i18n'
import UploadCitizen from "./UploadCitizen";
import {
    mapDispatchToProps
} from "./UploadCitizenAction";
import { UploadCitizenAction, UploadCitizenPresenter } from "./UploadCitizenInterface";
import Router from "next/router";


export const uploadCitizenReducer = (state: UploadCitizenPresenter = uploadCitizenPresenter, action: any) => {
    switch (action.type) {
        case UploadCitizenAction.startLoadingUploadCitizen:
            return {
                ...state,
                startLoadingUploadCitizen: action.payload
            }

        case UploadCitizenAction.handleSubmitUploadCitizen:
            Router.push("/uploadUserImage")
            return {
                ...state,
                startLoadingUploadCitizen: false,
                fileImagesUpload: action.payload
            }

        default:
            return state;
    }
}

export const uploadCitizenPresenter: UploadCitizenPresenter = {
    fileImagesUpload: {},
    startLoadingUploadCitizen: false
}

const mapStateToProps = (state: any) => {
    return {
        uploadCitizenPresenter: state.uploadCitizenReducer,
        verifyInformationPresenter: state.verifyInformationReducer,
        initialValues: {}
    }
}


export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(UploadCitizen))