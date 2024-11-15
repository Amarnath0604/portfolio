import { FC } from "react";
import * as SC from "../StyledComponents";
import { projects } from "src/constants";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

interface IProjectsProps {}

export const Projects: FC<IProjectsProps> = () => {
  const history = useHistory();

  const openProject = (slug: string) => {
    history.push(`/projects/${slug}`);
  };

  return (
    <div className="grid projects-hover">
      <Fade bottom>
        {projects.map((project, idx) => (
          <SC.Card key={idx} hoverable onClick={() => openProject(project.slug)}>
            <SC.Flex justifyContent="flex-start" alignItems="center" gap="15px">
              {project.primaryTechnologies.map((tech, idx) => (
                <SC.Flex alignItems="center" gap="10px" key={idx}>
                  <SC.Icon
                    src={tech.logo}
                    alt={tech.name}
                    style={{
                      width: "20px",
                      height: "20px",
                      ...tech.style,
                    }}
                  />
                  <SC.BoldText small spacing="4px" style={{ textTransform: "uppercase" }}>
                    {tech.name}
                  </SC.BoldText>
                </SC.Flex>
              ))}
            </SC.Flex>
            <SC.LargeText>{project.title}</SC.LargeText>
            <SC.BoldText style={{ marginTop: "5px", lineHeight: "25px" }}>{project.duration}</SC.BoldText>
            <SC.SubText style={{ marginTop: "10px", lineHeight: "25px" }}>{project.oneLiner}</SC.SubText>
          </SC.Card>
        ))}
      </Fade>
    </div>
  );
};
