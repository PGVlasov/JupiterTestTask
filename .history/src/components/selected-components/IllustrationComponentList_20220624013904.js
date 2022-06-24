import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Loader } from "../../Loader/Loader";
import { CardItem } from "../cards/CardItem";
import "../main/main.scss";
import { loadImages } from "../../store/actions";

export const IllustrationCardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const imagesIllustration = useSelector((state) =>
    state.images.allImages.filter((im) => im.category === "Illustration")
  );
  if (!imagesIllustration) {
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  }
  if (imagesIllustration.length === 0) {
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div className="cards-wrapper">
      <div className="all-cards-container">
        {imagesIllustration.map((image) => {
          return <CardItem image={image} key={image.id} />;
        })}
      </div>
    </div>
  );
};
