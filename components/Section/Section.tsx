import { withTranslation } from '../../i18n';
import Link from 'next/link';

const Section = ({ sectionPresenter, t }: any) => {
	return (
		<section>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
						<img src={sectionPresenter.imagePath} className="img-fluid" alt="..." />
					</div>
					<div className="col-12 col-lg-7 col-xl-6 order-lg-1">
						<h1 className="display-4 mt-3">{t(sectionPresenter.keyTitle)}</h1>
						<p className="lead text-muted">{t(sectionPresenter.keyDescription)}</p>
							<Link href={sectionPresenter.routePath}>
						 <a href="#" className="btn btn-primary shadow mr-1">
							{t(sectionPresenter.keyButtonTitle)}
						</a>
							</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default withTranslation('common')(Section);