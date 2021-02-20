import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withTranslation } from '../../i18n'
import { mapDispatchToProp } from './ConfirmMyNonDisclosureAction'
import ConfirmMyNonDisclosureReject from './ConfirmMyNonDisclosureReject'
import { FormManager } from '../../manager/formManager'
import validate from "../../validate/confirmMyNonDisclosureValidator/confirmMyNonDisclosureValidator";

const mapStateToProps = (state: any) => ({
  confirmMyNonDisclosurePresenter: state.confirmMyNonDisclosureReducer
})

const form = reduxForm(
  {
    form: FormManager.ConfirmNonDisclosureForm,
    validate,
    shouldValidate: () => true
  }
)(ConfirmMyNonDisclosureReject)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProp)(form))
