import { withTranslation } from "../../i18n"
import "./styles.scss"
import WebCamVideo from "../WebCam/WebCamVideo";
import Loading from "../LoadingPage/Loading";
const UploadVerifyVideo = ({
    handleSubmitUploadVideo,
    uploadVerifyVideoPresenter,
    t
}: any) => {
    return (
        <div className="col-12">
            {
                uploadVerifyVideoPresenter.startLoadingUploadVerifyVideo === true &&
                <Loading />
            }
            <div className="col-12 py-5">
                {
                    uploadVerifyVideoPresenter.startLoadingUploadVerifyVideo === false && uploadVerifyVideoPresenter.fileImagesVideoUpload === '' &&
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-7 col-12 border-bottom-select p-0 py-4 text-left">
                            {t('headerUplaodVideo')}
                        </div>
                        <div className="col-lg-8 col-12 p-0 text-left py-5">
                            <WebCamVideo submitUploadCapture={handleSubmitUploadVideo}
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default withTranslation('common')(UploadVerifyVideo)
