import Link from 'next/link';
import { withTranslation } from '../../i18n';
import { Field } from 'redux-form';
import TextField from '../FieldComponents/TextField';
import ButtonSubmit from '../FieldComponents/ButtonSubmit';
import Loading from '../LoadingPage/Loading';
import SweetAlert from 'react-bootstrap-sweetalert'


const ForgotPassword = ({ handleSubmit, submitResetPassword, acknowledgeError, forgotPasswordPresenter, t }: any) => {
	const acceptAcknowledgeError = (bool) => {
		acknowledgeError(bool)
	}
	return (
		<div className="container mt-5">
			{forgotPasswordPresenter.isLoading === true && <Loading />}
			<div className="row">
				<SweetAlert
					custom
					showCloseButton
					confirmBtnText="Ok"
					show={forgotPasswordPresenter.isAcknowledge}
					confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
					cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
					title={t(forgotPasswordPresenter.keyMessageForgotPassword)}
					onConfirm={() => acceptAcknowledgeError(false)}
				>
				</SweetAlert>
				<div className="col-md-6 col-12">
					<img
						className="img-responsive w-100"
						src={forgotPasswordPresenter.keyImagePath}
						alt="image signin"
					/>
				</div>
				<div className="col-md-6 col-12 mt-5">
					<div>
						<div className="text-center ">
							<h2 className="pt-2">{t(forgotPasswordPresenter.keyHeader)}</h2>
						</div>
						<form onSubmit={handleSubmit(submitResetPassword)}>
							<div className="messages" />
							<div className="form-group">
								<label>{t(forgotPasswordPresenter.keyEmail)}</label>
								<Field
									name="email"
									type="email"
									component={TextField}
									styleTextError="text-danger"
									className="form-control"
									label={t(forgotPasswordPresenter.keyEmail)}
								/>
							</div>
							<Field
								name="submit"
								type="submit"
								style="btn btn-primary btn-block w-100"
								component={ButtonSubmit}
								label={t(forgotPasswordPresenter.keyButtonName)}
							/>
						</form>
						<div className="mt-4 text-center">
							<Link href="/signin">
								<a>
									{t(forgotPasswordPresenter.keyBackToLogin)}
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withTranslation('common')(ForgotPassword);
