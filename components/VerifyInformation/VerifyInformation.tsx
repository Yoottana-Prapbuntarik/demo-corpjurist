import { withTranslation } from "../../i18n"
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { Field } from "redux-form";
import ButtonSubmit from "../FieldComponents/ButtonSubmit";
import "./styles.scss"
import { useEffect } from "react";
import Router from "next/router";
import Loading from "../LoadingPage/Loading";

const VerifyInformation = ({ verifyInformationPresenter, getEkycAction, handleSubmitVerifyInofrmation, handleSubmit, t }: any) => {

    useEffect(() => {
        getEkycAction()

        if (verifyInformationPresenter.isHasEkyc && verifyInformationPresenter.isHasEkyc.status === 'Waiting') {
            Router.replace("/waitForVerifyEkyc")
        } else if (verifyInformationPresenter.isHasEkyc && verifyInformationPresenter.isHasEkyc.status === 'Approve') {

            Router.replace("/ekycFeedback")
        } else if (verifyInformationPresenter.isHasEkyc && verifyInformationPresenter.isHasEkyc.status === 'Reject') {
            Router.replace("/e-KYC")
        }


    }, [verifyInformationPresenter.isHasEkyc])

    return (
        <>
            {
                verifyInformationPresenter.isLoadingEkycData === true ?
                    <Loading />
                    :
                    <div className={verifyInformationPresenter.isLoadingEkycData === true ? "d-none" : "col-12"}>
                        < div className="col-12 mt-5" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-12 mt-5">
                                        <img src={verifyInformationPresenter.keyImagePath} alt="" className="w-75" />
                                    </div>
                                    <div className="col-lg-6 col-12 mt-5">
                                        <form onSubmit={handleSubmit(handleSubmitVerifyInofrmation)}>
                                            <div className="row">
                                                <div className="col-12 mt-2 mb-2 pb-4 border-bottom-color text-left">
                                                    {t('accountInformation')}
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-12 mt-2 mb-2">

                                                    <label className="w-100 text-left">
                                                        {t(verifyInformationPresenter.verifyEmailPlaceholder)}
                                                    </label>
                                                    <Field
                                                        disabled={true}
                                                        name={verifyInformationPresenter.verifyEmail.verifyEmail}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(verifyInformationPresenter.verifyEmailPlaceholder)}
                                                    />
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-12 mt-2 mb-2">

                                                    <label className="w-100 text-left">
                                                        {t(verifyInformationPresenter.verifyTelephonePlaceholder)}
                                                    </label>
                                                    <Field
                                                        disabled={true}
                                                        name={verifyInformationPresenter.verifyTelephone.verifyTelephone}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(verifyInformationPresenter.verifyTelephonePlaceholder)}
                                                    />
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-12 mt-2 mb-2">
                                                    <label className="w-100 text-left">
                                                        {t(verifyInformationPresenter.verifyFirstNamePlaceholder)}
                                                    </label>
                                                    <Field
                                                        disabled={true}
                                                        name={verifyInformationPresenter.verifyFirstName.verifyFirstName}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(verifyInformationPresenter.verifyFirstNamePlaceholder)}
                                                    />
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-12 mt-2 mb-2">
                                                    <label className="w-100 text-left">
                                                        {t(verifyInformationPresenter.verifyLastNamePlaceholder)}
                                                    </label>
                                                    <Field
                                                        disabled={true}
                                                        name={verifyInformationPresenter.verifyLastName.verifyLastName}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(verifyInformationPresenter.verifyLastNamePlaceholder)}
                                                    />
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-12 mt-2 mb-2">
                                                    <label className="w-100 text-left">
                                                        {t(verifyInformationPresenter.verifyCitizenIdPlaceholder)}
                                                    </label>
                                                    <Field
                                                        disabled={true}
                                                        name={verifyInformationPresenter.verifyCitizenId.verifyCitizenId}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(verifyInformationPresenter.verifyCitizenIdPlaceholder)}
                                                    />
                                                </div>

                                                <div className="col-12 mt-5">
                                                    <div className="d-flex justify-content-end mb-5">
                                                        <Field
                                                            name="submit"
                                                            type="submit"
                                                            style="btn btn-primary w-50"
                                                            styleTextError="text-danger"
                                                            component={ButtonSubmit}
                                                            label={t('next')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
            }
        </>
    )
}

export default withTranslation('common')(VerifyInformation)