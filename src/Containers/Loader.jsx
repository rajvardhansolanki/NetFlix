import React from "react"
import Loader from "react-js-loader";

const LoaderScreen = ({
  loadercolor
}) => {
  return (
    <>
      <div className="loader-container">
        <Loader type="spinner-default" bgColor={loadercolor} size={60} />
      </div>
    </>
  )
}

export default LoaderScreen



// box-rotate-x
// box-rotate-y
// box-rotate-z
// box-rectangular
// heart
// bubble-scale
// bubble-top
// bubble-ping
// bubble-spin
// bubble-loop
// spinner-cub
// spinner-circle
// spinner-default
// ekvalayzer
// hourglass
// rectangular-ping