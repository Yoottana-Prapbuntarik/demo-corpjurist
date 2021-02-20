import {
  ShareHolderManagerPresenter,
  LabelFirstName,
  LabelMiddleName,
  LabelFamilyName,
  LabelPassportId,
  LabelEmail,
  LabelTelephone,
  LabelAddressCheckbox,
  LabelAddressNumber,
  LabelVillage,
  LabelRoad,
  LabelProvicne,
  LabelDistrict,
  LabelSubDistrict,
  LabelZipCode,
  LabelTotalShare,
  ButtonSubmitProperty
} from './ShareHolderManagerInterface'

import { KeyManager } from '../../manager/keyManager'

const labelFirstName: LabelFirstName = {
  name: KeyManager.FirstName,
  valueName: ''
}

const labelMiddleName: LabelMiddleName = {
  name: KeyManager.MiddleName,
  valueMiddleName: ''
}

const labelFamilyName: LabelFamilyName = {
  name: KeyManager.MiddleName,
  valueFamilyName: ''
}

const labelPassportId: LabelPassportId = {
  name: KeyManager.Passport,
  valuePassportId: ''
}

const labelEmail: LabelEmail = {
  name: KeyManager.Email,
  valueEmail: ''
}

const labelTelephone: LabelTelephone = {
  name: KeyManager.Telephone,
  valueTelephone: ''
}

const labelAddressCheckbox: LabelAddressCheckbox = {
  name: KeyManager.Address
}

const labelAddressNumber: LabelAddressNumber = {
  name: KeyManager.AddressNumber,
  valueAddressNumber: ''
}

const labelVillage: LabelVillage = {
  name: KeyManager.Village,
  valueVillage: ''
}

const labelRoad: LabelRoad = {
  name: KeyManager.Road,
  valueRoad: ''
}

const labelProvicne: LabelProvicne = {
  name: KeyManager.Province,
  valueProvince: ''
}

const labelDistrict: LabelDistrict = {
  name: KeyManager.District,
  valueDistrict: ''

}

const labelSubDistrict: LabelSubDistrict = {
  name: KeyManager.SubDistrict,
  valueSubDistrict: ''
}

const labelZipCode: LabelZipCode = {
  name: KeyManager.ZipCode,
  valueZipCode: ''
}

const labelTotalShare: LabelTotalShare = {
  name: KeyManager.TotalShare,
  valueTotalShare: ''
}

const buttonOtherShareHolder: ButtonSubmitProperty = {
  name: KeyManager.ButtonSendOtherShareHolders
}

const buttonFinish: ButtonSubmitProperty = {
  name: KeyManager.ButtonFinishShareholders
}

export const shareHolderManagerPresenter: ShareHolderManagerPresenter = {
  keyHaderShareHolderManager: KeyManager.HaderShareHolderManager,
  labelFirstName: labelFirstName,
  labelMiddleName: labelMiddleName,
  labelFamilyName: labelFamilyName,
  labelPassportId: labelPassportId,
  labelEmail: labelEmail,
  labelTelephone: labelTelephone,
  labelAddressCheckbox: labelAddressCheckbox,
  labelAddressNumber: labelAddressNumber,
  labelVillage: labelVillage,
  labelRoad: labelRoad,
  labelProvicne: labelProvicne,
  labelDistrict: labelDistrict,
  labelSubDistrict: labelSubDistrict,
  labelZipCode: labelZipCode,
  labelTotalShare: labelTotalShare,
  buttonOtherShareHolder: buttonOtherShareHolder,
  buttonFinish: buttonFinish,
  keyPopoverShareHolderI: KeyManager.PopoverShareHolderI,
  keyPopoverShareHolderII: KeyManager.PopoverShareHolderII,
  keyHeaderPopoverShareHolder: KeyManager.HeaderPopoverShareHolder
}
