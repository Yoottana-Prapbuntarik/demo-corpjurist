import React from 'react'
import LandingLayout from '../components/LandingLayout/LandingLayout'
import Section from '../components/Section/SectionIncorporationContainer'
import Services from '../components/Services/ServicesContainer'
import { themeManager } from '../manager/themeManager'

const Incorporation = ():any => {
  return (
    <LandingLayout
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="min-vh-100">
        <Section />
        <Services />
      </div>
    </LandingLayout>
  )
}

export default Incorporation
