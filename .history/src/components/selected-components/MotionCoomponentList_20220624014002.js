import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Loader } from "../../Loader/Loader";
import { CardItem } from "../cards/CardItem";
import "../main/main.scss";
import { loadImages } from "../../store/actions";

export const MotionCardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const imagesMotion = useSelector((state) =>
    state.images.allImages.filter((im) => im.category === "Motion")
  );
  if (!imagesMotion) {
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  }
  if (imagesMotion.length === 0) {
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div className="cards-wrapper">
      <div className="all-cards-container">
        {imagesMotion.map((image) => {
          return <CardItem image={image} key={image.id} />;
        })}
      </div>
    </div>
  );
};
