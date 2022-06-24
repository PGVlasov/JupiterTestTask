import { useState } from "react";
import { useNavigate } from "react-router";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cards.scss";
import { loadImages } from "../../store/actions";

export const CardItem = ({ image, deleteImage }) => {
  const [cliced, setCliced] = useState(false);
  const [deleteCliced, setDeleteCliced] = useState(false);

  const handleKeyPress = useCallback((event) => {
    if (event.key === "Delete") {
      setDeleteCliced(true);
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const clickHandler = (id) => {
    if (cliced) {
      setCliced(false);
    } else {
      setCliced(true);
    }
    console.log(id);
  };

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(loadImages());
  //   }, [dispatch]);

  //   const imageTodelete = useSelector((state) =>
  //     state.images.allImages.find((im) => im.id === image.id)
  //   );

  //   console.log(imageTodelete);

  if (cliced && deleteCliced) {
    console.log("delete");
  }

  const navigate = useNavigate();

  const categoryHandler = () => {
    navigate(`/${image.category}`);
  };

  if (!cliced) {
    return (
      <li className="card-item">
        <div
          className="card--btn-border"
          onClick={() => clickHandler(image.id)}
        >
          <img src={image.data.image} alt="" />
          <button
            className="card-batton "
            onClick={() => categoryHandler(image.category)}
          >
            {image.category}
          </button>
          <h4 className="card-name">{image.name}</h4>
        </div>
      </li>
    );
  }
  return (
    <li className="card-item-cliced">
      <div className="card--btn-border" onClick={clickHandler}>
        <img src={image.data.image} alt="" />
        <button className="card-batton ">{image.category}</button>
        <h4 className="card-name">{image.name}</h4>
      </div>
    </li>
  );
};
