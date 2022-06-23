import "./cards.scss";

export const CardItem = ({ image }) => {
  return (
    <li className="card-item">
      <div className="card--btn-border">
        <img src={image.data.image} alt="" />
        <button className="card-batton ">{image.category}</button>
        <h4 className="card-name">{image.name}</h4>
      </div>
    </li>
  );
};
