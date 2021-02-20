import React from 'react';
import LandingLayout from '../components/LandingLayout/LandingLayout'
import PrivacyPolicyComponent from "../components/PrivacyPolicy/PrivacyPolicyContainer";
import { themeManager } from '../manager/themeManager';

const PrivacyPolicy = () => {
    return (
        <LandingLayout
            styleTheme={themeManager.StylesMainFolder}
            themePlugin={themeManager.ThemePluginMainFolder}
            themeScript={themeManager.ThemeScriptMainFolder}
        >
            <div className="min-vh-100">
                <PrivacyPolicyComponent />
            </div>
        </LandingLayout>
    );
};

export default PrivacyPolicy;