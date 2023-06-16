import { useState } from "react";

const MovieSearch = () => {
  let [searchValue, setSearchValue] = useState(""); //destructure

  console.log("hello");

  return (
    <div>
      <label htmlFor="search-bar">
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </label>
    </div>
  );
};
export default MovieSearch;
