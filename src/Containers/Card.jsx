import React from "react"

const Card = ({
  src,
  alt,
  cardTitle,
  paragraph,
  btnLable,
  link,
  key
}) => {
  return (
    <React.Fragment>
      <div className="card-container" key={key}>
        <div className="card custom-shadow">
          <img className="card-img-top card-img" src={src} alt={alt} />
          <div className="card-body">
            <h5 className="card-title text text-white-50">{cardTitle}</h5>
            <p className="card-text text text-white-50">{paragraph}</p>
            <div className="d-grid gap-2">
              <a href={link} className="btn btn-danger btn-sm">{btnLable}</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card