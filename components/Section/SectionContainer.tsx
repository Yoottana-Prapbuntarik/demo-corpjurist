import { connect } from 'react-redux';
import SectionPresenter from './SectionInterfaces';
import Section from './Section';

const sectionPresenter: SectionPresenter = {
	keyTitle: 'sectionTitle',
	keyDescription: 'description',
	keyButtonTitle: 'joinus',
	imagePath: 'assets/images/landing/smartphone.png',
	routePath: '/signin'
};

export const sectionReducer = (state: SectionPresenter = sectionPresenter) => {
	return state;
};

const mapStateToProps = (state: any) => ({
	sectionPresenter: state.sectionReducer
});

export default connect(mapStateToProps)(Section);