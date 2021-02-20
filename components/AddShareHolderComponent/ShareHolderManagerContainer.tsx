import { connect } from 'react-redux'
import {
  reduxForm
} from 'redux-form'
import {
  withTranslation
} from '../../i18n'
import { FormManager } from '../../manager/formManager'
import ShareHolderManager from './ShareHolderManager'

const mapStateToProps = (state: any, ownProps: any) => ({
  shareHolderManagerPresenter: state.shareHolderManagerReducer,
  idModal: ownProps.idModal
})

const form = reduxForm({ form: FormManager.ShareHolderManagerForm })(ShareHolderManager)

export default withTranslation('common')(connect(mapStateToProps)(form))
