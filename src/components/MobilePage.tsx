import { FC, useEffect, useState } from "react";
import * as SC from "../StyledComponents";
import { AboutMe, Experience, Projects, Skills } from "src/pages";
import { Education } from "src/pages/Education";

interface IMobilePageProps {}

export const MobilePage: FC<IMobilePageProps> = () => {
  const [headerWidth, setHeaderWidth] = useState("100vw");

  const resizeListener = () => {
    setHeaderWidth(`${window.innerWidth}px`);
  };

  const scrollListener = () => {
    const rootElement = document.documentElement;
    const backToTop = document.getElementById("back-to-top");
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if (backToTop) {
      if (rootElement.scrollTop / scrollTotal > 0.3) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    }

    const headerIds = ["about_header", "projects_header", "exp_header", "skills_header", "education_header"];
    headerIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const { top } = el.getBoundingClientRect();
        if (top > -125 && top <= 0) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    window.addEventListener("load", scrollListener);
    window.addEventListener("resize", resizeListener);

    setHeaderWidth(`${window.innerWidth}px`);

    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("load", scrollListener);
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <SC.EmptyContainer className="mt40">
      <SC.EmptyContainer className="mb50">
        <SC.Header width={headerWidth} id="about_header">
          <SC.HeaderText spacing="4px" className="mb20">
            ABOUT ME
          </SC.HeaderText>
        </SC.Header>
        <AboutMe />
      </SC.EmptyContainer>
      <SC.EmptyContainer className="mb50">
        <SC.Header width={headerWidth} id="projects_header">
          <SC.HeaderText spacing="4px" className="mb20">
            PROJECTS
          </SC.HeaderText>
        </SC.Header>
        <Projects />
      </SC.EmptyContainer>
      <SC.EmptyContainer className="mb50">
        <SC.Header width={headerWidth} id="exp_header">
          <SC.HeaderText spacing="4px" className="mb20">
            EXPERIENCE
          </SC.HeaderText>
        </SC.Header>
        <Experience />
      </SC.EmptyContainer>
      <SC.EmptyContainer>
        <SC.Header width={headerWidth} id="skills_header">
          <SC.HeaderText spacing="4px" className="mb20">
            SKILLS
          </SC.HeaderText>
        </SC.Header>
        <Skills />
      </SC.EmptyContainer>
      <SC.EmptyContainer>
        <SC.Header width={headerWidth} id="education_header">
          <SC.HeaderText spacing="4px" className="mb20">
            EDUCATION
          </SC.HeaderText>
        </SC.Header>
        <Education />
      </SC.EmptyContainer>
    </SC.EmptyContainer>
  );
};
