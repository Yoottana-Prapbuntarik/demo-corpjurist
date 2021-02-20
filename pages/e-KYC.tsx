import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import RejectEkycContainer from "../components/RejectEkyc/RejectEkycContainer";
const EkyC = (): any => {
    return (
        <MainLayoutMember
            styleTheme={themeManager.StylesMainFolder}
            themePlugin={themeManager.ThemePluginMainFolder}
            themeScript={themeManager.ThemeScriptMainFolder}
        >
            <div className="container text-center">
                <div className="row d-flex justify-cotent-center align-items-center">
                    <div className="col-lg-12 text-left">
                        <RejectEkycContainer/>
                    </div>
                </div>
            </div>
        </MainLayoutMember>
    )
}

export default EkyC
