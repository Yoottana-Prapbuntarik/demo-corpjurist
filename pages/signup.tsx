import React from 'react';
import LandingLayout from '../components/LandingLayout/LandingLayout';
import Signup from '../components/Signup/SignupContainer';
import { themeManager } from '../manager/themeManager';

const SignupPage = () => {
	return (
		<LandingLayout
			styleTheme={themeManager.StylesMainFolder}
			themePlugin={themeManager.ThemePluginMainFolder}
			themeScript={themeManager.ThemeScriptMainFolder}
		>
			<div className="min-vh-100">
				<Signup />
			</div>
		</LandingLayout>
	);
};

export default SignupPage;