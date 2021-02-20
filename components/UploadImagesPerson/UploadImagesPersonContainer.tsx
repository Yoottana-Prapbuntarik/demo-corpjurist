import {
    connect
} from "react-redux";

import { withTranslation } from '../../i18n'
import UploadImagesPerson from "./UploadImagesPerson";
import {
    mapDispatchToProps
} from "./UploadImagesPersonAction";
import { UploadImagesPersonAction, UploadImagesPersonPresenter } from "./UploadImagesPersonInterface";
import Router from "next/router";

export const uploadImagesPersonPresenter: UploadImagesPersonPresenter = {
    fileImagesPersonUpload: {},
    startLoadingUploadImagesPerson: false
}

export const uploadImagesPersonReducer = (state: UploadImagesPersonPresenter = uploadImagesPersonPresenter, action: any) => {
    switch (action.type) {
        case UploadImagesPersonAction.startLoadingUploadImagesPerson:
            return {
                ...state,
                startLoadingUploadImagesPerson: action.payload
            }

        case UploadImagesPersonAction.handleSubmitUploadPerson:
            Router.push("/uploadVerifyVideo")
            return {
                ...state,
                startLoadingUploadImagesPerson: false,
                fileImagesPersonUpload: action.payload
            }

        default:
            return state;
    }
}


const mapStateToProps = (state: any) => {
    return {
        uploadImagesPersonPresenter: state.uploadImagesPersonReducer,
        verifyInformationPresenter: state.verifyInformationReducer,
        initialValues: {}
    }
}


export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(UploadImagesPerson))