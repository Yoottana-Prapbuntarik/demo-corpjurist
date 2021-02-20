import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import HomeGenerateNonDisclosure  from "../components/HomeGenerateNonDisclosure/HomeGenerateNonDisclosureContainer";
const homeGenerateNonDisclosureAgreement = ():any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="mb-3 text-center">
          <HomeGenerateNonDisclosure/>
      </div>
    </MainLayoutMember>
  )
}

export default homeGenerateNonDisclosureAgreement
