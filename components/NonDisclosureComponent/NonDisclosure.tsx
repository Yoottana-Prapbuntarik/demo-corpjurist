import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { NonDisclosureVariable } from "./NonDisclosureVariable";
import Textarea from '../FieldComponents/Textarea'
import { Field, FieldArray } from 'redux-form'
import CustomSelectField from '../FieldComponents/CustomSelectField'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import { useEffect } from 'react'
import './styles.scss'
import { useRouter } from 'next/router'
import Loading from '../LoadingPage/Loading'
import SweetAlert from 'react-bootstrap-sweetalert'
import countryEn from "../../country/countryEn.json";
import countryTH from "../../country/countryTH.json";
import ndaLanguageEN from "../../ndaLanguage/ndaLanguageEN.json";
import ndaLanguageTH from "../../ndaLanguage/ndaLanguageTH.json";
import { i18n } from "../../i18n";
import FieldArrayTwoTextField from "../FieldComponents/FieldArrayTwoTextField";
enum StatusCode {
  success = 200,
}

const NonDisclosure = ({
  nonDisclosurePresenter,
  handleSubmit,
  handldSubmitForm,
  handldUpdateSubmitForm,
  getNonDisclosureAPIClient,
  getNonDisclosureReasonAPIClient,
  acknowledgeError,
  clearFormisNotUpdate,
  getCompanyBasicInfo,
  counterWord,
  addSignatory,
  handleChangeSignatoryItems,
  removeSignatory,
  subScribeNameOfSignatory,
  t
}: any) => {
  const router = useRouter();

  const acceptAcknowledgeError = (bool) => {
    acknowledgeError(bool)
  }

  const getNondisclosureAgreement = async (id: any) => {
    await getNonDisclosureAPIClient(id)
    await getNonDisclosureReasonAPIClient(id)
  }

  const getGeneralInformation = async () => {
    await clearFormisNotUpdate()
    await getCompanyBasicInfo()
  }

  useEffect(() => {
    getGeneralInformation()
  }, [])

  useEffect(() => {
    if (router.query.idEditing !== undefined) {
      getNondisclosureAgreement(router.query.idEditing)
    }
  }, [router.query.idEditing])

  return (
    <div className="continaer padding-nda-session">
      <div className="row">
        <SweetAlert
          custom
          showCloseButton
          confirmBtnText={t('ok')}
          show={nonDisclosurePresenter.isAcknowledgeError}
          confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
          cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
          title={t(nonDisclosurePresenter.keyGenerateNdaFalse)}
          onConfirm={() => acceptAcknowledgeError(false)}
        >

        </SweetAlert>
        <div>
          {nonDisclosurePresenter.isLoadingGenerateNda === true && <Loading />}
          <form className="w-100"
            onSubmit={nonDisclosurePresenter.keyStatueAPI === StatusCode.success && router.query.idEditing !== undefined ? handleSubmit(handldUpdateSubmitForm) : handleSubmit(handldSubmitForm)}>
            <div className="row">
              <div className="col-xl-6  col-12">
                <div className="col-12 mb-2">
                  {t(nonDisclosurePresenter.addressNonDisclosureI)}
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-12 mt-2 mb-2">
                        <label className="label-form-nda">
                          {t(nonDisclosurePresenter.disclosureNameI.name)}
                        </label>
                        <Field
                          disabled={true}
                          name={nonDisclosurePresenter.disclosureNameI.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(nonDisclosurePresenter.disclosureNameI.name)}
                        />
                      </div>
                      <div className="col-xl-6 col-lg-12 col-12 mt-2 mb-2">
                        <label className="label-form-nda">
                          {t(nonDisclosurePresenter.addressI.name)}
                        </label>
                        <Field
                          disabled={true}
                          name={nonDisclosurePresenter.addressI.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(nonDisclosurePresenter.addressI.name)}
                        />
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-6">
                            <label>{t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}</label>
                          </div>
                          <div className="col-6 text-right">
                            <a className={nonDisclosurePresenter.addSignatory < NonDisclosureVariable.isHasTenValue ? "btn btn-primary text-white w-50" : "btn disabled-added-signatory w-50"}
                              onClick={() => addSignatory(nonDisclosurePresenter.authorisedItem[0] )}>
                              {t('add')}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-12 mt-2">
                        <table className="table">
                          <thead className="signatory-table-header">
                            <tr>
                              <th>{t('no')}</th>
                              <th>{t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}</th>
                              <th>{t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}</th>
                              <th>{t('action')}</th>
                            </tr>
                          </thead>
                          <FieldArray
                            name="signatoryAuthority"
                            dataApi={nonDisclosurePresenter.authorisedItem}
                            handleChangeSignatoryItems={handleChangeSignatoryItems}
                            subScribeNameOfSignatory={subScribeNameOfSignatory}
                            removeSignatory={removeSignatory}
                            nonDisclosurePresenter={nonDisclosurePresenter}
                            className={"form-control"}
                            labelStyle="label-form-nda"
                            component={FieldArrayTwoTextField}
                            rerenderOnEveryChange={true}
                          />
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="col-12  white-space">
                </div>
                <div className="col-12" >
                  <div className="form-group">
                    <div className="row">
                      <div className="col-12">
                        {t(nonDisclosurePresenter.addressNonDisclosureII)}
                      </div>
                      <div className="col-12" >
                        <div className="form-group">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-12 mt-2 mb-2">
                              <label className="label-form-nda">
                                {t(nonDisclosurePresenter.disclosureNameI.name)}
                              </label>
                              <Field
                                name={nonDisclosurePresenter.disclosureNameII.name}
                                type="text"
                                component={CustomeTextField}
                                styleTextError="text-danger"
                                className="form-control"
                                label={t(nonDisclosurePresenter.disclosureNameI.name)}
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-12 mt-2 mb-2">
                              <label className="label-form-nda">
                                {t(nonDisclosurePresenter.addressI.name)}
                              </label>
                              <Field
                                name={nonDisclosurePresenter.addressII.name}
                                type="text"
                                component={CustomeTextField}
                                styleTextError="text-danger"
                                className="form-control"
                                label={t(nonDisclosurePresenter.addressI.name)}
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-12 mt-2 mb-2">
                              <label className="label-form-nda">
                                {t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}
                              </label>
                              <Field
                                name={nonDisclosurePresenter.nameOfSigningCompanyII.name}
                                type="text"
                                component={CustomeTextField}
                                styleTextError="text-danger"
                                className="form-control"
                                label={t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}
                              />
                            </div>
                            <div className="col-xl-6 col-lg-12 col-12 mt-2 mb-2">
                              <label className="label-form-nda">
                                {t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}
                              </label>
                              <Field
                                name={nonDisclosurePresenter.titleAndCapacityOfSigningCompanyII.name}
                                type="text"
                                component={CustomeTextField}
                                styleTextError="text-danger"
                                className="form-control"
                                label={t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-2 mb-2">
                        <label className="label-form-nda">
                          {t(nonDisclosurePresenter.scopeOfDiscussion.name)} &nbsp; ( {nonDisclosurePresenter.counterWord} / 280)
                        </label>
                        <Field
                          name={nonDisclosurePresenter.scopeOfDiscussion.name}
                          type="text"
                          component={Textarea}
                          widthTextArea={10}
                          heightTextArea={10}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(nonDisclosurePresenter.scopeOfDiscussion.name)}
                          counterWord={counterWord}
                        />
                      </div>
                      <div className="col-lg-6 col-12 mb-2">
                        <label className="label-form-nda">{t(nonDisclosurePresenter.date.name)}</label>
                        <Field
                          name={nonDisclosurePresenter.date.name}
                          type="date"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(nonDisclosurePresenter.date.name)}
                        />
                      </div>
                      <div className="col-lg-6 col-12  mb-2">
                        <label className="label-form-nda">{t(nonDisclosurePresenter.endDate.name)}</label>
                        <Field
                          name={nonDisclosurePresenter.endDate.name}
                          type="date"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(nonDisclosurePresenter.endDate.name)}
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-12 mt-2 mb-2">
                        <Field
                          disabledState={false}
                          label={t(nonDisclosurePresenter.arbitrationJurisdiction.name)}
                          name={nonDisclosurePresenter.arbitrationJurisdiction.name}
                          style="form-control"
                          component={CustomSelectField}
                          labelStyle="label-form-nda"
                          styleTextError="text-danger"
                          dataAPI={i18n.language === 'en' ? countryEn : countryTH}
                        >
                        </Field>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-12 mt-2 mb-2">
                        <Field
                          label={t(nonDisclosurePresenter.choiceOfLaw.name)}
                          disabledState={false}
                          style="form-control"
                          name={nonDisclosurePresenter.choiceOfLaw.name}
                          component={CustomSelectField}
                          styleTextError="text-danger"
                          labelStyle="label-form-nda"
                          dataAPI={i18n.language === 'en' ? countryEn : countryTH}
                        >
                        </Field>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-12 mt-2 mb-2">
                        <Field
                          label={t(nonDisclosurePresenter.ndaLanguage.name)}
                          style="form-control"
                          name={nonDisclosurePresenter.ndaLanguage.name}
                          component={CustomSelectField}
                          disabledState={router.query.idEditing !== undefined ? true : false}
                          styleTextError="text-danger"
                          labelStyle="label-form-nda"
                          dataAPI={i18n.language === 'en' ? ndaLanguageEN : ndaLanguageTH}
                        >
                        </Field>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-12 mt-2 margin-between-session">
                        <label className="label-form-nda">
                          {t(nonDisclosurePresenter.periodOfSecret.name)}
                        </label>
                        <Field
                          name={nonDisclosurePresenter.periodOfSecret.name}
                          type="number"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(nonDisclosurePresenter.periodOfSecret.name)}
                          min={1}
                        />
                      </div>
                      <div className="col-12 mt-5">
                        <div className="d-flex justify-content-end mb-5">
                          <Field
                            name={nonDisclosurePresenter.buttonSubmit}
                            type="submit"
                            style="btn btn-primary w-50"
                            styleTextError="text-danger"
                            component={ButtonSubmit}
                            label={t(nonDisclosurePresenter.buttonSubmit)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div >
      </div >
    </div >
  )
}

export default withTranslation('common')(NonDisclosure)
