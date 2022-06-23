import "./loader.scss";

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
