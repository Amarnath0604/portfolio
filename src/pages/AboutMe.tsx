import { FC } from "react";
import { AboutMePhoto, BoldText, Flex, Grid, MailButton, SubText } from "src/StyledComponents";
import Fade from "react-reveal/Fade";
import amarLogo from "../images/amar-logo.jpg";

interface IAboutMeProps {}

export const AboutMe: FC<IAboutMeProps> = () => {
  return (
    <Fade bottom>
      <Grid cols={1} placeItems="center" gap="15px">
        <AboutMePhoto src={amarLogo} alt="amar" />
        <SubText>
          My enthusiasm for evolving technologies drives me to continually expand my knowledge and skills. In my three
          years of experience in software development as a front-end engineer, I've honed my abilities while remaining
          dedicated to learning and experimentation. On weekends, I balance this passion with exploration, seeking out
          new places and flavors to complement my professional growth.
        </SubText>
        <Grid cols={2} colWidth="max-content" placeItems="center" gap="20px" override>
          <MailButton
            href="https://drive.google.com/file/d/1AGYrVKloLLIupfafSIB7eaZ_Jz6qkAhF/view"
            target="_blank"
            title="View Resume"
          >
            <BoldText small spacing="4px" style={{ textTransform: "uppercase" }}>
              Resume
            </BoldText>
          </MailButton>
          <MailButton href="mailto:amarnathravi33@gmail.com" title="Drop an Email">
            <Flex alignItems="center" style={{ width: "max-content" }}>
              <BoldText small spacing="4px" style={{ textTransform: "uppercase", marginRight: "10px" }}>
                Say Hello
              </BoldText>{" "}
              <span>👋</span>
            </Flex>
          </MailButton>
        </Grid>
      </Grid>
    </Fade>
  );
};
