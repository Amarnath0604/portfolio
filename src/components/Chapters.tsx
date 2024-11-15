import { FC } from "react";
import { chapters } from "../constants";
import { usePageCtx } from "../context";
import * as SC from "../StyledComponents";

interface IChaptersProps {}

export const Chapters: FC<IChaptersProps> = () => {
  const { page, setPage } = usePageCtx();

  return (
    <SC.EmptyContainer>
      {chapters.map((chapter, idx) => (
        <SC.Chapter key={idx} active={chapter.key === page} onClick={() => setPage(chapter.key)}>
          <SC.Grid cols={3} colWidth="max-content" placeItems="center" gap="20px">
            <SC.BoldText small>{chapter.index}</SC.BoldText>
            <hr />
            <SC.BoldText spacing="4px">{chapter.label}</SC.BoldText>
          </SC.Grid>
        </SC.Chapter>
      ))}
    </SC.EmptyContainer>
  );
};
