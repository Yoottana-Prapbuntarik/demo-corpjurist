import { FormErrors } from "redux-form";
import { ErrorField } from '../interface';
import { plainTextValidator, Field } from "../plainTextValidator/plainTextValidator";
import { emailValidator } from "../emailValidator/emailValidator";
const validate = (corporateSecretary: any, { t }: any): FormErrors => {
    let errors: FormErrors<ErrorField> = {};

    let nameOfShareholderDetailResult = plainTextValidator(corporateSecretary.nameOfShareholderDetail, Field.CorporateName);

    if (!nameOfShareholderDetailResult.status) {
        errors.nameOfShareholderDetail = t(nameOfShareholderDetailResult.keyMessage);
    }

    let familyNameOfShareDetailResult = plainTextValidator(corporateSecretary.familyNameOfShareDetail, Field.CorporateFamilyName);
    if (!familyNameOfShareDetailResult.status) {
        errors.familyNameOfShareDetail = t(familyNameOfShareDetailResult.keyMessage);
    }

    let addressOfShareholderDetailResult = plainTextValidator(corporateSecretary.addressOfShareholderDetail, Field.CorporateAddress);
    if (!addressOfShareholderDetailResult.status) {
        errors.addressOfShareholderDetail = t(addressOfShareholderDetailResult.keyMessage);
    }

    let typeOfShareDetailResult = plainTextValidator(corporateSecretary.typeOfShareDetail, Field.CorporateTypeOfShares);
    if (!typeOfShareDetailResult.status) {
        errors.typeOfShareDetail = t(typeOfShareDetailResult.keyMessage);
    }

    let amountOfShareDetailResult = plainTextValidator(corporateSecretary.amountOfShareDetail, Field.CorporateAmountHolding);
    if (!amountOfShareDetailResult.status) {
        errors.amountOfShareDetail = t(amountOfShareDetailResult.keyMessage);
    }

    let emailOfShareDetailResult = emailValidator(corporateSecretary.emailOfShareDetail);
    if (!emailOfShareDetailResult.status) {
        errors.emailOfShareDetail = t(emailOfShareDetailResult.keyMessage);
    }

    let phoneOfShareDetailResult = plainTextValidator(corporateSecretary.phoneOfShareDetail, Field.CorporateTelephone);
    if (!phoneOfShareDetailResult.status) {
        errors.phoneOfShareDetail = t(phoneOfShareDetailResult.keyMessage);
    }

    return errors;
}

export default validate