import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import HomeCorporateSecretaryContainer from "../components/HomeCorporateSecretary/HomeCorporateSecretaryContainer"
const homeCorporateSecretary = ():any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="mb-3 text-center">
        <HomeCorporateSecretaryContainer/>
      </div>
    </MainLayoutMember>
  )
}

export default homeCorporateSecretary
