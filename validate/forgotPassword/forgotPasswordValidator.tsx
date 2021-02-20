import { FormErrors } from 'redux-form';
import { ErrorField } from '../interface';
import { emailValidator } from '../emailValidator/emailValidator';

const validate = (forgotPassword: any, { t }: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};

	let emailValidatorResult = emailValidator(forgotPassword.email);

	if (!emailValidatorResult.status) {
		errors.email = t(emailValidatorResult.keyMessage);
	}

	return errors;
};

export default validate;
