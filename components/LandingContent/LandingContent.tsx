import { withTranslation } from '../../i18n';
import Link from "next/link";
import "./landingContent.scss"
const LandingContent = ({ landingContentPresenter, t }: any) => {
    return (

        <div className="text-center">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12 col-lg-12">
                        <img className="width-responsive" src={landingContentPresenter.mainContent.image} alt={landingContentPresenter.mainContent.detail} />
                    </div>
                    <div className="col-12 col-lg-12">
                        <div className="mt-5 text-justify text-light-blue">
                            {t(landingContentPresenter.mainContent.detail)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-light-gray mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        {
                            landingContentPresenter.sectionItem.map((item, index: number) => {
                                return (
                                    <div className="col-lg-2 col-12 mb-5 p-0" key={index}>
                                        <img className="img-services" src={item.images} />
                                    </div>
                                )
                            })
                        }
                        <div className="my-5 text-justify col-12 text-light-blue">
                            {t(landingContentPresenter.detailFunction)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    {
                        landingContentPresenter.sectionItem2.map((item, index: number) => {
                            return (
                                <div className="col-lg-2 col-12 mb-5 p-0 " key={index}>
                                    <img className="img-services" src={item.images} />
                                </div>
                            )
                        })
                    }
                    <div className="my-5 text-justify col-12 text-light-blue">
                        {t(landingContentPresenter.detailClientAccess)}
                    </div>

                    <div className="col-12 text-justify text-light-blue">
                        {t(landingContentPresenter.detailKeepSeat)}
                    </div>
                    <div className="col-12 justify-content-center d-flex my-5">
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeGjYzUl2Ej7gd1xWCrkUPpRsOc3E2pAk1q4nhlznneD9O_3g/viewform?fbclid=IwAR2obuwKvPr8uDBsE-wV9BeicijMRICnhRY7jO3-uLaSHLcnNpW6ADb578Y">
                            <a className="btn btn-primary" target="_blank">
                                {t('register')}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation('common')(LandingContent)