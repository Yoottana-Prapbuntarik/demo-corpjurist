import {
    connect
} from "react-redux";
import { ekycAction } from "../../apis/ekycAPIClient";
import { withTranslation } from '../../i18n'
import UploadVerifyVideo from "./UploadVerifyVideo";
import {
    mapDispatchToProps
} from "./UploadVerifyVideoAction";
import { UploadVerifyVideoAction, UploadVerifyVideoPresenter } from "./UploadVerifyVideoInterface";
import Router from "next/router";

export const uploadVerifyVideoPresenter: UploadVerifyVideoPresenter = {
    fileImagesVideoUpload: '',
    startLoadingUploadVerifyVideo: false
}

export const uploadVdeoPersonReducer = (state: UploadVerifyVideoPresenter = uploadVerifyVideoPresenter, action: any) => {
    switch (action.type) {
        case UploadVerifyVideoAction.startLoadingUploadVerifyVideo:
            return {
                ...state,
                startLoadingUploadVerifyVideo: true
            }

        case UploadVerifyVideoAction.handleSubmitVideoUpload:
            return {
                ...state,
                fileImagesVideoUpload: action.payload,
            }
        case ekycAction.sendEkycSuccess:
            Router.push("/waitForVerifyEkyc")
            localStorage.removeItem('ekyc')
            return {
                ...state,
                startLoadingUploadVerifyVideo: false,
                fileImagesVideoUpload: ''
            }

        case ekycAction.sendEkycFailed:
            Router.push("/profile")
            localStorage.removeItem('ekyc')
            return {
                ...state,
                startLoadingUploadVerifyVideo: false,
                fileImagesVideoUpload: ''
            }

        default:
            return state;
    }
}


const mapStateToProps = (state: any) => {
    return {
        uploadVerifyVideoPresenter: state.uploadVdeoPersonReducer,
        verifyInformationPresenter: state.verifyInformationReducer,
        initialValues: {}
    }
}


export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(UploadVerifyVideo))