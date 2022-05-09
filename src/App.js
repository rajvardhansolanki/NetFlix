import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Assets/Css/Custom.css"
import LoaderScreen from "./Containers/Loader.jsx"
// import Home from "./Pages/Home.jsx"
import Header from "./Containers/Header.jsx"
import PageNotFound from "./Pages/PageNotFound.jsx"
// import MovieDetails from "./MovieDetails/MovieDetails.jsx";
import MovieList from "./MovieList/MovieList.jsx";
import Home from "./Pages/Home.jsx";

const initialState = {
  loder: true
}

function App() {
  const [loder, setLoader] = useState(initialState)

  setTimeout(() => {
    setLoader(false)
  }, 2000)

  return (
    <React.Fragment>
      {
        loder ?
          <LoaderScreen
            loadercolor="red"
          />
          :
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/movie/:imdbID" component={MovieList}></Route>
              <Route component={PageNotFound}></Route>
            </Switch >
          </Router >
      }
    </React.Fragment >
  )
}

export default App
