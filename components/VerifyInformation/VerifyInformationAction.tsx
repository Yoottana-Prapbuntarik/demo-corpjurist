import { Dispatch } from "redux";
import { FormManager } from "../../manager/formManager";
import { reset } from "redux-form";
import {
    VerifyInformationAction
} from "./VerifyInformationInterface";
import {
    getEkycAction
} from "../../apis/ekycAPIClient";
export const mapDispatchToProps = (dispatch: Dispatch) => ({
    getEkycAction: async () => {
        await dispatch({
            type: VerifyInformationAction.isLoadingEkycData
        })
        
        await dispatch(getEkycAction())
    },

    handleSubmitVerifyInofrmation: async (event: any) => {
        const data = {
            email: event.verifyEmail,
            tel: event.verifyTelephone,
            first_name: event.verifyFirstName,
            last_name: event.verifyLastName,
            id_card: event.verifyCitizenId
        }

        localStorage.setItem("ekyc", JSON.stringify(data))

        await dispatch(reset(FormManager.VerifyInformation))

        await dispatch({
            type: VerifyInformationAction.handleSubmitVerifyInformation,
            payload: event
        })
    }
})