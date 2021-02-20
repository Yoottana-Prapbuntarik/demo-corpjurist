import DropdownList from 'react-widgets/lib/DropdownList'
import 'react-widgets/dist/css/react-widgets.css'
import "./styles/customDropdownList.scss";

const CustomSelectField = ({
  input,
  dataAPI,
  label,
  disabledState,
  labelStyle,
}: any) => {

  return (
    <div>
      <label className={label === null ? 'd-none' : labelStyle}>{label}</label>
      <div>
        <DropdownList
          {...input}
          data={dataAPI}
          disabled={disabledState}
          onChange={value => input.onChange(value)} 
          onBlur={() => input.onBlur(input.value)} 
          onKeyDown={(e) => e.preventDefault()}
          textField="name"
        />
      </div>
    </div>
  )
}

export default CustomSelectField
