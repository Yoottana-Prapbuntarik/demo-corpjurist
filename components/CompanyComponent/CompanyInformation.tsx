import { withTranslation } from '../../i18n'
import { Field } from 'redux-form'
import CustomeTextField from '../../components/FieldComponents/CustomeTextField'
import CheckBox from '../../components/FieldComponents/CheckBox'
import ButtonSubmit from '../../components/FieldComponents/ButtonSubmit'
import SelectField from '../../components/FieldComponents/SelectField'
import { LabelAddressDropdown } from './CompanyInformationInterfaces'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Router from 'next/router'
import './styles.scss'

enum StatusCode {
  success = 200
}
enum CheckLengthItems {
  haveOneItem = 1
}

const CompanyInformation = ({
  companyInformationPresenter,
  showAllProvinces,
  submitCompanyInformation,
  updateCompanyInformation, handleSubmit,
  getCurrentCompanyInformation,
  formSelectDistrict,
  formSelectProvinces,
  formSelectSubDistrict,
  changeTextFieldCompanyName1,
  changeTextFieldCompanyName2,
  changeTextFieldCompanyName3,
  changeTextFieldRegistrationNumber,
  changeTextFieldAddressNumber,
  changeTextFieldVillage,
  changeTextFieldRoad,
  changeTextFieldAuditorLicense,
  changeTextFieldAuditor, t
}: any) => {
  const Dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      if (StatusCode.success) {
        Dispatch(getCurrentCompanyInformation)
      } else {
        Dispatch(showAllProvinces)
      }
    } else {
      alert(t(companyInformationPresenter.keyPleaseSignin))
      Router.push('/signin')
    }
  }, [])

  return (
    <div className="row">
      <form className="w-100" onSubmit={handleSubmit(companyInformationPresenter.keyGetCurrentInfomationStatus === StatusCode.success
        ? updateCompanyInformation : submitCompanyInformation)}>
        <div className="col-12 mb-2">
          {t(companyInformationPresenter.keyTitleCompany)}
          <div className="underline"></div>
        </div>
        <div className="col-12" >
          <div className="form-group">
            <div className="row">
              <div className="col-12">
                <Field
                  name={companyInformationPresenter.labelCompanyName1.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(companyInformationPresenter.labelCompanyName1.keyCompanyName)}
                  currentValue={companyInformationPresenter.labelCompanyName1.valueCompanyName}
                  onChange={(event: any) => changeTextFieldCompanyName1(event.target.value)} />
              </div>
              <div className="col-12">
                <Field
                  name={companyInformationPresenter.labelCompanyName2.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(companyInformationPresenter.labelCompanyName2.keyCompanyName)}
                  currentValue={companyInformationPresenter.labelCompanyName2.valueCompanyName}
                  onChange={(event: any) => changeTextFieldCompanyName2(event.target.value)} />
              </div>
              <div className="col-12">
                <Field
                  name={companyInformationPresenter.labelCompanyName3.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(companyInformationPresenter.labelCompanyName3.keyCompanyName)}
                  currentValue={companyInformationPresenter.labelCompanyName3.valueCompanyName}
                  onChange={(event: any) => changeTextFieldCompanyName3(event.target.value)} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          {t(companyInformationPresenter.keyTitleAddress)}
          <div className="underline"></div>
        </div>
        <div className="col-12">
          <div className="checkbox pb-2">
            <Field type="checkbox" name={companyInformationPresenter.labelCheckbox.keyCheckboxAddress} component={CheckBox} />
            <label className="pl-1">
              {t(companyInformationPresenter.labelCheckbox.keyCheckboxAddress)}
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <div className="row">
              <div className="col-md-6 col-12">
                <label>
                  {t(companyInformationPresenter.labelRegistrationNumber.keyLabelName)}
                </label>
                <div>
                  <Field
                    name={companyInformationPresenter.labelRegistrationNumber.name}
                    type="text"
                    component={CustomeTextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(companyInformationPresenter.labelRegistrationNumber.keyLabelName)}
                    currentValue={companyInformationPresenter.labelRegistrationNumber.valueLabelAddress}
                    onChange={(event: any) => changeTextFieldRegistrationNumber(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <label>
                  {t(companyInformationPresenter.labelAddressNumber.keyLabelName)}
                </label>
                <div>
                  <Field
                    name={companyInformationPresenter.labelAddressNumber.name}
                    type="text"
                    component={CustomeTextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(companyInformationPresenter.labelAddressNumber.keyLabelName)}
                    currentValue={companyInformationPresenter.labelAddressNumber.valueLabelAddress}
                    onChange={(event: any) => changeTextFieldAddressNumber(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <label>
                  {t(companyInformationPresenter.labelVillage.keyLabelName)}
                </label>
                <div>
                  <Field
                    name={companyInformationPresenter.labelVillage.name}
                    type="text"
                    component={CustomeTextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(companyInformationPresenter.labelVillage.keyLabelName)}
                    currentValue={companyInformationPresenter.labelVillage.valueLabelAddress}
                    onChange={(event: any) => changeTextFieldVillage(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <label>
                  {t(companyInformationPresenter.labelRoad.keyLabelName)}
                </label>
                <div>
                  <Field
                    name={companyInformationPresenter.labelRoad.name}
                    type="text"
                    component={CustomeTextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(companyInformationPresenter.labelRoad.keyLabelName)}
                    currentValue={companyInformationPresenter.labelRoad.valueLabelAddress}
                    onChange={(event: any) => changeTextFieldRoad(event.target.value)}
                  />
                </div>
              </div>
              {companyInformationPresenter.labelAddressDropdown.map(
                (item: LabelAddressDropdown, index: number) => {
                  return (
                    <div className="col-md-6 col-12" key={`${item.keyLabelNameDropdown}${index}`}>
                      {t(item.keyLabelNameDropdown)}
                      <Field
                        disabledState={
                          item.keyLabelNameDropdown === 'province' ? false
                            : item.keyLabelNameDropdown === 'district' ? !(companyInformationPresenter.districtItem.length > CheckLengthItems.haveOneItem)
                              : item.keyLabelNameDropdown === 'subDistrict' ? !(companyInformationPresenter.subDistrictItem.length > CheckLengthItems.haveOneItem)
                                : !(item.keyLabelNameDropdown === 'zipCode' && companyInformationPresenter.zipCode.length > CheckLengthItems.haveOneItem)
                        }
                        style="form-control"
                        name={item.keyLabelNameDropdown}
                        key={index} component={SelectField}
                        styleTextError="text-danger"
                        onChange={(event: any) => {
                          item.keyLabelNameDropdown === 'province' ? formSelectProvinces(companyInformationPresenter.provincesItem, event.target.value)
                            : item.keyLabelNameDropdown === 'district' ? formSelectDistrict(companyInformationPresenter.districtItem, event.target.value)
                              : item.keyLabelNameDropdown === 'subDistrict' && formSelectSubDistrict(companyInformationPresenter.subDistrictItem, event.target.value)
                        }}
                      >
                        {
                          item.keyLabelNameDropdown === 'province'
                            ? companyInformationPresenter.provincesItem.map((listProvincesItems, index: number) => {
                              return (
                                <option value={listProvincesItems.province_id} key={index}>
                                  {t(listProvincesItems.name)}
                                </option>
                              )
                            })

                            : item.keyLabelNameDropdown === 'district'
                              ? companyInformationPresenter.districtItem.map((listDistrict, index: number) => {
                                return (
                                  <option value={listDistrict.district_id} key={index}>
                                    {t(listDistrict.name)}
                                  </option>
                                )
                              })
                              : item.keyLabelNameDropdown === 'subDistrict'
                                ? companyInformationPresenter.subDistrictItem.map((listSubDistrict, index: number) => {
                                  return (
                                    <option value={listSubDistrict.sub_district_id} key={index}>
                                      {t(listSubDistrict.name)}
                                    </option>
                                  )
                                })
                                : companyInformationPresenter.zipCode.map((listZipCode, index: number) => {
                                  return (
                                    <option value={listZipCode.zipcode} key={index}>
                                      {t(listZipCode.zipcode)}
                                    </option>
                                  )
                                })
                        }
                      </Field>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>
        <div className="col-12">
          {t(companyInformationPresenter.keyTitleAuditor)}
          <div className="underline"></div>
        </div>
        <div className="col-12">
          <div className="checkbox pb-2">
            <Field type="checkbox" name={companyInformationPresenter.labelCheckbox.keyCheckboxAuditor} component={CheckBox} />
            <label className="pl-1">
              {t(companyInformationPresenter.labelCheckbox.keyCheckboxAuditor)}
            </label>
          </div>
        </div>
        <div className="col-12">
          <label>
            {t(companyInformationPresenter.labelAuditorLicense.keyLicense)}
          </label>
          <Field
            name={companyInformationPresenter.labelAuditorLicense.keyLicense}
            type="text"
            component={CustomeTextField}
            styleTextError="text-danger"
            className="form-control"
            label={t(companyInformationPresenter.labelAuditorLicense.keyLicense)}
            currentValue={companyInformationPresenter.labelAuditorLicense.valueLicense}
            onChange={(event: any) => changeTextFieldAuditorLicense(event.target.value)}
          />
        </div>
        <div className="col-12">
          <label>
            {t(companyInformationPresenter.labelAuditor.keyAuditorName)}
          </label>
          <Field
            name={companyInformationPresenter.labelAuditor.keyAuditorName}
            type="text"
            component={CustomeTextField}
            styleTextError="text-danger"
            className="form-control"
            label={t(companyInformationPresenter.labelAuditor.keyAuditorName)}
            currentValue={companyInformationPresenter.labelAuditor.valueAuditorName}
            onChange={(event: any) => changeTextFieldAuditor(event.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-md-6 col-12"></div>
          <div className="col-md-6 col-12 text-right pt-4 pr-5">
            <Field
              name="submit"
              type="submit"
              style="btn btn-primary w-50"
              styleTextError="text-danger"
              component={ButtonSubmit}
              label={t(companyInformationPresenter.keySubmit)}
            />
          </div>
        </div>
      </form>
    </div >
  )
}

export default withTranslation('common')(CompanyInformation)
