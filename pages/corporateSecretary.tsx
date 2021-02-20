import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import CorporateSecretary from "../components/CorporateSecretary/CorporateSecretaryContainer";
import NonDisclosureManagerContainer from '../components/NonDisclosureManager/NonDisclosureManagerContainer'
const corporateSecretary = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div>
        <NonDisclosureManagerContainer>
          <CorporateSecretary />
        </NonDisclosureManagerContainer>
      </div>
    </MainLayoutMember>
  )
}

export default corporateSecretary
