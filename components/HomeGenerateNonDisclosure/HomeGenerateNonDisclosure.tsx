import { withTranslation } from "../../i18n";
import './styles.scss';
import Link from 'next/link'
import { routeToPageNonDisclosure } from "../../manager/routerManager";

const HomeGenerateNonDisclosure = ({ homeGenerateNonDisclosurePresenter, t }: any) => {
    
    return (
        <div className="container-fluid padding-between-section mb-5">
            <div className="row">
                <div className="col-lg-4 col-12  padding-between-section">
                    <Link href={routeToPageNonDisclosure} >
                        <div className="list-items-menu">
                            <svg width="4rem" viewBox="0 0 16 16" className="bi bi-shield-fill-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 0 0-2.772.815 1.454 1.454 0 0 0-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 0 0 2.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 0 0 2.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 0 0-1.003-1.184 61.09 61.09 0 0 0-2.772-.815C9.77.749 8.663.5 8 .5zm2.854 6.354a.5.5 0 0 0-.708-.708L7.5 8.793 6.354 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                            </svg>
                            <br />
                            {t(homeGenerateNonDisclosurePresenter.nonDisclosureAgreement)}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withTranslation('common')(HomeGenerateNonDisclosure)