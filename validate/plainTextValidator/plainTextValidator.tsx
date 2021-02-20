import { KeyManager } from '../../manager/keyManager';
import { regexExpression } from "../interface";
export enum Field {
	FirstName = 'FirstName',
	LastName = 'LastName',
	CompanyName1 = 'CompanyName1',
	RegistrationNumber = 'RegistrationNumber',
	AddressNumber = 'AddressNumber',
	Village = 'Village',
	Road = 'Road',
	Province = 'Province',
	District = 'District',
	SubDistrict = 'SubDistrict',
	ZipCode = 'ZipCode',
	AuditorLicense = 'AuditorLicense',
	AuditorName = 'AuditorName',
	DisclosureNameI = 'DisclosureNameI',
	DisclosureNameII = 'DisclosureNameII',
	AddressI = 'AddressI',
	AddressII = 'AddressII',
	Date = 'Date',
	EndDate = 'EndDate',
	ScopeOfDiscussion = 'ScopeOfDiscussion',
	PeriodOfSecret = 'PeriodOfSecret',
	ArbitrationJurisdiction = 'ArbitrationJurisdiction',
	ChoiceOfLaw = 'ChoiceOfLaw',
	NameOfSigningCompany1 = 'NameOfSigningCompany1',
	NameOfSigningCompany2 = 'NameOfSigningCompany2',
	TitleAndCapacityOfSigningCompany1 = 'TitleAndCapacityOfSigningCompany1',
	TitleAndCapacityOfSigningCompany2 = 'TitleAndCapacityOfSigningCompany2',
	CorporateName = 'CorporateName',
	CorporateFamilyName = 'CorporateFamilyName',
	CorporateAddress = 'CorporateAddress',
	CorporateTypeOfShares = 'CorporateTypeOfShares',
	CorporateAmountHolding = 'CorporateAmountHolding',
	CorporateEmail = 'CorporateEmail',
	CorporatePrefixTelephone = 'CorporatePrefixTelephone',
	CorporateTelephone = 'CorporateTelephone',
	ReasonAddressI = "ReasonAddressI",
	ReasonAddressII = "ReasonAddressII",
	ReasonDisclosureNameI = "ReasonDisclosureNameI",
	ReasonDisclosureNameII = "ReasonDisclosureNameII",
	ReasonNameOfSigningCompanyI = "ReasonNameOfSigningCompanyI",
	ReasonNameOfSigningCompanyII = "ReasonNameOfSigningCompanyII",
	ReasonTitleAndCapacityOfSigningCompanyI = "ReasonTitleAndCapacityOfSigningCompanyI",
	ReasonTitleAndCapacityOfSigningCompanyII = "ReasonTitleAndCapacityOfSigningCompanyII",
	ReasonScopeOfDiscussion = "ReasonScopeOfDiscussion",
	ReasonDate = "ReasonDate",
	ReasonArbitrationJurisdiction = "ReasonArbitrationJurisdiction",
	ReasonEndDate = "ReasonEndDate",
	ReasonChoiceOfLaw = "ReasonChoiceOfLaw",
	ReasonPeriodOfSecret = "ReasonPeriodOfSecret",
	ReasonOther = "ReasonOther",
	NdaLanguage = "NdaLanguage",
	BusinessRegistration = "businessRegistration",
	BusinessName = "businessName",
	HqAddress = "hqAddress",
	RegistrateredCapital = "registrateredCapital",
	AuthoisedSignatory = "authoisedSignatory",
	AuthoiseSigningAuthority = "authoiseSigningAuthority",
	AuthorisedSignatory = "authorisedSignatory",
	SignatoryAuthority = "signatoryAuthority",
	VerifyFirstName = "verifyFirstName",
	VerifyLastName = "verifyLastName",
	RejectVerifyFirstName = "rejectVerifyFirstName",
	RejectVerifyLastName = "rejectVerifyLastName"
}

export const plainTextValidator = (text: string, field: Field) => {
	if (isPlainText(text)) {
		return {
			status: true,
			keyMessage: null
		};
	}
	return {
		status: false,
		keyMessage: keyErrorMessage(field)
	};
};

export const plainTextOrWhitespaceValidator = (text: string, field: Field) => {
	if (isPlainTextAndWhitespace(text)) {
		return {
			status: true,
			keyMessage: null
		};
	}
	return {
		status: false,
		keyMessage: keyErrorMessage(field)
	};
};

export const PainTextThaiAndEnglishValidator = (text: string, field: Field) => {
	if (isPainTextThaiAndEnglish(text)) {
		return {
			status: true,
			keyMessage: null
		};
	}
	return {
		status: false,
		keyMessage: keyErrorMessage(field)
	};
};

export const SignatoryValidate = (text: any, field: Field) => {
	if (isSignatoryValue(text)) {
		return {
			status: true,
			keyMessage: null
		};
	}
	return {
		status: false,
		keyMessage: keyErrorMessage(field)
	};
};

const keyErrorMessage = (field: Field) => {
	switch (field) {
		case Field.FirstName:
			return KeyManager.FirstNameInValid;

		case Field.LastName:
			return KeyManager.LastNameInValid;

		case Field.CompanyName1:
			return KeyManager.CompanyNameInvalid;

		case Field.RegistrationNumber:
			return KeyManager.RegistrationNumberInvalid;

		case Field.AddressNumber:
			return KeyManager.AddressNumberInvalid;

		case Field.Village:
			return KeyManager.VillageInvalid;

		case Field.Road:
			return KeyManager.RoadInvalid;
		case Field.Province:
			return KeyManager.ProvinceInvalid;

		case Field.District:
			return KeyManager.DistrictInvalid;

		case Field.SubDistrict:
			return KeyManager.SubDistrictInvalid;

		case Field.ZipCode:
			return KeyManager.ZipCodeInvalid;

		case Field.AuditorLicense:
			return KeyManager.AuditorLicenseInvalid;

		case Field.AuditorName:
			return KeyManager.AuditorNameInvalid;
		// Nda 
		case Field.DisclosureNameI:
			return KeyManager.Informationrequired

		case Field.DisclosureNameII:
			return KeyManager.Informationrequired

		case Field.AddressI:
			return KeyManager.Informationrequired

		case Field.AddressII:
			return KeyManager.Informationrequired

		case Field.Date:
			return KeyManager.Informationrequired

		case Field.EndDate:
			return KeyManager.Informationrequired

		case Field.ScopeOfDiscussion:
			return KeyManager.Informationrequired

		case Field.PeriodOfSecret:
			return KeyManager.Informationrequired

		case Field.ArbitrationJurisdiction:
			return KeyManager.Informationrequired

		case Field.ChoiceOfLaw:
			return KeyManager.Informationrequired

		case Field.NameOfSigningCompany1:
			return KeyManager.Informationrequired

		case Field.NameOfSigningCompany2:
			return KeyManager.Informationrequired

		case Field.TitleAndCapacityOfSigningCompany1:
			return KeyManager.Informationrequired

		case Field.TitleAndCapacityOfSigningCompany2:
			return KeyManager.Informationrequired
		case Field.NdaLanguage:
			return KeyManager.Informationrequired
		// Corporate
		case Field.CorporateName:
			return KeyManager.CorporateNameInvalid
		case Field.CorporateFamilyName:
			return KeyManager.CorporateFamilyNameInvalid
		case Field.CorporateAddress:
			return KeyManager.CorporateAddressInvalid
		case Field.CorporateTypeOfShares:
			return KeyManager.CorporateTypeOfSharesInvalid
		case Field.CorporateAmountHolding:
			return KeyManager.CorporateAmountHoldingInvalid
		case Field.CorporateEmail:
			return KeyManager.CorporateEmailInvalid
		case Field.CorporatePrefixTelephone:
			return KeyManager.CorporatePrefixTelephoneInvalid
		case Field.CorporateTelephone:
			return KeyManager.CorporateTelephoneInvalid

		// Reject Reason 
		case Field.ReasonAddressI:
			return KeyManager.FieldNotValid
		case Field.ReasonAddressII:
			return KeyManager.FieldNotValid
		case Field.ReasonDisclosureNameI:
			return KeyManager.FieldNotValid
		case Field.ReasonDisclosureNameII:
			return KeyManager.FieldNotValid
		case Field.ReasonNameOfSigningCompanyI:
			return KeyManager.FieldNotValid
		case Field.ReasonNameOfSigningCompanyII:
			return KeyManager.FieldNotValid
		case Field.ReasonTitleAndCapacityOfSigningCompanyI:
			return KeyManager.FieldNotValid
		case Field.ReasonTitleAndCapacityOfSigningCompanyII:
			return KeyManager.FieldNotValid
		case Field.ReasonScopeOfDiscussion:
			return KeyManager.FieldNotValid
		case Field.ReasonDate:
			return KeyManager.FieldNotValid
		case Field.ReasonArbitrationJurisdiction:
			return KeyManager.FieldNotValid
		case Field.ReasonEndDate:
			return KeyManager.FieldNotValid
		case Field.ReasonChoiceOfLaw:
			return KeyManager.FieldNotValid
		case Field.ReasonPeriodOfSecret:
			return KeyManager.FieldNotValid
		case Field.ReasonOther:
			return KeyManager.FieldNotValid

		// General information
		case Field.BusinessRegistration:
			return KeyManager.FieldNotValid
		case Field.BusinessName:
			return KeyManager.FieldNotValid
		case Field.HqAddress:
			return KeyManager.FieldNotValid
		case Field.RegistrateredCapital:
			return KeyManager.FieldNotValid
		case Field.AuthoisedSignatory:
			return KeyManager.FieldNotValid
		case Field.AuthoiseSigningAuthority:
			return KeyManager.FieldNotValid
		
		case Field.AuthorisedSignatory:
			return KeyManager.FieldNotValid
		
		case Field.SignatoryAuthority:
			return KeyManager.FieldNotValid

		case Field.VerifyFirstName:
			return KeyManager.FieldNotValid

		case Field.VerifyLastName:
			return KeyManager.FieldNotValid
			
		case Field.RejectVerifyFirstName:
			return KeyManager.FieldNotValid

		case Field.RejectVerifyLastName:
			return KeyManager.FieldNotValid

		default:
			return '';
	}
};

const isPlainText = (text: string) => {
	let isHasText = text !== undefined

	if (isHasText) {
		return text.trim().length !== 0
	}

	return isHasText;
};

const isPlainTextAndWhitespace = (text: string) => {
	let isHasText = text !== undefined

	if (isHasText) {
		return text.trim().length !== 0
	}

	return isHasText;
};

const isPainTextThaiAndEnglish = (text: string) => {
	let isHasText = text !== undefined
	if (isHasText) {
		return text.trim().length !== 0 && regexExpression.regexThaiEng.test(text)
	}
};

const isSignatoryValue = (text: string) => {
	let isHasText = text !== undefined
	if (isHasText) {
		return  text.trim().length !== 0 && regexExpression.regexThaiEng.test(text)
	}
};