import React from 'react';
import LandingLayout from '../components/LandingLayout/LandingLayout'
import TermOfCondition from "../components/TermOfCondition/TermOfConditionContainer";
import { themeManager } from '../manager/themeManager';

const Term = () => {
    return (
        <LandingLayout
            styleTheme={themeManager.StylesMainFolder}
            themePlugin={themeManager.ThemePluginMainFolder}
            themeScript={themeManager.ThemeScriptMainFolder}
        >
            <div className="min-vh-100">
                <TermOfCondition />
            </div>
        </LandingLayout>
    );
};

export default Term;