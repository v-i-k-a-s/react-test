import { useEffect, useState } from "react";
import Movie from "./Movie";
import Search from "./Search";

const Movies = () => {
  const [movieArray, setMovieArray] = useState();
  useEffect(() => {
    //api call
    setMovieArray([
      { movieName: "batman", imdb: 9.1, id: 0 },
      { movieName: "aquaman", imdb: 8.1, id: 1 },
      { movieName: "superman", imdb: 8.1, id: 2 },
    ]);
  }, []);

  const handleImdb = (id, increase = true, stepUp = 0.1) => {
    const newMovieArray = movieArray.map((item) => {
      let isAllowed = increase ? item.imdb < 10 : item.imdb > 0;
      if (item.id == id && isAllowed) {
        if (increase) {
          item.imdb = item.imdb + stepUp;
        } else {
          item.imdb = item.imdb - stepUp;
        }

        item.imdb = Number(item.imdb.toFixed(2));
      }
      return item;
    });
    setMovieArray(newMovieArray);
  };

  return (
    <div className="main-conatiner">
      <Search />
      {movieArray.map((item) => {
        return <Movie key={item.id} movieData={item} handleImdb={handleImdb} />;
      })}
    </div>
  );
};

export default Movies;
