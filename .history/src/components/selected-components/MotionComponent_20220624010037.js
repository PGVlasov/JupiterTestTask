import { BodyNavigation } from "../main/BodyNavigation";
import "../main/main.scss";
import { MotionCardList } from "./MotionCoomponentList";

export const MotionComponent = () => {
  return (
    <div className="main">
      <div className="main-container">
        <BodyNavigation />
        <MotionCardList />
      </div>
    </div>
  );
};
