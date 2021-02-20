import { withTranslation } from '../../i18n'

const PrivacyPolicy = ({ privacyPolicyPresenter, t }: any) => {
    return (
        <div className="container">
            <div className="row text-center mt-5">
                <div className="col-12">
                    <img className="w-50" src={privacyPolicyPresenter.keyimagePath} alt="" />
                </div>
                <div className="col-12">
                    <h3>
                        {t(privacyPolicyPresenter.title)}
                    </h3>
                </div>
                <div className="col-12 text-left text-dark pt-3">
                    <h5 className="pt-5">{t('titlePrivacy')}</h5>
                    <p>{t('subTitlePrivacyI')}</p>
                    <p>{t('subTitlePrivacyII')}</p>
                    <p>{t('subTitlePrivacyIII')}</p>
                    <ol>
                        <li>{t('listDetailI')}</li>
                        <li>{t('listDetailII')}</li>
                        <li>{t('listDetailIII')}</li>
                        <li>{t('listDetailIV')}</li>
                    </ol>
                    <h5 className="pt-5">{t('titleParagraphII')}</h5>
                    <p>{t('subTitleParagraphII')}</p>
                    <ol>
                        <li>{t('titleParagraphIIListI')}</li>
                        <li>{t('titleParagraphIIListII')}</li>
                        <li>{t('titleParagraphIIListIII')}</li>
                        <li>{t('titleParagraphIIListIV')}</li>
                        <li>{t('titleParagraphIIListV')}</li>
                        <li>{t('titleParagraphIIListVI')}</li>
                        <li>{t('titleParagraphIIListVII')}</li>
                        <li>{t('titleParagraphIIListVIII')}</li>
                        <li>{t('titleParagraphIIListIX')}</li>
                    </ol>
                    <h5 className="pt-5">
                        {t('subjectPrivacyI')}
                    </h5>
                    <p>{t('detailSubjectPrivacyI')}</p>
                    <p className="pt-3">
                        <span className="font-weight-bold text-dark">
                            {t('subjectPrivacyII')} &nbsp;
                        </span>
                        {t('detailSubjectPrivacyII')}
                    </p>
                    <p className="pt-3">
                        <span className="font-weight-bold text-dark">
                            {t('subjectPrivacyIII')} &nbsp;
                        </span>
                        {t('detailSubjectPrivacyIII')}
                    </p>
                    <p className="pt-3">
                        <span className="font-weight-bold text-dark">
                            {t('subjectPrivacyIV')} &nbsp;
                        </span>
                        {t('detailSubjectPrivacyIV')}
                        <br />
                        {t('detailSubjectPrivacyV')}
                    </p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyVI')}
                    </h5>
                    <p>{t('detailSubjectPrivacyVI')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyVII')}
                    </h5>
                    <p>{t('detailSubjectPrivacyVII')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyVIII')}
                    </h5>
                    <p>{t('detailSubjectPrivacyVIII')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyIX')}
                    </h5>
                    <p>{t('detailSubjectPrivacyIX')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyX')}
                    </h5>
                    <p>{t('detailSubjectPrivacyX')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyXI')}
                    </h5>
                    <p>{t('detailSubjectPrivacyXI')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyXII')}
                    </h5>
                    <p>{t('detailSubjectPrivacyXII')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyXIII')}
                    </h5>
                    <p>{t('detailSubjectPrivacyXIII')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyXIV')}
                    </h5>
                    <p>{t('detailSubjectPrivacyXIV')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyXV')}
                    </h5>
                    <p>{t('detailSubjectPrivacyXV')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyXVI')}
                    </h5>
                    <p>{t('detailSubjectPrivacyXVI')}</p>
                    <h5 className="pt-5">
                        {t('subjectPrivacyXVII')}
                    </h5>
                    <p>{t('detailSubjectPrivacyXVII')}</p>
                </div>
            </div>
        </div>
    )
}

export default withTranslation('common')(PrivacyPolicy)