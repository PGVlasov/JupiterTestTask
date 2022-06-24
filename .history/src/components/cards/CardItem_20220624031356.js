import { useState } from "react";
import { useNavigate } from "react-router";
import { useCallback, useEffect } from "react";
import "./cards.scss";

export const CardItem = ({ image }) => {
  const [cliced, setCliced] = useState(false);

  const handleKeyPress = useCallback((event) => {
    console.log(`Key pressed: ${event.key}`);
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const clickHandler = () => {
    if (cliced) {
      setCliced(false);
    } else {
      setCliced(true);
    }
  };

  const navigate = useNavigate();

  const categoryHandler = () => {
    navigate(`/${image.category}`);
  };

  const KeyPressHolder = (event) => {
    if (document.event.key === "Enter") {
      console.log("pressed");
    }
  };

  if (!cliced) {
    return (
      <li className="card-item">
        <div className="card--btn-border" onClick={clickHandler}>
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
