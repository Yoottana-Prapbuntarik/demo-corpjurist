import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withTranslation } from '../../i18n'
import { mapDispatchToProps } from './MyNonDisclosureAction'
import MyNonDisclosure from './MyNonDisclosure'
import { FormManager } from '../../manager/formManager'
import validate from '../../validate/emailPartyIIValidator/emailPartyIIValidator'
const mapStateToProps = (state: any) => ({
  myNonDisclosurePresenter: state.myNonDisclosureReducer,
  initialValues: {
    "emailPartyII": state.myNonDisclosureReducer.partyII.valueEmailParty
  }
})

const form = reduxForm(
  {
    form: FormManager.MyNonDisclosureForm,
    validate,
    shouldValidate: () => true,
    shouldAsyncValidate: () => true,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
  }
)(MyNonDisclosure)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
