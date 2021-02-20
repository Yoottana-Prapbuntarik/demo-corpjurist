export interface ErrorField {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	confirmEmail: string;
	confirmPassword: string;
	companyName1: string;
	companyName2: string;
	companyName3: string;
	registrationNumber: string;
	addressNumber: string;
	village: string;
	road: string;
	province: string;
	district: string;
	subDistrict: string;
	zipCode: string;
	auditorLicense: string;
	auditorName: string;
	disclosureName: string;
	disclosureNameII: string;
	addressI: string;
	addressII: string;
	nameOfSigningI: string;
	nameOfSigningII: string;
	titleAndCapacityOfSigningI: string;
	titleAndCapacityOfSigningII: string;
	scopeOfDiscussion: string;
	date: string;
	choiceOfLaw: string;
	endDate: string;
	arbitrationJurisdiction: string;
	periodOfSecret: string;
	emailPartyII: string;
	approval: string;
	familyNameOfShareDetail: string;
	addressOfShareholderDetail: string;
	typeOfShareDetail: string;
	amountOfShareDetail: string;
	emailOfShareDetail: string;
	nationTel: string;
	phoneOfShareDetail: string;
	nameOfShareholderDetail: string;
	reasonAddressI: string;
	reasonAddressII: string;
	reasonDisclosureNameI: string;
	reasonDisclosureNameII: string;
	reasonNameOfSigningCompanyI: string;
	reasonNameOfSigningCompanyII: string;
	reasonTitleAndCapacityOfSigningCompanyI: string;
	reasonTitleAndCapacityOfSigningCompanyII: string;
	reasonScopeOfDiscussion: string;
	reasonDate: string;
	reasonArbitrationJurisdiction: string;
	reasonEndDate: string;
	reasonChoiceOfLaw: string;
	reasonPeriodOfSecret: string;
	reasonOther: string;
	ndaLanguage: string;
	oldPassword: string;
	changeNewPassword: string;
	confirmNewPassword: string;
	authoiseSigningAuthority: string;
	authoisedSignatory: string;
	businessName: string;
	businessRegistration: string;
	hqAddress: string;
	registrateredCapital: string;
	totalAmountSheet: string;
	authorisedSignatory: any;
	signatoryAuthority: any;
	SignatoryAuthority: any,
	verifyEmail: string,
	verifyTelephone: string,
	verifyFirstName: string,
	verifyLastName: string,
	verifyCitizenId: string,
	citizenId: string,
	telephoneNumber: string;
	rejectCitizenId: string;
	rejectVerifyFirstName: string;
	rejectVerifyLastName: string;
	rejectVerifyTelephone: string;
}

export const regexExpression = {
	regexEmail: new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9./_*/-]+\.[A-Z]{2,4}$/i),
	regexText: new RegExp(/^[a-zA-Z0-9ก-๙/,&./ ]*$/),
	regexThaiEng: new RegExp(/^[a-zA-Zก-๙/,&./ ]*$/),
	regexTextOrWhiteSpace: new RegExp(/^[a-zA-Z0-9ก-๙/,&.]*$/),
	regexPassword: new RegExp(/^[a-zA-Z0-9]{8,}$/),
	regexTelephone: new RegExp(/^[0-9]{10,10}$/),
	regexCitizen: new RegExp(/^[0-9]{13,13}$/)
};