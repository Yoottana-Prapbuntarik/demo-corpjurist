import Head from 'next/head'
import { withTranslation } from '../../i18n'
import NavigationIncorporationContainer from '../../components/Navigation/NavigationIncorporationContainer'
import { KeyManager } from "../../manager/keyManager";
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import {
  getStatusGeneralInformaion
} from "../MainNonDisclosureComponent/MainNonDisclosureAction";


const MainLayoutMember = (props: any) => {
  const router = useRouter()
  const [isShowAlert, setisShowAlert] = useState(false)
  const confirmBtn = async () => {
    await setisShowAlert(false)
    Router.replace('/signin')
  }
  useEffect(() => {
    if (!localStorage.getItem('access-token')
      //ignore check token 
      && router.pathname !== "/nda_acceptance/[pk_id]/[party]"
      && router.pathname !== "/reject") {
      setisShowAlert(true)
    }
    else {
      getStatusGeneralInformaion()
    }
  }, [])
  return (

    <div className="page-wrapper pb-5">
      <SweetAlert
        custom
        showCloseButton
        confirmBtnText="Ok"
        show={isShowAlert}
        confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
        cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
        title={props.t(KeyManager.PleaseSignin)}
        onConfirm={() => confirmBtn()}
      >
      </SweetAlert>
      <Head>
        <title>{props.t('titleActivateAccount')}</title>
        <link href={props.styleTheme} rel="stylesheet" />
        <script src={props.themePlugin} />
        <script src={props.themeScript} />
      </Head>
      <NavigationIncorporationContainer />
      {props.children}
    </div>
  )
}

export default withTranslation('common')(MainLayoutMember)
