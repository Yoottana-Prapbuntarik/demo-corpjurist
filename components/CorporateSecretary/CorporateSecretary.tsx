import { withTranslation } from "../../i18n";
import CustomeTextField from '../FieldComponents/CustomeTextField'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import { Field, } from 'redux-form'
import Loading from '../LoadingPage/Loading'
import SweetAlert from 'react-bootstrap-sweetalert'
import './styles.scss';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthorisedSignatory from "./AuthorisedSignatory";
import Router from "next/router"
import { routeToPageMainNonDisclosure } from "../../manager/routerManager";
// import SignatoryAuthority from "./SignatoryAuthority";

const CorporateSecretary = ({
    handleSubmit,
    corporateSecretaryPresenter,
    handleChangeBusinessRegistration,
    handleChangeName,
    handleChangeHqAddress,
    handleChangeCapital,
    handldSubmitForm,
    acceptAcknowledge,
    getCompanyBasicInfo,
    removeAuthorisedSignatory,
    // removeSigningAuthority,
    handleChangeSignatory,
    // addSignatoryAuthorityForm,
    handldSubmitUpdateForm,
    addNewSignatoryAndauthorised,
    addCorporateSecretaryForm,
    handleChangeAuthorised,
    uploadLogo,
    setPopup,
    checkAuthorisedAndUploadLogo,
    t
}: any) => {
    const Dispatch = useDispatch()
    
    useEffect(() => {
        if (corporateSecretaryPresenter.checkCreatedForm === 201
            && corporateSecretaryPresenter.dataAPI.length === 0) { Router.push(routeToPageMainNonDisclosure) }
    }
        , [corporateSecretaryPresenter.checkCreatedForm])

    useEffect(() => { Dispatch(getCompanyBasicInfo) }, [])

    const acceptAcknowledged = (bool: boolean) => {
        acceptAcknowledge(bool)
    }

    const updateSinatory = () => {
        handldSubmitUpdateForm(corporateSecretaryPresenter.popupItems.dataSubmitForm)
    }
    const submitSinatory = () => {
        handldSubmitForm(corporateSecretaryPresenter.popupItems.dataSubmitForm)
    }

    return (
        <div>
            {corporateSecretaryPresenter.isLoading === true && <Loading />}
            <div className={corporateSecretaryPresenter.isLoading === true ? "d-none" : "container-fluid pb-2"} >
                <div className="row">
                    <SweetAlert
                        custom
                        showCloseButton
                        confirmBtnText="Ok"
                        show={corporateSecretaryPresenter.isAcknowledge}
                        confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
                        cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
                        title={t(corporateSecretaryPresenter.keyMessageAlert)}
                        onConfirm={() => acceptAcknowledged(false)}
                    >
                    </SweetAlert>

                    <SweetAlert
                        custom
                        showCancel
                        showCloseButton
                        confirmBtnText={t('confirm')}
                        cancelBtnText={t('cancel')}
                        show={corporateSecretaryPresenter.popupItems.isOpen}
                        confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
                        cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
                        title={t(corporateSecretaryPresenter.labelCompany)}
                        onConfirm={() => corporateSecretaryPresenter.dataAPI.length !== 1 ? submitSinatory()
                            : updateSinatory()}
                        onCancel={() => setPopup({})}
                    >
                        {t(corporateSecretaryPresenter.detailCreateSignatory)}
                    </SweetAlert>
                    <div className="col-12 text-left">
                        {t(corporateSecretaryPresenter.labelCompany)}
                    </div>
                </div>

                <form className="w-100" onSubmit={
                    corporateSecretaryPresenter.authorisedSignatory.value.length === 0 ? handleSubmit(checkAuthorisedAndUploadLogo) : handleSubmit(setPopup)}>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="col-12">
                                        <div className="h-50-pixel d-flex align-items-center">
                                            {t(corporateSecretaryPresenter.subLabelCompany)}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="row">
                                                <div
                                                    className="col-12">
                                                    <img width="100px" className="d-block" src={corporateSecretaryPresenter.previewLogo} />
                                                    <label htmlFor="upload" className="btn btn-primary mt-2" >
                                                        {"Upload Logo"}
                                                    </label>
                                                    <input
                                                        name="imageUpload"
                                                        type="file"
                                                        className="d-none"
                                                        id="upload"
                                                        onChange={(event: any) => uploadLogo(event.target.files)}
                                                    />
                                                </div>
                                                <div className="col-12 mt-2">
                                                    <label>
                                                        {t(corporateSecretaryPresenter.businessRegistration.name)}
                                                    </label>
                                                    <Field
                                                        name={corporateSecretaryPresenter.businessRegistration.name}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(corporateSecretaryPresenter.businessRegistration.name)}
                                                        currentValue={corporateSecretaryPresenter.businessRegistration.valueBusinessRegistration}
                                                        onChange={(event: any) => handleChangeBusinessRegistration(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-12 mt-2">
                                                    <label>
                                                        {t(corporateSecretaryPresenter.businessName.name)}
                                                    </label>
                                                    <Field
                                                        name={corporateSecretaryPresenter.businessName.name}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(corporateSecretaryPresenter.businessName.name)}
                                                        currentValue={corporateSecretaryPresenter.businessName.valueBusinessName}
                                                        onChange={(event: any) => handleChangeName(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-12 mt-2">
                                                    <label>
                                                        {t(corporateSecretaryPresenter.hqAddress.name)}
                                                    </label>
                                                    <Field
                                                        name={corporateSecretaryPresenter.hqAddress.name}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(corporateSecretaryPresenter.hqAddress.name)}
                                                        currentValue={corporateSecretaryPresenter.hqAddress.valueHqAddress}
                                                        onChange={(event: any) => handleChangeHqAddress(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-12 mt-2">
                                                    <label>
                                                        {t(corporateSecretaryPresenter.registrateredCapital.name)}
                                                    </label>
                                                    <Field
                                                        name={corporateSecretaryPresenter.registrateredCapital.name}
                                                        type="number"
                                                        min="1"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(corporateSecretaryPresenter.registrateredCapital.name)}
                                                        currentValue={corporateSecretaryPresenter.registrateredCapital.valueRegistrateredCapital}
                                                        onChange={(event: any) => handleChangeCapital(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-12 mt-2">

                                                    <label>{t(corporateSecretaryPresenter.signatoryAuthority.placeholder)}
                                                    </label>
                                                    <Field
                                                        name={corporateSecretaryPresenter.signatoryAuthority.formType}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(corporateSecretaryPresenter.signatoryAuthority.placeholder)}
                                                        currentValue={corporateSecretaryPresenter.businessRegistration.valueBusinessRegistration}
                                                        onChange={(event: any) => handleChangeSignatory(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="col-12">
                                    <div className="d-flex justify-content-center mb-3">
                                        <button className="btn btn-primary w-100 ">
                                            {t(corporateSecretaryPresenter.btnShareholder)}
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex justify-content-center mb-3">
                                        <button className="btn btn-primary w-100">
                                            {t(corporateSecretaryPresenter.btnOrganize)}
                                        </button>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                                <div className="row">
                                    <AuthorisedSignatory
                                        corporateSecretaryPresenter={corporateSecretaryPresenter}
                                        removeAuthorised={removeAuthorisedSignatory}
                                        addNewSignatoryAndauthorised={addNewSignatoryAndauthorised}
                                        addCorporateSecretaryForm={addCorporateSecretaryForm}
                                        handleChangeAuthorised={handleChangeAuthorised}
                                    />
                                    {/* <SignatoryAuthority
                                        corporateSecretaryPresenter={corporateSecretaryPresenter}
                                        removeSigning={removeSigningAuthority}
                                        addNewSignatoryAndauthorised={addNewSignatoryAndauthorised}
                                        addSignatoryAuthorityForm={addSignatoryAuthorityForm}
                                        handleChangeSignatory={handleChangeSignatory}
                                    /> */}

                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex justify-content-end mt-3">
                                <Field
                                    name={corporateSecretaryPresenter.btnSave}
                                    type="submit"
                                    style="btn btn-primary w-300-px"
                                    styleTextError="text-danger"
                                    component={ButtonSubmit}
                                    label={t(corporateSecretaryPresenter.btnSave)}
                                />
                            </div>
                        </div>
                    </div >
                </form>
            </div >
        </div >
    )
}

export default withTranslation('common')(CorporateSecretary)