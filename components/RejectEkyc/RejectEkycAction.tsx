import { Dispatch } from "redux";
import { FormManager } from "../../manager/formManager";
import { reset } from "redux-form";
import {
    RejectVerifyInformationAction
} from "./RejectEkycInterface";
import {
    getEkycAction,
    updateEkycAction,
    getEkycReasonAction
} from "../../apis/ekycAPIClient";

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    getEkycAction: () => {
        dispatch(getEkycAction())
    },

    getEkycReasonAction: (id: any) => {
        dispatch(getEkycReasonAction(id))
    },

    handleChangeCitizenPicture: (event: any) => {
        dispatch({
            type: RejectVerifyInformationAction.handleChangeCitizenPicture,
            payload: event
        })
    },

    handleChangePersonPicture: (event: any) => {
        dispatch({
            type: RejectVerifyInformationAction.handleChangePersonPicture,
            payload: event

        })
    },

    handleChangePersonVideo: (event: any) => {
        dispatch({
            type: RejectVerifyInformationAction.handleChangePersonVideo,
            payload: event
        })
    },

    handleSubmitRejectVerifyInofrmation: async (event: any, media: any) => {
        await dispatch({
            type: RejectVerifyInformationAction.rejectVerifyLoading,
        })
        await dispatch(reset(FormManager.RejectEkycForm))

        await dispatch({
            type: RejectVerifyInformationAction.handleSubmitRejectVerifyInofrmation,
            payload: event
        })
        await dispatch(updateEkycAction(
            media.idEkyc,
            event.rejectVerifyFirstName,
            event.rejectVerifyLastName,
            event.rejectVerifyTelephone,
            event.rejectCitizenId,
            media.citizenPicture,
            media.personPicture,
            media.personVideo
        )
        )
    }
})