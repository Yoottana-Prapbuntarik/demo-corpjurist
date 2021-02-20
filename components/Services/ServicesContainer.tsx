import { connect } from 'react-redux';
import Services from './Services';
import { ServicesPresenter, ServiceItem } from './ServicesInterfaces';

const serviceItems: ServiceItem[] = [
	{
		keyTitle: 'fillOnlineForm',
		imagePath: 'assets/images/incorporation/form.png',
		style: 'col-xl-4 col-lg-4 mb-8 mb-lg-0'
	},
	{
		keyTitle: 'mailItBack',
		imagePath: 'assets/images/incorporation/mail.png',
		style: 'col-xl-4 col-lg-4 col-sm-6'
	},
	{
		keyTitle: 'llcReadyForBusiness',
		imagePath: 'assets/images/incorporation/business.png',
		style: 'col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0'
	}
];

const servicesPresenter: ServicesPresenter = {
	keyHeader: 'titleIncorporationSection',
	serviceItems: serviceItems
};

export const servicesReducer = (state: ServicesPresenter = servicesPresenter) => {
	return state;
};

const mapStateToProps = (state: any) => ({
	servicesPresenter: state.servicesReducer
});

export default connect(mapStateToProps)(Services);
