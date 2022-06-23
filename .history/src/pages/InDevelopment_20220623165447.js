import { useNavigate } from "react-router";
import "./pages.scss";

export const InDevelopment = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="info">
      <h1>Страница в разработке</h1>
      <button className="button">Назад на главную</button>
    </div>
  );
};
