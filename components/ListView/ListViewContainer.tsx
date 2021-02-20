import { connect } from 'react-redux';
import ListView from './ListView';
import { ListViewPresenter, ListViewItem } from './ListViewInterfaces';

const listViewItems: ListViewItem[] = [
	{
		imagePath: 'assets/images/landing/registration.png',
		keyTitle: 'landingRegistrationTitle',
		keyDescription: 'landingRegistrationDescription'
	},
	{
		imagePath: 'assets/images/landing/contract.png',
		keyTitle: 'landingContactsTitle',
		keyDescription: 'landingContactsDescription'
	},
	{
		imagePath: 'assets/images/landing/stakeholders.png',
		keyTitle: 'landingStakeholdersTitle',
		keyDescription: 'landingStakeholdersDescription'
	},
	{
		imagePath: 'assets/images/landing/decision.png',
		keyTitle: 'landingInformedTitle',
		keyDescription: 'landingInformedDescription'
	},
	{
		imagePath: 'assets/images/landing/document.png',
		keyTitle: 'landingDocumentsitle',
		keyDescription: 'landingDocumentDescription'
	}
];

const listViewPresenter: ListViewPresenter = {
	keyHeader: 'features',
	listViewItems: listViewItems
};

export const listViewReducer = (state: ListViewPresenter = listViewPresenter) => {
	return state;
};

const mapStateToProps = (state: any) => ({
	listViewPresenter: state.listViewReducer
});

export default connect(mapStateToProps)(ListView);
