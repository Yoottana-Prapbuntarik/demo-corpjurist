import { withTranslation } from '../../i18n'
import { Field } from 'redux-form'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import './styles.scss'
import { Fragment, useEffect, useState } from 'react'
import Loading from '../LoadingPage/Loading'
import SweetAlert from 'react-bootstrap-sweetalert'
import Textarea from '../FieldComponents/Textarea'
import { useRouter } from 'next/router'

const ConfirmMyNonDisclosureReject = ({
    handleSubmit,
    confirmMyNonDisclosurePresenter,
    handldSubmitForm,
    verificationMyNonDistclosureReject,
    acknowledgeError,
    handleChangeTextFieldScopeReason,
    handleChangeTextFieldTermReason,
    handleChangeTextFieldJurisdictionReason,
    handleChangeTextFieldChoiceOfLawsReason,
    handleChangeTextFieldServivalReason,
    handlechangeTextFieldOtherReason,
    handleChangeTextFieldAddressI,
    handleChangeTextFieldAddressII,
    handleChangeTextFieldEndDate,
    handleChangeTextFieldNameI,
    handleChangeTextFieldNameII,
    handleChangeTextFieldNameOfSignatoryPartyI,
    handleChangeTextFieldNameOfSignatoryPartyII,
    handleChangeTextFieldTitleAndCapacityOfSignatoryPartyI,
    handleChangeTextFieldTitleAndCapacityOfSignatoryPartyII,
    t
}: any) => {
    const router = useRouter()
    const acceptAcknowledgeError = (bool) => {
        acknowledgeError(bool)
    }

    const [reasonChoice] = useState([
        { reasonItems: confirmMyNonDisclosurePresenter.placeholderSelectRejectReason },
        {
            reasonItems: confirmMyNonDisclosurePresenter.addressI.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldAddressI(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.addressII.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldAddressII(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.nameI.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldNameI(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.nameII.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldNameII(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.nameOfSignatoryPartyI.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldNameOfSignatoryPartyI(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.nameOfSignatoryPartyII.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldNameOfSignatoryPartyII(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.titleAndCapacityOfSignatoryPartyI.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldTitleAndCapacityOfSignatoryPartyI(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.titleAndCapacityOfSignatoryPartyII.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldTitleAndCapacityOfSignatoryPartyII(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.scopeReason.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldScopeReason(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.termReason.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldTermReason(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.jurisdictionReason.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldJurisdictionReason(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.endDate.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldEndDate(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.choiceOfLawsReason.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldChoiceOfLawsReason(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.servivalReason.labelName,
            handleChangeReason: (value) =>  {handleChangeTextFieldServivalReason(value)}
        },
        {
            reasonItems: confirmMyNonDisclosurePresenter.otherReason.labelName,
            handleChangeReason: (value) =>  {handlechangeTextFieldOtherReason(value)}
        }
    ])

    const [stateReason, setstateReason] = useState([])

    const [selected, setSelected] = useState('')

    const handleSend = async (event) => {
        event.Approve = false
        event.user = router.query.user
        handldSubmitForm(event)
    }

    const isAddReason = (event) => {
        reasonChoice.map((listReason, key) => {
            let currentListItemsReason = [...reasonChoice];
            if (listReason.reasonItems === event && listReason.reasonItems !== "placeholderSelectRejectReason") {
                setSelected(listReason.reasonItems)
                setstateReason(stateReason => [...stateReason, currentListItemsReason[key]])
            }
        });
    }

    const removeReason = (itemRemove) => {
        let setNewReason = stateReason.filter(items => items.reasonItems !== itemRemove)
        setstateReason(setNewReason)
        setSelected('')
    }

    useEffect(() => {
        verificationMyNonDistclosureReject(router.query.pk_id)
    }, [])
    return (
        <Fragment>
            {confirmMyNonDisclosurePresenter.isLoadingConfirmMyNonDisclosure === true && <Loading />}
            <div className="container-fluid m-0 padding-between-section">
                <div className="row">
                    <SweetAlert
                        custom
                        showCloseButton
                        confirmBtnText="Ok"
                        show={confirmMyNonDisclosurePresenter.isAcknowledgeError}
                        confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
                        cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
                        title={t(confirmMyNonDisclosurePresenter.keyConfirmMyNonDisclosureNdaFalse)}
                        onConfirm={() => acceptAcknowledgeError(false)}
                    >
                    </SweetAlert>


                    <div className="col-lg-7 col-12 mt-5">
                        <div className="embed-responsive embed-responsive-4by3">
                            <iframe className="embed-responsive-item" src={confirmMyNonDisclosurePresenter.pdfReader}></iframe>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 mt-5">
                        <div className="d-flex jusify-content-center align-items-start h-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-10 text-left">
                                        <h5 className="font-weight-bold">{t(confirmMyNonDisclosurePresenter.rejectTitle)}
                                        </h5>
                                        <p className="text text-left  text-secondary">
                                            {t(confirmMyNonDisclosurePresenter.detailSelectRejectReason)}
                                        </p>
                                    </div>
                                    <div className="underline"></div>
                                    <div className="col-9">
                                        <select
                                            className="custom-select"
                                            onChange={(event) => isAddReason(event.target.value)}
                                            value={selected}
                                        >
                                            {
                                                reasonChoice.map((listReason, index: number) => {
                                                    return (
                                                        <option value={listReason.reasonItems} key={index}>
                                                            {t(listReason.reasonItems)}
                                                        </option>

                                                    )
                                                })
                                            }
                                        </select>
                                        <div className="text text-left text-secondary pt-3">
                                            {t(confirmMyNonDisclosurePresenter.textReason.name)}
                                        </div>
                                    </div>
                                    <div className="col-12 mt-5">
                                        <form className="w-100" onSubmit={handleSubmit(handleSend)}>
                                            <div className="form-group text-left">
                                                <div className="row">
                                                    {
                                                        stateReason.map((choiceIsChoose, index: number) => {    
                                                            const changeValue = choiceIsChoose.handleChangeReason                                                                                                                        
                                                            return (

                                                                <div className="col-12 pt-2" key={index}>
                                                                    <div className="d-flex">
                                                                        <div className=" w-100 d-flex justify-content-start">
                                                                            <label className="d-flex w-100">
                                                                                {t(choiceIsChoose.reasonItems)}
                                                                            </label >
                                                                        </div>
                                                                        <div className=" w-25 d-flex justify-content-end">
                                                                            <button type="button" className="button-remove-reason bg-danger"
                                                                                onClick={() => removeReason(choiceIsChoose.reasonItems)}
                                                                            >
                                                                                x
                                                                </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex text text-secondary">
                                                                        {t(confirmMyNonDisclosurePresenter.guidelineRejectReasonTopic)}
                                                                    </div>
                                                                    <Field
                                                                        name={choiceIsChoose.reasonItems}
                                                                        type="text"
                                                                        component={Textarea}
                                                                        widthTextArea={5}
                                                                        heightTextArea={5}
                                                                        styleTextError="text-danger"
                                                                        className="form-control"
                                                                        label={t(choiceIsChoose.reasonItems)}
                                                                        onChange={(event: any) => changeValue(event.target.value)}
                                                                    />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    {
                                                        stateReason.length !== 0 &&
                                                        <div className="col-12 text-left">
                                                            <Field
                                                                name={confirmMyNonDisclosurePresenter.buttonSend}
                                                                type="submit"
                                                                style="btn btn-primary w-50"
                                                                styleTextError="text-danger"
                                                                component={ButtonSubmit}
                                                                label={t(confirmMyNonDisclosurePresenter.buttonSend)}
                                                            />
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Fragment>

    )
}

export default withTranslation('common')(ConfirmMyNonDisclosureReject)