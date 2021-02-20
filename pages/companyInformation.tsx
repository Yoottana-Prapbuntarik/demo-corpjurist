import React from 'react'
import IncorporationManagerContainer from '../components/IncorporationManager/IncorporationManagerContainer'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import CompanyInformationContainer from '../components/CompanyComponent/CompanyInformationContainer'
import { themeManager } from '../manager/themeManager'

const companyInformation = ():any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <IncorporationManagerContainer>
        <CompanyInformationContainer />
      </IncorporationManagerContainer>
    </MainLayoutMember>
  )
}

export default companyInformation
