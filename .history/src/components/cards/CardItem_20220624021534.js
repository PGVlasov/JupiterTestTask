import { useState } from "react";
import "./cards.scss";

export const CardItem = ({ image }) => {
  const [cliced, setCliced] = useState(false);

  const clickHandler = () => {
    //cliced ? setCliced(true) : setCliced(false);
    if (cliced) {
      setCliced(false);
    } else {
      setCliced(true);
    }
  };

  console.log(cliced);

  return (
    <li className="card-item">
      <div className="card--btn-border" onClick={clickHandler}>
        <img src={image.data.image} alt="" />
        <button className="card-batton ">{image.category}</button>
        <h4 className="card-name">{image.name}</h4>
      </div>
    </li>
  );
};
