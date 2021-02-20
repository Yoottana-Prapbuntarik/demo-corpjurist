import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { Field } from 'redux-form'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import { useEffect, useState } from 'react'
import './styles.scss'
import Loading from '../LoadingPage/Loading'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useRouter } from 'next/router'
const NonDisclosure = ({
  handleSubmit,
  myNonDisclosurePresenter,
  // handleChangeApproval,
  handleChangePartyII,
  handldSubmitForm,
  acknowledgeError,
  getNonDisclosureReasonAPIClient,
  clearFormisNotEmailPartyII,
  t
}: any) => {
  const router = useRouter()

  const acceptAcknowledgeError = (bool) => {
    acknowledgeError(bool)
  }

  const [pdf, setPdf] = useState('')
  useEffect(() => {
    if (router.query.idEditing === undefined) {
    }
    clearFormisNotEmailPartyII()
    if (localStorage.getItem('pdf_view_link')) {
      getNonDisclosureReasonAPIClient(router.query.idEditing)
      const pdfLink = localStorage.getItem('pdf_view_link')
      setPdf(pdfLink)
    }
  }, [])
  return (
    <div className="container">
      <h3 className="padding-between-section font-weight-bold">
        {t(myNonDisclosurePresenter.headerMyNonDisclosure)}
      </h3>
      <div className="row">
        {myNonDisclosurePresenter.isLoadingMyNonDisclosure === true && <Loading />}

        <SweetAlert
          custom
          showCloseButton
          confirmBtnText={t('ok')}
          show={myNonDisclosurePresenter.isAcknowledgeError}
          confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
          cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
          title={t(myNonDisclosurePresenter.keyMyNonDisclosureFalse)}
          onConfirm={() => acceptAcknowledgeError(false)}
        >
        </SweetAlert>

        <div className="col-lg-8 col-12 padding-between-section">
          <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src={pdf}></iframe>
          </div>
        </div>
        <div className="col-lg-4 col-12 padding-between-section">
          <div className="d-flex jusify-content-center">
            <form className="w-100" onSubmit={handleSubmit(handldSubmitForm)}>
              <div className="form-group text-left">
                <div className="row">
                  {/* <div className="col-12 py-2">
                    <label>
                      {t(myNonDisclosurePresenter.partyApproval.name)}
                    </label>
                    <Field
                      name={myNonDisclosurePresenter.partyApproval.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(myNonDisclosurePresenter.partyII.placeholder)}
                      currentValue={myNonDisclosurePresenter.partyII.valueEmailPartyApproval}
                      onChange={(event: any) => handleChangeApproval(event.target.value)}
                    />
                  </div> */}

                  <div className="col-12 py-2">
                    <label>
                      {t(myNonDisclosurePresenter.partyII.name)}
                    </label>
                    <Field
                      name={myNonDisclosurePresenter.partyII.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(myNonDisclosurePresenter.partyII.placeholder)}
                      currentValue={myNonDisclosurePresenter.partyII.valueEmailParty}
                      onChange={(event: any) => handleChangePartyII(event.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-right my-3 pt-4 pr-5">
                    <Field
                      name={myNonDisclosurePresenter.buttonSendData}
                      type="submit"
                      style="btn btn-primary w-50"
                      styleTextError="text-danger"
                      component={ButtonSubmit}
                      label={t(myNonDisclosurePresenter.buttonSendData)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default withTranslation('common')(NonDisclosure)
