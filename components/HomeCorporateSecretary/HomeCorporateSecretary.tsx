import { withTranslation } from '../../i18n'
import './styles.scss'
import { routeTocorporateSecretary } from "../../manager/routerManager";
import Link from "next/link"

const HomeCorporateSecretary = ({ homeCorporateSecretaryPresenter, t }: any) => {

    return (
        <div className="container-fluid padding-between-section mb-5">
            <div className="row">
                <div className="col-lg-4 col-12  padding-between-section">
                    <Link href={routeTocorporateSecretary} >
                        <a>
                            <div className="list-items-menu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="4rem" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                <br />
                                {t(homeCorporateSecretaryPresenter.generalInformation)}
                            </div>
                        </a>
                    </Link>
                </div>
                {/* <div className="col-lg-4 col-12  padding-between-section">
                    <Link href={`/shareholderDetail`} >
                        <a href="#">
                            <div className="list-items-menu">
                                <svg width="4rem" viewBox="0 0 16 16" className="bi bi-person-plus-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                <br />
                                {t(homeCorporateSecretaryPresenter.shareholderDetails)}
                            </div>
                        </a>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default withTranslation('common')(HomeCorporateSecretary)