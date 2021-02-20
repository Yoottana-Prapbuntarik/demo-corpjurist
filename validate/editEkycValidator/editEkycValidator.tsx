import { FormErrors } from 'redux-form';
import {
    ErrorField,
    regexExpression
} from '../interface';
import { Field } from '../plainTextValidator/plainTextValidator';
import { plainTextOrWhitespaceValidator } from "../plainTextValidator/plainTextValidator";
import { KeyManager } from "../../manager/keyManager";

const validate = (editEkyc: any,
    { t }:
        any
): FormErrors => {
    let errors: FormErrors<ErrorField> = {};

    if (editEkyc.rejectCitizenId === '' ||
        (!regexExpression.regexCitizen.test(editEkyc.rejectCitizenId))) {
        errors.rejectCitizenId = t(KeyManager.FieldNotValid)
    }

    if (editEkyc.rejectVerifyTelephone === ''
        ||
        (!regexExpression.regexTelephone.test(editEkyc.rejectVerifyTelephone))) {
        errors.rejectVerifyTelephone = t(KeyManager.FieldNotValid)
    }

    let verifyRejectVerifyFirstNameResult = plainTextOrWhitespaceValidator(editEkyc.rejectVerifyFirstName, Field.RejectVerifyFirstName);
        console.log(`verifyRejectVerifyFirstNameResult`, verifyRejectVerifyFirstNameResult);
    if (!verifyRejectVerifyFirstNameResult.status) {
        errors.rejectVerifyFirstName = t(verifyRejectVerifyFirstNameResult.keyMessage);
    }

    let VerifyRejectVerifyLastNameResult = plainTextOrWhitespaceValidator(editEkyc.rejectVerifyLastName, Field.RejectVerifyLastName);

    if (!VerifyRejectVerifyLastNameResult.status) {
        errors.rejectVerifyLastName = t(VerifyRejectVerifyLastNameResult.keyMessage);
    }


    return errors;
};

export default validate;
