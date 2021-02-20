import React from 'react'
import LandingLayout from '../components/LandingLayout/LandingLayout'
import Signin from '../components/Signin/SigninContainer'
import { themeManager } from '../manager/themeManager'

const SigninPage = () => {
  return (
    <LandingLayout
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="min-vh-100">
        <Signin />
      </div>
    </LandingLayout>
  )
}

export default SigninPage
