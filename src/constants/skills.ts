import { SkillType } from "src/types";
import { urls } from "./urls";
import wplogo from "../images/wordpress-logo.png";
import reactlogo from "../images/react-logo.svg";
import jslogo from "../images/js-logo.svg";
import phplogo from "../images/php-logo.svg";
import godadlogo from "../images/godaddy-logo.svg";
import mailchimplogo from "../images/mailchimp-logo.png";
import bitbucketlogo from "../images/bitbucket-logo.svg";
import githublogo from "../images/github-logo.svg";
import htmllogo from "../images/html5-logo.svg";
import csslogo from "../images/css3-logo.svg";
import bootstraplogo from "../images/bootstrap-logo.svg";

export const technologies = {
  reactjs: {
    name: "React.js",
    logo: reactlogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  Javascript: {
    name: "Javascript",
    logo: jslogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  wordpress: {
    name: "Wordpress",
    logo: wplogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  php: {
    name: "Php",
    logo: phplogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  Godaddy: {
    name: "Godaddy",
    logo: godadlogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  mysql: {
    name: "MySQL",
    logo: urls.assets.images.svg.mysql,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  mailchimp: {
    name: "Mailchimp",
    logo: mailchimplogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  bitbucket: {
    name: "Bitbucket",
    logo: bitbucketlogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  github: {
    name: "Github",
    logo: githublogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  html: {
    name: "HTML",
    logo: htmllogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  css: {
    name: "CSS",
    logo: csslogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
  bootstrap: {
    name: "Bootstrap",
    logo: bootstraplogo,
    style: { filter: "invert(0.5) brightness(2)" },
  },
};

export const skills: SkillType[] = [
  technologies.reactjs,
  technologies.Javascript,
  technologies.wordpress,
  technologies.php,
  technologies.Godaddy,
  technologies.mysql,
  technologies.mailchimp,
  technologies.bitbucket,
  technologies.github,
  technologies.html,
  technologies.css,
  technologies.bootstrap,
];
