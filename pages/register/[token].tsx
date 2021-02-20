import React from 'react';
import LandingLayout from '../../components/LandingLayout/LandingLayout';
// import ActivateAccoount from '../../components/ActivateAccount/ActivateAccountContainer';
import { themeManager } from '../../manager/themeManager';
import { useRouter } from 'next/router'
import SignupContainer  from "../../components/Signup/SignupContainer";
const activateAccount = () => {
    const router = useRouter();

    return (
        <LandingLayout
            styleTheme={themeManager.StylesMainSubFolder_2}
            themePlugin={themeManager.ThemePluginMainSubFolder_2}
            themeScript={themeManager.ThemeScriptMainSubFolder_2}
        >
            <div className="min-vh-100">
                <SignupContainer tokenId={router.query.token}/>
            </div>
        </LandingLayout>
    );
};

export default activateAccount;