import { withTranslation } from "../../i18n";
import TextFieldArray from '../FieldComponents/FieldArray'
import { FieldArray } from "redux-form";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const AuthorisedSignatory = ({
    t,
    addSignatoryAuthorityForm,
    corporateSecretaryPresenter,
    removeSigning,
    handleChangeSignatory
}: any) => {

    const [DataApi, setDataApi] = useState([])

    useEffect(() => {
        if (corporateSecretaryPresenter.dataAPI.length !== 0) {
            setDataApi(corporateSecretaryPresenter.dataAPI[0].signing_authority)
        }

    }, [corporateSecretaryPresenter.dataAPI])

    const Dispatch = useDispatch()

    return (
        <div className="col-12 mt-5">
            <div className="row">
                <div className="col-6 mt-2 d-flex align-items-center">
                    {t(corporateSecretaryPresenter.labelSignatoryAuthority)}
                </div>
                <div className="col-6 mt-2 d-flex justify-content-end">
                    <div className="btn-custome bg-primary text-white"
                        onClick={() => Dispatch(addSignatoryAuthorityForm)}
                    >
                        {t(corporateSecretaryPresenter.btnAdd)}
                    </div>
                </div>

                <div className="col-12 mt-5">
                    <div className="table-responsive-in-mobile">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>{t(corporateSecretaryPresenter.no)}</th>
                                    <th>{t(corporateSecretaryPresenter.signingAuthority)}</th>
                                    <th>{t(corporateSecretaryPresenter.action)}</th>

                                </tr>
                            </thead>
                            <FieldArray name="signatoryAuthority"
                                placeholder={t(corporateSecretaryPresenter.signatoryAuthority.placeholder)}
                                className={"form-control"}
                                dataApi={DataApi}
                                removeSignatory={removeSigning}
                                component={TextFieldArray}
                                rerenderOnEveryChange={true}
                                handleChange={handleChangeSignatory}
                            />
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default withTranslation('common')(AuthorisedSignatory)