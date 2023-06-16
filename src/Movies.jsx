import React, { useState } from "react";
import Movie from "./Movie";
const Movies = () => {
  const [movieData, setMovieData] = useState([
    { movieName: "batman", imdb: 8.2, id: 1 },
    { movieName: "superman", imdb: 7.2, id: 2 },
  ]);

  const increaseImdb = (id, increase) => {
    let newMovieData = movieData.map((item) => {
      if (item.id == id) {
        item.imdb = item.imdb + increase;
        item.imdb = Number(item.imdb.toFixed(2));
      }
      return item;
    });

    setMovieData(newMovieData);
  };
  return (
    <div>
      {movieData.map((item) => {
        return (
          <Movie key={item.id} movieInfo={item} increaseImdb={increaseImdb} />
        );
      })}
    </div>
  );

  //return React.createElement("div", {}, MovieReactElements);
};

export default Movies;
//Componenet --> function /class
//compnentDidUpdate
//useEffect(()=>{},)
