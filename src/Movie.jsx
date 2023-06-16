import React from "react";
const Movie = (props) => {
  const { movieName, imdb, id } = props.movieInfo;
  const { increaseImdb } = props;
  const handleIncreaseImdb = (id) => {
    increaseImdb(id, 0.1);
  };
  return (
    <div className="movie-container">
      <h1>{movieName}</h1>
      <p>{imdb}</p>
      <button
        onClick={() => {
          handleIncreaseImdb(id);
        }}
      >
        Increase IMDB
      </button>
      <button>Delete</button>
    </div>
  );
};

export default Movie;
