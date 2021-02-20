import { connect } from "react-redux";
import { withTranslation } from "../../i18n";
import HomeCorporateSecretary from "./HomeCorporateSecretary";

const mapStateToProps = (state: any) => ({
    homeCorporateSecretaryPresenter: state.homeCorporateSecretaryReducer
})

export default withTranslation('common')(connect(mapStateToProps)(HomeCorporateSecretary))