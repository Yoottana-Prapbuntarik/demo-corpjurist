
import { SuccessPresenter } from "./SuccessInterface";
import { connect } from 'react-redux'
import { withTranslation } from '../../i18n'
import Success from './Success'
const successPresenter: SuccessPresenter = {
    keyimagePath: 'assets/images/activate/activate.jpg',
    title: 'successTitle',
    subTitle: 'successSubTitle',
}

export const successReducer = (state: SuccessPresenter = successPresenter) => {
    return state
}

const mapStateToProps = (state: any) => ({
    successPresenter: state.successReducer
})

export default withTranslation('common')(connect(mapStateToProps)(Success))