
import {
  CompanyInformationPresenter,
  LabelCompanyName,
  LabelAddress,
  LabelAddressDropdown,
  LabelCheckbox,
  LabelAuditor,
  ProvincesItem,
  DistrictItem,
  SubDistrictItem,
  ZipCode,
  LabelAuditorLicense
} from './CompanyInformationInterfaces'
import {
  KeyManager
} from '../../manager/keyManager'
import {
  TextManager
} from '../../manager/TextManager'

const labelCompanyName1: LabelCompanyName =
{
  name: KeyManager.CompanyName1,
  keyCompanyName: KeyManager.CompanyName1,
  valueCompanyName: ''
}

const labelCompanyName2: LabelCompanyName =
{
  name: KeyManager.CompanyName2,
  keyCompanyName: KeyManager.CompanyName2,
  valueCompanyName: ''
}

const labelCompanyName3: LabelCompanyName =
{
  name: KeyManager.CompanyName3,
  keyCompanyName: KeyManager.CompanyName3,
  valueCompanyName: ''
}

const labelRegistrationNumber: LabelAddress =
{
  keyLabelName: KeyManager.RegistrationNumber,
  valueLabelAddress: '',
  name: KeyManager.RegistrationNumber
}

const labelAddressNumber: LabelAddress =
{
  keyLabelName: KeyManager.AddressNumber,
  valueLabelAddress: '',
  name: KeyManager.AddressNumber
}

const labelVillage: LabelAddress =
{
  keyLabelName: KeyManager.Village,
  valueLabelAddress: '',
  name: KeyManager.Village
}

const labelRoad: LabelAddress =
{
  keyLabelName: KeyManager.Road,
  valueLabelAddress: '',
  name: KeyManager.Road
}

const labelAuditorLicense: LabelAuditorLicense = {
  keyLicense: KeyManager.AuditorLicense,
  valueLicense: ''
}

const labelAuditor: LabelAuditor =
{
  keyAuditorName: KeyManager.AuditorName,
  valueAuditorName: ''
}

const labelAddressDropdown: LabelAddressDropdown[] = [
  { keyLabelNameDropdown: KeyManager.Province },
  { keyLabelNameDropdown: KeyManager.District },
  { keyLabelNameDropdown: KeyManager.SubDistrict },
  { keyLabelNameDropdown: KeyManager.ZipCode }
]

const labelCheckbox: LabelCheckbox = {
  keyCheckboxAddress: KeyManager.CheckboxAddress,
  keyCheckboxAuditor: KeyManager.CheckboxAuditor
}

const provincesItem: ProvincesItem[] = [{
  provinceID: 0,
  name: TextManager.SelectData
}]

const districtItem: DistrictItem[] = [{
  districtID: 0,
  name: TextManager.SelectData
}]

const subDistrictItem: SubDistrictItem[] = [{
  subDistrictID: 0,
  name: TextManager.SelectData
}]

const zipCode: ZipCode[] = [{ zipcode: TextManager.SelectData }]

export const companyInformationPresenter: CompanyInformationPresenter = {
  keyTitleCompany: KeyManager.TitleCompany,
  keyTitleAddress: KeyManager.TitleAddress,
  keyTitleAuditor: KeyManager.TitleAuditor,
  keySubmit: KeyManager.Save,
  labelRegistrationNumber: labelRegistrationNumber,
  labelAddressNumber: labelAddressNumber,
  labelVillage: labelVillage,
  labelRoad: labelRoad,
  labelAddressDropdown: labelAddressDropdown,
  labelCheckbox: labelCheckbox,
  labelAuditor: labelAuditor,
  labelAuditorLicense: labelAuditorLicense,
  labelCompanyName1: labelCompanyName1,
  labelCompanyName2: labelCompanyName2,
  labelCompanyName3: labelCompanyName3,
  provincesItem: provincesItem,
  districtItem: districtItem,
  subDistrictItem: subDistrictItem,
  zipCode: zipCode,
  keyGetCurrentInfomationStatus: 404,
  keyPleaseSignin: KeyManager.PleaseSignin
}
