import Link from 'next/link'
import { Field } from 'redux-form'
import { i18n, withTranslation } from '../../i18n'
import TextField from '../../components/FieldComponents/TextField'
import ButtonSubmit from '../../components/FieldComponents/ButtonSubmit'
import Loading from '../../components/LoadingPage/Loading'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useEffect, useState } from 'react'
import './styles.scss'

const Signup = ({ handleSubmit, getTokenSignup, signupPresenter, submitSignup, acknowledgeError, submitSignupWithToken, tokenId, t }: any) => {

  useEffect(() => {
    if (tokenId !== undefined) {
      getTokenSignup(tokenId)
    }
  }, [])

  const acceptAcknowledgeError = (bool) => {
    acknowledgeError(bool)
  }
  const [isAccept, setIsAccept] = useState(true)
  return (
    <div className="container">
      {signupPresenter.isLoadingSignup === true && <Loading />}
      {signupPresenter.isLoadingGetTokenSignup === true && <Loading />}
      {
        signupPresenter.isLoadingGetTokenSignup !== true &&
        <div className="row">
          <SweetAlert
            custom
            showCloseButton
            confirmBtnText="Ok"
            show={signupPresenter.isAcknowledgeError}
            confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
            cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
            title={t(signupPresenter.keySignupFalse)}
            onConfirm={() => acceptAcknowledgeError(false)}
          >
          </SweetAlert>

          <div className="col-lg-6">
            <img
              className="img-responsive w-100"
              src={signupPresenter.signupItemInputform.keyimagePath}
              alt="image signup"
            />
          </div>
          <div className="col-lg-6 col-md-10 ml-auto mr-auto">
            <h2 className="mt-3 mb-3 text-center">{t(signupPresenter.keySignupHeader)}</h2>
            <div className="register-form text-center">
              <form onSubmit={signupPresenter.getTokenSignup === '' ? handleSubmit(submitSignup) : handleSubmit(submitSignupWithToken)}>
                <div className="messages" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <Field
                        type="text"
                        name="firstName"
                        component={TextField}
                        label={t(signupPresenter.signupItemInputform.keyPlaceholderFirstNameSignup)}
                        styleTextError="text-danger"
                        className="form-control"
                        data-error="Firstname is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <Field
                        type="text"
                        name="lastName"
                        component={TextField}
                        label={t(signupPresenter.signupItemInputform.keyPlaceholderLastNameSignup)}
                        styleTextError="text-danger"
                        className="form-control"
                        data-error="Firstname is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group">
                      <Field
                        type="text"
                        name="citizenId"
                        component={TextField}
                        label={t(signupPresenter.signupItemInputform.keyPlaceholderCitizenId)}
                        styleTextError="text-danger"
                        className="form-control"
                        data-error="Firstname is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <Field
                        type="tel"
                        name="telephoneNumber"
                        component={TextField}
                        label={t(signupPresenter.signupItemInputform.keyPlaceholderTelephone)}
                        styleTextError="text-danger"
                        className="form-control"
                        data-error="Lastname is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      {
                        signupPresenter.getTokenSignup === '' ?

                          <Field
                            type="email"
                            name={signupPresenter.email.name}
                            component={TextField}
                            label={t(signupPresenter.signupItemInputform.keyPlaceholderEmailSignup)}
                            className="email form-control email-subscribe-height"
                            styleTextError="text-danger"
                            data-error="Valid email is required."
                          />
                          :
                          <Field
                            type="email"
                            name={signupPresenter.email.name}
                            component={TextField}
                            label={t(signupPresenter.signupItemInputform.keyPlaceholderEmailSignup)}
                            className="email form-control email-subscribe-height"
                            styleTextError="text-danger"
                            currentValue={true}
                            data-error="Valid email is required."
                          />

                      }
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {
                        signupPresenter.getTokenSignup === '' ?
                          <Field
                            type="email"
                            name={signupPresenter.confirmEmail.name}
                            component={TextField}
                            label={t(
                              signupPresenter.signupItemInputform.keyPlaceholderReEnterEmailSignup
                            )}
                            styleTextError="text-danger"
                            className="email form-control email-subscribe-height"
                            data-error="Valid email is required."
                          /> :
                          <Field
                            type="email"
                            name={signupPresenter.confirmEmail.name}
                            component={TextField}
                            currentValue={true}
                            label={t(
                              signupPresenter.signupItemInputform.keyPlaceholderReEnterEmailSignup
                            )}
                            styleTextError="text-danger"
                            className="email form-control email-subscribe-height"
                            data-error="Valid email is required."
                          />
                      }
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <Field
                        type="password"
                        name="password"
                        component={TextField}
                        label={t(signupPresenter.signupItemInputform.keyPlaceholderPasswordSignup)}
                        styleTextError="text-danger"
                        className="form-control"
                        data-error="password is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <Field
                        type="password"
                        name="confirmPassword"
                        component={TextField}
                        label={t(
                          signupPresenter.signupItemInputform.keyPlaceholderConfirmPasswordSignup
                        )}
                        styleTextError="text-danger"
                        className="form-control"
                        data-error="Conform Password is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* desktop size */}
                  <div className="col-md-12 term-and-privacy-desktop text-left">
                    <label htmlFor="term">
                      <input type="checkbox" className="mr-3" id="term" onClick={() => setIsAccept(!isAccept)} />
                      {t('termOfCondition')}
                      <Link href="/termOfServices">
                        <a target="_blank" className={i18n.language === "en" ? "pl-2" : ""}>
                          {t('readMore')}
                        </a>
                      </Link>
                      <span className="pl-2">
                        {t('and')}
                      </span>
                      <Link href="/privacyPolicy">
                        <a target="_blank" className="pl-2">
                          {t('privacyPolicy')}
                        </a>
                      </Link>
                    </label>
                  </div>

                  <div className="col-md-12 term-and-privacy-mobile text-left">
                    <label htmlFor="term">
                      <input type="checkbox" className="mr-3" id="term" onClick={() => setIsAccept(!isAccept)} />
                      {t('termOfCondition')}
                      <Link href="/termOfServices">
                        <a target="_blank" className={i18n.language === "en" ? "px-2" : ""}>
                          {t('readMore')}
                        </a>
                      </Link>
                      <br />
                      <span className="padding-1-8">
                        {t('and')}
                      </span>
                      <Link href="/privacyPolicy">
                        <a target="_blank" className="pl-2">
                          {t('privacyPolicy')}
                        </a>
                      </Link>
                    </label>
                  </div>
                  <div className="col-md-12 pt-3">
                    <Field
                      disable={isAccept}
                      type="submit"
                      name="submit"
                      component={ButtonSubmit}
                      style="btn btn-primary"
                      label={t(signupPresenter.signupItemInputform.keySubmitSignup)}
                      styleTextError="text-danger"
                    />
                    <span className="mt-4 d-block">
                      {t(signupPresenter.signupItemInputform.keyHaveAccount)}{' '}
                      <Link href="/signin">
                        <a>
                          {t(signupPresenter.signupItemInputform.keySigninAccount)}
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </div >

  )
}

export default withTranslation('common')(Signup)
