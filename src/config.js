import Flyer from "./components/Flyer";
import Infographic from "./components/Infographic";
import ab from "./svg/active_building.svg";
import agile from "./svg/agile.svg";
// import BMP from "./svg/BMP.svg";
import starBadge from "./svg/starBadge.svg";

export const NAV_LIST = {
  infographic: {
    key: "infographic",
    title: "InfoGraphic",
    component: Infographic,
  },
  flyers: {
    key: "flyers",
    title: "Flyers",
    component: Flyer,
  },
};

export const ICON_LIST = [ab, agile, starBadge];
