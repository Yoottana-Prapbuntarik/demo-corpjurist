import { Dispatch } from "redux";
import { ProfileComponentAction} from "./ProfileComponentInterface";
import {
    getAccountUser,
    deleteAccountUser,
    userSignout
} from "../../apis/manageAccountUserAPIClient";

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    signout: async () => {
        await dispatch(userSignout())
        await localStorage.removeItem('access-token')
        dispatch({
            type: ProfileComponentAction.signout
        })
    },
    
    getAccountUser: () => {
        dispatch(getAccountUser())
    },

    deleteAccount: (password: string) => {
        dispatch({
            type: ProfileComponentAction.loading,
            payload: true
        })

        dispatch(deleteAccountUser(password))
    },

    acknowledge: (event: any) => {
        dispatch({
            type: ProfileComponentAction.acknowledge,
            payload: event
        })
    }
})