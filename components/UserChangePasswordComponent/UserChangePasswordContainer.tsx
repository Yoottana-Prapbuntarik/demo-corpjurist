import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withTranslation } from '../../i18n'
import { mapDispatchToProps } from './UserChangePasswordAction'
import UserChangePassword from './UserChangePassword'
import { FormManager } from '../../manager/formManager'
import validate from '../../validate/userChangePasswordValidator/userChangePasswordValidator'
const mapStateToProps = (state: any) => ({
    userChangePasswordPresenter: state.userChangePasswordReducer,
})

const form = reduxForm(
  {
    form: FormManager.UserChangePassword,
    validate,
    shouldValidate: () => true,
    shouldAsyncValidate: () => true,
  }
)(UserChangePassword)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))