import { withTranslation } from '../../i18n'

const NotFoundData = ({ notFoundDataPresenter }: any) => {
    
    return (
        <div className="container">
            <div className="row text-center mt-5">
                <div className="col-12">
                    <img className="w-50" src={notFoundDataPresenter.keyimagePath} alt="404 NOT FOUND" />
                </div>
            </div>
        </div>
    )
}

export default withTranslation('common')(NotFoundData)