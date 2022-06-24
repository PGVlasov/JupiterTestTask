import { useState } from "react";
import { useNavigate } from "react-router";
import "./cards.scss";

export const CardItem = ({ image }) => {
  const [cliced, setCliced] = useState(false);

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
