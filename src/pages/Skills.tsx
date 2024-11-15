import { FC } from "react";
import { skills } from "src/constants";
import * as SC from "../StyledComponents";
import Fade from "react-reveal/Fade";
import Tilt from "react-parallax-tilt";

interface ISkillsProps {}

export const Skills: FC<ISkillsProps> = () => {
  return (
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <Fade key={idx} bottom>
          <Tilt
            key={idx}
            tiltReverse
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={1000}
            gyroscope
            style={{ width: "100%" }}
          >
            <SC.Card className="skill-card">
              <SC.Icon src={skill.logo} alt={skill.name} style={skill.style} />
              <SC.Text>{skill.name}</SC.Text>
            </SC.Card>
          </Tilt>
        </Fade>
      ))}
    </div>
  );
};
