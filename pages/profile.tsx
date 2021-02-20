import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import Profile from "../components/ProfileComponent/ProfileComponentContainer";
const profile = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="container-fluid text-center">
        <Profile />
      </div>
    </MainLayoutMember>
  )
}

export default profile
