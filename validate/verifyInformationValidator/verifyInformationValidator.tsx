import { FormErrors } from 'redux-form';
import { ErrorField, regexExpression } from '../interface';
import { emailValidator } from '../emailValidator/emailValidator';
import { Field } from '../plainTextValidator/plainTextValidator';
import { plainTextOrWhitespaceValidator } from "../plainTextValidator/plainTextValidator";
import { KeyManager } from "../../manager/keyManager";

const validate = (verifyInformation: any, { t }: any): FormErrors => {
    let errors: FormErrors<ErrorField> = {};

    let emailValidatorResult = emailValidator(verifyInformation.verifyEmail);

    if (!emailValidatorResult.status) {
        errors.verifyEmail = t(KeyManager.FieldNotValid)
    }
    if (verifyInformation.verifyCitizenId === '' ||
        (!regexExpression.regexCitizen.test(verifyInformation.verifyCitizenId))) {
        errors.verifyCitizenId = t(KeyManager.FieldNotValid)
    }

    if (verifyInformation.verifyTelephone === ''
        ||
        (!regexExpression.regexTelephone.test(verifyInformation.verifyTelephone))) {
        errors.verifyTelephone = t(KeyManager.FieldNotValid)
    }


    let verifyFirstNameValidatorResult = plainTextOrWhitespaceValidator(verifyInformation.verifyFirstName, Field.VerifyFirstName);
    
    if (!verifyFirstNameValidatorResult.status) {
        errors.verifyFirstName = t(verifyFirstNameValidatorResult.keyMessage);
    }

    let VerifyLastNameValidatorResult = plainTextOrWhitespaceValidator(verifyInformation.verifyLastName, Field.VerifyLastName);

    if (!VerifyLastNameValidatorResult.status) {
        errors.verifyLastName = t(VerifyLastNameValidatorResult.keyMessage);
    }


    return errors;
};

export default validate;
