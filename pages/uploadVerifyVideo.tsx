import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import UploadVerifyVideoContainer from "../components/UploadVerifyVideo/UploadVerifyVideoContainer";
import { themeManager } from '../manager/themeManager'
const uploadVerifyVideo = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="container-fluid text-center">
        <div className="row">
          <UploadVerifyVideoContainer />
        </div>
      </div>
    </MainLayoutMember>
  )
}

export default uploadVerifyVideo
