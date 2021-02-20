import { connect } from 'react-redux'
import { withTranslation } from '../../i18n'
import MainNonDisclosureComponents from './MainNonDisclosureComponents'
import { mapDispatchToProps } from "./MainNonDisclosureAction";
const mapStateToProps = (state: any) => ({
    mainNonDisclosurePresenter: state.mainNonDisclosureReducer
})

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(MainNonDisclosureComponents))