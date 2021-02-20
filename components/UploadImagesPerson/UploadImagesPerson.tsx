import { withTranslation } from "../../i18n"
import "./styles.scss"
import WebCam from "../WebCam/WebCam";
import Loading from "../LoadingPage/Loading";
const UploadImagesPerson = ({
    handleSubmitUploadPerson,
    uploadImagesPersonPresenter,
    startLoadingUploadImagesPerson,
    t
}: any) => {
    return (
        <div className="col-12">
            {
                uploadImagesPersonPresenter.startLoadingUploadImagesPerson === true &&
                <Loading />
            }
            <div className="col-12 mt-5">
                {
                    uploadImagesPersonPresenter.startLoadingUploadImagesPerson === false &&
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-7 col-12 border-bottom-select p-0 pb-4 text-left">
                            {t('headerUploadPersonpicture')}
                        </div>
                        <div className="col-lg-8 col-12 p-0 text-left mt-3">
                            <WebCam submitUploadCapture={handleSubmitUploadPerson}
                                startLoadingUpload={startLoadingUploadImagesPerson}
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default withTranslation('common')(UploadImagesPerson)
