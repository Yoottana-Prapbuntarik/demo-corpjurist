import { FormErrors } from "redux-form";
import { ErrorField } from '../interface'
import { emailValidator, emailAndOptional } from '../emailValidator/emailValidator';

const validate = (sendEmailPartyII: any, { t }: any): FormErrors => {
    let errors: FormErrors<ErrorField> = {};

    let emailValidatorResult = emailValidator(sendEmailPartyII.emailPartyII);
    
    if (!emailValidatorResult.status) {
        errors.emailPartyII = t(emailValidatorResult.keyMessage);
    }
    
    let emailApprovalValidatorResult = emailAndOptional(sendEmailPartyII.approval);

    if(!emailApprovalValidatorResult.status) {
        errors.approval = t(emailApprovalValidatorResult.keyMessage)
    }

    return errors;
}

export default validate