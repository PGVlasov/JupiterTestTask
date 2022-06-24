import { BodyNavigation } from "./BodyNavigation";
import "..main/main.scss";
import { DesignCardList } from "./DesignComponentList";

export const DesignComponent = () => {
  return (
    <div className="main">
      <div className="main-container">
        <BodyNavigation />
        <DesignCardList />
      </div>
    </div>
  );
};
