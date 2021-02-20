import React from 'react';
import LandingLayoutSuccess from '../components/LandingLayout/LandingLayoutSuccess'
import NotFoundData from "../components/NotFoundData/NotFoundDataContainer";
import { themeManager } from '../manager/themeManager';

const NotfoundData = () => {
	return (
		<LandingLayoutSuccess
			styleTheme={themeManager.StylesMainFolder}
			themePlugin={themeManager.ThemePluginMainFolder}
			themeScript={themeManager.ThemeScriptMainFolder}
		>
			<div className="min-vh-100 mx-auto">
				<NotFoundData />
			</div>
		</LandingLayoutSuccess>
	);
};

export default NotfoundData;