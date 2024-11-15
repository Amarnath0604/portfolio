import { FC } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperience } from "src/constants";
import { ExperienceIcon, SubText, Text } from "src/StyledComponents";

interface IExperienceProps {}

export const Experience: FC<IExperienceProps> = () => {
  return (
    <VerticalTimeline>
      {workExperience.map((experience, idx) => {
        const eo = (idx + 1) % 2 === 0 ? "even" : "odd";
        return (
          <VerticalTimelineElement
            key={idx}
            className={`vertical-timeline-element--work timeline-${eo}`}
            contentStyle={{ background: "#202022", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #202022" }}
            date={experience.duration}
            dateClassName={"date-pos-" + eo}
            iconStyle={{
              background: "#202022",
              display: "grid",
              placeItems: "center",
              overflow: "hidden",
            }}
            icon={<ExperienceIcon src={experience.logo} alt={experience.company} />}
          >
            <h2 style={{ color: "#fff", lineHeight: "25px" }}>{experience.title}</h2>
            <Text style={{ fontSize: "14px" }}>{experience.company}</Text>
            <SubText style={{ marginTop: "0px", fontSize: "14px" }}>{experience.location}</SubText>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};
