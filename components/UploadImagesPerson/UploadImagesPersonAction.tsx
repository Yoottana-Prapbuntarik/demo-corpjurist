import { Dispatch } from "redux";
import {
    UploadImagesPersonAction
} from "./UploadImagesPersonInterface";

export const mapDispatchToProps = (dispatch: Dispatch) => ({

    startLoadingUploadImagesPerson: () => {
        dispatch({
            type: UploadImagesPersonAction.startLoadingUploadImagesPerson,
            payload: true
        })
    },

    handleSubmitUploadPerson: async (event: any) => {
        const data = JSON.parse(localStorage.getItem("ekyc"))
        data.user_uri = event;
        localStorage.setItem("ekyc", JSON.stringify(data))
        await dispatch({
            type: UploadImagesPersonAction.handleSubmitUploadPerson,
            payload: event
        })
    }
})
