import { useEffect, useState } from "react";

const RandomImg = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [disableButtonImgUrl, setDisableButtonImgUrl] = useState(false);
  useEffect(() => {
    console.log("use effect");
    getRandomImg();
  }, []); //i have to call myself only one time --> after component is first rendered --> componentDidMount

  const getRandomImg = async function getRandomImg() {
    setDisableButtonImgUrl(true);
    const url = "https://dog.ceo/api/breeds/image/random";
    try {
      let resp = await fetch(url);
      let data = await resp.json();
      if (data.status == "success" && data.message) {
        setImgUrl(data.message);
      }
      setDisableButtonImgUrl(false);
    } catch (error) {
      console.log("eror", error);
      setDisableButtonImgUrl(false);
    }
  };
  return (
    <div className="random-img">
      <button
        disabled={disableButtonImgUrl}
        onClick={() => {
          getRandomImg();
        }}
      >
        {disableButtonImgUrl
          ? "getting random img please wait !!"
          : "click to get random img"}
      </button>
      <img src={imgUrl} alt="no-dog-found" className="dog-img" />
    </div>
  );
};

export default RandomImg;
