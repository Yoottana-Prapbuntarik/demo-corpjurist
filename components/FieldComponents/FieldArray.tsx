import { Field } from "redux-form";
import { i18n } from "../../i18n";
// import CustomeTextField from "./CustomeTextField";
import FieldMemberArray from "./FieldMemberArray";
export enum NotNullData {
    One = 1
}

const FieldArray = ({ fields, className,
    removeSignatory,
    handleChange, dataApi, placeholder, meta: { error } }: any) => {
    let dataFromApi = dataApi !== undefined ? dataApi.map((item) => { return item }) : []

    const removeItem = async (FieldData: any, index: string) => {
        await fields.remove(index)
        let findItemDeleteByName = await dataFromApi.find((item) => item.id === FieldData.id ? item : '')
        if (findItemDeleteByName === undefined) {
            return
        } else {
            removeSignatory(findItemDeleteByName.id)
        }
    }
    return (
        <tbody>
            {
                fields.map((FieldItems, index) => {
                    let currentValue: any
                    currentValue = fields.get(index)
                    return (
                        <tr key={index}>
                            <td>
                                <div className="pt-4">
                                    {index + 1}
                                </div>
                            </td>
                            <td>
                                <Field
                                    name={`${FieldItems}.name`}
                                    className={className}
                                    label={placeholder}
                                    type="text"
                                    component={FieldMemberArray}
                                    styleTextError="text-danger"
                                    onChange={() => handleChange(fields.getAll())}
                                />
                            </td>
                            {error && <span className="text-danger">{error}</span>}

                            {
                                <td>
                                    <button
                                        disabled={index === 0 && fields.length === 1 ? true : false}
                                        className={index === 0 && fields.length === 1 ? "btn-custome btn-custome-disabled text-white" : "btn-custome bg-danger text-white"
                                        }
                                        type="button"
                                        title="Remove FieldItems"
                                        onClick={() => removeItem(currentValue, index)}
                                    >
                                        {i18n.t('delete')}
                                    </button>
                                </td>
                            }
                        </tr>
                    )
                })
            }
        </tbody >
    );
}

export default FieldArray