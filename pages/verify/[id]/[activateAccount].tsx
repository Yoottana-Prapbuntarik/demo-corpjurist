import React from 'react';
import LandingLayout from '../../../components/LandingLayout/LandingLayout';
import ActivateAccoount from '../../../components/ActivateAccount/ActivateAccountContainer';
import { themeManager } from '../../../manager/themeManager';
import { useRouter } from 'next/router'

const activateAccount = () => {
    const router = useRouter();

    return (
        <LandingLayout
            styleTheme={themeManager.StylesMainSubFolder}
            themePlugin={themeManager.ThemePluginMainSubFolder}
            themeScript={themeManager.ThemeScriptMainSubFolder}
        >
            <div className="min-vh-100">
                <ActivateAccoount tokenID={router.query.id} pkId={router.query.activateAccount}/>
            </div>
        </LandingLayout>
    );
};

export default activateAccount;