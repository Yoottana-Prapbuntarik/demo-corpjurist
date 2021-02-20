import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import SharedHolderDetail from "../components/SharedHolderDetail/SharedHolderDetailContainer";
import NonDisclosureManagerContainer from '../components/NonDisclosureManager/NonDisclosureManagerContainer'
const shareholderDetail = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div>
        <NonDisclosureManagerContainer>
          <SharedHolderDetail />
        </NonDisclosureManagerContainer>
      </div>
    </MainLayoutMember>
  )
}

export default shareholderDetail
