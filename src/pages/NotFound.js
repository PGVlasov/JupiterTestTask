import { useNavigate } from "react-router";
import "./pages.scss";

export const NotFound404 = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="info">
      <h1>Страница не найдена</h1>
      <button className="button" onClick={clickHandler}>
        Назад на главную
      </button>
    </div>
  );
};
