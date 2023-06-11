import React, { useState } from "react";
import Movie from "./Movie";
const Movies = () => {
  const [movieData, setMovieData] = useState({ movieName: "batman", imdb: 10 });
  return <Movie movieInfo={movieData} />;
  //return React.createElement("div", {}, MovieReactElements);
};
export default Movies;
//Componenet --> function /class
//compnentDidUpdate
//useEffect(()=>{},[])
