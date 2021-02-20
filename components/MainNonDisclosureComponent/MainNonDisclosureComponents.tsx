import { withTranslation } from '../../i18n'
import './styles.scss'
import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import {
    routeToPageMainNonDisclosure, routeToHomeNDA,
    routeTocorporateSecretary,
    routeToPageTableEditNonDisclosure,
    routeToSignin,
    routeToHomeCorporateSecretary,
} from "../../manager/routerManager";

import useAuthenticated from "../../user/checkToken";
import Loading from '../../components/LoadingPage/Loading'

const MainNonDisclosureComponents = ({ mainNonDisclosurePresenter, checkGeneralInformaion, t }: any) => {
    let Dispatch = useDispatch()
    const [isAuthenticated] = useAuthenticated(false)
    useEffect(() => {
        Dispatch(checkGeneralInformaion)
        if (localStorage.getItem('pdf_view_link')) {
            return;
        }
    }, [])

    const checkGeneraldInformation = () => {
        if (mainNonDisclosurePresenter.checkStatusGeneralInformation === 400) {
            Router.replace(routeTocorporateSecretary)
        } else if (mainNonDisclosurePresenter.checkStatusGeneralInformation === 200) {
            Router.replace(routeToPageMainNonDisclosure)
        } else if (mainNonDisclosurePresenter.checkStatusGeneralInformation === 401) {
            localStorage.removeItem('access-token')
            Router.replace(routeToSignin)
        }
    }

    useEffect(() => { checkGeneraldInformation() }, [mainNonDisclosurePresenter.checkStatusGeneralInformation])

    return (
        <div>
            {isAuthenticated === false || mainNonDisclosurePresenter.checkStatusGeneralInformation === '' && < Loading />}
            <div className={isAuthenticated === false || mainNonDisclosurePresenter.checkStatusGeneralInformation !== 200 ? "d-none" : "container-fluid padding-between-section"}>
                <div className="row">
                    <div className="col-lg-4 col-12  padding-between-section">
                        <Link href={routeToHomeNDA} >
                            <a>
                                <div className="list-items-menu">
                                    <svg width="4rem" viewBox="0 0 16 16" className="bi bi-brush" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.247-.013-.574.05-.88.479a11.01 11.01 0 0 0-.5.777l-.104.177c-.107.181-.213.362-.32.528-.206.317-.438.61-.76.861a7.127 7.127 0 0 0 2.657-.12c.559-.139.843-.569.993-1.06a3.121 3.121 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.591 1.927-5.566 4.66-7.302 6.792-.442.543-.796 1.243-1.042 1.826a11.507 11.507 0 0 0-.276.721l.575.575zm-4.973 3.04l.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043l.002.001h-.002z" />
                                    </svg>
                                    <br />
                                    {t(mainNonDisclosurePresenter.comercial)}
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-12  padding-between-section">
                        <Link href={routeToHomeCorporateSecretary}>
                            <a>
                                <div className="list-items-menu">
                                    <svg width="4rem" viewBox="0 0 16 16" className="bi bi-building" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                                    </svg>
                                    <br />
                                    {t(mainNonDisclosurePresenter.corporat)}
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* <div className="col-lg-4 col-12  padding-between-section">
                    <Link>
                        <a>
                            <div className="list-items-menu">
                                <svg width="4rem" viewBox="0 0 16 16" className="bi bi-cash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z" />
                                    <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                                </svg>
                                <br />
                                {t(mainNonDisclosurePresenter.employment)}
                            </div>
                        </a>
                    </Link>
                </div> */}
                    {/* <div className="col-lg-4 col-12  padding-between-section">
                    <Link>
                        <a>
                            <div className="list-items-menu">
                                <svg width="4rem" viewBox="0 0 16 16" className="bi bi-bookmark-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                    <path fillRule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                                <br />
                                {t(mainNonDisclosurePresenter.intellectual)}
                            </div>
                        </a>
                    </Link>
                </div> */}
                    {/* <div className="col-lg-4 col-12  padding-between-section">
                    <Link href={routeToHomeCorporateSecretary}>
                        <a>
                            <div className="list-items-menu">
                                <svg width="4rem" viewBox="0 0 16 16" className="bi bi-building" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                                </svg>
                                <br />
                                {t(mainNonDisclosurePresenter.myCompany)}
                            </div>
                        </a>
                    </Link>
                </div> */}
                    <div className="col-lg-4 col-12  padding-between-section">
                        <Link href={routeToPageTableEditNonDisclosure}>
                            <a>
                                <div className="list-items-menu">
                                    <svg width="4rem" viewBox="0 0 16 16" className="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                                        <path fillRule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                    </svg>
                                    <br />
                                    {t(mainNonDisclosurePresenter.notification)}
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation('common')(MainNonDisclosureComponents)