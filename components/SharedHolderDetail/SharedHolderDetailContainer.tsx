import { connect } from 'react-redux'
import { reduxForm } from "redux-form"
import { FormManager } from "../../manager/formManager";
import { withTranslation } from '../../i18n';
import validate from "../../validate/corporateSecretaryValidator/corporateSecretaryValidator";
import { mapDispatchToProps } from "./SharedHOlderDetailAction";
import SharedHolderDetail from "./SharedHolderDetail";
const mapStateToProps = (state: any) => ({
    sharedHolderDetailPresenter: state.sharedHolderDetailReducer
})

const form = reduxForm(
    {
        form: FormManager.SharedHolderDetailFrom,
        validate,
        shouldValidate: () => true
    }
)(SharedHolderDetail)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))