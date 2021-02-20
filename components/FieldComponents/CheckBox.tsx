const CheckBox = ({ input, label, type, style, valueDisable }: any) => {
  return (
    <input
      disabled={valueDisable}
      {...input}
      className={style}
      type={type}
      name={label}
      value={label}
    />
  )
}

export default CheckBox
