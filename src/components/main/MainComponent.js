import { CardList } from "../cards/CatdList";
import { BodyNavigation } from "./BodyNavigation";
import "./main.scss";

export const MainComponent = () => {
  return (
    <div className="main">
      <div className="main-container">
        <BodyNavigation />
        <CardList />
      </div>
    </div>
  );
};
