import { useEffect, useState } from "react";
import RandomImg from "./RandomImg";

const DogForm = () => {
  const [breedList, setBreedList] = useState([]);
  const [breed, setBreed] = useState("");
  const [subBreedList, setSubBreedList] = useState([]);
  const [imgUrl, setImgUrl] = useState(null);
  useEffect(() => {
    async function getBreedList() {
      const url = `https://dog.ceo/api/breeds/list/all`;
      let resp = await fetch(url);
      let data = await resp.json();
      if (data.status == "success" && data.message) {
        setBreedList(Object.keys(data.message));
      }
    }
    getBreedList();
  }, []);
  useEffect(() => {
    console.log("change breed", breed);

    async function getSubBreedList() {
      if (breed && breed.length > 0) {
        const url = ` https://dog.ceo/api/breed/${breed}/list`;
        let resp = await fetch(url);
        let data = await resp.json();
        if (data.status == "success" && data.message) {
          setSubBreedList(data.message);
        }
      }
    }
    getSubBreedList();
  }, [breed]);

  const getImageByBreed = async () => {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const resp = await fetch(url);
    const data = await resp.json();
    if (data.status == "success" && data.message) {
      setImgUrl(data.message);
    }
  };
  return (
    <div id="dog-container">
      <RandomImg />
      <div className="dog-form">
        <form>
          <label htmlFor="breed-list">
            Breed List <br />
            <select
              name="breed-list"
              className="breedList"
              id="breed-list"
              onChange={(e) => setBreed(e.target.value)}
            >
              <option></option>
              {breedList.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </label>
          <br />
          {subBreedList.length > 0 ? (
            <label htmlFor="sub-breed-list">
              Sub Breed List <br />
              <select
                name="sub-breed-list"
                className="sub-breed-list"
                id="sub-breed-list"
              >
                {subBreedList.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </label>
          ) : (
            "No Sub breed available"
          )}

          <input
            type="submit"
            value="get breed pic"
            onClick={(e) => {
              e.preventDefault();
              getImageByBreed();
            }}
          />
        </form>
      </div>
      {imgUrl && <img src={imgUrl} alt="no-dog-found" className="dog-img" />}
    </div>
  );
};
export default DogForm;
