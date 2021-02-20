import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import SelectField from '../FieldComponents/SelectField'
import CheckBox from '../FieldComponents/CheckBox'
import { Field } from 'redux-form'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import './styles.scss'
import {
  OverlayTrigger,
  Popover
} from 'react-bootstrap'

const ShareHolderManager = ({
  idModal,
  handleSubmit,
  shareHolderManagerPresenter,
  t
}: any) => {
  const popover = (
    <Popover id="popover-share-holder">
      <Popover.Title as="h3">{t(shareHolderManagerPresenter.keyHeaderPopoverShareHolder)}</Popover.Title>
      <Popover.Content>
        <span className="pr-1"><span>&#10004;</span>
        </span>{t(shareHolderManagerPresenter.keyPopoverShareHolderI)} <br />
        <span className="pr-1"><span>&#10004;</span>
        </span>{t(shareHolderManagerPresenter.keyPopoverShareHolderII)}
      </Popover.Content>
    </Popover>
  )

  return (
    <div className="modal fade" id={idModal} role="dialog">
      <div className="modal-dialog w-100 modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header d-flex">
            <div className="jusify-content-start pt-2">
              <h5>
                {t(shareHolderManagerPresenter.keyHaderShareHolderManager)}
                <OverlayTrigger
                  placement={'right'}
                  delay={{ show: 300, hide: 1000 }}
                  overlay={popover}
                >
                  <svg type="button" className="bi bi-question-circle ml-2" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                    <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </OverlayTrigger>
              </h5>
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
          <div className="container">
            <div className="row">
              <div className="modal-body col-12 px-auto">
                <form onSubmit={handleSubmit}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <label>{t(shareHolderManagerPresenter.labelFirstName.name)}</label>
                        <Field
                          name={shareHolderManagerPresenter.labelFirstName.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(shareHolderManagerPresenter.labelFirstName.name)}
                          currentValue={shareHolderManagerPresenter.labelFirstName.valueName}
                        />
                      </div>
                      <div className="col-lg-6 col-12">
                        <label>{t(shareHolderManagerPresenter.labelMiddleName.name)}</label>
                        <Field
                          name={shareHolderManagerPresenter.labelMiddleName.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(shareHolderManagerPresenter.labelMiddleName.name)}
                          currentValue={shareHolderManagerPresenter.labelMiddleName.valueMiddleName}
                        />
                      </div>
                      <div className="col-lg-6 col-12">
                        <label>{t(shareHolderManagerPresenter.labelFamilyName.name)}</label>
                        <Field
                          name={shareHolderManagerPresenter.labelFamilyName.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(shareHolderManagerPresenter.labelFamilyName.name)}
                          currentValue={shareHolderManagerPresenter.labelFamilyName.valueFamilyName}
                        />
                      </div>
                      <div className="col-lg-6 col-12">
                        <label>{t(shareHolderManagerPresenter.labelPassportId.name)}</label>
                        <Field
                          name={shareHolderManagerPresenter.labelPassportId.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(shareHolderManagerPresenter.labelPassportId.name)}
                          currentValue={shareHolderManagerPresenter.labelPassportId.valuePassportId}
                        />
                      </div>
                      <div className="col-lg-6 col-12">
                        <label>{t(shareHolderManagerPresenter.labelEmail.name)}</label>
                        <Field
                          name={shareHolderManagerPresenter.labelEmail.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(shareHolderManagerPresenter.labelEmail.name)}
                          currentValue={shareHolderManagerPresenter.labelEmail.valueEmail}
                        />
                      </div>
                      <div className="col-lg-6 col-12">
                        <label>{t(shareHolderManagerPresenter.labelTelephone.name)}</label>
                        <Field
                          name={shareHolderManagerPresenter.labelTelephone.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(shareHolderManagerPresenter.labelTelephone.name)}
                          currentValue={shareHolderManagerPresenter.labelTelephone.valueTelephone}
                        />
                      </div>
                      <div className="col-12">
                        <div className="checkbox">
                          <Field type="checkbox"
                            name={shareHolderManagerPresenter.labelAddressCheckbox.name}
                            component={CheckBox} />
                          <label className="pl-1">
                            {shareHolderManagerPresenter.labelAddressCheckbox.name}
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <label>{t(shareHolderManagerPresenter.labelAddressNumber.name)}</label>
                        <Field
                          name={shareHolderManagerPresenter.labelAddressNumber.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(shareHolderManagerPresenter.labelAddressNumber.name)}
                          currentValue={shareHolderManagerPresenter.labelAddressNumber.valueAddressNumber}
                        />
                      </div>
                      <div className="col-lg-6 col-12">
                        <label>{t(shareHolderManagerPresenter.labelVillage.name)}</label>
                        <Field
                          name={shareHolderManagerPresenter.labelVillage.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(shareHolderManagerPresenter.labelVillage.name)}
                          currentValue={shareHolderManagerPresenter.labelVillage.valueVillage}
                        />
                      </div>
                      <div className="col-lg-6 col-12">
                        <label>{t(shareHolderManagerPresenter.labelRoad.name)}</label>
                        <Field
                          name={shareHolderManagerPresenter.labelRoad.name}
                          type="text"
                          component={CustomeTextField}
                          styleTextError="text-danger"
                          className="form-control"
                          label={t(shareHolderManagerPresenter.labelRoad.name)}
                          currentValue={shareHolderManagerPresenter.labelRoad.valueRoad}
                        />
                      </div>
                      <div className="col-lg-6 col-12">
                        <label>
                          {t(shareHolderManagerPresenter.labelProvicne.name)}
                        </label>
                        <Field
                          disabledState={
                            false
                          }
                          style="form-control"
                          name={shareHolderManagerPresenter.labelProvicne.name}
                          component={SelectField}
                          styleTextError="text-danger"
                        >
                          <option value={shareHolderManagerPresenter.labelProvicne.valueProvince}>
                            {t(shareHolderManagerPresenter.labelProvicne.name)}
                          </option>
                        </Field>
                      </div>
                      <div className="col-lg-6 col-12">
                        <label >
                          {t(shareHolderManagerPresenter.labelDistrict.name)}
                        </label>
                        <Field
                          disabledState={
                            false
                          }
                          style="form-control"
                          name={''}
                          component={SelectField}
                          styleTextError="text-danger"
                        >
                          <option value={shareHolderManagerPresenter.labelDistrict.valueDistrict}>
                            {t(shareHolderManagerPresenter.labelDistrict.name)}
                          </option>
                        </Field>
                      </div>
                      <div className="col-lg-6 col-12">
                        <label >
                          {t(shareHolderManagerPresenter.labelSubDistrict.name)}
                        </label>
                        <Field
                          disabledState={
                            false
                          }
                          style="form-control"
                          name={shareHolderManagerPresenter.labelSubDistrict.name}
                          component={SelectField}
                          styleTextError="text-danger"
                        >
                          <option value={shareHolderManagerPresenter.labelSubDistrict.valueSubDistrict}>
                            {t(shareHolderManagerPresenter.labelSubDistrict.name)}
                          </option>
                        </Field>
                      </div>
                      <div className="col-lg-6 col-12">
                        <label >
                          {t(shareHolderManagerPresenter.labelZipCode.name)}
                        </label>
                        <Field
                          disabledState={
                            false
                          }
                          style="form-control"
                          name={shareHolderManagerPresenter.labelZipCode.name}
                          component={SelectField}
                          styleTextError="text-danger"
                        >
                          <option value={shareHolderManagerPresenter.labelZipCode.valueZipCode}>
                            {t(shareHolderManagerPresenter.labelZipCode.name)}
                          </option>
                        </Field>
                      </div>
                      <div className="col-lg-6 col-12">
                        <label >
                          {t(shareHolderManagerPresenter.labelTotalShare.name)}
                        </label>
                        <Field
                          disabledState={
                            false
                          }
                          style="form-control"
                          name={shareHolderManagerPresenter.labelTotalShare.name}
                          component={SelectField}
                          styleTextError="text-danger"
                        >
                          <option value={shareHolderManagerPresenter.labelTotalShare.valueTotalShare}>
                            {t(shareHolderManagerPresenter.labelTotalShare.name)}
                          </option>
                          <option value={shareHolderManagerPresenter.labelTotalShare.valueTotalShare}>
                            10 %
                          </option>
                        </Field>
                      </div>
                      <div className="col-12 pt-4 text-center">
                        <Field
                          name="submit"
                          type="submit"
                          style="btn btn-primary w-100"
                          styleTextError="text-danger"
                          component={ButtonSubmit}
                          label={t(shareHolderManagerPresenter.buttonOtherShareHolder.name)}
                        />
                      </div>
                      <div className="col-12 pt-4 text-center">
                        <button className="btn btn-primary w-50" data-dismiss="modal">{t(shareHolderManagerPresenter.buttonFinish.name)}</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default withTranslation('common')(ShareHolderManager)
