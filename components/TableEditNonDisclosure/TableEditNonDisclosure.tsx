import { withTranslation } from '../../i18n'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useState, useEffect } from 'react'
import './styles.scss'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import Loading from '../LoadingPage/Loading'
import { manageFinallize } from './manageCaseFinalize/finalize'
// import { dateToString } from './manageCaseFinalize/dateToString'

enum DefineIndexArray {
  IndexOne = 0,
  IndexTwo = 1
}

const TableEditNonDisclosure = ({
  tableEditNonDisclosurePresenter,
  getNonDisclosure,
  deleteNonDisclosure,
  getNonDisclosureForEdit,
  acknowledgeError,
  finalizeNonDisclosure,
  archiveNonDisclosure,
  t
}: any) => {
  const Dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState('')

  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      Dispatch(getNonDisclosure)
    } else {
      alert('Your are not signin !')
      Router.push('/signin')
    }
  }, [])

  const handleClickDeleteButton = async (bool: boolean, idForDelete: string) => {
    setIsOpen(bool)
    setId(idForDelete)
    if (isOpen === true) {
      await deleteNonDisclosure(idForDelete)
      await handleClickCloseDeleteButton()
    }
  }

  const handleClickCloseDeleteButton = () => {
    setIsOpen(false)
  }

  const acceptAcknowledgeError = (bool) => {
    acknowledgeError(bool)
  }

  const isHiddenDisplay = tableEditNonDisclosurePresenter.dataGetNonDisclosure.length > 0 &&
    tableEditNonDisclosurePresenter.dataGetNonDisclosure[DefineIndexArray.IndexOne].inprogress.length === 0 &&
    tableEditNonDisclosurePresenter.dataGetNonDisclosure[DefineIndexArray.IndexTwo].effective_agreement.length === 0;

  const isDisplayInprogress = tableEditNonDisclosurePresenter.dataGetNonDisclosure.length > 0 &&
    tableEditNonDisclosurePresenter.dataGetNonDisclosure[DefineIndexArray.IndexOne].inprogress.length > 0;

  const isDisplayEffective = tableEditNonDisclosurePresenter.dataGetNonDisclosure.length > 0 &&
    tableEditNonDisclosurePresenter.dataGetNonDisclosure[DefineIndexArray.IndexTwo].effective_agreement.length > 0

  return (
    <div className="row wrapper-content">
      {tableEditNonDisclosurePresenter.isLoadingTableEditAction === true && <Loading />}
      <SweetAlert
        custom
        showCancel
        showCloseButton
        confirmBtnText="Yes"
        cancelBtnText="No"
        show={isOpen}
        confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
        cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
        title="Confirm to Delete"
        onConfirm={() => handleClickDeleteButton(true, id)}
        onCancel={() => handleClickCloseDeleteButton()}
      >
        Choose this one choice
      </SweetAlert>

      <SweetAlert
        custom
        showCloseButton
        confirmBtnText="Ok"
        show={tableEditNonDisclosurePresenter.isAcknowledgeError}
        confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
        cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
        title={t(tableEditNonDisclosurePresenter.keyTableEditMessage)}
        onConfirm={() => acceptAcknowledgeError(false)}
      >
      </SweetAlert>

      <div className="col-12 p-5">
        <div className={`${tableEditNonDisclosurePresenter.isLoadingTableEditAction === true ? 'd-none' : 'container'}`}>
          <div className="row">
            <div className="col-12 w-100">
              <div className={`${isHiddenDisplay ? 'd-flex flex-column no-data align-items-center justify-content-center' : 'd-none'}`}>
                <div>
                  <img className="w-50" src="/assets/images/no-data.jpg" alt="no data" />
                </div>
              </div>
            </div>
            <div className={`col-12 ${isHiddenDisplay ? 'd-none' : ''}`}>
              <div className="row">
                <div className="col-12">
                  <h3 className=" font-weight-bold text-left">
                    {t(tableEditNonDisclosurePresenter.headerInProgress)}
                  </h3>
                  {isDisplayInprogress ?
                    <div className="table-responsive-in-mobile px-5">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>{t(tableEditNonDisclosurePresenter.tableHeaderid)}</th>
                            <th>{t(tableEditNonDisclosurePresenter.tableHeaderName)}</th>
                            <th>{t(tableEditNonDisclosurePresenter.tableHeaderEmailPartyII)}</th>
                            <th></th>
                            <th>{t(tableEditNonDisclosurePresenter.tableHeaderAction)}</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            tableEditNonDisclosurePresenter.dataGetNonDisclosure[DefineIndexArray.IndexOne].inprogress.map((listDataGetNonDisclosure, index: number) => {
                              const setNewIndex = index + 1
                              let isStatus: any;
                              let StatusEmailParty = null;
                              let StatusEmailApproval = null;
                              try {
                                if (listDataGetNonDisclosure.nda_email !== null) {
                                  StatusEmailParty = listDataGetNonDisclosure.nda_email.status === null ? null : listDataGetNonDisclosure.nda_email.status
                                }
                                StatusEmailApproval = listDataGetNonDisclosure.nda_approval === null ? null : listDataGetNonDisclosure.nda_approval.status
                                tableEditNonDisclosurePresenter.dataGetNonDisclosure === null ? null : null
                                isStatus = manageFinallize(StatusEmailApproval, StatusEmailParty)

                              } catch (error) { return error }
                              return (
                                <tr key={index + Math.random()}>
                                  <td>{setNewIndex}</td>
                                  <td>
                                    NDA {setNewIndex}
                                  </td>
                                  <td>
                                    <button className={`text-white btn-table-status 
                                 ${isStatus.status === "Approve" ? 'bg-success' :
                                        isStatus.status === "Waiting" ? 'bg-orange-waiting' :
                                          'bg-red-reject'
                                      }`
                                    }

                                      disabled={true} >
                                      {
                                        t(isStatus.text)
                                      }
                                    </button>
                                  </td>
                                  <td>
                                    {
                                      listDataGetNonDisclosure.nda_email !== null ?
                                        <button className={`${isStatus.status === "Approve" ? 'bg-secondary' : 'bg-warning'} text-white btn-table`}
                                          disabled={isStatus.status === "Approve" && true}
                                          onClick={() => getNonDisclosureForEdit(listDataGetNonDisclosure.id, listDataGetNonDisclosure.nda_approval)}>
                                          {t(tableEditNonDisclosurePresenter.btnTextEdit)}
                                        </button>
                                        :
                                        <button className={`${isStatus.status === "Approve" ? 'bg-secondary' : 'bg-warning'} text-white btn-table`}
                                          disabled={isStatus.status === "Approve" && true}
                                          onClick={() => Router.replace({ pathname: '/myNonDisclosureAgreement', query: { idEditing: listDataGetNonDisclosure.id } })
                                          }>
                                          {t(tableEditNonDisclosurePresenter.addEmail)}
                                        </button>
                                    }
                                  </td>
                                  <td>
                                    <button className="bg-danger text-white btn-table"
                                      onClick={() => handleClickDeleteButton(true, listDataGetNonDisclosure.id)}>
                                      {t(tableEditNonDisclosurePresenter.btnTextDelete)}
                                    </button>
                                  </td>
                                  <td>
                                    <button className={`text-white btn-table
                                      ${isStatus.status === "Approve" ? 'bg-violet' : 'bg-secondary'}`}
                                      onClick={() => finalizeNonDisclosure(listDataGetNonDisclosure.finalize.id)}
                                      disabled={
                                        isStatus.status === "Approve" ? false : true
                                      }
                                    >
                                      {t(tableEditNonDisclosurePresenter.btnFinally)}
                                    </button>

                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                    :
                    <div className="d-felx justify-content-center w-100 font-weight-bold">
                      {t('notfound')}
                    </div>
                  }
                </div>

                {/* Effective Agreements */}
                <div className="col-12 pt-3">
                  <h3 className=" font-weight-bold text-left">
                    {t(tableEditNonDisclosurePresenter.headerEffective)}
                  </h3>
                  {isDisplayEffective ?
                    <div className="table-responsive-in-mobile px-5">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>{t(tableEditNonDisclosurePresenter.tableHeaderid)}</th>
                            <th>{t(tableEditNonDisclosurePresenter.tableHeaderName)}</th>
                            {/* <th></th> */}
                            <th>{t(tableEditNonDisclosurePresenter.tableHeaderAction)}</th>
                            {/* <th></th> */}
                            <th>{t(tableEditNonDisclosurePresenter.startDateEffective)}</th>
                            <th>{t(tableEditNonDisclosurePresenter.endDateEffective)}</th>
                            <th></th>
                            <th></th>
                            {/* <th>{t(tableEditNonDisclosurePresenter.alert)}</th> */}
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            tableEditNonDisclosurePresenter.dataGetNonDisclosure[DefineIndexArray.IndexTwo].effective_agreement.map((listDataGetNonDisclosure, index: number) => {
                              const setNewIndex = index + 1
                              return (
                                <tr key={setNewIndex + Math.random()}>
                                  <td>{setNewIndex}</td>
                                  <td>
                                    NDA {setNewIndex}
                                  </td>
                                  <td>
                                    <div className="d-flex justify-content-between flex-wrap">
                                      <label htmlFor="archive" className="btn-table bg-danger text-white mx-auto text-center" >
                                        {t(tableEditNonDisclosurePresenter.btnArchive)}
                                        <input type="file" className="d-none" id="archive"
                                          onChange={(event) => archiveNonDisclosure(listDataGetNonDisclosure.nda_email.NDADetail, event.target.files)}
                                        />
                                      </label>
                                      <br />
                                      {/* </td> */}
                                      {/* <td> */}
                                      <button className={`text-white btn-table mx-auto bg-violet`}
                                        onClick={() => window.location.assign(`${listDataGetNonDisclosure.download_link_pdf}`)}
                                      >
                                        {t(tableEditNonDisclosurePresenter.btnDownload)}
                                      </button>
                                    </div>
                                  </td>
                                  {/* <td>
                                      <button className="bg-red-reject text-white btn-table">
                                        {t(tableEditNonDisclosurePresenter.btnTerminate)}
                                      </button>
                                    </td> */}
                                  <td>
                                    {listDataGetNonDisclosure.date_of_agreement}
                                  </td>
                                  <td>
                                    {listDataGetNonDisclosure.end_date}
                                  </td>
                                  <td></td>
                                  <td></td>
                                  {/* <td>
                                    <span className="p-0">
                                    {dateToString(listDataGetNonDisclosure.date_of_agreement, listDataGetNonDisclosure.end_date)}
                                    </span>
                                  </td> */}
                                  <td></td>
                                  <td></td>
                                </tr>
                              )

                            })
                          }
                        </tbody>
                      </table>
                    </div> :
                    <div className="d-felx justify-content-center w-100 font-weight-bold">
                      {t('notfound')}
                    </div>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(TableEditNonDisclosure)
