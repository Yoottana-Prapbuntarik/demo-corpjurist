import { useRouter } from 'next/router'
import { Fragment } from 'react';
import { withTranslation } from "../../i18n";
import { KeyManager } from "../../manager/keyManagerReason";
let obj = {}
enum ManagageArray {
  firstArray = 0,
  secondArray = 1
}

const TableOfReadson = ({ nonDisclosurePresenter, t }: any) => {
  const Router = useRouter()
  obj = nonDisclosurePresenter.getReasonApi[ManagageArray.firstArray]
  let result = obj && Object.keys(obj).map((items) => [String(items), obj[items]]);
  let statusApprove = Router.query.statusApproval
  return (
    <div className={nonDisclosurePresenter.hideRejectReason === true ? "d-none" : ""}>
      {
        nonDisclosurePresenter.getApi.nda_email && ((nonDisclosurePresenter.getApi.nda_email.status === 'Reject'
          || statusApprove === "Reject")
          && Router.asPath !== '/nonDisclosure'
          && Router.asPath !== '/corporateSecretary'
          ) ? (
            <Fragment>

              <p className="text-left text-dark py-3">
                {t('headerReason')}
            </p>
              <div className="w-100">
                <div className="container my-3">
                  < table className="table h-100">
                    <thead>
                      <tr>
                        <th>{t('topics')}</th>
                        <th>{t('detail')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        result && result.map((reason, index: number) => {
                          let isTrue = reason[ManagageArray.secondArray] !== ''
                            && reason[ManagageArray.firstArray] !== 'id'
                            && reason[ManagageArray.firstArray] !== 'NDADetail'
                            && reason[ManagageArray.firstArray] !== 'date_of_agreement'
                          return (
                            <tr key={index + Math.random()} className={isTrue ? '' : 'd-none'}>
                              <td>
                                {t(KeyManager[reason[ManagageArray.firstArray]])}
                              </td>
                              <td>
                                {reason[ManagageArray.secondArray]}
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                  {/* } */}
                </div>
              </div>
            </Fragment>) : ''
      }
    </div>
  )
}

export default withTranslation('common')(TableOfReadson)