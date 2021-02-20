import { connect } from 'react-redux'
import { withTranslation } from '../../i18n'
import { FormManager } from '../../manager/formManager'
import { reduxForm } from 'redux-form'
import TableEditNonDisclosure from './TableEditNonDisclosure'
import { mapDispatchToProps } from './TableEditNonDisclosureAction'
const mapStateToProps = (state: any) => ({
  tableEditNonDisclosurePresenter: state.tableEditNonDisclosureReducer
})

const form = reduxForm({
  form: FormManager.TableEditNonDisclosureForm,
  shouldValidate: () => true
})(TableEditNonDisclosure)
export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
