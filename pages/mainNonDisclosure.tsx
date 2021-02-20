import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import MainNonDisclosureContainer from "../components/MainNonDisclosureComponent/MainNonDisclosureContainer";
const mainNonDisclosure = ():any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="text-center">
      <MainNonDisclosureContainer/>
      </div>
    </MainLayoutMember>
  )
}

export default mainNonDisclosure
