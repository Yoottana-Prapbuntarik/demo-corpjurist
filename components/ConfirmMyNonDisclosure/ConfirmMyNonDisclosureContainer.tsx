import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withTranslation } from '../../i18n'
import { mapDispatchToProp } from './ConfirmMyNonDisclosureAction'
import ConfirmMyNonDisclosure from './ConfirmMyNonDisclosure'
import { FormManager } from '../../manager/formManager'

const mapStateToProps = (state: any) => ({
  confirmMyNonDisclosurePresenter: state.confirmMyNonDisclosureReducer
})

const form = reduxForm(
  {
    form: FormManager.ConfirmNonDisclosureForm,
    shouldValidate: () => true
  }
)(ConfirmMyNonDisclosure)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProp)(form))
