import React from "react"
import { useSelector } from "react-redux"
import { getAllMovies } from "../Redux/MovieSlice.js"
import Card from "../Containers/Card.jsx"

const MovieList = () => {
  const MovieData = useSelector(getAllMovies)
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row gy-3 mt-1">
          {
            MovieData === undefined ? "" :
              MovieData.map((item, index) => {
                return (
                  <>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                      <Card
                        key={index}
                        cardTitle={item.title}
                        paragraph={item.description}
                        src={item.poster}
                        btnLable="Click"
                        link={item.url}
                      />
                    </div>
                  </>
                )
              })
          }

        </div>
      </div>
    </React.Fragment>
  )
}

export default MovieList