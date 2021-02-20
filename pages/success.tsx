import React from 'react';
import LandingLayoutSuccess from '../components/LandingLayout/LandingLayoutSuccess'
import SuccessComponent from "../components/Success/SuccessContainer";
import { themeManager } from '../manager/themeManager';

const Success = () => {
    return (
        <LandingLayoutSuccess

            styleTheme={themeManager.StylesMainFolder}
            themePlugin={themeManager.ThemePluginMainFolder}
            themeScript={themeManager.ThemeScriptMainFolder}
        >
            <div className="min-vh-100">
                <SuccessComponent />
            </div>
        </LandingLayoutSuccess>
    );
};

export default Success;