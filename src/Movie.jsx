import React from "react";
const Movie = (props) => {
  const { movieName, imdb } = props.movieInfo;
  return (
    <div>
      <h1>{movieName}</h1>
      <p>{imdb}</p>
      <button>Delete</button>
    </div>
  );
};

export default Movie;
