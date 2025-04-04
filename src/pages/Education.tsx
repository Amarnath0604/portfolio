import { FC } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "src/constants";
import { SubText, Text } from "src/StyledComponents";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IEducationProps {}

export const Education: FC<IEducationProps> = () => {
  return (
    <VerticalTimeline  layout="1-column-left">
      {education.map((education, idx) => {
        return (
          <VerticalTimelineElement
            key={idx}
            className={`vertical-timeline-element--education`}
            contentStyle={{ background: "#202022", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #202022" }}
            date={education.duration}
            position="right"
            iconStyle={{
              background: "#202022",
              display: "grid",
              placeItems: "center",
              overflow: "hidden",
            }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h2 style={{ color: "#fff", lineHeight: "25px" }}>{education.title}</h2>
            <Text style={{ fontSize: "14px" }}>{education.company}</Text>
            <SubText style={{ marginTop: "0px", fontSize: "14px" }}>{education.location}</SubText>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};
