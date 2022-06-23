import { useNavigate } from "react-router";
import "./pages.scss";

export const Contacts = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="info">
      <h1>Приложение разработанно в качестве тестового задания</h1>
      <div className="list">
        <span className="span">Links:</span>
        <span>Github: https://github.com/PGVlasov </span>
        <span>Telegram: @PVlasov86</span>
        <span> Email: pvlasov@yandex.ru</span>
        <button className="button" onClick={clickHandler}>
          Назад на главную
        </button>
      </div>
    </div>
  );
};
