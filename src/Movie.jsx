const Movie = (props) => {
  return (
    <div>
      <h1>{props.movieName}</h1>
      <p>{props.imdb}</p>
    </div>
  );
};

export default Movie;
