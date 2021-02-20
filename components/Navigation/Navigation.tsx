import Link from 'next/link'
import { NavigationItem, NavigationMemberItem } from './NavigationInterfaces'
import { withTranslation } from '../../i18n'
import useAuthenticated from "../../user/checkToken";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { i18n } from "../../i18n";
const Navigation = ({
  navigationPresenter,
  getUserProfile,
  navigationMemberPresenter,
  changeLanguage,
  t }: any) => {
  const dispatch = useDispatch()
  const [isAuthenticated] = useAuthenticated(false)
  useEffect(() => {
    if (isAuthenticated === true) {
      dispatch(getUserProfile)
    }
  }, [isAuthenticated])
  return (
    <header className="site-header">
      <div id="header-wrap">
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-between">
              {
                isAuthenticated === true ?
                  <Link href="/mainNonDisclosure">
                    <a className="navbar-brand logo text-dark h2 mb-0">
                      <span className="text-secondary">
                        Corp
                      </span>
                      <span className="text-primary font-weight-bold">Jurist</span>
                    </a>
                  </Link>
                  :
                  <Link href="/">
                    <a className="navbar-brand logo text-dark h2 mb-0">
                    <span className="text-secondary">
                        Corp
                      </span>
                    <span className="text-primary font-weight-bold">Jurist</span>
                    </a>
                  </Link>
              }
              <nav className="navbar navbar-expand-lg navbar-light ml-auto">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    {
                      navigationPresenter !== undefined
                        ? navigationPresenter.navigationItems.map(
                          (item: NavigationItem, index: number) => (
                            <li className="nav-item" key={`navigation-item-${index}`}>
                              <Link href={item.routePath}>
                                <a className="nav-link">
                                  {t(item.keyTitle)}
                                </a>
                              </Link>
                            </li>
                          )
                        )
                        :
                        isAuthenticated === false ?
                          <Link href={'/'}>
                            <li>
                            <a className="nav-link " >
                              {t('signin')}
                            </a>
                            </li>
                          </Link>
                          : navigationMemberPresenter.navigationMemberItem.map(
                            (item: NavigationMemberItem, index: number) => (
                              <li className="nav-item" key={`navigation-item-${index}`}>
                                <Link href={item.routePathMemberMenu}>
                                  <a className="nav-link">
                                    {navigationMemberPresenter.profile.first_name !== undefined && navigationMemberPresenter.profile.first_name !== '' &&
                                      navigationMemberPresenter.profile.last_name !== undefined && navigationMemberPresenter.profile.last_name !== ''
                                      ?
                                      `${navigationMemberPresenter.profile.first_name} ${navigationMemberPresenter.profile.last_name}` : ''}
                                  </a>
                                </Link>
                              </li>
                            )
                          )
                    }
                  </ul>
                </div>
                <button className="btn d-lg-block" onClick={() => dispatch(changeLanguage)}>
                 {'>'}&nbsp;{i18n.language === "en" ? "th" : "en"}
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default withTranslation('common')(Navigation)
