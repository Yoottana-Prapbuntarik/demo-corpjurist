import React from "react";
import ForgotPasswordContainer from "../components/ForgotPassword/ForgotPasswordContainer";
import LandingLayout from "../components/LandingLayout/LandingLayout";
import { themeManager } from '../manager/themeManager';
const forgotPassword = () => {
  return (
    <LandingLayout
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="min-vh-100">
        <ForgotPasswordContainer />
      </div>
    </LandingLayout>
  );
};

export default forgotPassword;