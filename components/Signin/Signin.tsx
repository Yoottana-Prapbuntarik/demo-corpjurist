import Link from 'next/link'
import { withTranslation } from '../../i18n'
import { Field } from 'redux-form'
import TextField from '../../components/FieldComponents/TextField'
import ButtonSubmit from '../../components/FieldComponents/ButtonSubmit'
import Loading from '../../components/LoadingPage/Loading'
import SweetAlert from 'react-bootstrap-sweetalert'
const Signin = ({ handleSubmit, signinPresenter, submitSignin, acknowledgeError, t }: any) => {
  const acceptAcknowledgeError = (bool) => {
    acknowledgeError(bool)
  }

  return (
    <div className="container">
      {signinPresenter.isLoadingSignin === true && <Loading />}
      <div className="row justify-content-center">
        <SweetAlert
          custom
          showCloseButton
          confirmBtnText="Ok"
          show={signinPresenter.isAcknowledgeError}
          confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
          cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
          title={t(signinPresenter.keySigninFalse)}
          onConfirm={() => acceptAcknowledgeError(false)}
        >
        </SweetAlert>
        <div className="col-lg-6">
          <img
            className="img-responsive w-100"
            src={signinPresenter.signinItem.keyimagePath}
            alt="image signin"
          />
          <p className="text-justify">
            {t(signinPresenter.keyDetailSignin)}
          </p>
        </div>
        <div className="col-lg-6 col-8 align-self-center">
          <h2 className="text-center mb-3">{t(signinPresenter.keySigninHeader)}</h2>
          <form onSubmit={handleSubmit(submitSignin)}>
            <div className="messages" />
            <div className="form-group">
              <label>{t(signinPresenter.signinItem.keySigninLabelUsername)}</label>
              <Field
                name="email"
                required
                type="email"
                component={TextField}
                styleTextError="text-danger"
                className="form-control"
                label={t(signinPresenter.signinItem.keySigninPlaceholderUsername)}
              />
            </div>
            <div className="form-group">
              <label>{t(signinPresenter.signinItem.keySigninLabelPassword)}</label>
              <Field
                name="password"
                type="password"
                styleTextError="text-danger"
                component={TextField}
                className="form-control"
                label={t(signinPresenter.signinItem.keySigninPlaceholderPassword)}
              />
            </div>
            <div className="form-group mt-4 mb-5">
              <div className="remember-checkbox d-flex flex-wrap align-items-center justify-content-end">
                <Link href="/forgotpassword">
                  <a>
                    {t(signinPresenter.signinItem.keyForgotPassword)}
                  </a>
                </Link>
              </div>
            </div>{' '}
            <Field
              name="submit"
              type="submit"
              style="btn btn-primary btn-block"
              component={ButtonSubmit}
              label={t(signinPresenter.signinItem.keySigninSubmit)}
            />
          </form>
          {/* <div className="d-flex align-items-center flex-wrap text-center justify-content-center mt-4">
            <span className="text-muted mr-1">{t(signinPresenter.signinItem.keySignupAccount)}</span>
            <Link href="/signup">
              <a>
                {t(signinPresenter.signinItem.keySignupButton)}
              </a>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(Signin)
