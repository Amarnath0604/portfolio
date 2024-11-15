import { ProjectType, SlugList } from "src/types";
import { technologies } from "./skills";
import panelImg from "../images/panel-ss.png";
import zedImg from "../images/zed-ss.png";
import jonesImg from "../images/jones-ss.png";
import valmerImg from "../images/valmer-ss.png";
import ccbhImg from "../images/ccbh-ss.png";

export const projects: ProjectType[] = [
  {
    id: 0,
    title: "Admin Tool Application",
    slug: "admintool",
    company: "ZED Digital",
    coverPhoto: panelImg,
    description:
      "Experienced in developing robust React-based Admin Tool Applications, enabling seamless configuration changes across mobile apps and databases.",
    oneLiner: "Michigan Department of Transportation",
    duration: "May 2023 - Present",
    link: "https://mdotpanel.com/",
    primaryTechnologies: [technologies.reactjs],
    techStack: [technologies.reactjs],
    contributions: [
      "Skilled in creating reusable UI components and responsive, user-friendly pages, with a focus on security through access tokens and two-factor authentication.",
      "Designed real-time analytics panels with dynamic charts, enhancing data visualization for better decision-making.",
      "Proficient in deployment and version control with Bitbucket and Netlify, managing complex repositories for multiple applications.",
      "The admin tool application is designed for multiple clients, providing data analytics and enabling review of various reports, including payments, transactions, revenue, and vehicle tracking.",
    ],
  },
  {
    id: 0,
    title: "ZED Digital Website",
    slug: "zed",
    company: "ZED Digital",
    coverPhoto: zedImg,
    description:
      "I redesigned the ZED Digital website to create a visually appealing and engaging platform that highlights our company’s services. Through WordPress, I developed a modern UI, wrote informative blogs, and created custom graphics to reinforce our brand identity and expertise.",
    oneLiner: "ZED Digital",
    duration: "Dec 2021 - Apr 2022",
    link: "https://zed.digital/",
    primaryTechnologies: [technologies.wordpress],
    techStack: [technologies.wordpress],
    contributions: [
      "I created and redesigned the ZED Digital website for our company, focusing on building a visually appealing and user-friendly experience through WordPress.",
      "This involved crafting a modern, attractive UI that enhances user engagement and guides visitors through our solutions and services.",
      "To reinforce our expertise, I authored blogs and articles on key industry topics, giving potential clients valuable insights into our capabilities.",
      "I also designed custom images and graphics that align with our brand's visual identity, adding professionalism and aesthetic appeal to the site.",
      "The result is a cohesive, informative platform that effectively communicates our brand’s values and offerings.",
    ],
  },
  {
    id: 0,
    title: "CCBH",
    slug: "ccbh",
    company: "ZED Digital",
    coverPhoto: ccbhImg,
    description:
      "Cuyahoga County Board of Health: Dedicated to protecting and promoting public health in Cuyahoga County through various programs and health services.",
    oneLiner: "Cuyahoga County Board of Health",
    duration: "Apr 2024 - Nov 2024",
    link: "https://ccbh.net/",
    primaryTechnologies: [technologies.wordpress],
    techStack: [technologies.wordpress],
    contributions: [
      "I've developed the Cuyahoga County Board of Health website using WordPress and then redesigned the website to provide a more modern and user-friendly experience.",
      "As part of the redesign, I incorporated ADA compliance features to enhance accessibility, ensuring the website meets essential web accessibility standards for all users.",
      "Created custom pages and options using php for user friendly access to the website",
      "Additionally, I manage SSL, domain, and web hosting for the site and perform monthly maintenance, including theme and plugin updates.",
    ],
  },
  {
    id: 0,
    title: "Jones Topsoil",
    slug: "jonestopsoil",
    company: "ZED Digital",
    coverPhoto: jonesImg,
    description:
      "I created the Jones Topsoil website with a visually appealing and user-friendly interface designed to engage visitors and make navigation seamless",
    oneLiner: "Jones Topsoil",
    duration: "May 2022 - Jan 2023",
    link: "https://www.jonestopsoil.com/",
    primaryTechnologies: [technologies.wordpress],
    techStack: [technologies.wordpress],
    contributions: [
      "The site is ADA-compliant, ensuring accessibility for all users and meeting essential inclusivity standards.",
      "Built on WooCommerce, I implemented a custom price calculation feature to provide precise pricing based on user input, enhancing the shopping experience.",
      "The site is also optimized for performance, ensuring quick load times and smooth functionality.",
      "Overall, the Jones Topsoil website is designed to provide an efficient, accessible, and enjoyable user experience tailored to the client's needs.",
    ],
  },
  {
    id: 0,
    title: "Valmerland",
    slug: "valmer",
    company: "ZED Digital",
    coverPhoto: valmerImg,
    description:
      "I developed the Valmer Land website with a clean, modern design that captures the brand’s professionalism and attention to detail.",
    oneLiner: "Valmer Land Title Agency",
    duration: "March 2021 - May 2022",
    link: "https://valmerland.com/",
    primaryTechnologies: [technologies.wordpress],
    techStack: [technologies.wordpress],
    contributions: [
      "Built on a WordPress platform, I customized various elements to align with Valmer Land's unique services, enhancing both functionality and user experience.",
      "The site is fully ADA-compliant, ensuring accessibility and inclusivity for all users.",
      "The website is optimized for fast loading and mobile responsiveness, providing a seamless experience across devices.",
      "Overall, this site combines functionality, aesthetics, and accessibility to effectively represent Valmer Land's brand and offerings.",
    ],
  },
];

const projectsLen = projects.length;

projects.forEach((project, idx) => {
  project.id = projectsLen - 1 - idx;
});

export const slugList = Object.assign(
  {},
  ...projects.map((project) => ({ [project.slug]: projectsLen - project.id - 1 }))
) as SlugList;
