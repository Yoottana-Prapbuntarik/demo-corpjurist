import { TextManager } from '../../manager/TextManager'
import {
    UserChangePasswordPresenter,
    ConfirmNewPassword,
    NewPassword,
    OldPassword
} from './UserChangePasswordInterface'

import { KeyManager } from '../../manager/keyManager'

const oldPassword: OldPassword = {
    name: KeyManager.OldPassword,
    placeholder: TextManager.TextOldPassword,
    valueOldPassword: ''
}

const newPassword: NewPassword = {
    name: KeyManager.ChangeNewPassword,
    placeholder: TextManager.TextNewPassword,
    valueNewPassword: ''
}

const confirmNewPassword: ConfirmNewPassword = {
    name: KeyManager.ConfirmNewPassword,
    placeholder: TextManager.TextConfirmNewPassword,
    valueConfirmNewPassword: ''
}


export const userChangePasswordPresenter: UserChangePasswordPresenter = {
    buttonSubmitChangePassword: TextManager.buttonSubmitChangePassword,
    titleChangePassword: TextManager.titleChangePassword,
    oldPassword: oldPassword,
    newPassword: newPassword,
    confirmNewPassword: confirmNewPassword,
    isAcknowledge: false,
    isLoadingUserChangePassword: false,
    userChangePasswordMessage: '',
    imageChangePassword: '/assets/images/user-changepassword/change-password.jpg'
}
