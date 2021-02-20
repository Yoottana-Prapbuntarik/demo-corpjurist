import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import MainVerifyEkycContainer from "../components/MainVerifyEkyc/MainVerifyEkycContainer";
import { themeManager } from '../manager/themeManager'
const mainEkyc = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="container-fluid text-center">
        <MainVerifyEkycContainer />
      </div>
    </MainLayoutMember>
  )
}

export default mainEkyc
