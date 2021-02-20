import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import UploadImagesPersonContainer from "../components/UploadImagesPerson/UploadImagesPersonContainer";
import { themeManager } from '../manager/themeManager'
const uploadUserImage = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="container-fluid text-center">
        <UploadImagesPersonContainer />
      </div>
    </MainLayoutMember>
  )
}

export default uploadUserImage
