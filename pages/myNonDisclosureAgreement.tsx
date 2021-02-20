import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import MyNonDisclosure from '../components/MyNonDisclosure/MyNonDisclosureContainer'
const myNonDisclosureAgreement = ():any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="mb-3 text-center">
        <MyNonDisclosure/>
      </div>
    </MainLayoutMember>
  )
}

export default myNonDisclosureAgreement
