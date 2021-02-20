import { withTranslation } from '../../i18n'

const Success = ({ successPresenter, t }: any) => {
    return (
        <div className="container">
            <div className="row text-center mt-5">
                <div className="col-12">
                    <img className="w-25" src={successPresenter.keyimagePath} alt=""/>
                </div>
                <div className="col-12">
                    <h3>
                        {t(successPresenter.title)}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default withTranslation('common')(Success)