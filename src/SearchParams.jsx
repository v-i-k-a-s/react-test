import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [capital, setCapital] = useState("delhi");

  console.log("ac", location, capital);
  return (
    <div>
      <label htmlFor="location">
        <input
          type="text"
          name="loaction"
          id="location"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          placeholder="write your locaton!!"
        />
      </label>
      <label htmlFor="capital">
        <input
          type="text"
          name="capital"
          id="capital"
          value={capital}
          onChange={(event) => {
            setCapital(event.target.value);
          }}
          placeholder="write your capital!!"
        />
      </label>
    </div>
  );
};
export default SearchParams;
