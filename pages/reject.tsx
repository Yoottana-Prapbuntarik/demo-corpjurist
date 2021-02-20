import React from 'react'
import { themeManager } from '../manager/themeManager'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import ConfirmMyNonDisclosureReject from "../components/ConfirmMyNonDisclosure/ConfirmMyNonDisclosureRejectContainer.tsx";
const disclosure = () => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainSubFolder}
      themePlugin={themeManager.ThemePluginMainSubFolder}
      themeScript={themeManager.ThemeScriptMainSubFolder}
    >
      <div className="mx-auto text-center">
        <ConfirmMyNonDisclosureReject />
      </div>
    </MainLayoutMember>
  )
}
export default disclosure
