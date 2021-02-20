import { connect } from 'react-redux';
import SectionPresenter from './SectionInterfaces';
import Section from './Section';

const sectionPresenter: SectionPresenter = {
	keyTitle: 'headerIncorporation',
	keyDescription: 'incorporationDescription',
	keyButtonTitle: 'letStart',
	imagePath: 'assets/images/incorporation/incorporation.png',
	routePath: '/signin'

};

export const sectionIncorporationReducer = (state: SectionPresenter = sectionPresenter) => {
	return state;
};

const mapStateToProps = (state: any) => ({
	sectionPresenter: state.sectionIncorporationReducer
});

export default connect(mapStateToProps)(Section);