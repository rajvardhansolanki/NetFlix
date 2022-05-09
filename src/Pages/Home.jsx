import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import MovieList from "../MovieList/MovieList.jsx"
import { addMovie } from "../Redux/MovieSlice.js"

const Home = () => {
  const [movie, setMovie] = useState()
  const dispatch = useDispatch();

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
  dispatch(addMovie(movie))
  return (
    <React.Fragment>

      <MovieList />

    </React.Fragment >
  )
}

export default Home