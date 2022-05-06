import React from "react"
import CommonBtn from "./CommonBtn.jsx"
import logo from "../Assets/Images/logo.png"

const Header = ({ HeaderText }) => {
  return (
    <>
      <div className="container-fluid sticky-top">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between align-items-center bg-black p-3">
            <div>
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div>
              <CommonBtn
                btnText="Sign In"
                className="btn btn-danger"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header