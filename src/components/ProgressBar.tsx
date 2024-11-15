import { FC, useEffect, useState } from "react";
import { Progress, ProgressContainer } from "src/StyledComponents";

interface IProgressBarProps {
  width: number;
  background: string;
}

export const ProgressBar: FC<IProgressBarProps> = ({ width, background }) => {
  const [widthState, setWidthState] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidthState(width);
    });
  }, [width]);

  return (
    <ProgressContainer>
      <Progress width={widthState} background={background} />
    </ProgressContainer>
  );
};
