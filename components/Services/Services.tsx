import { ServiceItem } from './ServicesInterfaces';
import { withTranslation } from '../../i18n';

const Services = ({ servicesPresenter, t }: any) => {
	return (
		<section className="text-center">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
						<div className="mb-5">
							<h2 className="mt-3">{t(servicesPresenter.keyHeader)}</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="p-7 rounded bg-white shadow">
							<div className="row align-items-center">
								{servicesPresenter.serviceItems.map((item: ServiceItem, index: number) => (
									<div className={item.style} key={`service-item-${index}`}>
										<div>
											<div>
												<img
													className="img-fluid"
													src={item.imagePath}
													alt={`image-service-item-${index}`}
												/>
											</div>
											<h5 className="mt-4 mb-3">{t(item.keyTitle)}</h5>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default withTranslation('common')(Services);
