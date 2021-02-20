import React from 'react'
import LandingLayout from '../components/LandingLayout/LandingLayout'
import { themeManager } from '../manager/themeManager'
import LandingContent from "../components/LandingContent/LandingContentContainer";

const landingContent = (): any => {
  return (
    <LandingLayout
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="min-vh-100">
        <LandingContent />
      </div>
    </LandingLayout>
  )
}

export default landingContent
