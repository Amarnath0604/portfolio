import { FC } from "react";
import { Skills, Projects, Experience, AboutMe } from "../pages";
import { usePageCtx } from "../context";
import * as SC from "../StyledComponents";
import { Education } from "src/pages/Education";

interface IRightContentProps {}

export const RightContent: FC<IRightContentProps> = () => {
  const { page } = usePageCtx();

  return (
    <SC.RightContainer>
      {page === "about" && <AboutMe />}
      {page === "projects" && <Projects />}
      {page === "experience" && <Experience />}
      {page === "skills" && <Skills />}
      {page === "education" && <Education />}
    </SC.RightContainer>
  );
};
