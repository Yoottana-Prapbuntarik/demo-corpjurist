import { FormErrors } from 'redux-form';
import { ErrorField } from '../interface';
import { emailValidator } from '../emailValidator/emailValidator';
import { passwordValidator } from '../passwordValidator/passwordValidator';

const validate = (signinInformation: any, { t }: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};

	let emailValidatorResult = emailValidator(signinInformation.email);

	if (!emailValidatorResult.status) {
		errors.email = t(emailValidatorResult.keyMessage);
	}

	let passwordValidatorResult = passwordValidator(signinInformation.password);

	if (!passwordValidatorResult.status) {
		errors.password = t(passwordValidatorResult.keyMessage);
	}

	return errors;
};

export default validate;
