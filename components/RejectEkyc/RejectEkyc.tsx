import { withTranslation } from "../../i18n"
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { Field } from "redux-form";
import ButtonSubmit from "../FieldComponents/ButtonSubmit";
import WebCamEdit from "../WebCam/WebCamEdit";
import WebCamVideoEdit from "../WebCam/WebCamVideoEdit";
import Loading from "../LoadingPage/Loading";
import "./styles.scss";
import { useEffect } from "react";
const RejectEkyc = ({
    getEkycAction,
    rejectVerifyInformationPresenter,
    handleChangeCitizenPicture,
    handleChangePersonPicture,
    handleSubmitRejectVerifyInofrmation,
    handleChangePersonVideo,
    getEkycReasonAction,
    handleSubmit, t }: any) => {

    useEffect(() => {
        getEkycAction();
    }, [])

    useEffect(() => {
        if (rejectVerifyInformationPresenter.dataEkyc !== "") {
            getEkycReasonAction(rejectVerifyInformationPresenter.dataEkyc.id)
        }
    }, [rejectVerifyInformationPresenter.dataEkyc])
    const handleSubmitRejectForm = async (event: any) => {
        let media = {
            idEkyc: rejectVerifyInformationPresenter.dataEkyc.id,
            citizenPicture: rejectVerifyInformationPresenter.citizenPicture,
            personPicture: rejectVerifyInformationPresenter.personPicture,
            personVideo: rejectVerifyInformationPresenter.personVideo
        }

        await handleSubmitRejectVerifyInofrmation(event, media)
    }

    return (
        <div className={"col-12"}>
            < div className="col-12 mt-5" >
                {
                    rejectVerifyInformationPresenter.rejectVerifyLoading === true ?
                        <Loading />
                        : <div className="container">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <form onSubmit={handleSubmit(handleSubmitRejectForm)}>
                                        <div className="row">
                                            <div className="col-12 mt-2 mb-2 pb-4  text-left">
                                                {t('Reject Confirm Identity')}
                                            </div>
                                            <div className="col-12">
                                                <table className="table table-responsive-md">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">{t('numberOfRejectEkyc')}</th>
                                                            <th></th>
                                                            <th scope="col">{t('titleOfRejectEkyc')}</th>
                                                            <th></th>
                                                            <th scope="col">{t('reasonOfRejectEkyc')}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            rejectVerifyInformationPresenter.ekycReasonList.map((item, index: number) => {
                                                                return (

                                                                    <tr key={index}>
                                                                        <th className="px-5" scope="row">{index + 1}</th>
                                                                        <td></td>
                                                                        <td>{t(item.item[0])}</td>
                                                                        <td></td>
                                                                        <td>{item.item[1]}</td>

                                                                    </tr>
                                                                )
                                                            })
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-12 mt-2 mb-2 pb-4 border-bottom-color text-left mt-3">
                                                {t('editEkycinformation')}

                                            </div>
                                            
                                            {
                                                rejectVerifyInformationPresenter.ekycReason.tel !== undefined && rejectVerifyInformationPresenter.ekycReason.tel !== '' &&

                                                <div className="col-12 mt-2 mb-2">

                                                    <label className="w-100 text-left">
                                                        {t(rejectVerifyInformationPresenter.verifyTelephonePlaceholder)}
                                                    </label>
                                                    <Field
                                                        disabled={false}
                                                        name={rejectVerifyInformationPresenter.rejectVerifyTelephone.verifyTelephone}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(rejectVerifyInformationPresenter.verifyTelephonePlaceholder)}
                                                    />
                                                </div>
                                            }

                                            {
                                                rejectVerifyInformationPresenter.ekycReason.first_name !== undefined && rejectVerifyInformationPresenter.ekycReason.tel !== '' &&

                                                <div className="col-12 mt-2 mb-2">
                                                    <label className="w-100 text-left">
                                                        {t(rejectVerifyInformationPresenter.verifyFirstNamePlaceholder)}
                                                    </label>
                                                    <Field
                                                        disabled={false}
                                                        name={rejectVerifyInformationPresenter.rejectVerifyFirstName.verifyFirstName}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(rejectVerifyInformationPresenter.verifyFirstNamePlaceholder)}
                                                    />
                                                </div>
                                            }

                                            {
                                                rejectVerifyInformationPresenter.ekycReason.last_name !== undefined && rejectVerifyInformationPresenter.ekycReason.tel !== '' &&

                                                <div className="col-12 mt-2 mb-2">

                                                    <label className="w-100 text-left">
                                                        {t(rejectVerifyInformationPresenter.verifyLastNamePlaceholder)}
                                                    </label>
                                                    <Field
                                                        disabled={false}
                                                        name={rejectVerifyInformationPresenter.rejectVerifyLastName.verifyLastName}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(rejectVerifyInformationPresenter.verifyLastNamePlaceholder)}
                                                    />
                                                </div>
                                            }

                                            {
                                                rejectVerifyInformationPresenter.ekycReason.id_card !== undefined && rejectVerifyInformationPresenter.ekycReason.id_card !== '' &&

                                                <div className="col-12 mt-2 mb-2">
                                                    <label className="w-100 text-left">
                                                        {t(rejectVerifyInformationPresenter.verifyCitizenIdPlaceholder)}
                                                    </label>
                                                    <Field
                                                        disabled={false}
                                                        name={rejectVerifyInformationPresenter.rejectVerifyCitizenId.verifyCitizenId}
                                                        type="text"
                                                        component={CustomeTextField}
                                                        styleTextError="text-danger"
                                                        className="form-control"
                                                        label={t(rejectVerifyInformationPresenter.verifyCitizenIdPlaceholder)}
                                                    />
                                                </div>
                                            }
                                            {

                                                rejectVerifyInformationPresenter.ekycReason.id_card_uri !== undefined && rejectVerifyInformationPresenter.ekycReason.id_card_uri !== '' &&

                                                <div className="col-12 text-left">
                                                    <label className="border-bottom-color w-100 pb-3 my-4">
                                                        {t('editEkycCitizenpicture')}
                                                    </label>
                                                    <WebCamEdit submitUploadCapture={handleChangeCitizenPicture} />
                                                </div>
                                            }
                                            {
                                                rejectVerifyInformationPresenter.ekycReason.person_image_uri !== undefined && rejectVerifyInformationPresenter.ekycReason.person_image_uri !== '' &&

                                                <div className="col-12 text-left">
                                                    <label className="border-bottom-color w-100 pb-3 my-4">
                                                        {t('editEkycPersonpicture')}
                                                    </label>

                                                    <WebCamEdit submitUploadCapture={handleChangePersonPicture} />
                                                </div>
                                            }
                                            {

                                                rejectVerifyInformationPresenter.ekycReason.verify_video_uri !== undefined && rejectVerifyInformationPresenter.ekycReason.verify_video_uri !== '' &&
                                                <div className="col-12 text-left">
                                                    <label className="border-bottom-color w-100 pb-3 my-4">
                                                        {t('editEkycPersonVideo')}
                                                    </label>
                                                    <WebCamVideoEdit submitUploadCapture={handleChangePersonVideo} />
                                                </div>
                                            }

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
                }
            </div >
        </div >
    )
}

export default withTranslation('common')(RejectEkyc)