import { combineReducers } from 'redux'
import { navigationReducer } from '../components/Navigation/NavigationContainer'
import { sectionReducer } from '../components/Section/SectionContainer'
import { listViewReducer } from '../components/ListView/ListViewContainer'
import { footerReducer } from '../components/Footer/FooterViewContainer'
import { sectionIncorporationReducer } from '../components/Section/SectionIncorporationContainer'
import { servicesReducer } from '../components/Services/ServicesContainer'
import { signinReducer } from '../components/Signin/SigninContainer'
import { signupReducer } from '../components/Signup/SignupContainer'
import { successReducer } from '../components/Success/SuccessContainer'
import { forgotPasswordReducer } from '../components/ForgotPassword/ForgotPasswordContainer'
import { navigationIncorporationReducer } from '../components/Navigation/NavigationIncorporationContainer'
import { inCorporationManagerReducer } from '../components/IncorporationManager/IncorporationManagerContainer'
import { companyInformationReducer } from '../components/CompanyComponent/CompanyInformationReducer'
import { activateAccountReducer } from '../components/ActivateAccount/ActivateAccountContainer'
import { changePasswordReducer } from '../components/ChangePassword/ChangePasswordContainer'
import { shareMyCompanyReducer } from '../components/ShareMyCompany/ShareMyCompanyReducer'
import { shareHolderManagerReducer } from '../components/AddShareHolderComponent/ShareHolderManagerReducer'
import { preferenceShareManagerReducer } from '../components/PreferenceShareComponent/PreferenceShareManagerReducer'
import { nonDisclosureManagerReducer } from '../components/NonDisclosureManager/NonDisclosureManagerContainer'
import { nonDisclosureReducer } from '../components/NonDisclosureComponent/NonDisclosureReducer'
import { myNonDisclosureReducer } from '../components/MyNonDisclosure/MyNonDisclosureReducer'
import { confirmMyNonDisclosureReducer } from '../components/ConfirmMyNonDisclosure/ConfirmMyNonDisclosureReducer'
import { tableEditNonDisclosureReducer } from '../components/TableEditNonDisclosure/TableEditNonDisclosureReducer'
import { mainNonDisclosureReducer } from "../components/MainNonDisclosureComponent/MainNonDisclosureReducer";
import { homeGenerateNonDisclosureReducer } from "../components/HomeGenerateNonDisclosure/HomeGenerateNonDisclosureReducer";
import { homeCorporateSecretaryReducer } from "../components/HomeCorporateSecretary/HomeCorporateSecretaryReducer";
import { corporateSecretaryReducer } from "../components/CorporateSecretary/CorporateSecretaryReducer";
import { sharedHolderDetailReducer } from "../components/SharedHolderDetail/SharedHolderDetailReducer";
import { termOfConditionReducer } from "../components/TermOfCondition/TermOfConditionContainer";
import { profileComponentReducer } from "../components/ProfileComponent/ProfileComponentReducer";
import { notFoundDataReducer } from "../components/NotFoundData/NotFoundDataContainer";
import { privacyPolicyReducer } from "../components/PrivacyPolicy/PrivacyPolicyContainer";
import { userChangePasswordReducer } from "../components/UserChangePasswordComponent/UserChangePasswordReducer";
import { landingContentReducer } from "../components/LandingContent/LandingContentContainer";
import { verifyInformationReducer } from "../components/VerifyInformation/VerifyInformationReducer";
import { mainVerifyEkycReducer } from "../components/MainVerifyEkyc/MainVerifyEkycContainer";
import { uploadCitizenReducer } from "../components/UploadCitizen/UploadCitizenContainer";
import { uploadImagesPersonReducer } from "../components/UploadImagesPerson/UploadImagesPersonContainer";
import { uploadVdeoPersonReducer } from "../components/UploadVerifyVideo/UploadVerifyVideoContainer";
import { rejectEkycReducer } from "../components/RejectEkyc/RejectEkycReducer";
import { reducer as reduxFormReducer } from 'redux-form'

const rootReducers = combineReducers({
  navigationReducer: navigationReducer,
  sectionReducer: sectionReducer,
  listViewReducer: listViewReducer,
  footerReducer: footerReducer,
  sectionIncorporationReducer: sectionIncorporationReducer,
  servicesReducer: servicesReducer,
  signinReducer: signinReducer,
  signupReducer: signupReducer,
  forgotPasswordReducer: forgotPasswordReducer,
  inCorporationManagerReducer: inCorporationManagerReducer,
  companyInformationReducer: companyInformationReducer,
  navigationIncorporationReducer: navigationIncorporationReducer,
  activateAccountReducer: activateAccountReducer,
  changePasswordReducer: changePasswordReducer,
  shareMyCompanyReducer: shareMyCompanyReducer,
  shareHolderManagerReducer: shareHolderManagerReducer,
  preferenceShareManagerReducer: preferenceShareManagerReducer,
  nonDisclosureManagerReducer: nonDisclosureManagerReducer,
  nonDisclosureReducer: nonDisclosureReducer,
  myNonDisclosureReducer: myNonDisclosureReducer,
  confirmMyNonDisclosureReducer: confirmMyNonDisclosureReducer,
  tableEditNonDisclosureReducer: tableEditNonDisclosureReducer,
  mainNonDisclosureReducer: mainNonDisclosureReducer,
  homeGenerateNonDisclosureReducer: homeGenerateNonDisclosureReducer,
  homeCorporateSecretaryReducer: homeCorporateSecretaryReducer,
  corporateSecretaryReducer: corporateSecretaryReducer,
  sharedHolderDetailReducer: sharedHolderDetailReducer,
  successReducer: successReducer,
  termOfConditionReducer: termOfConditionReducer,
  profileComponentReducer: profileComponentReducer,
  notFoundDataReducer: notFoundDataReducer,
  privacyPolicyReducer: privacyPolicyReducer,
  userChangePasswordReducer: userChangePasswordReducer,
  landingContentReducer: landingContentReducer,
  verifyInformationReducer: verifyInformationReducer,
  mainVerifyEkycReducer: mainVerifyEkycReducer,
  uploadCitizenReducer: uploadCitizenReducer,
  uploadImagesPersonReducer: uploadImagesPersonReducer,
  uploadVdeoPersonReducer: uploadVdeoPersonReducer,
  rejectEkycReducer: rejectEkycReducer,
  form: reduxFormReducer
})

export default rootReducers
