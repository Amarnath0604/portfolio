import { FC } from "react";
import * as SC from "../StyledComponents";
import { SocialIcon } from ".";
import linkedinLogo from "../images/linkedin-logo.svg";
import githubLogo from "../images/github-logo.svg";

interface ISocialLinksProps {}

export const SocialLinks: FC<ISocialLinksProps> = () => {
  return (
    <SC.Grid cols={2} colWidth="max-content" gap="35px" placeItems="center" override>
      <SocialIcon link="https://www.linkedin.com/in/amarnath9451/" icon={linkedinLogo} text="LinkedIn" />
      <SocialIcon link="https://github.com/Amarnath0604" icon={githubLogo} text="GitHub" />
    </SC.Grid>
  );
};
