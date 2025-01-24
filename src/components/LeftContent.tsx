import { FC } from "react";
import { Chapters, SocialLinks } from ".";
import * as SC from "../StyledComponents";

interface ILeftContentProps {}

export const LeftContent: FC<ILeftContentProps> = () => {
  return (
    <SC.LeftContainer>
      <SC.NameContainer>
        <SC.Title>Hi! This is Amar</SC.Title>
        {/* <SC.Title>Amar</SC.Title> */}
      </SC.NameContainer>
      <SC.DescContainer>
        <SC.Text style={{ color: "rgba(255, 255, 255, 0.5)" }}>
          As a front-end developer specialized in creating responsive web applications with rich digital experiences. I
          am currently working with{" "}
          <SC.LinkText href="http://closerlookdigitalsoftware.com/" target="_blank" title="Visit Closerlook Digital">
            Closerlook Digital Software Services
          </SC.LinkText>{" "}
          and to build interactive websites and admin tool applications using React.js, delivering real-time analytics
          data connected to mobile applications and IoT devices.
        </SC.Text>
      </SC.DescContainer>
      <SC.DesktopView>
        <SC.ChapterContainer>
          <Chapters />
        </SC.ChapterContainer>
        <SocialLinks />
      </SC.DesktopView>
      <SC.MobileView>
        <SC.Flex justifyContent="center">
          <SocialLinks />
        </SC.Flex>
      </SC.MobileView>
    </SC.LeftContainer>
  );
};
