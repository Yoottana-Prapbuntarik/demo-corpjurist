import { FormErrors } from 'redux-form';
import { ErrorField } from '../interface';
import { passwordValidator, passwordMatchingValidator } from '../passwordValidator/passwordValidator';

const validate = (userChangePasswordInformation: any, { t }: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};

	let oldPasswordValidatorResult = passwordValidator(userChangePasswordInformation.oldPassword);

	if (!oldPasswordValidatorResult.status) {
		errors.oldPassword = t(oldPasswordValidatorResult.keyMessage);
	}

    let newPasswordValidatorResult = passwordValidator(userChangePasswordInformation.changeNewPassword);

	if (!newPasswordValidatorResult.status) {
		errors.changeNewPassword = t(newPasswordValidatorResult.keyMessage);
	}

	let confirmPasswordMatchingValidatorResult = passwordMatchingValidator(
		userChangePasswordInformation.changeNewPassword,
		userChangePasswordInformation.confirmNewPassword
	);

	if (!confirmPasswordMatchingValidatorResult.status) {
		errors.confirmNewPassword = t(confirmPasswordMatchingValidatorResult.keyMessage);
	}

	return errors;
};

export default validate;
