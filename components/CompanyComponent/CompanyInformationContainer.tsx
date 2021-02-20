import { connect } from 'react-redux'
import { FormManager } from '../../manager/formManager'
import { mapDispatchToProps } from './CompanyInformationActions'
import companyInformation from './CompanyInformation'
import {
  withTranslation
} from '../../i18n'
import {
  reduxForm
} from 'redux-form'

const mapStateToProps = (state: any) => ({
  companyInformationPresenter: state.companyInformationReducer
})

const form =
reduxForm({ form: FormManager.InformationForm })(companyInformation)
export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
