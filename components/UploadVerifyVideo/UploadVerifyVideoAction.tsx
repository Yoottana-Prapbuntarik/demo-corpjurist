import { Dispatch } from "redux";
import {
    UploadVerifyVideoAction
} from "./UploadVerifyVideoInterface";

import { sendEkycAction } from "../../apis/ekycAPIClient";

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleSubmitUploadVideo: async (event: any) => {
        await dispatch({
            type: UploadVerifyVideoAction.startLoadingUploadVerifyVideo,
            payload: true
        })
        
        const data = JSON.parse(localStorage.getItem("ekyc"))
        await dispatch({
            type: UploadVerifyVideoAction.handleSubmitVideoUpload,
            payload: event
        })
        
        data.verify_video_uri = event;

        localStorage.setItem("ekyc", JSON.stringify(data))
        const getAllDataEkyc = JSON.parse(localStorage.getItem("ekyc"))

        await dispatch(sendEkycAction(
            getAllDataEkyc['email'],
            getAllDataEkyc['tel'],
            getAllDataEkyc['first_name'],
            getAllDataEkyc['last_name'],
            getAllDataEkyc['id_card'],
            getAllDataEkyc['user_uri'],
            getAllDataEkyc['id_card_uri'],
            getAllDataEkyc['verify_video_uri'],
        ))

    }
})
