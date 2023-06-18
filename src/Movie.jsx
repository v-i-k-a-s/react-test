const Movie = (props) => {
  const { handleImdb } = props;
  const { movieName, imdb, id } = props.movieData;
  return (
    <div className="movie-container">
      <h1>Movie Name : {movieName}</h1>
      <h2> IMdb Rating {imdb}</h2>
      <button
        onClick={() => {
          handleImdb(id, true);
        }}
      >
        Increase Imdb
      </button>
      <button
        onClick={() => {
          handleImdb(id, false);
        }}
      >
        Decrease Imdb
      </button>
    </div>
  );
};

export default Movie;
