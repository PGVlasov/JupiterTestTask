import { BodyNavigation } from "./BodyNavigation";
import "/..main/main.scss";
import { BrendingCardList } from "./BrandingComponentList";

export const BrandingComponent = () => {
  return (
    <div className="main">
      <div className="main-container">
        <BodyNavigation />
        <BrendingCardList />
      </div>
    </div>
  );
};
