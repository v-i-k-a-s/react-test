import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <label htmlFor="search-value">
        Search Movie Name
        <input
          type="text"
          name="search-value"
          id="search-value"
          placeholder="write movie name"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default Search;
