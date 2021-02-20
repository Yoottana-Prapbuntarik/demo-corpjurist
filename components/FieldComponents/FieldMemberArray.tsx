const FieldMemberArray = ({ input, label, className, disabledState, styleTextError, type, meta: { touched, error } }: any) => {
    return (
        <div>
            <div>
                <input disabled={disabledState} className={className} {...input} type={type} placeholder={label} />
                {touched && error && <span className={styleTextError}>{error}</span>}
            </div>
        </div>
    )
}

export default FieldMemberArray