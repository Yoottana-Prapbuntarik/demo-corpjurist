import { withTranslation } from '../../i18n'

const TermOfCondition = ({ termOfConditionPresenter, t }: any) => {
    return (
        <div className="container">
            <div className="row text-center mt-5">
                <div className="col-12">
                    <img className="w-50" src={termOfConditionPresenter.keyimagePath} alt="" />
                </div>
                <div className="col-12">
                    <h3>
                        {t(termOfConditionPresenter.title)}
                    </h3>
                </div>
                <div className="col-12 text-left text-dark pt-3">
                    <h5 className="pt-5">
                        {t('subjectI')}
                    </h5>
                    <p className="pt-3">
                        {t('detailISubjectI')}
                    </p>
                    <p>
                        {t('detailISubjectII')}
                    </p>
                    <p>
                        {t('detailISubjectIII')}
                    </p>
                    <h5 className="text-center pt-5">
                        {t('subjectII')}
                    </h5>
                    <p>
                        {t('detailII')}
                    </p>
                    <p>
                        <ul className="text-dark">
                            <li>
                                {t('listI')}
                            </li>
                            <li>
                                {t('listII')}
                            </li>
                            <li>
                                {t('listIII')}
                            </li>
                            <li>
                                {t('listIV')}
                            </li>
                        </ul>
                    </p>
                    <h5 className="pt-5">
                        {t('subjectIII')}
                    </h5>
                    <p>{t('choiceA')}</p>
                    <p>{t('choiceB')}</p>
                    <p>{t('choiceC')}</p>
                    <p>{t('choiceD')}</p>

                    <h5 className="pt-5">
                        {t('subjectIV')}
                    </h5>
                    <p>
                        {t('detailIV')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectV')}
                    </h5>
                    <p>
                        {t('detailV')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectVI')}
                    </h5>
                    <p>
                        {t('detailVI')}
                    </p>
                    <ul className="text-dark">
                        <li>
                            {t('detailVIListI')}
                        </li>
                        <li>
                            {t('detailVIListII')}
                        </li>
                        <li>
                            {t('detailVIListIII')}
                            <ul>
                                <li>{t('detailVIListIIIsubListI')}</li>
                                <li>{t('detailVIListIIIsubListII')}</li>
                                <li>{t('detailVIListIIIsubListIII')}</li>
                                <li>{t('detailVIListIIIsubListIV')}</li>
                            </ul>
                        </li>
                        <li>{t('detailVIListIV')}</li>
                        <li>{t('detailVIListV')}</li>
                        <li>{t('detailVIListVI')}</li>
                        <li>{t('detailVIListVII')}</li>
                        <li>{t('detailVIListVIII')}</li>
                        <li>{t('detailVIListIX')}</li>
                        <li>{t('detailVIListX')}</li>
                        <li>{t('detailVIListXI')}</li>
                        <li>{t('detailVIListXII')}</li>
                        <li>{t('detailVIListXIII')}</li>
                        <li>{t('detailVIListXIV')}</li>
                    </ul>
                    <p>
                        {t('closeSubjectVI')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectVII')}
                    </h5>
                    <p>
                        {t('detailSubjectVII')}
                    </p>
                    <p className="pl-4 text-dark">
                        {t('subDetailSubjectVII')}
                    </p>

                    <h5 className="pt-5">
                        {t('subjectVIII')}
                    </h5>
                    <p>
                        {t('detailVIII')}
                    </p>
                    <ul>
                        <li>{t('detailVIIIListI')}</li>
                        <li>{t('detailVIIIListII')}</li>
                        <li>{t('detailVIIIListIII')}</li>
                        <li>{t('detailVIIIListIV')}</li>
                        <li>{t('detailVIIIListV')}</li>
                        <li>{t('detailVIIIListVI')}</li>
                    </ul>
                    <p>
                        {t('closeSubjectVIII')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectIX')}
                    </h5>
                    <p>
                        {t('detailIX')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectX')}
                    </h5>
                    <p>
                        {t('detailX')}
                    </p>
                    <ul>
                        <li>
                            {t('detailXListI')}
                            <ul>
                                <li>{t('detailXListISubListI')}</li>
                                <li>{t('detailXListISubListII')}</li>
                            </ul>
                        </li>
                        <li>{t('detailXListII')}</li>
                        <li>{t('detailXListIII')}</li>
                        <li>{t('detailXListIV')}
                            <ul>
                                <li>{t('detailXListIVSubListI')}</li>
                                <li>{t('detailXListIVSubListII')}</li>
                                <li>{t('detailXListIVSubListIII')}</li>
                            </ul>
                        </li>
                    </ul>
                    <h5 className="pt-5">
                        {t('subjectXI')}
                    </h5>
                    <p>
                        {t('detailXI')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectXII')}
                    </h5>
                    <p>
                        {t('detailXII')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectXIII')}
                    </h5>
                    <p>
                        {t('detailXIII')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectXIV')}
                    </h5>
                    <p>
                        {t('detailXIV')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectXV')}
                    </h5>
                    <p>
                        {t('detailXV')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectXVI')}
                    </h5>
                    <p>
                        {t('detailXVI')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectXVII')}
                    </h5>
                    <p>
                        {t('detailXVII')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectXVIII')}
                    </h5>
                    <p>
                        {t('detailXVIII')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectXIX')}
                    </h5>
                    <p>
                        {t('detailXIX')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default withTranslation('common')(TermOfCondition)