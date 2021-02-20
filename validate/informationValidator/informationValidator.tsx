import { FormErrors } from 'redux-form';
import { ErrorField } from '../interface';
import { plainTextValidator, Field } from '../plainTextValidator/plainTextValidator';

const validate = (informationForm: any, { t }: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};

	let companyNameValidatorResult = plainTextValidator(informationForm.companyName1, Field.CompanyName1);

	if (!companyNameValidatorResult.status) {
		errors.companyName1 = t(companyNameValidatorResult.keyMessage);
	}

	let registrationNumberValidatorResult = plainTextValidator(
		informationForm.registrationNumber,
		Field.RegistrationNumber
	);

	if (!registrationNumberValidatorResult.status) {
		errors.registrationNumber = t(registrationNumberValidatorResult.keyMessage);
	}

	let addressNumberValidatorResult = plainTextValidator(informationForm.addressNumber, Field.AddressNumber);

	if (!addressNumberValidatorResult.status) {
		errors.addressNumber = t(addressNumberValidatorResult.keyMessage);
	}

	let villageValidatorResult = plainTextValidator(informationForm.village, Field.Village);

	if (!villageValidatorResult.status) {
		errors.village = t(villageValidatorResult.keyMessage);
	}

	let roadValidatorResult = plainTextValidator(informationForm.road, Field.Road);

	if (!roadValidatorResult.status) {
		errors.road = t(roadValidatorResult.keyMessage);
	}

	let provinceValidatorResult = plainTextValidator(informationForm.province, Field.Province);

	if (!provinceValidatorResult.status) {
		errors.province = t(provinceValidatorResult.keyMessage);
	}

	let districtValidatorResult = plainTextValidator(informationForm.district, Field.District);

	if (!districtValidatorResult.status) {
		errors.district = t(districtValidatorResult.keyMessage);
	}

	let subDistrictValidatorResult = plainTextValidator(informationForm.subDistrict, Field.SubDistrict);

	if (!subDistrictValidatorResult.status) {
		errors.subDistrict = t(subDistrictValidatorResult.keyMessage);
	}

	let zipCodeValidatorResult = plainTextValidator(informationForm.zipCode, Field.ZipCode);

	if (!zipCodeValidatorResult.status) {
		errors.zipCode = t(zipCodeValidatorResult.keyMessage);
	}

	let auditorLicenseValidatorResult = plainTextValidator(informationForm.auditorLicense, Field.AuditorLicense);

	if (!auditorLicenseValidatorResult.status) {
		errors.auditorLicense = t(auditorLicenseValidatorResult.keyMessage);
	}

	let auditorNameValidatorResult = plainTextValidator(informationForm.auditorName, Field.AuditorName);

	if (!auditorNameValidatorResult.status) {
		errors.auditorName = t(auditorNameValidatorResult.keyMessage);
	}

	return errors;
};

export default validate;