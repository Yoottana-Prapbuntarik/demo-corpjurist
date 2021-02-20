import { withTranslation } from '../../i18n'
import './styles.scss'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Loading from '../LoadingPage/Loading'
import SweetAlert from 'react-bootstrap-sweetalert'
import Router, { useRouter } from 'next/router'

const ConfirmMyNonDisclosure = ({
  confirmMyNonDisclosurePresenter,
  handldSubmitForm,
  verificationMyNonDistclosure,
  acknowledgeError,
  t
}: any) => {
  const acceptAcknowledgeError = (bool) => {
    acknowledgeError(bool)
  }
  const router = useRouter()
  const dispatch = useDispatch()

  const [isConfirmApprove, setConfirmApprove] = useState({
    statusConfirm: {
      isOpenDialog: false,
      approve: false
    }
  })

  const handleApprove = async (newStateApprove: boolean) => {

    if (newStateApprove === true) {
      setConfirmApprove({
        ...isConfirmApprove, statusConfirm: {
          isOpenDialog: true,
          approve: false
        }
      })
    }
  }

  const confirmSubmit = (): any => {
    setConfirmApprove({
      ...isConfirmApprove, statusConfirm: {
        isOpenDialog: false,
        approve: true
      }
    })
    handldSubmitForm({ Approve: true })
  }
  useEffect(() => {
    dispatch(verificationMyNonDistclosure)
  }, [])
  return (
    <Fragment>
      {
        confirmMyNonDisclosurePresenter.isShowPage === false && < Loading />
      }
      <div className={`container h-100 ${confirmMyNonDisclosurePresenter.isShowPage === false && 'd-none'}`}>
        <div className="row">
          <SweetAlert
            custom
            showCloseButton
            confirmBtnText={t('ok')}
            show={confirmMyNonDisclosurePresenter.isAcknowledgeError}
            confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
            cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
            title={t(confirmMyNonDisclosurePresenter.keyConfirmMyNonDisclosureNdaFalse)}
            onConfirm={() => acceptAcknowledgeError(false)}
          >

          </SweetAlert>
          <SweetAlert
            custom
            showCancel
            showCloseButton
            confirmBtnText={t('confirm')}
            cancelBtnText={t('cancel')}
            show={isConfirmApprove.statusConfirm.isOpenDialog}
            confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
            cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
            title={t(confirmMyNonDisclosurePresenter.titlePopupConfirmNDA)}
            onConfirm={() => confirmSubmit()}
            onCancel={() => setConfirmApprove({
              ...isConfirmApprove, statusConfirm: {
                isOpenDialog: false,
                approve: false
              }
            })}
          >
            {t(confirmMyNonDisclosurePresenter.choose)}
          </SweetAlert>

          {confirmMyNonDisclosurePresenter.isLoadingConfirmMyNonDisclosure === true && <Loading />}
          <div className="col-12">
            <div className="mt-5">
              <h4>{t(confirmMyNonDisclosurePresenter.headerConfirmMyNonDisclosure)}</h4>
            </div>
          </div>
          <div className="col-lg-8 col-12 padding-between-section">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe className="embed-responsive-item" src={confirmMyNonDisclosurePresenter.pdfReader}></iframe>
            </div>
          </div>
          <div className="col-lg-4 col-12 padding-between-section">
            <div className="d-flex jusify-content-center align-items-center h-100">
              <div className="container">
                <div className="row">
                  <div className="col-12 mt-3 mb-3">
                    <button className="btn bg-success text-white w-100" onClick={() => handleApprove(true)}>
                      {t(confirmMyNonDisclosurePresenter.textApprove)}
                    </button>
                  </div>
                  <div className="col-12 mt-3 mb-3">
                    <button className="btn bg-danger text-white w-100" onClick={() => Router.push(
                      {
                        pathname: '/reject',
                        query: {
                          user: router.query.party,
                          pk_id: router.query.pk_id,
                        }
                      }
                    )}>
                      {t(confirmMyNonDisclosurePresenter.textReject)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </Fragment>
  )
}

export default withTranslation('common')(ConfirmMyNonDisclosure)
