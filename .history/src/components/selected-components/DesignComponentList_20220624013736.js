import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Loader } from "../../Loader/Loader";
import { CardItem } from "../cards/CardItem";
import "../main/main.scss";
import { loadImages } from "../../store/actions";

export const DesignCardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const imagesDesign = useSelector((state) =>
    state.images.allImages.filter((im) => im.category === "Design")
  );
  if (!imagesDesign) {
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  }
  if (imagesDesign.length === 0) {
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div className="cards-wrapper">
      <div className="all-cards-container">
        {imagesDesign.map((image) => {
          return <CardItem image={image} key={image.id} />;
        })}
      </div>
    </div>
  );
};
