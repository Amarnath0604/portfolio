import { FC } from "react";
import { TooltipPosition, TooltipWrapper } from "src/StyledComponents";

interface ITooltipProps {
  tooltipText: string;
  position?: TooltipPosition;
}

export const Tooltip: FC<ITooltipProps> = ({ tooltipText, position, children }) => {
  return (
    <TooltipWrapper className="tooltip" position={position || "bottom"}>
      {children}
      <span>{tooltipText}</span>
    </TooltipWrapper>
  );
};
