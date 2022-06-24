import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "../../Loader/Loader";
import { CardItem } from "./CardItem";
import "..main/main.scss";

export const IllustrationCardList = () => {
  const [images, setImges] = useState([]);
  const [areImagessExpanded, setImagesExpand] = useState(false);

  const expand = () => {
    setImagesExpand(true);
  };

  const rollUp = () => {
    setImagesExpand(false);
  };

  async function getImges() {
    try {
      const response = await axios.get(
        "https://json-server-jupiter.herokuapp.com/images"
      );
      setImges(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getImges();
  }, []);

  console.log(images);
  if (images.length === 0) {
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  }

  if (!areImagessExpanded) {
    let sliceImages = images.slice(0, 9);

    return (
      <div className="cards-wrapper">
        <div className="all-cards-container">
          {sliceImages.map((image) => {
            return <CardItem image={image} key={image.id} />;
          })}
        </div>
        <div>
          <button className="card-list-button" onClick={expand}>
            <p className="load-more">load more</p>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="cards-wrapper">
      <div className="all-cards-container">
        {images.map((image) => {
          return <CardItem image={image} key={image.id} />;
        })}
      </div>
      <div>
        <button className="card-list-button" onClick={rollUp}>
          <p className="close">close</p>
        </button>
      </div>
    </div>
  );
};
