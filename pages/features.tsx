import React from 'react';
import LandingLayout from '../components/LandingLayout/LandingLayout';
import Section from '../components/Section/SectionContainer';
import ListView from '../components/ListView/ListViewContainer';
import { themeManager } from '../manager/themeManager';

const Features = () => {
	return (
		<LandingLayout
			styleTheme={themeManager.StylesMainFolder}
			themePlugin={themeManager.ThemePluginMainFolder}
			themeScript={themeManager.ThemeScriptMainFolder}
		>
			<div className="min-vh-100">
				<Section />
				<ListView />
			</div>
		</LandingLayout>
	);
};

export default Features;