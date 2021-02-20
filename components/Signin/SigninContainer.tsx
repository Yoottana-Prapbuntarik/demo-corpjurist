import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { withTranslation } from '../../i18n'
import { SiginPresenter, SigninItem } from './SigninInterfaces'
import { signin, SigninAction } from '../../apis/signinAPIClient'
import { Dispatch } from 'redux'
import { FormManager } from '../../manager/formManager'
import {
  routeToPageMainNonDisclosure
} from '../../manager/routerManager'
import validate from '../../validate/signinValidator/signinValidator'
import Signin from './Signin'
import Router from 'next/router'

export enum SigninContainerAction {
  startLoadingSignin = 'startLoadingSignin',
  acknowledgeError = 'acknowledgeError'
}

const signinItem: SigninItem = {
  keySigninLabelUsername: 'labelUsername',
  keySigninPlaceholderUsername: 'labelUsername',
  keySigninLabelPassword: 'labelPassword',
  keySigninPlaceholderPassword: 'labelPassword',
  keyForgotPassword: 'forgotPassword',
  keySigninSubmit: 'signinSubmit',
  keySignupAccount: 'signupAccount',
  keySignupButton: 'signup',
  keyimagePath: 'assets/images/signin/signin-img.jpg'
}

const signinPresenter: SiginPresenter = {
  keySigninHeader: 'signin',
  signinItem: signinItem,
  keySigninFalse: '',
  isLoadingSignin: false,
  isAcknowledgeError: false,
  keyDetailSignin: 'keyDetailSignin',
}

export const signinReducer = (state: SiginPresenter = signinPresenter, action: any) => {
  switch (action.type) {
    case SigninAction.Signin_Success:
      Router.replace(routeToPageMainNonDisclosure)
      return {
        ...state,
        isLoadingSignin: false,
        keySigninFalse: action.keyMessage,
        isAcknowledgeError: false
      }

    case SigninAction.Signin_Failed:
      return {
        ...state,
        isLoadingSignin: false,
        keySigninFalse: action.keyMessage,
        isAcknowledgeError: true
      }

    case SigninContainerAction.acknowledgeError:
      return {
        ...state,
        isAcknowledgeError: action.payload
      }

    case SigninContainerAction.startLoadingSignin:
      return {
        ...state,
        isLoadingSignin: action.payload
      }

    default:
      return state
  }
}

const mapStateToProps = (state: any) => ({
  signinPresenter: state.signinReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submitSignin: (event: any) => {
    dispatch({
      type: SigninContainerAction.startLoadingSignin,
      payload: true
    })
    dispatch(signin(event.email, event.password, event.checkbox))
    dispatch(reset(FormManager.SigninForm))
  },

  acknowledgeError: (event: any) => {
    dispatch({
      type: SigninContainerAction.acknowledgeError,
      payload: event
    })
  }
})

const form = reduxForm(
  {
    form: FormManager.SigninForm,
    shouldValidate: () => true,
    validate
  }
)(Signin)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
