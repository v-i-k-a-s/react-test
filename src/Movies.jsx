import React from "react";
import Movie from "./Movie";
const Movies = () => {
  let movieData = [
    {
      movieName: "batman",
      imdb: 8.2,
    },
    {
      movieName: "superman",
      imdb: 8.2,
    },
    {
      movieName: "superman-2",
      imdb: 8.2,
    },
  ];
  return <Movie movieInfo={movieData[0]} />;
  //return React.createElement("div", {}, MovieReactElements);
};
export default Movies;
//Componenet --> function /class
//compnentDidUpdate
//useEffect(()=>{},)
