import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import NonDisclosureManagerContainer from '../components/NonDisclosureManager/NonDisclosureManagerContainer'
import UserChangePassword from "../components/UserChangePasswordComponent/UserChangePasswordContainer";
const userChangePassword = ():any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div>
        <NonDisclosureManagerContainer>
            <UserChangePassword/>
        </NonDisclosureManagerContainer>
      </div>
    </MainLayoutMember>
  )
}

export default userChangePassword
