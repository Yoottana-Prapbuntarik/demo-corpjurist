import {
  NonDisclosurePresenter,
  DisclosureName,
  NdaLanguage,
  Address,
  Date,
  ScopeOfDiscussion,
  EndDate,
  PeriodOfSecret,
  ArbitrationJurisdiction,
  ChoiceOfLaw,
  NameOfSigning,
  TitleAndCapacityOfSigning,
  SignatoryItems

} from './NonDisclosureInterface'
import countryEn from "../../country/countryEn.json";
import countryTH from "../../country/countryTH.json";
import ndaLanguageEN from "../../ndaLanguage/ndaLanguageEN.json";
import ndaLanguageTH from "../../ndaLanguage/ndaLanguageTH.json";
import { i18n } from "../../i18n";
import { KeyManager } from '../../manager/keyManager'

const disclosureNameI: DisclosureName = {
  name: KeyManager.DisclosureNameI,
  valueName: ''
}

const disclosureNameII: DisclosureName = {
  name: KeyManager.DisclosureNameII,
  valueName: ''
}

const addressI: Address = {
  name: KeyManager.AddressI,
  valueAddress: ''
}

const addressII: Address = {
  name: KeyManager.AddressII,
  valueAddress: ''
}

const date: Date = {
  name: KeyManager.Date,
  valueDate: ''
}

const scopeOfDiscussion: ScopeOfDiscussion = {
  name: KeyManager.ScopeOfDiscussion,
  valueScopeDiscussion: ''
}

const endDate: EndDate = {
  name: KeyManager.EndDate,
  valueDate: ''
}

const periodOfSecret: PeriodOfSecret = {
  name: KeyManager.PeriodOfSecret,
  valuePeriodOfSecret: ''
}

const arbitrationJurisdiction: ArbitrationJurisdiction = {
  name: KeyManager.ArbitrationJurisdiction,
  valueArbitrationJurisdiction: i18n.language === 'en' ? countryEn[0].name : countryTH[0].name
}

const choiceOfLaw: ChoiceOfLaw = {
  name: KeyManager.ChoiceOfLaw,
  valueChoiceOfLaw: i18n.language === 'en' ? countryEn[0].name : countryTH[0].name
}

const nameOfSigningCompanyI: NameOfSigning = {
  name: KeyManager.NameOfSigningCompany1,
  valueNameOfSigning: ''
}

const nameOfSigningCompanyII: NameOfSigning = {
  name: KeyManager.NameOfSigningCompany2,
  valueNameOfSigning: ''
}

const titleAndCapacityOfSigningCompanyI: TitleAndCapacityOfSigning = {
  name: KeyManager.TitleAndCapacityOfSigningCompany1,
  valueTitleAndCapacityOfSigning: ''
}

const titleAndCapacityOfSigningCompanyII: TitleAndCapacityOfSigning = {
  name: KeyManager.TitleAndCapacityOfSigningCompany2,
  valueTitleAndCapacityOfSigning: ''
}

const ndaLanguage: NdaLanguage = {
  name: KeyManager.NdaLanguage,
  valueNdaLanguage: i18n.language === 'en' ? ndaLanguageEN[0].name : ndaLanguageTH[0].name
}

const signatoryAuthority: SignatoryItems = {
  name: [],
  title: []
}


export const nonDisclosurePresenter: NonDisclosurePresenter = {
  titleNonDisclosureI: KeyManager.ReferenceI,
  titleNonDisclosureII: KeyManager.ReferenceII,
  addressNonDisclosureI: KeyManager.ReferenceI,
  addressNonDisclosureII: KeyManager.ReferenceII,
  disclosureNameI: disclosureNameI,
  disclosureNameII: disclosureNameII,
  addressI: addressI,
  addressII: addressII,
  ndaLanguage: ndaLanguage,
  date: date,
  scopeOfDiscussion: scopeOfDiscussion,
  endDate: endDate,
  periodOfSecret: periodOfSecret,
  arbitrationJurisdiction: arbitrationJurisdiction,
  choiceOfLaw: choiceOfLaw,
  nameOfSigningCompanyI: nameOfSigningCompanyI,
  nameOfSigningCompanyII: nameOfSigningCompanyII,
  titleAndCapacityOfSigningCompanyI: titleAndCapacityOfSigningCompanyI,
  titleAndCapacityOfSigningCompanyII: titleAndCapacityOfSigningCompanyII,
  keyPleaseSignin: KeyManager.PleaseSignin,
  buttonSubmit: KeyManager.GenerateAgreement,
  keyStatueAPI: '',
  getApi: '',
  getReasonApi: '',
  isLoadingGenerateNda: false,
  isAcknowledgeError: false,
  hideRejectReason: false,
  keyGenerateNdaFalse: '',
  counterWord: 0,
  addSignatory: 0,
  getCompanyBasicInfo: {},
  signatoryAuthority: signatoryAuthority,
  authorisedItem: []
}

