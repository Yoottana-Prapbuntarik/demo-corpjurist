import { Dispatch } from "redux";
import {
    checkGeneralInformaion
} from "../../apis/companyBasicInfoAPIClient";

export const getStatusGeneralInformaion = () => (dispatch: Dispatch) =>  dispatch(checkGeneralInformaion())

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkGeneralInformaion: () => {
        dispatch(checkGeneralInformaion())
    }
})