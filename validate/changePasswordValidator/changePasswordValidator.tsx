import { FormErrors } from 'redux-form';
import { ErrorField } from '../interface';
import { passwordValidator, passwordMatchingValidator } from '../passwordValidator/passwordValidator';

const validate = (changePasswordInformation: any, { t }: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};

	let newPassword = passwordValidator(changePasswordInformation.password);

	if (!newPassword.status) {
		errors.password = t(newPassword.keyMessage);
	}

	let newPasswordValidatorResult = passwordMatchingValidator(
		changePasswordInformation.password,
		changePasswordInformation.confirmPassword
	);

	if (!newPasswordValidatorResult.status) {
		errors.confirmPassword = t(newPasswordValidatorResult.keyMessage);
	}

	return errors;
};

export default validate;