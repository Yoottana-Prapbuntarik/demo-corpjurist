import { FormErrors } from "redux-form";
import { ErrorField } from '../interface'
import { KeyManager } from "../../manager/keyManager";
import { plainTextValidator, Field } from "../plainTextValidator/plainTextValidator";
import { SignatoryValidate } from "../plainTextValidator/plainTextValidator";


const validate = (nonDisclosureInformation: any, { t }: any): FormErrors => {
    let errors: FormErrors<ErrorField> = {};
    let disclosureNameResultI = plainTextValidator(nonDisclosureInformation.disclosureName,
        Field.DisclosureNameI);

    if (!disclosureNameResultI.status) {
        errors.disclosureName = t(disclosureNameResultI.keyMessage);
    }

    let disclosureNameResultII = plainTextValidator(nonDisclosureInformation.disclosureNameII,
        Field.DisclosureNameII);

    if (!disclosureNameResultII.status) {
        errors.disclosureNameII = t(disclosureNameResultII.keyMessage);
    }

    let addressResultI = plainTextValidator(nonDisclosureInformation.addressI, Field.AddressI);

    if (!addressResultI.status) {
        errors.addressI = t(addressResultI.keyMessage)
    }

    let addressResultII = plainTextValidator(nonDisclosureInformation.addressII, Field.AddressII);

    if (!addressResultII.status) {
        errors.addressII = t(addressResultII.keyMessage)
    }

    let startDate = new Date(nonDisclosureInformation.date)
    let endDate = new Date(nonDisclosureInformation.endDate)

    let dateResult = plainTextValidator(nonDisclosureInformation.date, Field.Date);
    let isDateResult = isNaN(startDate.getTime())

    if (dateResult.status || isDateResult) {
        errors.date = t(dateResult.keyMessage)
    }

    let endDateResult = plainTextValidator(nonDisclosureInformation.endDate, Field.EndDate);

    let isEndDateResult = isNaN(endDate.getTime())

    if (isEndDateResult || endDateResult.status) {
        errors.endDate = t(endDateResult.keyMessage)

    }

    if (!(startDate.getTime() <= endDate.getTime())) {
        errors.endDate = t(KeyManager.Informationrequired)
    }

    let scopeOfDiscussionResult = plainTextValidator(nonDisclosureInformation.scopeOfDiscussion, Field.ScopeOfDiscussion);

    let isScopeOfDiscussionResult = nonDisclosureInformation.scopeOfDiscussion === undefined ? true : false

    if (!scopeOfDiscussionResult.status || isScopeOfDiscussionResult) {
        errors.scopeOfDiscussion = t(scopeOfDiscussionResult.keyMessage)
    }

    let periodOfSecretResult = plainTextValidator(nonDisclosureInformation.periodOfSecret, Field.PeriodOfSecret);

    if (!periodOfSecretResult.status || nonDisclosureInformation.periodOfSecret === undefined || nonDisclosureInformation.periodOfSecret === null
        || nonDisclosureInformation.periodOfSecret === '') {
        errors.periodOfSecret = t(periodOfSecretResult.keyMessage)
    }

    let valuearbitrationJurisdiction = ""

    if (nonDisclosureInformation.arbitrationJurisdiction !== undefined) {
        valuearbitrationJurisdiction = nonDisclosureInformation.arbitrationJurisdiction.name 
    }

    let arbitrationJurisdictionResult = plainTextValidator(valuearbitrationJurisdiction, Field.ArbitrationJurisdiction);

    if (!arbitrationJurisdictionResult.status) {
        errors.arbitrationJurisdiction = t(arbitrationJurisdictionResult.keyMessage)
    }

    let valueNDALanguageResult = ""

    if (nonDisclosureInformation.ndaLanguage !== undefined) {
        valueNDALanguageResult = nonDisclosureInformation.ndaLanguage.name 
    }

    let ndaLanguageResult = plainTextValidator(valueNDALanguageResult, Field.NdaLanguage);

    if (!ndaLanguageResult.status) {
        errors.ndaLanguage = t(ndaLanguageResult.keyMessage)
    }

    let valuearchoiceOfLawResult = ""

    if (nonDisclosureInformation.choiceOfLaw !== undefined) {
        valuearchoiceOfLawResult = nonDisclosureInformation.choiceOfLaw.name 
    }

    let choiceOfLawResult = plainTextValidator(valuearchoiceOfLawResult, Field.ChoiceOfLaw);

    if (!choiceOfLawResult.status) {
        errors.choiceOfLaw = t(choiceOfLawResult.keyMessage)
    }

    if (nonDisclosureInformation.SignatoryAuthority !== undefined) {
        const signatoryAuthorityErrorList: any = [];
        nonDisclosureInformation.SignatoryAuthority.forEach((item, index: number) => {
            const signatoryAuthorityError = {name: "", value: ""}
            let isValidTitle = SignatoryValidate(item.name, Field.AuthorisedSignatory)
            let isHaveIdNameOfsignatory = SignatoryValidate(item.value, Field.AuthorisedSignatory)
            if (!isValidTitle.status || !isHaveIdNameOfsignatory) {
                signatoryAuthorityError.name = t(isValidTitle.keyMessage)
                signatoryAuthorityError.value = t(isValidTitle.keyMessage)
                signatoryAuthorityErrorList[index] = signatoryAuthorityError
            }
        });
        if (signatoryAuthorityErrorList.length) {
            errors.SignatoryAuthority = signatoryAuthorityErrorList
        }
    }

    let nameOfSigningCompany1Result = plainTextValidator(nonDisclosureInformation.nameOfSigningI, Field.NameOfSigningCompany1)

    if (!nameOfSigningCompany1Result.status) {
        errors.nameOfSigningI = t(nameOfSigningCompany1Result.keyMessage)
    }

    let nameOfSigningCompany2Result = plainTextValidator(nonDisclosureInformation.nameOfSigningII, Field.NameOfSigningCompany2)

    if (!nameOfSigningCompany2Result.status) {
        errors.nameOfSigningII = t(nameOfSigningCompany2Result.keyMessage)
    }

    let titleAndCapacityOfSigningCompany1Result = plainTextValidator(nonDisclosureInformation.titleAndCapacityOfSigningI, Field.TitleAndCapacityOfSigningCompany1)

    if (!titleAndCapacityOfSigningCompany1Result.status) {
        errors.titleAndCapacityOfSigningI = t(titleAndCapacityOfSigningCompany1Result.keyMessage)
    }

    let titleAndCapacityOfSigningCompany2Result = plainTextValidator(nonDisclosureInformation.titleAndCapacityOfSigningII, Field.TitleAndCapacityOfSigningCompany2)

    if (!titleAndCapacityOfSigningCompany2Result.status) {
        errors.titleAndCapacityOfSigningII = t(titleAndCapacityOfSigningCompany2Result.keyMessage)
    }

    return errors;
};

export default validate