import {
    connect
} from "react-redux";

import {
    reduxForm
} from "redux-form";
import { withTranslation } from '../../i18n'
import { FormManager } from '../../manager/formManager'
import VerifyInformation from "./VerifyInformation";
import validate from "../../validate/verifyInformationValidator/verifyInformationValidator";
import {
    mapDispatchToProps
} from "./VerifyInformationAction";

const mapStateToProps = (state: any) => {
    return {
        verifyInformationPresenter: state.verifyInformationReducer,
        initialValues: {
            "verifyEmail": state.verifyInformationReducer.verifyEmail.value,
            "verifyTelephone": state.verifyInformationReducer.verifyTelephone.value,
            "verifyFirstName": state.verifyInformationReducer.verifyFirstName.value,
            "verifyLastName": state.verifyInformationReducer.verifyLastName.value,
            "verifyCitizenId": state.verifyInformationReducer.verifyCitizenId.value,
            "verifyInformationData": state.verifyInformationData
        }
    }
}

const form = reduxForm({
    form: FormManager.VerifyInformation,
    shouldValidate: () => true,
    shouldAsyncValidate: () => true,
    validate,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
}
)(VerifyInformation)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))