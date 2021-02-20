import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import UploadCitizenContainer from "../components/UploadCitizen/UploadCitizenContainer";
import { themeManager } from '../manager/themeManager'
const uploadCitizen = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="container-fluid text-center">
        <UploadCitizenContainer />
      </div>
    </MainLayoutMember>
  )
}

export default uploadCitizen
