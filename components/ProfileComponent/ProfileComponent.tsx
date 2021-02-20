import "./styles.scss";
import SweetAlert from 'react-bootstrap-sweetalert'
import { withTranslation } from "../../i18n";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../components/LoadingPage/Loading";
import Router from 'next/router'
import { routeToChangePassword, routeToverifyInformation } from "../../manager/routerManager";
const ProfileComponent = ({
    signout,
    getAccountUser,
    deleteAccount,
    profileComponentPresenter,
    mainVerifyEkycPresenter,
    acknowledge,
    t
}: any) => {
    const Dispatch = useDispatch()
    useEffect(() => {
        Dispatch(getAccountUser)
    }, [profileComponentPresenter.userProfile])

    const [isSignOut, setIsSignOut] = useState(false)
    const [isDeleteAccount, setIsDeleteAccount] = useState(false)
    const [userPassword, setUserPassword] = useState("")

    const acceptAcknowledge = (bool) => {
        acknowledge(bool)
    }

    const confirmSignOut = (isSignOut: boolean) => {
        if (isSignOut === true) {
            setIsSignOut(!isSignOut)
            signout()
        } else {
            setIsSignOut(isSignOut)
        }
    }

    const confirmDeleteAccount = (isDeleteAccount: boolean) => {
        if (isDeleteAccount === true) {
            deleteAccount(userPassword);
            setUserPassword('')
            setIsDeleteAccount(!isDeleteAccount)

        } else {
            setIsDeleteAccount(isDeleteAccount)
        }
    }
    const isHasData = profileComponentPresenter.userProfile
    return (
        <div className="container">
            {profileComponentPresenter.isLoadingUserProfile === true && <Loading />}

            <SweetAlert
                custom
                showCloseButton
                confirmBtnText="Ok"
                show={profileComponentPresenter.isAcknowledge}
                confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
                cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
                title={t(profileComponentPresenter.keyMessageManageUser)}
                onConfirm={() => acceptAcknowledge(false)}
            >
            </SweetAlert>

            <SweetAlert
                custom
                showCancel
                showCloseButton
                confirmBtnText={t("signout")}
                cancelBtnText={t("cancel")}
                show={isSignOut}
                confirmBtnBsStyle="btn bg-primary btn-action text-white mt-3"
                cancelBtnBsStyle="btn bg-danger btn-action text-white mt-3"
                title={t(profileComponentPresenter.messageConfirmSignOut)}
                onConfirm={() => confirmSignOut(true)}
                onCancel={() => confirmSignOut(false)}
            >
            </SweetAlert>

            <SweetAlert
                custom
                showCancel
                showCloseButton
                confirmBtnText={t("ok")}
                disabled={userPassword.length < 5}
                cancelBtnText={t("cancel")}
                show={isDeleteAccount}
                confirmBtnBsStyle="btn bg-primary btn-action text-white mt-3"
                cancelBtnBsStyle="btn bg-danger btn-action text-white mt-3"
                title={t(profileComponentPresenter.messageConfirmDeleteAccount)}
                onConfirm={() => confirmDeleteAccount(true)}
                onCancel={() => confirmDeleteAccount(false)}
            >
                <label className="text-left pr-3 font-weight-bold" htmlFor="password">
                    {t('labelPassword')}
                </label>
                <input type="password"
                    name="passwordUser"
                    id="password"
                    value={userPassword}
                    placeholder={t('labelPassword')}
                    onChange={(evt) => { setUserPassword(evt.target.value) }} />
            </SweetAlert>

            {

                isHasData && <div className="row">
                    <div className="col-lg-12 my-4">
                        <h3>
                            {t(profileComponentPresenter.profileHeader)}
                        </h3>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex h-100 align-items-start">
                            <img src="assets/images/profile.jpg" className="w-100" alt="profile image" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 pt-1">
                        <div className="d-flex align-items-center">
                            <div className="w-100 d-flex flex-row flex-wrap h-100 align-items-center justify-content-center">
                                <div className="w-50 d-flex justify-content-start">
                                    <div>
                                        <span className="font-weight-bold">
                                            {t(profileComponentPresenter.userFirstName)} :&nbsp;&nbsp;
                                        </span>

                                        {profileComponentPresenter.userProfile.first_name}
                                    </div>
                                </div>
                                <div className="w-50 d-flex justify-content-center">
                                    <div>
                                        <span className="font-weight-bold">
                                            {t(profileComponentPresenter.userLastName)} :&nbsp;&nbsp;
                                        </span>

                                        {profileComponentPresenter.userProfile.last_name}
                                    </div>
                                </div>
                                <div className="py-3 w-100 d-flex justify-content-start">
                                    <div>
                                        <span className="font-weight-bold">
                                            {t(profileComponentPresenter.userEmail)} :&nbsp;&nbsp;
                                        </span>

                                        {t(profileComponentPresenter.userProfile.email)}
                                    </div>
                                </div>
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="py-2 w-100">
                                                <button className="btn text-white w-100 bg-success"
                                                    onClick={() => Router.replace(routeToverifyInformation)}>
                                                    {t(mainVerifyEkycPresenter.confirmIdentity)}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="py-2 w-100">
                                                <button className="btn text-white w-100 bg-warning"
                                                    onClick={() => Router.replace(routeToChangePassword)}>
                                                    {t(profileComponentPresenter.buttonChangePassword)}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="py-2 w-100">
                                                <button className="btn text-white w-100 bg-primary"
                                                    onClick={() => setIsSignOut(true)}>
                                                    {t(profileComponentPresenter.buttonSignout)}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="py-2 w-100">
                                                <button className="btn text-white w-100 bg-danger"
                                                    onClick={() => setIsDeleteAccount(true)}
                                                >
                                                    {t(profileComponentPresenter.buttonDeleteAccount)}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            }
        </div >
    )
}

export default withTranslation('common')(ProfileComponent)