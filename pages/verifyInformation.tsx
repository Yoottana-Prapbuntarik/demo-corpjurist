import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import VerifyInformationContainer from "../components/VerifyInformation/VerifyInformationContainer";
import { themeManager } from '../manager/themeManager'
const verifyInformation = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="container-fluid text-center">
        <VerifyInformationContainer />
      </div>
    </MainLayoutMember>
  )
}

export default verifyInformation
