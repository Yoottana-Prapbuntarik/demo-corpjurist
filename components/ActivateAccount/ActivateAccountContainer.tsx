import { connect } from 'react-redux';
import { ActivateAccountPresenter } from './ActivateAccountInterface';
import ActivateAccount from './ActivateAccount';
import { verificationAction, verification } from '../../apis/verificationAPIClient';
import { Dispatch } from 'redux';
import Router from 'next/router';
import { routeToNotFoundData } from "../../manager/routerManager";
const activateAccountPresenter: ActivateAccountPresenter = {
	keyImagePath: '../../../assets/images/activate/activate.jpg',
	keyTitleActivateAccount: 'titleActivateAccount',
	keyDetailActivateAccount: 'detailActivateAccount',
	keyBackToSignin: 'signin',
	isShowActivate: false
};

export const activateAccountReducer = (state: ActivateAccountPresenter = activateAccountPresenter, action: any) => {
	switch (action.type) {
		case verificationAction.verification_Success:
			if (action.statusRegister === 204 || action.statusRegister === 401) {
				Router.replace(routeToNotFoundData)
			}
			return {
				...state,
				isShowActivate: action.statusRegister === 204 || action.statusRegister === 401 ? false : true
			}

		case verificationAction.verification_Failed:
			if (action.statusRegister === 204 || action.statusRegister === 401) {
				Router.replace(routeToNotFoundData)
			}
			return {
				...state,
				isShowActivate: action.statusRegister === 204 || action.statusRegister === 401 ? false : true
			}


		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	activateAccountPresenter: state.activateAccountReducer,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
	verificationUser: () => dispatch(verification(ownProps.tokenID, ownProps.pkId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccount);