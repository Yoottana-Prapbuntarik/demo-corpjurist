import { connect } from 'react-redux';
import Navigation from './Navigation';
import { getAccountUser, manageAccountUserAction } from "../../apis/manageAccountUserAPIClient";
import { NavigationMemberPresenter, NavigationMemberItem } from './NavigationInterfaces';
import { Dispatch } from 'redux';
import { i18n } from '../../i18n';
import { FormManager } from '../../manager/formManager';
import { reset } from 'redux-form';
import {
    NonDisclosureAction
} from "../NonDisclosureComponent/NonDisclosureInterface";

enum NavigationIncorporationAction {
    CHANGE_LANGUAGE_MEMBER_MENU = 'CHANGE_LANGUAGE_MEMBER_MENU'
}

const navigationMemberItem: NavigationMemberItem[] = [
    { keyTitleMemberMenu: '', routePathMemberMenu: '/profile' }
];

const navigationMemberPresenter: NavigationMemberPresenter = {
    navigationMemberItem: navigationMemberItem,
    profile: {}
}

export const navigationIncorporationReducer = (state: NavigationMemberPresenter = navigationMemberPresenter, action: any) => {

    switch (action.type) {
        case NavigationIncorporationAction.CHANGE_LANGUAGE_MEMBER_MENU:
            i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
            return action.navigationMemberPresenter

        case manageAccountUserAction.getProfileSuccess:
            return {
                ...state,
                profile: action.userProfile
            }
        default:
            return state;
    }
}

const changeLanguageAction: any = () => ({
    type: NavigationIncorporationAction.CHANGE_LANGUAGE_MEMBER_MENU,
    navigationMemberPresenter: navigationMemberPresenter
});

const mapStateToProps = (state: any) => ({
    navigationMemberPresenter: state.navigationIncorporationReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeLanguage: () => {
        dispatch(changeLanguageAction());
        dispatch(getAccountUser());
        if (window.location.pathname === "/nonDisclosure") {
            dispatch({
                type: NonDisclosureAction.nonDisclosureChangeLanguage
            })
        }

        const forms = [FormManager.InformationForm];
        forms.forEach((element) => dispatch(reset(element)));
    },

    getUserProfile: () => {
        dispatch(getAccountUser())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);