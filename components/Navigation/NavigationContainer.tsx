import { connect } from 'react-redux'
import Navigation from './Navigation'
import { NavigationItem, NavigationPresenter } from './NavigationInterfaces'
import { Dispatch } from 'redux'
import { i18n } from '../../i18n'
import { reset } from 'redux-form'
import { FormManager } from '../../manager/formManager'

enum NavigationAction {
	CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
}

const navigationItems: NavigationItem[] = [
  { keyTitle: 'signin', routePath: '/signin' }
]

const navigationPresenter: NavigationPresenter = {
  navigationItems: navigationItems
}

export const navigationReducer = (state: NavigationPresenter = navigationPresenter, action: any) => {
  switch (action.type) {
    case NavigationAction.CHANGE_LANGUAGE:
      i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en')
      return action.navigationPresenter
    default:
      return state
  }
}

const changeLanguageAction: any = () => ({
  type: NavigationAction.CHANGE_LANGUAGE,
  navigationPresenter: navigationPresenter
})

const mapStateToProps = (state: any) => ({
  navigationPresenter: state.navigationReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeLanguage: () => {
    dispatch(changeLanguageAction())

    const forms = [FormManager.FooterForm, FormManager.SigninForm, FormManager.SignupForm, FormManager.ForgotPasswordForm, FormManager.ChangePasswordForm, FormManager.NonDisclosureForm,
      FormManager.MyNonDisclosureForm, FormManager.ConfirmNonDisclosureForm]

    forms.forEach((element) => dispatch(reset(element)))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
