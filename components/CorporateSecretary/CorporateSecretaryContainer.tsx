import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withTranslation } from "../../i18n";
import { FormManager } from "../../manager/formManager";
import CorporateSecretary from "./CorporateSecretary";
import { mapDispatchToProps } from "./CorporateSecretaryAction";
import validate from "../../validate/companyBasicInfoValidator/companyBasicInfoValidator";
const mapStateToProps = (state: any) => {
    return {
        corporateSecretaryPresenter: state.corporateSecretaryReducer,
        initialValues: {
            "businessRegistration": state.corporateSecretaryReducer.businessRegistration.valueBusinessRegistration,
            "businessName": state.corporateSecretaryReducer.businessName.valueBusinessName,
            "hqAddress": state.corporateSecretaryReducer.hqAddress.valueHqAddress,
            "registrateredCapital": state.corporateSecretaryReducer.registrateredCapital.valueRegistrateredCapital,
            "authorisedSignatory": state.corporateSecretaryReducer.authorisedSignatory.value,
            "signatoryAuthority": state.corporateSecretaryReducer.signatoryAuthority.value,
        }
    }
}

const form = reduxForm(
    {
        form: FormManager.CorporateSecretaryForm,
        shouldValidate: () => true,
        shouldAsyncValidate: () => true,
        validate,
        enableReinitialize: true,
        keepDirtyOnReinitialize: true
    }
)(CorporateSecretary)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))