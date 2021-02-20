import { withTranslation } from '../../i18n'
import TableReason from "../NonDisclosureComponent/ContainerTableReason";
import './styles.scss'
import { useRouter } from "next/router";

const NonDisclosureManager = ({ nonDisclosurePresenter, t, children }: any) => {
  const Router = useRouter()
  return (
    <div className="container-fluid px-4">
      {
        Router.asPath === "/nonDisclosure" ?
          <h1 className="text-center">{t(nonDisclosurePresenter.keyDisclosureTitle)}</h1>
          : Router.asPath === "/corporateSecretary" ? <h1 className="text-center">{t(nonDisclosurePresenter.keyCorporateSecretaryTitle)}</h1>
            : Router.asPath === "/shareholderDetail" ? <h1 className="text-center">{t(nonDisclosurePresenter.keyShareholderDetailsTitle)}</h1>
              : null
      }
      <div className="row mt-4">
          <div className="col-12">
            <TableReason />
          </div>
      </div>
      <div className="row shadow-sm">
        <div className="col-12">
          {children}
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(NonDisclosureManager)
