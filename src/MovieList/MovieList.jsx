import React, { useEffect, useState } from "react"
import Card from "../Containers/Card.jsx"



const MovieList = () => {
  const [movie, setMovie] = useState()

  useEffect(() => {
    console.log("sadd");
    const fetchMovie = async () => {
      await fetch("https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json")
        .then(response => response.json())
        .then(data => {
          setMovie(data.data)
        })
    }
    fetchMovie()
  }, [])

  console.log("movie :>> ", movie);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row gy-3 mt-1">
          {
            movie === undefined ? "" :
              movie.map((item) => {
                return (
                  <>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                      <Card
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