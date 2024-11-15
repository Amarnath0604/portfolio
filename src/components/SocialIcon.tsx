import { FC } from "react";
import { urls } from "src/constants";
import { Icon, Grid, Text, LinkTag } from "../StyledComponents";

interface ISocialIconProps {
  icon: string;
  text: string;
  link: string;
}

export const SocialIcon: FC<ISocialIconProps> = ({ icon, text, link }) => {
  return (
    <LinkTag href={link} target="_blank">
      <Grid cols={3} colWidth="max-content" gap="10px" placeItems="center" override>
        <Icon src={icon} alt={text} />
        <Text>{text}</Text>
        <Icon src={urls.assets.images.svg.open} alt="open" style={{ width: "20px", opacity: 0.6 }} />
      </Grid>
    </LinkTag>
  );
};
