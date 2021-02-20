const CustomeTextField = ({ input, disabled, label, min, type, className, styleTextError, meta: { touched, error } }: any) => {  
  return (
    <div>
      <input {...input}  disabled={disabled} min={min} placeholder={label} type={type}  className={className} />
      <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
    </div>
  )
}

export default CustomeTextField
