import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { mapDispatchToProps } from "./ProfileComponentAction";
import { FormManager } from '../../manager/formManager'
import ProfileComponent from './ProfileComponent'
import { withTranslation } from "../../i18n";

const mapStateToProps = (state: any) => ({
    profileComponentPresenter: state.profileComponentReducer,
    mainVerifyEkycPresenter: state.mainVerifyEkycReducer
})

const form = reduxForm({
    form: FormManager.ProfileForm,
    shouldAsyncValidate: () => true,
})(ProfileComponent)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))