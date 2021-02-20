import { ListViewItem } from './ListViewInterfaces';
import { withTranslation } from '../../i18n';

const ListView = ({ listViewPresenter, t }: any) => {
	return (
		<section>
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
						<div className="mb-5">
							<h2 className="mt-3">{t(listViewPresenter.keyHeader)}</h2>
						</div>
					</div>
				</div>
				<div className="row align-items-center justify-content-between mb-10">
					{listViewPresenter.listViewItems.map((item: ListViewItem, index: number) => (
						<div
							key={`list-view-item-${index}`}
							className="row align-items-center justify-content-between mb-5"
						>
							<div className="col-12 col-lg-4 mb-6 mb-lg-0">
								<img src={item.imagePath} alt={`image-item-${index}`} className="img-fluid" />
							</div>
							<div className="col-12 col-lg-8 col-xl-8 p-4">
								<div>
									<h4 className="mt-3">{t(item.keyTitle)}</h4>
									<p className="lead text-justify">{t(item.keyDescription)}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default withTranslation('common')(ListView);
