import { connect } from 'react-redux'
import {
  reduxForm
} from 'redux-form'
import { withTranslation } from '../../i18n'
import { FormManager } from '../../manager/formManager'
import NonDisclosure from './NonDisclosure'
import { mapDispatchToProps } from './NonDisclosureAction'
import { i18n } from "../../i18n";
import validate from '../../validate/nonDisclosureValidator/nonDisclosureValidator'
import countryEn from "../../country/countryEn.json";
import countryTH from "../../country/countryTH.json";
import ndaLanguageEN from "../../ndaLanguage/ndaLanguageEN.json";
import ndaLanguageTH from "../../ndaLanguage/ndaLanguageTH.json";

const mapStateToProps = (state: any) => {
  let choiceOfLawProvince = provice(state.nonDisclosureReducer.choiceOfLaw.valueChoiceOfLaw)
  let jurisdictionProvince = provice(state.nonDisclosureReducer.arbitrationJurisdiction.valueArbitrationJurisdiction)
  let ndaLanguage =  choosedNdaLanguage(state.nonDisclosureReducer.ndaLanguage.valueNdaLanguage) 

  return {
    nonDisclosurePresenter: state.nonDisclosureReducer,
    initialValues: {
      "disclosureName": state.nonDisclosureReducer.disclosureNameI.valueName,
      "disclosureNameII": state.nonDisclosureReducer.disclosureNameII.valueName,
      "nameOfSigningI": state.nonDisclosureReducer.nameOfSigningCompanyI.valueNameOfSigning,
      "nameOfSigningII": state.nonDisclosureReducer.nameOfSigningCompanyII.valueNameOfSigning,
      "titleAndCapacityOfSigningI": state.nonDisclosureReducer.titleAndCapacityOfSigningCompanyI.valueTitleAndCapacityOfSigning,
      "titleAndCapacityOfSigningII": state.nonDisclosureReducer.titleAndCapacityOfSigningCompanyII.valueTitleAndCapacityOfSigning,
      "addressI": state.nonDisclosureReducer.addressI.valueAddress,
      "addressII": state.nonDisclosureReducer.addressII.valueAddress,
      "scopeOfDiscussion": state.nonDisclosureReducer.scopeOfDiscussion.valueScopeDiscussion,
      "counterWord": state.counterWord,
      "periodOfSecret": state.nonDisclosureReducer.periodOfSecret.valuePeriodOfSecret,
      "arbitrationJurisdiction": jurisdictionProvince,
      "choiceOfLaw": choiceOfLawProvince,
      "date": state.nonDisclosureReducer.date.valueDate,
      "endDate": state.nonDisclosureReducer.endDate.valueDate,
      "ndaLanguage": ndaLanguage,
      "signatoryAuthority": state.nonDisclosureReducer.signatoryAuthority.value,
    }
  }
}

const provice: any = (provice: string) => {
  if (i18n.language === 'en') {
    return provinceEnglishLanguage(provice)
  } else {
    return provinceThaiLanguage(provice)
  }
}

const provinceThaiLanguage: any = (provice: string) => {
  let provinceThaiLanguage = checkProvinceThaiLanguage(provice)
  if (provinceThaiLanguage.isThaiLanguage) {
    return countryTH[provinceThaiLanguage.index]
  } else {
    let provinceEnLanguage = checkProvinceEngLanguage(provice)

    return countryTH[provinceEnLanguage.index]
  }
}

const choosedNdaLanguage: any = (ndaLanguage: string) => {
  if (i18n.language === 'en') {
    return NdaEngLanguage(ndaLanguage)
  } else {
    return NdaThiLanguage(ndaLanguage)
  }
}

const provinceEnglishLanguage: any = (provice: string) => {
  let provinceEnLanguage = checkProvinceEngLanguage(provice)
  if (provinceEnLanguage.isEngLanguage) {
    return countryEn[provinceEnLanguage.index]
  } else {
    let provinceThaiLanguage = checkProvinceThaiLanguage(provice)

    return countryEn[provinceThaiLanguage.index]
  }
}

const NdaEngLanguage: any = (ndaLanguage: string) => {
  let isNdaLanguageEN = checkNdaLanguageEN(ndaLanguage)

  if (isNdaLanguageEN.isEngLanguage) {
    return ndaLanguageEN[isNdaLanguageEN.index]
  } else {
    let isNdaLanguageTH = checkNdaLanguageTH(ndaLanguage)
    return ndaLanguageEN[isNdaLanguageTH.index]
  }
}

const NdaThiLanguage: any = (ndaLanguage: string) => {
  let isNdaLanguageTH = checkNdaLanguageTH(ndaLanguage);
  if (isNdaLanguageTH.isThaiLanguage) {
    return ndaLanguageTH[isNdaLanguageTH.index]
  } else {
    let isNdaLanguageEN = checkNdaLanguageEN(ndaLanguage);
    return ndaLanguageTH[isNdaLanguageEN.index]
  }
}

const checkProvinceThaiLanguage = (provice: string) => {
  let provinceThaiIndex = countryTH.findIndex(value => value.name === provice)
  let isThaiLanguage = provinceThaiIndex !== -1
  return {
    isThaiLanguage: isThaiLanguage,
    index: provinceThaiIndex
  }
}

const checkProvinceEngLanguage = (provice: string) => {
  let provinceEnIndex = countryEn.findIndex(value => value.name === provice)
  let isEngLanguage = provinceEnIndex !== -1

  return {
    isEngLanguage: isEngLanguage,
    index: provinceEnIndex
  }
}

const checkNdaLanguageEN = (ndaLanguage: string) => {
  let NdaLanguageEngIndex = ndaLanguageEN.findIndex(item => item.value === ndaLanguage)
  let isEngLanguage = NdaLanguageEngIndex !== -1
  return {
    isEngLanguage: isEngLanguage,
    index: NdaLanguageEngIndex
  }
}

const checkNdaLanguageTH = (ndaLanguage: string) => {
  let NdaLanguageThaiIndex = ndaLanguageTH.findIndex(item => item.value === ndaLanguage)
  let isThaiLanguage = NdaLanguageThaiIndex !== -1
  return {
    isThaiLanguage: isThaiLanguage,
    index: NdaLanguageThaiIndex
  }
}

const form = reduxForm({
  form: FormManager.NonDisclosureForm,
  shouldValidate: () => true,
  shouldAsyncValidate: () => true,
  validate,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
}
)(NonDisclosure)


export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))