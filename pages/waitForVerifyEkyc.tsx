import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import { i18n } from "../i18n";
const waitForVerifyEkyc = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="container text-center">
        <div className="row d-flex justify-cotent-center align-items-center vh-100">
          <div className="col-lg-6 text-left">
            <img className="w-75" src="/assets/images/wait-for-admin.jpg"/>
          </div>
          <div className="col-lg-6 text-left">
            {i18n.t('detailWaitForVerity')}
          </div>
        </div>
      </div>
    </MainLayoutMember>
  )
}

export default waitForVerifyEkyc
