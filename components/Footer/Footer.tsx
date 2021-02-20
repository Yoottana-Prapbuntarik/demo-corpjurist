// import Link from 'next/link';
import { withTranslation } from '../../i18n';
// import { Field } from 'redux-form';
// import TextField from '../FieldComponents/TextField';
// import ButtonSubmit from '../FieldComponents/ButtonSubmit';
import {
	// MenuItem, 
	//SocialItem
} from './FooterViewInterfaces';
import './styles.scss';

const Footer = ({
	// handleSubmit, 
	// footerPresenter,
	// submitSubscribe, 
	// t 
	}: any) => {
	return (
		<footer
			className="py-11 bg-primary position-relative"
			data-bg-img="assets/images/landing/footer_background.png"
		>
			<div className="shape-1 footer-container">
				<svg viewBox="0 0 500 150" preserveAspectRatio="none" className="footer-graphics">
					<path
						d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
						className="footer-graphics-path"
					/>
				</svg>
			</div>
			<div className="container mt-11">
				<div className="row py-5">
					{/* <div className="col-12 col-lg-5 col-xl-4 mr-auto mb-6 mb-lg-0">
						<div className="subscribe-form bg-warning-soft p-5 rounded">
							<h5 className="mb-4 text-white">{t(footerPresenter.subscribeItem.keySubScribeTitle)}</h5>
							<h6 className="text-light">{t(footerPresenter.subscribeItem.keySubScribeDescription)}</h6>
							<form className="group" onSubmit={handleSubmit(submitSubscribe)}>
								<Field
									name="email"
									type="email"
									component={TextField}
									styleTextError="text-white"
									className="email form-control email-subscribe-height"
									label={t(footerPresenter.subscribeItem.keyEmail)}
									value={footerPresenter.subscribeItem.keyValue}
								/>
								<Field
									name="subscribe"
									type="submit"
									style="btn btn-outline-light btn-block mt-3 mb-2"
									component={ButtonSubmit}
									label={t(footerPresenter.subscribeItem.keySubmitButton)}
								/>
							</form>
							<small className="text-light">
								{t(footerPresenter.subscribeItem.keySubDescriptionForSubScribe)}
							</small>
						</div>
					</div> */}
					<div className="col-12 text-center">
						{/* <div className="row">
							<div className="col-12 col-sm-4 navbar-dark">
								<h5 className="mb-4 text-white">{t(footerPresenter.menu.keyHeaderTitle)}</h5>
								<ul className="navbar-nav list-unstyled mb-0">
									{footerPresenter.menu.footerMenuItems.map((item: MenuItem, index: number) => (
										<Link href={item.routePath} key={`footer-view-item-${index}`}>
											<a className="nav-link">
												<li className="mb-3 nav-item ">{t(item.keyTitle)}</li>
											</a>
										</Link>
									))}
								</ul>
							</div>
						</div> */}
						<div className="row mt-5">
							<div className="col-12  col-sm-6">
								<p className="footer-logo text-white h2 mb-0">
									Corp<span className="font-weight-bold">Jurist</span>
								</p>
							</div>
							<div className="col-12  col-sm-6 mt-6 mt-sm-0">
								{/* <ul className="list-inline mb-0">
									{footerPresenter.socialItems.map((item: SocialItem, index: number) => (
										<li className="list-inline-item" key={`social-view-item-${index}`}>
											<Link href={item.routePath}>
												<a className="text-light ic-2x pr-2" target="_blank">
													<i className={item.name} />
												</a>
											</Link>
										</li>
									))}
								</ul> */}
							</div>
						</div>
					</div>
				</div>
				<div className="row text-white text-center mt-8">
					<div className="col">
						<hr className="mb-9" />
						Copyright 2020 by
						{'    '}
						CorpJurist
						{'    '}| All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
};

export default withTranslation('common')(Footer);
