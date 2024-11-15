import { FC } from "react";
import { FloatingBtn, FloatingBtnContainer, FloatingBtnInner } from "src/StyledComponents";

interface IFloatingButtonProps {
  id?: string;
  onClick?: () => void;
}

export const FloatingButton: FC<IFloatingButtonProps> = ({ id, onClick, children }) => {
  return (
    <FloatingBtnContainer id={id || ""} onClick={onClick}>
      <FloatingBtn>
        <FloatingBtnInner>{children}</FloatingBtnInner>
      </FloatingBtn>
    </FloatingBtnContainer>
  );
};
