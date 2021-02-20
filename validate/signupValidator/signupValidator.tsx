import { FormErrors } from 'redux-form';
import { ErrorField, regexExpression } from '../interface';
import { plainTextValidator, Field } from '../plainTextValidator/plainTextValidator';
import { emailValidator, emailMatchingValidator } from '../emailValidator/emailValidator';
import { passwordValidator, passwordMatchingValidator } from '../passwordValidator/passwordValidator';
import { KeyManager } from "../../manager/keyManager";

const validate = (signupInformation: any, { t }: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};

	let firstNameValidatorResult = plainTextValidator(signupInformation.firstName, Field.FirstName);

	if (!firstNameValidatorResult.status) {
		errors.firstName = t(firstNameValidatorResult.keyMessage);
	}

	let lastNameValidatorResult = plainTextValidator(signupInformation.lastName, Field.LastName);

	if (!lastNameValidatorResult.status) {
		errors.lastName = t(lastNameValidatorResult.keyMessage);
	}

	let emailValidatorResult = emailValidator(signupInformation.email);

	if (!emailValidatorResult.status) {
		errors.email = t(emailValidatorResult.keyMessage);
	}

	let emailMatchingValidatorResult = emailMatchingValidator(signupInformation.email, signupInformation.confirmEmail);

	if (!emailMatchingValidatorResult.status) {
		errors.confirmEmail = t(emailMatchingValidatorResult.keyMessage);
	}

	let passwordValidatorResult = passwordValidator(signupInformation.password);

	if (!passwordValidatorResult.status) {
		errors.password = t(passwordValidatorResult.keyMessage);
	}

	let passwordMatchingValidatorResult = passwordMatchingValidator(
		signupInformation.password,
		signupInformation.confirmPassword
	);

	if (!passwordMatchingValidatorResult.status) {
		errors.confirmPassword = t(passwordMatchingValidatorResult.keyMessage);
	}

	if (signupInformation.citizenId === '' ||
		(!regexExpression.regexCitizen.test(signupInformation.citizenId))) {
		errors.citizenId = t(KeyManager.FieldNotValid)
	}

	if (signupInformation.telephoneNumber === ''
		||
		(!regexExpression.regexTelephone.test(signupInformation.telephoneNumber))) {
		errors.telephoneNumber = t(KeyManager.FieldNotValid)
	}

	return errors;
};

export default validate;
