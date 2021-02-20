import { FormErrors } from "redux-form";
import { ErrorField } from '../interface'
import { plainTextValidator, PainTextThaiAndEnglishValidator, Field } from "../plainTextValidator/plainTextValidator";
import { SignatoryValidate } from "../plainTextValidator/plainTextValidator";

const validate = (companyBasicInfoInformation: any, { t }: any): FormErrors => {
    let errors: FormErrors<ErrorField> = {};

    if (companyBasicInfoInformation.authorisedSignatory !== undefined) {
        let authorisedSignatory = companyBasicInfoInformation.authorisedSignatory.map((item) => { return item !== undefined ? item.value === undefined ? item : item.value : {} })
        const authorisedSignatoryArrayError: any = [];
        authorisedSignatory.forEach((authorisedSignatoryItem, index: number) => {
            const authorisedSignatoryError = {name: ""}
            let isPainTextThaiAndEnglishResult = SignatoryValidate(authorisedSignatoryItem.name, Field.AuthorisedSignatory)
            if (!isPainTextThaiAndEnglishResult.status) {
                authorisedSignatoryError.name = t(isPainTextThaiAndEnglishResult.keyMessage)
                authorisedSignatoryArrayError[index] = authorisedSignatoryError
            }
        });

        if (authorisedSignatoryArrayError.length) {
            errors.authorisedSignatory = authorisedSignatoryArrayError
        }
    }

    let businessRegistrationNameResult = plainTextValidator(companyBasicInfoInformation.businessRegistration,
        Field.BusinessRegistration);

    if (!businessRegistrationNameResult.status) {
        errors.businessRegistration = t(businessRegistrationNameResult.keyMessage);
    }
    
    let signatoryAuthorityResult = plainTextValidator(companyBasicInfoInformation.signatoryAuthority,
        Field.SignatoryAuthority);

    if (!businessRegistrationNameResult.status) {
        errors.signatoryAuthority = t(signatoryAuthorityResult.keyMessage);
    }

    let businessNameResult = PainTextThaiAndEnglishValidator(companyBasicInfoInformation.businessName,
        Field.BusinessName);

    if (!businessNameResult.status) {
        errors.businessName = t(businessNameResult.keyMessage);
    }

    let hqAddressResult = plainTextValidator(companyBasicInfoInformation.hqAddress,
        Field.HqAddress);

    if (!hqAddressResult.status) {
        errors.hqAddress = t(hqAddressResult.keyMessage);
    }

    let registrateredCapitalResult = plainTextValidator(companyBasicInfoInformation.registrateredCapital,
        Field.RegistrateredCapital);

    if (!registrateredCapitalResult.status) {
        errors.registrateredCapital = t(registrateredCapitalResult.keyMessage);
    }


    return errors;
};

export default validate