import PrivacyPolicy from './PrivacyPolicy'
import { connect } from 'react-redux'
import { withTranslation } from '../../i18n'
import { PrivacyPolicyPresenter } from "./PrivacyPolicyInterface";
const privacyPolicyPresenter: PrivacyPolicyPresenter = {
    keyimagePath: 'assets/images/privacy/privacy.jpg',
    title: 'privacyPolicy',
}

export const privacyPolicyReducer = (state: PrivacyPolicyPresenter = privacyPolicyPresenter) => {
    return state
}

const mapStateToProps = (state: any) => ({
    privacyPolicyPresenter: state.privacyPolicyReducer
})

export default withTranslation('common')(connect(mapStateToProps)(PrivacyPolicy))