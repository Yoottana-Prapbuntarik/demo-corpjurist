import {
    connect
} from "react-redux";

import {
    reduxForm
} from "redux-form";
import { withTranslation } from '../../i18n'
import { FormManager } from '../../manager/formManager'
import RejectEkyc from "./RejectEkyc";
import validate from "../../validate/editEkycValidator/editEkycValidator";
import {
    mapDispatchToProps
} from "./RejectEkycAction";

const mapStateToProps = (state: any) => {
    return {
        rejectVerifyInformationPresenter: state.rejectEkycReducer,
        initialValues: {
            
        }
    }
}

const form = reduxForm({
    form: FormManager.RejectEkycForm,
    shouldValidate: () => true,
    shouldAsyncValidate: () => true,
    validate,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
}
)(RejectEkyc)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))