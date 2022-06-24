import { BodyNavigation } from "../main/BodyNavigation";
import "../main/main.scss";
import { IllustrationCardList } from "./IllustrationComponentList";

export const IllustrationComponent = () => {
  return (
    <div className="main">
      <div className="main-container">
        <BodyNavigation />
        <IllustrationCardList />
      </div>
    </div>
  );
};
