import { connect } from 'react-redux'
import {
  reduxForm
} from 'redux-form'
import {
  withTranslation
} from '../../i18n'
import { FormManager } from '../../manager/formManager'
import PreferenceShareManager from './PreferenceShareManager'
import { mapDispatchToProps } from './PreferenceShareManagerAction'

const mapStateToProps = (state: any, ownProps: any) => ({
  preferenceShareManagerPresenter: state.preferenceShareManagerReducer,
  idModal: ownProps.idModal
})

const form = reduxForm({ form: FormManager.PreferenceShareManagerForm })(PreferenceShareManager)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
