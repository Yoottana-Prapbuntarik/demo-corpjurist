import Head from 'next/head'
import Navigation from '../Navigation/NavigationContainer'
import Footer from '../Footer/FooterViewContainer'
import { withTranslation } from '../../i18n'
import useAuthenticated from '../../user/checkToken'
import Router from 'next/router'
import { routeToPageMainNonDisclosure } from '../../manager/routerManager'

const LandingLayout = (props: any) => {
  const [isAuthenticated] = useAuthenticated(false)

  if (isAuthenticated) {
    Router.replace(routeToPageMainNonDisclosure)
    return null
  } else {
    return (
      <div className="page-wrapper">
        <Head>
          <title>{props.t('titleActivateAccount')}</title>
          <meta http-equiv="cache-control" content="max-age=0" />
          <meta http-equiv="cache-control" content="no-cache" />
          <meta http-equiv="expires" content="0" />
          <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
          <meta http-equiv="pragma" content="no-cache" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <link href={props.styleTheme} rel="stylesheet" />
          <script src={props.themePlugin} />
          <script src={props.themeScript} />
        </Head>
        <Navigation />
        {props.children}
        <Footer />
      </div>
    )
  }
}

export default withTranslation('common')(LandingLayout)
