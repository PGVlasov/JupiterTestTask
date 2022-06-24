import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Loader } from "../../Loader/Loader";
import { CardItem } from "../cards/CardItem";
import "../main/main.scss";
import { loadImages } from "../../store/actions";

export const BrendingCardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const imagesBranding = useSelector((state) =>
    state.images.allImages.find((im) => im.id === 1)
  );
  if (!imagesBranding) {
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  }
  if (imagesBranding.length === 0) {
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div className="cards-wrapper">
      <div className="all-cards-container">
        {imagesBranding.map((image) => {
          return <CardItem image={image} key={image.id} />;
        })}
      </div>
    </div>
  );
};
