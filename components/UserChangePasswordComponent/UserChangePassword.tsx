import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { Field } from 'redux-form'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import Loading from '../LoadingPage/Loading'
import SweetAlert from 'react-bootstrap-sweetalert'
const UserChangePassword = ({
    handleSubmit,
    handleChangeOldPassword,
    handleChangeNewPassword,
    handleChangeConfirmNewPassword,
    acknowledge,
    handldSubmitForm,
    userChangePasswordPresenter,
    t
}: any) => {

    const acceptAcknowledge = (bool) => {
        acknowledge(bool)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h3 className="padding-between-section font-weight-bold">
                    {t(userChangePasswordPresenter.titleChangePassword)}
                </h3>
            </div>
            <div className="row">
                {userChangePasswordPresenter.isLoadingUserChangePassword === true && <Loading />}

                <SweetAlert
                    custom
                    showCloseButton
                    confirmBtnText={t('ok')}
                    show={userChangePasswordPresenter.isAcknowledge}
                    confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
                    cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
                    title={t(userChangePasswordPresenter.userChangePasswordMessage)}
                    onConfirm={() => acceptAcknowledge(false)}
                >
                </SweetAlert>

                <div className="col-lg-5 col-12">
                    <img className="w-75" src={userChangePasswordPresenter.imageChangePassword} alt="banner" />
                </div>
                <div className="col-lg-7 col-12">
                    <div className="d-flex jusify-content-center pt-3">
                        <form className="w-100" onSubmit={handleSubmit(handldSubmitForm)}>
                            <div className="form-group text-left">
                                <div className="row">
                                    <div className="col-12 py-2">
                                        <label>
                                            {t(userChangePasswordPresenter.oldPassword.placeholder)}
                                        </label>
                                        <Field
                                            name={userChangePasswordPresenter.oldPassword.name}
                                            type="password"
                                            component={CustomeTextField}
                                            styleTextError="text-danger"
                                            className="form-control"
                                            label={t(userChangePasswordPresenter.oldPassword.placeholder)}
                                            currentValue={userChangePasswordPresenter.oldPassword.valueOldPassword}
                                            onChange={(event: any) => handleChangeOldPassword(event.target.value)}
                                        />
                                    </div>

                                    <div className="col-12 py-2">
                                        <label>
                                            {t(userChangePasswordPresenter.newPassword.placeholder)}
                                        </label>
                                        <Field
                                            name={userChangePasswordPresenter.newPassword.name}
                                            type="password"
                                            component={CustomeTextField}
                                            styleTextError="text-danger"
                                            className="form-control"
                                            label={t(userChangePasswordPresenter.newPassword.placeholder)}
                                            currentValue={userChangePasswordPresenter.newPassword.valueNewPassword}
                                            onChange={(event: any) => handleChangeNewPassword(event.target.value)}
                                        />
                                    </div>

                                    <div className="col-12 py-2">
                                        <label>
                                            {t(userChangePasswordPresenter.confirmNewPassword.placeholder)}
                                        </label>
                                        <Field
                                            name={userChangePasswordPresenter.confirmNewPassword.name}
                                            type="password"
                                            component={CustomeTextField}
                                            styleTextError="text-danger"
                                            className="form-control"
                                            label={t(userChangePasswordPresenter.confirmNewPassword.placeholder)}
                                            currentValue={userChangePasswordPresenter.confirmNewPassword.valueConfirmNewPassword}
                                            onChange={(event: any) => handleChangeConfirmNewPassword(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="col-6 text-right my-3 pt-4 pr-5">
                                        <Field
                                            name={userChangePasswordPresenter.buttonSubmitChangePassword}
                                            type="submit"
                                            style="btn btn-primary w-100"
                                            styleTextError="text-danger"
                                            component={ButtonSubmit}
                                            label={t(userChangePasswordPresenter.buttonSubmitChangePassword)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default withTranslation('common')(UserChangePassword)
