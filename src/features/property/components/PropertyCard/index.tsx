import { PropertyCardFooter } from "./PropertyCardFooter";
import { PropertyCardContent } from "./PropertyCardContent";
import { PropertyCardHeader } from "./PropertyCardHeader";
import { PropertyCardHeaderIcon } from "./PropertyCardHeaderIcon";
import { PropertyCardRoot } from "./PropertyCardRoot";
import { PropetyCardFooterAction } from "./PropetyCardFooterAction";
import { PropertyCardFooterLabel } from "./PropertyCardFooterLabel";

export const PropertyCard = {
  Root: PropertyCardRoot,
  Header: PropertyCardHeader,
  HeaderIcon: PropertyCardHeaderIcon,
  Content: PropertyCardContent,
  Footer: {
    Root: PropertyCardFooter,
    Action: PropetyCardFooterAction,
    Label: PropertyCardFooterLabel,
  },
};
