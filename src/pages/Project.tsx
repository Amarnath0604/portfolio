import { FC, Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { projects, slugList, urls } from "src/constants";
import * as SC from "src/StyledComponents";
import { ProjectType } from "src/types";
import Fade from "react-reveal/Fade";
import Tilt from "react-parallax-tilt";

interface IProjectProps {}

type ProjectParams = {
  slug: string;
};

export const Project: FC<IProjectProps> = () => {
  const { slug } = useParams() as ProjectParams;
  const history = useHistory();

  const [project, setProject] = useState<ProjectType>();

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    const idx = slugList[slug];

    if (idx === undefined) {
      history.replace("/404");
    }

    setProject(projects[idx]);
  }, [slug, history]);

  if (!project) {
    return <div>Not found</div>;
  }

  return (
    <SC.ProjectPage className="project-page">
      <SC.ProjectHeader bgImg={project.coverPhoto}>
        <SC.ProjectCoverContent>
          <SC.LargeText style={{ fontWeight: 700, textAlign: "center" }}>{project.title}</SC.LargeText>
          <SC.Text style={{ fontSize: "18px", marginBottom: "10px", textAlign: "center" }}>{project.company}</SC.Text>
          <SC.Text style={{ fontSize: "14px", textAlign: "center" }}>{project.duration}</SC.Text>
        </SC.ProjectCoverContent>
        <SC.ShadowDiv />
      </SC.ProjectHeader>

      <SC.ProjectContainer>
        <SC.Flex flexWrap="wrap" style={{ gap: "15px", marginBottom: "40px" }}>
          {project.link && (
            <SC.EmptyContainer>
              <SC.LinkTag href={project.link} target="_blank">
                <SC.Button>
                  <SC.BoldText style={{ marginRight: "5px" }}>Visit Project</SC.BoldText>
                  <SC.Icon removeFilter src={urls.assets.images.svg.open} alt="open" style={{ width: "18px" }} />
                </SC.Button>
              </SC.LinkTag>
            </SC.EmptyContainer>
          )}
          {!!project.repoLink?.length &&
            project.repoLink.map((repo, idx) => (
              <SC.EmptyContainer key={idx}>
                <SC.LinkTag href={repo.link} target="_blank">
                  <SC.Button>
                    <SC.BoldText style={{ marginRight: "5px" }}>Visit Repo ({repo.label})</SC.BoldText>
                    <SC.Icon removeFilter src={urls.assets.images.svg.github} alt="open" style={{ width: "20px" }} />
                  </SC.Button>
                </SC.LinkTag>
              </SC.EmptyContainer>
            ))}
        </SC.Flex>
        <Fade bottom>
          <SC.EmptyContainer className="mb40">
            <SC.BoldText spacing="4px">DESCRIPTION</SC.BoldText>
            <SC.Text style={{ fontSize: "14px" }}>{project.description}</SC.Text>
          </SC.EmptyContainer>
          <SC.EmptyContainer className="mb40">
            <SC.BoldText spacing="4px">TECH STACK</SC.BoldText>
            <SC.TechStackList>
              {/* <ScrollContainer> */}
              {project.techStack.map((stack, idx) => (
                <SC.TechStack key={idx}>
                  <SC.Icon
                    src={stack.logo}
                    alt={stack.name}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                      ...stack.style,
                    }}
                  />
                  <SC.BoldText small spacing="4px" style={{ textTransform: "uppercase" }}>
                    {stack.name}
                  </SC.BoldText>
                </SC.TechStack>
              ))}
              {/* </ScrollContainer> */}
            </SC.TechStackList>
          </SC.EmptyContainer>
          {project.contributions ? (
            <SC.EmptyContainer className="mb40">
              <SC.BoldText spacing="4px">MY CONTRIBUTIONS</SC.BoldText>
              <SC.CustomGrid columns="repeat(auto-fill, minmax(300px, 1fr))" gap="10px">
                {project.contributions.map((contribution, idx) => (
                  <Tilt
                    key={idx}
                    tiltReverse
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    transitionSpeed={1000}
                    gyroscope
                    style={{ display: "flex" }}
                  >
                    <SC.ContributionCard>
                      <SC.Text style={{ fontSize: "14px" }}>{contribution}</SC.Text>
                    </SC.ContributionCard>
                  </Tilt>
                ))}
              </SC.CustomGrid>
            </SC.EmptyContainer>
          ) : (
            <Fragment />
          )}
        </Fade>
      </SC.ProjectContainer>
    </SC.ProjectPage>
  );
};
