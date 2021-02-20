import TermOfCondition from './TermOfCondition'
import { connect } from 'react-redux'
import { withTranslation } from '../../i18n'
import { TermOfConditionPresenter } from "./TermOfConditionInterface";
const termOfConditionPresenter: TermOfConditionPresenter = {
    keyimagePath: 'assets/images/activate/activate.jpg',
    title: 'readMore',
}

export const termOfConditionReducer = (state: TermOfConditionPresenter = termOfConditionPresenter) => {
    return state
}

const mapStateToProps = (state: any) => ({
    termOfConditionPresenter: state.termOfConditionReducer
})

export default withTranslation('common')(connect(mapStateToProps)(TermOfCondition))