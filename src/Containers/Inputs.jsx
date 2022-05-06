import React from "react"

const Inputs = ({
  type,
  fieldType,
  onChange,
  value,
  placeHolder,
  lable,
  name,
  classname,
  requried,
  autoComplete,

}) => {
  return (
    <>
      <div className="form-group my-1">
        <label>{lable}</label>
        <input type={type} name={name} value={value} onChange={onChange} className={`form-control my-2 ${classname}`} placeholder={placeHolder} required={requried} autoComplete={autoComplete}/>
      </div>
    </>
  )
}

export default Inputs