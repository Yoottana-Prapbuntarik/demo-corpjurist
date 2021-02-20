import { ProfileComponentPresenter, ProfileComponentAction } from "./ProfileComponentInterface";
import { profileComponentPresenter } from "./ProfileComponentPresenter";
import {
    manageAccountUserAction
} from "../../apis/manageAccountUserAPIClient";
import Router from "next/router";

export const profileComponentReducer = (state: ProfileComponentPresenter = profileComponentPresenter, action: any): any => {
    switch (action.type) {
        case ProfileComponentAction.signout:
            Router.replace('/')
            return state
        case manageAccountUserAction.getProfileSuccess:
            return {
                ...state,
                isLoadingUserProfile: false,
                userProfile: action.userProfile
            }

        case ProfileComponentAction.acknowledge:
            return {
                ...state,
                isAcknowledge: action.payload
            }

        case ProfileComponentAction.loading:
            return {
                ...state,
                isLoadingUserProfile: action.payload
            }

        case manageAccountUserAction.deleteAccountFailed:
            return {
                ...state,
                keyMessageManageUser: action.keyMessage,
                isLoadingUserProfile: false,
                isAcknowledge: true,
            }

        case manageAccountUserAction.signOutSuccess:
            return state;


        case manageAccountUserAction.signOutFailed:
            return state;

        case manageAccountUserAction.deleteAccountSuccess:
            localStorage.clear();
            Router.push('/')
            return {
                ...state,
                isLoadingUserProfile: false
            }
        
        default:
            return state;
    }
}