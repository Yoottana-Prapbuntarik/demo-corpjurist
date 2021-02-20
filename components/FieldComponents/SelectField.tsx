import React, { useEffect, useState } from 'react'

const SelectField = ({
  input,
  disabledState,
  name,
  label,
  currentValue,
  style,
  children,
  labelStyle,
  styleTextError,
  meta: { touched, error }
}: any) => {
  const [subScibeValue, setSubScibeValue] = useState(currentValue)
  
  useEffect(() => {
    setSubScibeValue(currentValue)
  }, [currentValue])

  return (
    <div>
      <label className={label === null ? 'd-none' : labelStyle}>{label}</label>
      <div>
        <select
          className={style}
          {...input}
          value={subScibeValue}
          name={name}
          disabled={disabledState}
        >
          {children}
        </select>
        <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
      </div>
    </div>
  )
}

export default SelectField
