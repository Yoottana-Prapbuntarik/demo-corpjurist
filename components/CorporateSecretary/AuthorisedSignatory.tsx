import { withTranslation } from "../../i18n";
import { FieldArray } from "redux-form";
import { useDispatch } from "react-redux";
import TextFieldArray from "../FieldComponents/FieldArray";
import { useState, useEffect } from "react";

const AuthorisedSignatory = ({
    t,
    corporateSecretaryPresenter,
    addCorporateSecretaryForm,
    removeAuthorised,
    handleChangeAuthorised
}: any) => {

    const Dispatch = useDispatch()

    const [DataApi, setDataApi] = useState([])

    useEffect(() => {
        if (corporateSecretaryPresenter.dataAPI.length !== 0) {
            setDataApi(corporateSecretaryPresenter.dataAPI[0].authorised_signatory)
        }
    }, [corporateSecretaryPresenter.dataAPI])

    return (
        <div className="col-12">
            <div className="row">
                <div className="col-lg-6 col-12 mt-2 d-flex align-items-center">
                    {t(corporateSecretaryPresenter.headerAuthorised)}
                </div>
                <div className="col-lg-6 col-12 mt-2 d-flex justify-content-end">
                    <div className="btn-custome bg-primary text-white" onClick={() => Dispatch(addCorporateSecretaryForm)}>
                        {t(corporateSecretaryPresenter.btnAdd)}
                    </div>
                </div>
                <div className="col-12 mt-5">
                    <div className="table-responsive-in-mobile">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>{t(corporateSecretaryPresenter.no)}</th>
                                    <th>{t(corporateSecretaryPresenter.headerAuthorised)}</th>
                                    <th>{t(corporateSecretaryPresenter.action)}</th>

                                </tr>
                            </thead>
                            <FieldArray name="authorisedSignatory" placeholder={t(corporateSecretaryPresenter.authorisedSignatory.placeholder)}
                                className={"form-control"}
                                component={TextFieldArray}
                                dataApi={DataApi}
                                removeSignatory={removeAuthorised}
                                rerenderOnEveryChange={true}
                                handleChange={handleChangeAuthorised}
                            />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default withTranslation('common')(AuthorisedSignatory)