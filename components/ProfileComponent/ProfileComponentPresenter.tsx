import { ProfileComponentPresenter } from "./ProfileComponentInterface";
import { KeyManager } from "../../manager/keyManager";
import { TextManager } from "../../manager/TextManager";
export const profileComponentPresenter: ProfileComponentPresenter = {
    buttonDeleteAccount: KeyManager.BtnDeleteAccount,
    buttonSignout: KeyManager.BtnSignOut,
    buttonChangePassword: KeyManager.BtnChangePasswordchangePassword,
    choose: KeyManager.Choose,
    messageConfirmSignOut: TextManager.textSignout,
    messageConfirmDeleteAccount: TextManager.textDeleteAccount,
    userProfile: {},
    isAcknowledge: false,
    isLoadingUserProfile: false,
    keyMessageManageUser: "",
    profileHeader: KeyManager.UserProfile,
    userFirstName: KeyManager.UserFirstName,
    userLastName: KeyManager.UserLastName,
    userEmail: KeyManager.Email,
}
