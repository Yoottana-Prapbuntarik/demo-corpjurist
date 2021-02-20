import { connect } from 'react-redux';
import { withTranslation, i18n } from '../../i18n';
import { subscribe, SubscribeAction } from '../../apis/subscribeAPIClient';
import { reduxForm, reset } from 'redux-form';
import { SubscribeItem, FooterMenu, MenuItem, SocialItem, FooterPresenter } from './FooterViewInterfaces';
import { Dispatch } from 'redux';
import { FormManager } from '../../manager/formManager';
import validate from '../../validate/subscribeValidator/subscribeValidator';
import Footer from './Footer';

const footerMenuItems: MenuItem[] = [
	{ keyTitle: 'features', routePath: '/index' },
	{ keyTitle: 'incorporation', routePath: '/incorporation' },
	{ keyTitle: 'signin', routePath: '/signin' }
];

const socialtems: SocialItem[] = [
	{ name: 'la la-facebook', routePath: 'https://www.fb.com/CorpJurist-107918860608547' },
	{ name: 'la la-twitter', routePath: '/' },
	{ name: 'lab la-line', routePath: '/' },
	{ name: 'la la-envelope', routePath: '/' }
];

const footerMenu: FooterMenu = {
	keyHeaderTitle: 'pages',
	footerMenuItems: footerMenuItems
};

const subScribeItem: SubscribeItem = {
	keySubScribeTitle: 'subScribeTitle',
	keySubScribeDescription: 'subScribeDescription',
	keySubDescriptionForSubScribe: 'subDescriptionForSubScribe',
	keyEmail: 'email',
	keySubmitButton: 'subscribe',
	keyPages: 'pages'
};

const footerPresenter: FooterPresenter = {
	subscribeItem: subScribeItem,
	menu: footerMenu,
	socialItems: socialtems
};

export const footerReducer = (state: FooterPresenter = footerPresenter, action: any) => {
	switch (action.type) {
		case SubscribeAction.SendEmail_Success:
			alert(i18n.t(action.keyMessage));
			return state;
		case SubscribeAction.SendEmail_Failed:
			alert(i18n.t(action.keyMessage));
			return state;
		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	footerPresenter: state.footerReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	submitSubscribe: (event: any) => {
		dispatch(subscribe(event.email));
		dispatch(reset(FormManager.FooterForm));
	}
});

const form = reduxForm({ form: FormManager.FooterForm, validate })(Footer);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));
