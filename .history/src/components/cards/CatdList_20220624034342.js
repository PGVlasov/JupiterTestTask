import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../Loader/Loader";
import { loadImages } from "../../store/actions";
import { CardItem } from "./CardItem";
import "./cards.scss";

export const CardList = () => {
  const [areImagessExpanded, setImagesExpand] = useState(false);

  const deleteImage = (id) => {
    console.log("=======>>>>>>", id);
    // images.filter((image) => image.id !== id);
  };

  const expand = () => {
    setImagesExpand(true);
  };
  const rollUp = () => {
    setImagesExpand(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const images = useSelector((state) => state.images.allImages);

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
            return (
              <CardItem
                image={image}
                key={image.id}
                deleteImage={deleteImage}
              />
            );
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
