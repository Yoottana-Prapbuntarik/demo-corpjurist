import { Dispatch } from "redux";
import {
    UploadCitizenAction
} from "./UploadCitizenInterface";

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    startLoadingUploadCitizen: () => {
        dispatch({
            type: UploadCitizenAction.startLoadingUploadCitizen,
            payload: true
        })    
    },

    handleSubmitUploadCitizen: async (event: any) => {
            const data = JSON.parse(localStorage.getItem("ekyc"))
            data.id_card_uri = event;

            localStorage.setItem("ekyc", JSON.stringify(data))
            await dispatch({
                type: UploadCitizenAction.handleSubmitUploadCitizen,
                payload: event
            })
        }
    })
