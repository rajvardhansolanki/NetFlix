import React from "react"

const SubmitBtn = ({
  className,
  type,
  btnText,
  handleClick,
}) => {
  return (
    <>
      <div className="d-grid gap-2">
        <button type={type} className={className} onClick={handleClick}>{btnText}</button>
      </div>
    </>
  )
}

export default SubmitBtn