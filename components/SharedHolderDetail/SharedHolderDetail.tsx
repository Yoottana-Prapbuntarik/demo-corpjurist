import { withTranslation } from "../../i18n";
import { Fragment, useEffect } from "react";
import ButtonSubmit from "../FieldComponents/ButtonSubmit";
import CustomeTextField from "../FieldComponents/CustomeTextField";
import { Field } from "redux-form";
import SelectField from "../FieldComponents/SelectField";
import './styles.scss';
import { useDispatch } from "react-redux";
import Loading from '../LoadingPage/Loading'
import SweetAlert from 'react-bootstrap-sweetalert'
import telephone from "../../telephone/telephone.json";
const SharedHolderDetail = ({
    handleSubmit,
    sharedHolderDetailPresenter,
    handleNameOfShareholderDetail,
    handleFamilyNameOfShareholderDetail,
    handleAddressOfShareholderDetail,
    handleTypeOfShareDetail,
    handleAmountOfShareDetail,
    handleEmailOfShareDetail,
    handlePhoneOfShareDetail,
    handleChangeValueTelCountry,
    handldSubmitForm,
    getShareholdersDetail,
    acceptAcknowledge,
    t }: any) => {

    const Dispatch = useDispatch()
    useEffect(() => {
        Dispatch(getShareholdersDetail)
    }, [])

    const acceptknowledged = (bool) => {
        acceptAcknowledge(bool)
    }
    return (
        <div className="container-fluid py-5">
            {sharedHolderDetailPresenter.isLoading === true && <Loading />}

            <div className="row">
                <SweetAlert
                    custom
                    showCloseButton
                    confirmBtnText="Ok"
                    show={sharedHolderDetailPresenter.isAcknowledge}
                    confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
                    cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
                    title={t(sharedHolderDetailPresenter.keyMessageAlert)}
                    onConfirm={() => acceptknowledged(false)}
                >
                </SweetAlert>
                <div className="col-lg-6  col-12 mb-3 text-left">
                    <div className="d-flex h-100 align-items-center">
                        {t(sharedHolderDetailPresenter.labelShareholderDetail)}
                    </div>
                </div>
                <div className="col-lg-6 col-12 mb-3 text-right">
                    <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#AddShareholder">
                        {t(sharedHolderDetailPresenter.btnAddShareholder)}
                    </button>
                </div>
                <div className="col-12 mt-5">
                    {
                        sharedHolderDetailPresenter.getShareholdersDetail && sharedHolderDetailPresenter.getShareholdersDetail.length > 0 ?
                            <div className="table-responsive-in-mobile-shareholder px-5">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>{t(sharedHolderDetailPresenter.headerNumber)}</th>
                                            <th>{t(sharedHolderDetailPresenter.headerFamilyName)}</th>
                                            <th>{t(sharedHolderDetailPresenter.headerAddressFamily)}</th>
                                            <th>{t(sharedHolderDetailPresenter.headerTypeOfShares)}</th>
                                            <th>{t(sharedHolderDetailPresenter.headerAmountHolding)}</th>
                                            <th>{t(sharedHolderDetailPresenter.headerEmail)}</th>
                                            <th>{t(sharedHolderDetailPresenter.headerPhone)}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            sharedHolderDetailPresenter.getShareholdersDetail &&
                                            sharedHolderDetailPresenter.getShareholdersDetail.map((listShareholdersDetail, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{listShareholdersDetail.name_family}</td>
                                                        <td>{listShareholdersDetail.address}</td>
                                                        <td>{listShareholdersDetail.type_of_share}</td>
                                                        <td>{(listShareholdersDetail.amount_holding).toLocaleString()}</td>
                                                        <td>{listShareholdersDetail.email}</td>
                                                        <td>{listShareholdersDetail.phone}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            :
                            <div className="d-flex not-found justify-content-center align-items-center">
                                {t('notfound')}
                            </div>
                    }
                </div>

                {/* Modal */}
                <div className="modal fade" id="AddShareholder" role="dialog" aria-labelledby="AddShareholderTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                        <div className="modal-content" >
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">{t(sharedHolderDetailPresenter.dialogShareholderHeader)}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <form onSubmit={handleSubmit(handldSubmitForm)}>
                                        <Fragment>
                                            <div className="row">
                                                <div className="col-lg-6 col-12 mt-2 mb-2">
                                                    <label>
                                                        {t(sharedHolderDetailPresenter.nameOfShareholderDetail.name)}
                                                    </label>
                                                    <Field
                                                        name={sharedHolderDetailPresenter.nameOfShareholderDetail.name}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(sharedHolderDetailPresenter.nameOfShareholderDetail.name)}
                                                        currentValue={sharedHolderDetailPresenter.nameOfShareholderDetail.valueNameOfShareholderDetail}
                                                        onChange={(event: any) => handleNameOfShareholderDetail(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-12 mt-2 mb-2">
                                                    <label>
                                                        {t(sharedHolderDetailPresenter.familyNameOfShareholderDetail.name)}
                                                    </label>
                                                    <Field
                                                        name={sharedHolderDetailPresenter.familyNameOfShareholderDetail.name}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(sharedHolderDetailPresenter.familyNameOfShareholderDetail.name)}
                                                        currentValue={sharedHolderDetailPresenter.familyNameOfShareholderDetail.valueFamilyNameOfShareholderDetail}
                                                        onChange={(event: any) =>
                                                            handleFamilyNameOfShareholderDetail(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-12 mt-2 mb-2">
                                                    <label>
                                                        {t(sharedHolderDetailPresenter.addressOfShareholderDetail.name)}
                                                    </label>
                                                    <Field
                                                        name={sharedHolderDetailPresenter.addressOfShareholderDetail.name}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(sharedHolderDetailPresenter.addressOfShareholderDetail.name)}
                                                        currentValue={sharedHolderDetailPresenter.addressOfShareholderDetail.valueAddressOfShareholderDetail}
                                                        onChange={(event: any) => handleAddressOfShareholderDetail(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-12 mt-2 mb-2">
                                                    <label>
                                                        {t(sharedHolderDetailPresenter.typeOfShareDetail.name)}
                                                    </label>

                                                    <Field
                                                        disabledState={false}
                                                        label={null}
                                                        name={sharedHolderDetailPresenter.typeOfShareDetail.name}
                                                        style="form-control"
                                                        currentValue={sharedHolderDetailPresenter.typeOfShareDetail.valueTypeOfShareDetail}
                                                        component={SelectField}
                                                        styleTextError="text-danger"
                                                        onChange={(event: any) => handleTypeOfShareDetail(event.target.value)}
                                                    >

                                                        {
                                                            sharedHolderDetailPresenter.typeOfShareItems.map((itemsTypeOfShare, index: number) => {
                                                                return (
                                                                    <Fragment key={index}>
                                                                        <option value={t(itemsTypeOfShare.name)}>
                                                                            {t(itemsTypeOfShare.name)}
                                                                        </option>
                                                                    </Fragment>
                                                                )
                                                            })
                                                        }

                                                    </Field>
                                                </div>
                                                <div className="col-lg-6 col-12 mt-2 mb-2">
                                                    <label>
                                                        {t(sharedHolderDetailPresenter.amountOfShareDetail.name)}
                                                    </label>
                                                    <Field
                                                        name={sharedHolderDetailPresenter.amountOfShareDetail.name}
                                                        type="number"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        min="1"
                                                        label={t(sharedHolderDetailPresenter.amountOfShareDetail.name)}
                                                        currentValue={sharedHolderDetailPresenter.amountOfShareDetail.valueAmountOfShareDetail}
                                                        onChange={(event: any) => handleAmountOfShareDetail(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-12 mt-2 mb-2">
                                                    <label>
                                                        {t(sharedHolderDetailPresenter.emailOfShareDetail.name)}
                                                    </label>
                                                    <Field
                                                        name={sharedHolderDetailPresenter.emailOfShareDetail.name}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(sharedHolderDetailPresenter.emailOfShareDetail.name)}
                                                        currentValue={sharedHolderDetailPresenter.emailOfShareDetail.valueEmailOfShareDetail}
                                                        onChange={(event: any) => handleEmailOfShareDetail(event.target.value)}
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-12 mt-2 mb-2">
                                                    <label>
                                                        {t(sharedHolderDetailPresenter.phoneOfShareDetail.name)}
                                                    </label>
                                                    <div className="d-flex">
                                                        <div className="pr-1">
                                                            <Field
                                                                disabledState={false}
                                                                label={null}
                                                                name={sharedHolderDetailPresenter.nationTel.name}
                                                                style="form-control"
                                                                currentValue={sharedHolderDetailPresenter.nationTel.valueNationTel}
                                                                component={SelectField}
                                                                styleTextError="text-danger"
                                                                onChange={(event: any) => handleChangeValueTelCountry(event.target.value)}
                                                            >
                                                                {
                                                                    telephone.map((telephoneNumber, index: number) => {
                                                                        return (
                                                                            telephoneNumber.dial_code !== '' && telephoneNumber.dial_code !== null &&
                                                                            <Fragment key={index}>
                                                                                <option value={telephoneNumber.dial_code}>
                                                                                    {`(${telephoneNumber.code}) `}
                                                                                    {telephoneNumber.dial_code}
                                                                                </option>
                                                                            </Fragment>
                                                                        )

                                                                    })
                                                                }

                                                            </Field>
                                                        </div>
                                                        <Field
                                                            name={sharedHolderDetailPresenter.phoneOfShareDetail.name}
                                                            type="text"
                                                            component={CustomeTextField}
                                                            styleTextError="text-danger"
                                                            className="form-control"
                                                            label={t(sharedHolderDetailPresenter.phoneOfShareDetail.name)}
                                                            currentValue={sharedHolderDetailPresenter.phoneOfShareDetail.valueEmailOfShareDetail}
                                                            onChange={(event: any) => handlePhoneOfShareDetail(event.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 text-right">
                                                    <div >
                                                        <Field
                                                            name={'submit'}
                                                            type="submit"
                                                            style="btn btn-primary w-50"
                                                            styleTextError="text-danger"
                                                            component={ButtonSubmit}
                                                            label={t('add')}

                                                        >
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fragment>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation('common')(SharedHolderDetail)