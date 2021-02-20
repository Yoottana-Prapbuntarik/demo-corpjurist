import Head from 'next/head'
import Navigation from '../Navigation/NavigationContainer'
import NavigationLogin from '../Navigation/NavigationIncorporationContainer'
import Footer from '../Footer/FooterViewContainer'
import useAuthenticated from '../../user/checkToken'
import { withTranslation } from '../../i18n'

const LandingLayoutSuccess = (props: any) => {
  const [isAuthenticated] = useAuthenticated(false)

  return (
    <div className="page-wrapper">
      <Head>
        <link href={props.styleTheme} rel="stylesheet" />
        <script src={props.themePlugin} />
        <script src={props.themeScript} />
      </Head>
      {
        isAuthenticated === true ?
          <NavigationLogin />
          :
          <Navigation />
      }
      {props.children}
      <Footer />
    </div>
  )
}

export default withTranslation('common')(LandingLayoutSuccess)