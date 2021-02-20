import { withTranslation } from "../../i18n"
import Link from "next/link";
import { routeToverifyInformation } from "../../manager/routerManager";
const MainVerifyEkyc = ({ mainVerifyEkycPresenter, t }: any) => {
    return (
        <div className="col-12">
            <div className="col-12 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 mt-5">
                            <img src={mainVerifyEkycPresenter.keyImagePath} alt="" className="w-75 border" />
                        </div>
                        <div className="col-lg-6 col-12 mt-5 justify-content-center d-flex align-items-center">
                            <Link href={routeToverifyInformation}>
                                <a className="btn btn-primary w-75">
                                    {t(mainVerifyEkycPresenter.confirmIdentity)}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation('common')(MainVerifyEkyc)