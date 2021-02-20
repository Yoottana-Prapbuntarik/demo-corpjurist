import { connect } from "react-redux";
import { withTranslation } from "../../i18n";
import HomeGenerateNonDisclosure from "./HomeGenerateNonDisclosure";

const mapStateToProps = (state: any) =>({
    homeGenerateNonDisclosurePresenter: state.homeGenerateNonDisclosureReducer
})

export default withTranslation('common')(connect(mapStateToProps)(HomeGenerateNonDisclosure))