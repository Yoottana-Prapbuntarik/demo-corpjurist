import { withTranslation } from '../../i18n'

const Modal = ({ idModal, keyDialogTitle, keyDialogDetail, keyCloseTab, t }: any) => {
  return (
    <div className="modal fade" id={idModal} role="dialog">
      <div className="modal-dialog w-100 modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header d-flex">
            <div className="jusify-content-start pt-2">
              <h5>{t(keyDialogTitle)}</h5>
            </div>
            <div className="jusify-content-end">
              <button type="button" className="close" data-dismiss="modal">
                <svg className="bi bi-x" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="modal-body px-auto">
            {
              keyDialogDetail.map((detailList, index: number) => {
                return (
                  <div className="my-3" key={index}>
                    <span className="pr-1">&#10004;</span> {t(detailList.dialogDetail)}
                  </div>
                )
              })
            }
          </div>
          <button type="button" className="btn btn-primary w-50  my-5 mx-auto" data-dismiss="modal">{t(keyCloseTab)}</button>
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(Modal)
