import React from 'react'
import LandingLayout from '../../components/LandingLayout/LandingLayout'
import ChangePassword from '../../components/ChangePassword/ChangePasswordContainer'
import { themeManager } from '../../manager/themeManager'
import { useRouter } from 'next/router'

const resetPassword = () => {
  const router = useRouter()

  return (
    <LandingLayout
      styleTheme={themeManager.StylesMainSubFolder_2}
      themePlugin={themeManager.ThemePluginMainSubFolder_2}
      themeScript={themeManager.ThemeScriptMainSubFolder_2}
    >
      <div className="min-vh-100">
        <ChangePassword tokenID={router.query.id} 
        />
      </div>
    </LandingLayout>
  )
}

export default resetPassword
