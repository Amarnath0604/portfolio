import { FC } from "react";
import { Skills, Projects, Experience, AboutMe } from "../pages";
import { usePageCtx } from "../context";
import * as SC from "../StyledComponents";

interface IRightContentProps {}

export const RightContent: FC<IRightContentProps> = () => {
  const { page } = usePageCtx();

  return (
    <SC.RightContainer>
      {page === "about" && <AboutMe />}
      {page === "projects" && <Projects />}
      {page === "experience" && <Experience />}
      {page === "skills" && <Skills />}
    </SC.RightContainer>
  );
};
