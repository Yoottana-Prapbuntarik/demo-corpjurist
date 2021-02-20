import { FormErrors } from "redux-form";
import { ErrorField } from '../interface'
import { plainTextValidator, Field } from "../plainTextValidator/plainTextValidator";

const validate = (confirmMyNonDisclosure: any, { t }: any): FormErrors => {
    let errors: FormErrors<ErrorField> = {};

    let reasonAddressResultI = plainTextValidator(confirmMyNonDisclosure.reasonAddressI, Field.ReasonAddressI)
    if (!reasonAddressResultI.status) {
        errors.reasonAddressI = t(reasonAddressResultI.keyMessage);
    }

    let reasonAddressResultII = plainTextValidator(confirmMyNonDisclosure.reasonAddressII, Field.ReasonAddressII)
    if (!reasonAddressResultII.status) {
        errors.reasonAddressII = t(reasonAddressResultII.keyMessage);
    }

    let reasonDisclosureNameResultI = plainTextValidator(confirmMyNonDisclosure.reasonDisclosureNameI, Field.ReasonDisclosureNameI)
    if (!reasonDisclosureNameResultI.status) {
        errors.reasonDisclosureNameI = t(reasonDisclosureNameResultI.keyMessage);
    }

    let reasonDisclosureNameResultII = plainTextValidator(confirmMyNonDisclosure.reasonDisclosureNameII, Field.ReasonDisclosureNameII)
    if (!reasonDisclosureNameResultII.status) {
        errors.reasonDisclosureNameII = t(reasonDisclosureNameResultII.keyMessage);
    }

    let reasonNameOfSigningCompanyResultI = plainTextValidator(confirmMyNonDisclosure.reasonNameOfSigningCompanyI, Field.ReasonNameOfSigningCompanyI)
    if (!reasonNameOfSigningCompanyResultI.status) {
        errors.reasonNameOfSigningCompanyI = t(reasonNameOfSigningCompanyResultI.keyMessage);
    }

    let reasonNameOfSigningCompanyResultII = plainTextValidator(confirmMyNonDisclosure.reasonNameOfSigningCompanyII, Field.ReasonNameOfSigningCompanyII)
    if (!reasonNameOfSigningCompanyResultII.status) {
        errors.reasonNameOfSigningCompanyII = t(reasonNameOfSigningCompanyResultII.keyMessage);
    }

    let reasonTitleAndCapacityOfSigningCompanyResultI = plainTextValidator(confirmMyNonDisclosure.reasonTitleAndCapacityOfSigningCompanyI, Field.ReasonTitleAndCapacityOfSigningCompanyI)
    if (!reasonTitleAndCapacityOfSigningCompanyResultI.status) {
        errors.reasonTitleAndCapacityOfSigningCompanyI = t(reasonTitleAndCapacityOfSigningCompanyResultI.keyMessage);
    }

    let reasonTitleAndCapacityOfSigningCompanyResultII = plainTextValidator(confirmMyNonDisclosure.reasonTitleAndCapacityOfSigningCompanyII, Field.ReasonTitleAndCapacityOfSigningCompanyII)
    if (!reasonTitleAndCapacityOfSigningCompanyResultII.status) {
        errors.reasonTitleAndCapacityOfSigningCompanyII = t(reasonTitleAndCapacityOfSigningCompanyResultII.keyMessage);
    }

    let reasonScopeOfDiscussionResult = plainTextValidator(confirmMyNonDisclosure.reasonScopeOfDiscussion, Field.ReasonScopeOfDiscussion)
    if (!reasonScopeOfDiscussionResult.status) {
        errors.reasonScopeOfDiscussion = t(reasonScopeOfDiscussionResult.keyMessage);
    }

    let reasonDateResult = plainTextValidator(confirmMyNonDisclosure.reasonDate, Field.ReasonDate)
    if (!reasonDateResult.status) {
        errors.reasonDate = t(reasonDateResult.keyMessage);
    }

    let reasonArbitrationJurisdictionResult = plainTextValidator(confirmMyNonDisclosure.reasonArbitrationJurisdiction, Field.ReasonArbitrationJurisdiction)
    if (!reasonArbitrationJurisdictionResult.status) {
        errors.reasonArbitrationJurisdiction = t(reasonArbitrationJurisdictionResult.keyMessage);
    }

    let reasonEndDateResult = plainTextValidator(confirmMyNonDisclosure.reasonEndDate, Field.ReasonEndDate)
    if (!reasonEndDateResult.status) {
        errors.reasonEndDate = t(reasonEndDateResult.keyMessage);
    }

    let reasonChoiceOfLawResult = plainTextValidator(confirmMyNonDisclosure.reasonChoiceOfLaw, Field.ReasonChoiceOfLaw)
    if (!reasonChoiceOfLawResult.status) {
        errors.reasonChoiceOfLaw = t(reasonChoiceOfLawResult.keyMessage);
    }

    let reasonPeriodOfSecretResult = plainTextValidator(confirmMyNonDisclosure.reasonPeriodOfSecret, Field.ReasonPeriodOfSecret)
    if (!reasonPeriodOfSecretResult.status) {
        errors.reasonPeriodOfSecret = t(reasonPeriodOfSecretResult.keyMessage);
    }

    let reasonOtherResult = plainTextValidator(confirmMyNonDisclosure.reasonOther, Field.ReasonOther)
    if (!reasonOtherResult.status) {
        errors.reasonOther = t(reasonOtherResult.keyMessage);
    }

    return errors;
};

export default validate