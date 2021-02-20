import { connect } from 'react-redux'
import {
  reduxForm
} from 'redux-form'
import {
  withTranslation
} from '../../i18n'
import { FormManager } from '../../manager/formManager'
import ShareMyCompany from './ShareMyCompany'
const mapStateToProps = (state: any) => ({
  shareMyCompanyPresenter: state.shareMyCompanyReducer
})

const form = reduxForm({ form: FormManager.ShareInformationForm })(ShareMyCompany)
export default withTranslation('common')(connect(mapStateToProps)(form))
