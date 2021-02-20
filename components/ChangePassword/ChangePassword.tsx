import { withTranslation } from '../../i18n'
import { Field } from 'redux-form'
import TextField from '../FieldComponents/TextField'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import SweetAlert from 'react-bootstrap-sweetalert'
import Loading from '../LoadingPage/Loading';
import { useEffect } from 'react'

const ChangePassword = ({ handleSubmit, checkTokenForChangePassword, changePassword, changePasswordPresenter, acknowledgeError, t }: any) => {

  useEffect(() => {
    checkTokenForChangePassword()
  }, [])

  const acceptAcknowledgeError = (bool) => {
    acknowledgeError(bool)
  }
  return (
    <div className="container my-5">
      {changePasswordPresenter.isLoading === true ||  changePasswordPresenter.isShowFormNewpassword === false && <Loading />}
      <div className={changePasswordPresenter.isShowFormNewpassword === false  ? "d-none" : "row align-items-center"}>
        <SweetAlert
          custom
          showCloseButton
          confirmBtnText="Ok"
          show={changePasswordPresenter.isAcknowledge}
          confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
          cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
          title={t(changePasswordPresenter.keyMessageForgotPassword)}
          onConfirm={() => acceptAcknowledgeError(false)}
        />
        <div className="col-lg-6 col-12">
          <img className="w-100" src={changePasswordPresenter.keyImagePath} alt="image change password page" />
        </div>
        <div className="col-lg-6 col-12 my-5">
          <h3 className="mb-5">{t(changePasswordPresenter.keyTitleChangePassword)}</h3>
          <form onSubmit={handleSubmit(changePassword)}>
            <div className="form-group">
              <label>{t(changePasswordPresenter.keyNewPassword)}</label>
              <Field
                name="password"
                type="password"
                styleTextError="text-danger"
                component={TextField}
                className="form-control"
                label={t(changePasswordPresenter.keyNewPassword)}
              />
            </div>
            <div className="form-group">
              <label>{t(changePasswordPresenter.keyConfirmNewPassword)}</label>
              <Field
                name="confirmPassword"
                type="password"
                styleTextError="text-danger"
                component={TextField}
                className="form-control"
                label={t(changePasswordPresenter.keyConfirmNewPassword)}
              />
            </div>
            <div className="form-group">
              <Field
                type="submit"
                name="submit"
                component={ButtonSubmit}
                style="btn btn-primary"
                label={t(changePasswordPresenter.keySubmitResetPassword)}
                styleTextError="text-danger"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(ChangePassword)
