import { Field } from "redux-form";
import FieldMemberArray from "./FieldMemberArray";
import CustomSelectField from "./CustomSelectField";
import { i18n } from "../../i18n";
import "./styles/fieldMemberArray.scss"

export enum NotNullData {
    One = 1
}

const FieldArray = ({ fields,
    subScribeNameOfSignatory,
    nonDisclosurePresenter,
    removeSignatory,
    labelStyle,
    dataApi, meta: { error } }: any) => {
    const removeItem = async (index: string) => {
        await fields.remove(index)
        await removeSignatory()
    }
    
    subScribeNameOfSignatory(fields.getAll())

    return (
        <>
            <div className="row signatory-table-card">
                {
                    fields.map((FieldItems, index) => {

                        return (
                            <div className="col-12" key={index} >
                                <div className="row">
                                    <div className="col-lg-1" >
                                        <div className="h-100 d-flex align-items-center">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="col-lg-5 ">
                                        <Field
                                            name={`${FieldItems}.name`}
                                            style={"form-control"}
                                            label={i18n.t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}
                                            type="text"
                                            dataAPI={dataApi}
                                            component={CustomSelectField}
                                            labelStyle={labelStyle}
                                        />
                                    </div>

                                    <div className="col-lg-5 ">
                                        <div>
                                            <label className={labelStyle}>{i18n.t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}</label>
                                            <Field
                                                name={`${FieldItems}.title`}
                                                disabledState={false}
                                                label={i18n.t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}
                                                className="form-control"
                                                component={FieldMemberArray}
                                                styleTextError="text-danger"
                                            />
                                        </div>
                                    </div>
                                    {error && <span className="text-danger">{error}</span>}

                                    {
                                        <div className="col-12 d-flex justify-content-end mt-3">
                                            <button
                                                disabled={index === 0 && fields.length === 1 ? true : false}
                                                className={" text-white btn bg-danger btn-remove-signatory"
                                                }
                                                type="button"
                                                title="Remove FieldItems"
                                                onClick={() => removeItem(index)}
                                            >
                                                {i18n.t('delete')}
                                            </button>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <tbody className="signatory-table-body">
                {

                    fields.map((FieldItems, index) => {

                        return (
                            <tr key={index}>
                                <td>
                                    <div>
                                        {index + 1}
                                    </div>
                                </td>
                                <td>
                                    <Field
                                        name={`${FieldItems}.name`}
                                        style={"form-control"}
                                        label={i18n.t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}
                                        type="text"
                                        dataAPI={dataApi}
                                        component={CustomSelectField}
                                        labelStyle={labelStyle}
                                    />
                                </td>
                                <td>
                                    <label className={labelStyle}>{i18n.t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}</label>
                                    <Field
                                        name={`${FieldItems}.title`}
                                        disabledState={true}
                                        label={i18n.t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}
                                        className="form-control"
                                        component={FieldMemberArray}
                                        styleTextError="text-danger"
                                    />
                                </td>
                                {error && <span className="text-danger">{error}</span>}

                                {
                                    <td>
                                        <button
                                            disabled={index === 0 && fields.length === 1 ? true : false}
                                            className={" text-white btn bg-danger mt1-75 btn-remove-signatory"
                                            }
                                            type="button"
                                            title="Remove FieldItems"
                                            onClick={() => removeItem(index)}
                                        >
                                            {i18n.t('delete')}
                                        </button>
                                    </td>
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </>
    );
}

export default FieldArray
