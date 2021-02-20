import { reduxForm, reset, actionTypes as formActionTypes } from 'redux-form'
import {
  SignupPresenter,
  SingupItemsInputform,
  Email,
  ConfirmEmail
} from '../Signup/SignupInterface'

import { connect } from 'react-redux'
import { withTranslation } from '../../i18n'
import { FormManager } from '../../manager/formManager'
import {
  signup,
  checkTokenSignup,
  SignupAction,
  signupWithToken,
  statusCode,
  statusRegisterWithToken
} from '../../apis/signupAPIClient'
import { Dispatch } from 'redux'
import Signup from '../Signup/Signup'
import validate from '../../validate/signupValidator/signupValidator'
import { routeToSignin } from '../../manager/routerManager'
import Router from 'next/router'

export let tokenSignup: string = "";

const signupItemsInputform: SingupItemsInputform = {
  keyPlaceholderFirstNameSignup: 'placeholderFirstNameSignup',
  keyPlaceholderLastNameSignup: 'placeholderLastNameSignup',
  keyPlaceholderEmailSignup: 'placeholderEmailSignup',
  keyPlaceholderReEnterEmailSignup: 'placeholderReEnterEmailSignup',
  keyPlaceholderPasswordSignup: 'labelPassword',
  keyPlaceholderConfirmPasswordSignup: 'placeholderConfirmPasswordSignup',
  keySubmitSignup: 'submitSignup',
  keyHaveAccount: 'haveAccount',
  keySigninAccount: 'signAccount',
  keyimagePath: '/assets/images/signup/signup-img.jpg',
  keyPlaceholderTelephone: 'phone',
  keyPlaceholderCitizenId: 'citizenId'
}

export enum SignupContainerAction {
  startLoadingSignup = 'startLoadingSignup',
  acknowledgeError = 'acknowledgeError',
  isLoadingGetTokenSignup = 'isLoadingGetTokenSignup'
}

const email: Email = {
  name: "email",
  value: ''
}
const confirmEmail: ConfirmEmail = {
  name: "confirmEmail",
  value: ''
}

const signupPresenter: SignupPresenter = {
  keySignupHeader: 'signup',
  signupItemInputform: signupItemsInputform,
  email: email,
  confirmEmail: confirmEmail,
  isAcknowledgeError: false,
  isLoadingSignup: false,
  isLoadingGetTokenSignup: false,
  keySignupFalse: '',
  getTokenSignup: ''
}

export const signupReducer = (state: SignupPresenter = signupPresenter, action: any) => {

  switch (action.type) {

    case SignupContainerAction.isLoadingGetTokenSignup:
      return {
        ...state,
        isLoadingGetTokenSignup: action.payload,
      }

    case SignupAction.GetTokenSignup_Success:

      const signupPresenter = {

        email: {
          name: "email",
          value: state.email.value = action.GetTokenSignupData.email
        },
        confirmEmail: {
          name: "confirmEmail",
          value: state.confirmEmail.value = action.GetTokenSignupData.email
        },
        isLoadingGetTokenSignup: state.isLoadingGetTokenSignup = false,
        getTokenSignup: state.getTokenSignup = action.GetTokenSignupData,
      }

      return {
        ...state,
        signupPresenter,
      }

    case SignupAction.GetTokenSignup_Failed:
      Router.replace('/')
      return {
        ...state,
        getTokenSignup: action.GetTokenSignupData,
        isLoadingGetTokenSignup: true,
      }

    case SignupAction.Signup_Success:
      return {
        ...state,
        isLoadingSignup: false,
        keySignupFalse: action.keyMessage,
        isAcknowledgeError: true
      }

    case SignupAction.Signup_Failed:
      return {
        ...state,
        keySignupFalse: action.keyMessage,
        isLoadingSignup: false,
        isAcknowledgeError: true
      }

    case SignupContainerAction.acknowledgeError:
      return {
        ...state,
        isAcknowledgeError: action.payload
      }

    case SignupContainerAction.startLoadingSignup:
      return {
        ...state,
        isLoadingSignup: action.payload
      }

    case formActionTypes.INITIALIZE:
      const signupPresenterInit = {
        email: {
          name: "email",
          value: state.email.value
        },

        confirmEmail: {
          name: "confirmEmail",
          value: state.confirmEmail.value
        }
      }

      return {
        ...state,
        signupPresenterInit,
      }

    default:
      return state
  }
}

const mapStateToProps = (state: any, ownProps) => {
  tokenSignup = ownProps.tokenId
  return {
    signupPresenter: state.signupReducer,
    tokenId: ownProps.tokenId,
    initialValues: {
      "email": state.signupReducer.email.value,
      "confirmEmail": state.signupReducer.confirmEmail.value
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submitSignup: (event: any) => {
    dispatch({
      type: SignupContainerAction.startLoadingSignup,
      payload: true
    })
    dispatch(signup(event.firstName, event.lastName, event.email, event.password, event.telephoneNumber, event.citizenId))
  },

  submitSignupWithToken: (event: any) => {
    dispatch({
      type: SignupContainerAction.startLoadingSignup,
      payload: true
    })
    dispatch(signupWithToken(tokenSignup, event.firstName, event.lastName, event.email, event.password, event.telephoneNumber, event.citizenId))
  },

  getTokenSignup: async (event: any) => {
    await dispatch(checkTokenSignup(event))
    await dispatch({
      type: SignupContainerAction.isLoadingGetTokenSignup,
      payload: true
    })
  },

  acknowledgeError: (event: any) => {
    dispatch({
      type: SignupContainerAction.acknowledgeError,
      payload: event
    })
    if (statusCode === 201 || statusRegisterWithToken === 200) {
      dispatch(reset(FormManager.SignupForm))
      setTimeout(() => {
        Router.replace(routeToSignin)
      }, 100);
    }
  }
})

const form = reduxForm(
  {
    form: FormManager.SignupForm,
    shouldValidate: () => true,
    shouldAsyncValidate: () => true,
    validate,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
  }
)(Signup)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
