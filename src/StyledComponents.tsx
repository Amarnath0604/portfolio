import styled from "styled-components";
import { CSSProperties } from "react";
import { urls } from "./constants";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

type AlignItems = CSSProperties["alignItems"];
type JustifyContent = CSSProperties["alignItems"];
type FlexWrap = CSSProperties["flexWrap"];
type FlexDirection = CSSProperties["flexDirection"];
type PlaceItems = CSSProperties["placeItems"];

export const DesktopView = styled.div`
  display: block;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MobileView = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Page = styled.div`
  padding: 0px 50px;

  @media screen and (max-width: 767px) {
    padding: 50px 60px;
  }

  @media screen and (max-width: 576px) {
    padding: 50px 25px;
  }
`;

export const LeftContainer = styled.div`
  padding: 50px 0px;

  @media screen and (min-width: 768px) {
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const RightContainer = styled.div`
  padding: 50px 0px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 1110px) {
    padding-left: 55px;
  }

  @media screen and (max-width: 1000px) {
    padding-left: 45px;
  }
`;

export const Flex = styled.div<{
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexWrap?: FlexWrap;
  flexDirection?: FlexDirection;
  gap?: string;
}>`
  display: flex;
  flex-direction: row;
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : "")}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : "")}
  ${({ flexWrap }) => (flexWrap ? `flex-wrap: ${flexWrap};` : "")}
  ${({ flexDirection }) => (flexDirection ? `flex-direction: ${flexDirection};` : "")}
  ${({ gap }) => (gap ? `gap: ${gap};` : "")}
`;

export const CustomGrid = styled.div<{
  columns?: string;
  rows?: string;
  placeItems?: PlaceItems;
  gap?: string;
  override?: boolean;
  responsiveBlock?: boolean;
}>`
  display: grid;
  ${({ columns }) => (columns ? `grid-template-columns: ${columns};` : "")}
  ${({ rows }) => (rows ? `grid-template-rows: ${rows};` : "")}
  ${({ placeItems }) => (placeItems ? `place-items: ${placeItems};` : "")}
  gap: ${({ gap }) => (gap ? gap : "40px")};

  @media screen and (max-width: 767px) {
    ${({ responsiveBlock }) => (responsiveBlock ? "display: block;" : "")}
    grid-template-columns: ${({ override, columns }) => (override && columns ? columns : "repeat(1, 1fr)")};
    grid-template-rows: ${({ override, rows }) => (override && rows ? rows : "repeat(1, 1fr)")};
    gap: ${({ gap }) => (gap ? gap : "20px")};
  }
`;

export const Grid = styled.div<{
  cols?: number | string;
  colWidth?: string;
  rows?: number | string;
  rowHeight?: string;
  placeItems?: PlaceItems;
  gap?: string;
  override?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(
    ${({ cols }) => (cols ? cols : "auto")},
    ${({ colWidth }) => (colWidth ? colWidth : "auto")}
  );
  ${({ rows, rowHeight }) => (rows ? `grid-template-rows: repeat(${rows}, ${rowHeight ? rowHeight : "auto"});` : "")}
  ${({ placeItems }) => (placeItems ? `place-items: ${placeItems};` : "")}
  gap: ${({ gap }) => (gap ? gap : "40px")};

  @media screen and (max-width: 767px) {
    grid-template-columns: ${({ override, cols, colWidth }) =>
      override && cols ? `repeat(${cols}, ${colWidth || "1fr"})` : "repeat(1, 1fr)"};
    grid-template-rows: ${({ override, rows, rowHeight }) =>
      override && rows ? `repeat(${rows}, ${rowHeight || "1fr"})` : "repeat(1, 1fr)"};
    gap: ${({ gap }) => (gap ? gap : "20px")};
  }
`;

export const EmptyContainer = styled.div``;

export const NameContainer = styled.div`
  margin-bottom: 5px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const DescContainer = styled.div`
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const ChapterContainer = styled.div`
  margin-bottom: 20px;
`;

export const Chapter = styled.div<{ active: boolean }>`
  opacity: ${({ active }) => (active ? 1 : 0.3)};
  margin-bottom: 15px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0px;
  }

  hr {
    width: ${({ active }) => (active ? "70px" : "25px")};
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;

export const Title = styled.h1`
  font-size: 67px;
  font-weight: 600;
  line-height: 80px;

  @media screen and (max-width: 1040px) {
    font-size: 57px;
  }

  @media screen and (max-width: 767px) {
    font-size: 47px;
    line-height: 70px;
  }

  @media screen and (max-width: 576px) {
    font-size: 47px;
    line-height: 60px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
`;

export const LargeText = styled.h1`
  font-size: 48px;
  line-height: 50px;

  @media screen and (max-width: 1040px) {
    font-size: 36px;
  }

  @media screen and (max-width: 767px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const SubText = styled(Text)<{ small?: boolean }>`
  ${({ small }) => (small ? `font-size: 11px;` : "")}
  opacity: 0.5;
`;

export const SmallText = styled.p`
  font-size: 10px;
`;

export const BoldText = styled(Text)<{ small?: boolean; spacing?: string }>`
  ${({ small }) => (small ? `font-size: 11px;` : "")}
  ${({ spacing }) => (spacing ? `letter-spacing: ${spacing};` : "")}
  font-weight: 600 !important;
`;

export const ContributionCard = styled.div`
  padding: 20px;
  border-radius: 5px;
  background: #202022;
`;

export const LinkTag = styled.a`
  position: relative;
  display: inline-block;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
`;

export const LinkText = styled(LinkTag)`
  ::after {
    content: "";
    position: absolute;
    top: 80%;
    height: 2px !important;
    width: 40%;
    left: 30%;
    background-color: rgba(255, 255, 255, 0.6);
    transition: 0.4s ease-out all 0.1s;
  }

  :hover::after {
    background-color: rgba(255, 255, 255, 1);
    width: 90%;
    left: 5%;
    transition: 0.5s ease all;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Icon = styled.img<{ removeFilter?: boolean }>`
  width: 25px;
  height: 25px;
  ${({ removeFilter }) => (removeFilter ? "" : "filter: invert(1);")}
`;

export const ExperienceIcon = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div<{ hoverable?: boolean }>`
  background: #202022;
  border-radius: 5px;
  padding: 30px 40px;
  cursor: default;
  scale: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  & h1 {
    margin-top: 30px;
  }

  & .tooltip {
    display: none;
  }

  &.skill-card {
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 576px) {
    & h1 {
      margin-top: 0px;
    }
  }

  ${({ hoverable }) =>
    !hoverable
      ? ""
      : `
    @media screen and (min-width: 577px) {
      :hover {
        z-index: 1;
        transform: scale(1.1);
        box-shadow: 0 0px 16px -6px #000;
      }
      
      :hover .tooltip {
        display: block;
        opacity: 0.3;
      }
      
      :hover .tooltip:hover {
        opacity: 1;
      }
    }
  
    @media screen and (min-width: 768px) {
      :hover {
        transform: scale(1.2);
      }
    }
  `}
`;

export const TooltipWrapper = styled.div<{ position: TooltipPosition }>`
  position: relative;
  display: inline-block;

  & > span {
    visibility: hidden;
    background-color: black;
    text-align: center;
    padding: 10px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    width: 120px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    ${({ position }) => {
      if (position === "top") {
        return `bottom: 125%; left: 50%; margin-left: -60px;`;
      } else if (position === "bottom") {
        return `margin-left: -60px; top: 100%; left: 50%;`;
      } else if (position === "left") {
        return `top: -5px; bottom: auto; right: 128%;`;
      } else {
        return `top: -5px; left: 125%;`;
      }
    }}

    &::after {
      content: "";
      position: absolute;
      border-width: 5px;
      border-style: solid;
      ${({ position }) => {
        if (position === "top") {
          return `margin-left: -5px; top: 100%; left: 50%; border-color: black transparent transparent transparent;`;
        } else if (position === "bottom") {
          return `margin-left: -5px; bottom: 100%; left: 50%; border-color: transparent transparent black transparent;`;
        } else if (position === "left") {
          return `margin-top: -5px; top: 50%; left: 100%; border-color: transparent transparent transparent black;`;
        } else {
          return `margin-top: -5px; top: 50%; right: 100%; border-color: transparent black transparent transparent;`;
        }
      }}
    }
  }

  :hover > span {
    visibility: visible;
  }
`;

export const Error404Page = styled.div`
  height: 100vh;
  background: #121212;
  /* padding: 1em; */
  overflow: hidden;
`;

export const Error404Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
`;

export const Error404Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-family: "Eczar";
  font-size: 60vmax;
  color: #282828;
  letter-spacing: 0.025em;
  margin: 0;
  transition: 750ms ease-in-out;
`;

export const Error404Text = styled.p`
  color: #dadada;
  font-size: calc(1em + 3vmin);
  position: fixed;
  bottom: 50px;
  right: 30px;
  line-height: 1.2;
  margin: 0;
  text-align: right;
  text-shadow: -1px -1px 0 #121212, 1px 1px 0 #121212, -1px 1px 0 #121212, 1px -1px 0 #121212;

  @media screen and (min-width: 340px) {
    width: 70%;
  }

  @media screen and (min-width: 560px) {
    width: 50%;
  }

  @media screen and (min-width: 940px) {
    width: 30%;
  }

  @media screen and (min-width: 1300px) {
    width: 25%;
  }
`;

export const ProjectPage = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ProjectHeader = styled.header<{ bgImg?: string }>`
  position: relative;
  min-height: 40vh;
  width: 100vw;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${({ bgImg }) => bgImg || urls.assets.images.jpeg.code});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(4px);
    z-index: -1;
  }
`;

export const ProjectCoverContent = styled.div`
  z-index: 4;
  width: fit-content;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 576px) {
    transform: translate(-50%, -20%);
  }
`;

export const ShadowDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  pointer-events: none;
`;

export const ProjectContainer = styled.div`
  max-width: 1400px;
  margin: 0px auto;
  line-height: 30px;
  font-weight: lighter;
  padding: 50px;

  @media screen and (max-width: 767px) {
    padding: 50px 60px;
  }

  @media screen and (max-width: 576px) {
    padding: 50px 25px;
  }
`;

export const TechStackList = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 15px;
  padding: 10px 0px;
`;

export const TechStack = styled(Flex)`
  align-items: center;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  height: max-content;
  width: max-content;
  cursor: default;
`;

export const Button = styled(Flex)<{ bgColor?: string; textColor?: string; padding?: string; borderRadius?: string }>`
  align-items: center;
  background: ${({ bgColor }) => bgColor || "#fff"};
  padding: ${({ padding }) => padding || "5px 20px"};
  border-radius: ${({ borderRadius }) => borderRadius || "5px"};
  width: fit-content;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: background 0.4s;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  color: ${({ textColor }) => textColor || "#000"};

  & * {
    color: ${({ textColor }) => textColor || "#000"};
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
  }

  :hover {
    opacity: 0.9;
  }
`;

export const MailButton = styled.a`
  border: 0;
  outline: 2px solid #fff;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  padding: 10px 25px;
  cursor: pointer;
  transition: background 0.1s ease-in;
  text-decoration: none;

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }

  & span {
    display: inline-block;
  }

  &:hover span {
    animation-name: wave;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
  }

  @keyframes wave {
    0% {
      transform: scale(1, 1) translateY(0);
    }

    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }

    30% {
      transform: scale(0.9, 1.1) translateY(-7px);
    }

    50% {
      transform: scale(1, 1) translateY(0);
    }

    57% {
      transform: scale(1, 1) translateY(-2px);
    }

    64% {
      transform: scale(1, 1) translateY(0);
    }

    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`;

export const Header = styled.header<{ width?: string }>`
  z-index: 999;
  width: ${({ width }) => width || "100vw"};
  height: 80px;
  position: sticky;
  top: -1px;
  left: 0px;
  transform: translate(-6.35%, 0%);
  transition: background 0.1s ease-in;

  &.active {
    background: #252525;
    box-shadow: 0px 5px 10px -7px #000;
  }

  @media screen and (min-width: 577px) {
    transform: translate(-9%, 0);
  }

  @media screen and (max-width: 400px) {
    transform: translate(-6.5%, 0);
  }
`;

export const HeaderText = styled(BoldText)`
  position: absolute;
  top: 50%;
  left: 6.35%;
  transform: translate(0%, -50%);
`;

export const FloatingBtnContainer = styled.div`
  position: fixed;
  z-index: 999999;
  display: inline-flex;
  transition: opacity 0.3s ease 0s;
  opacity: 1;
  inset: auto 0px 0px auto;
`;

export const FloatingBtn = styled.div`
  padding: 25.6667px 10.66667px 10.66667px 25.6667px;
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  border-radius: 100px 0px 0px;
  top: 0px;
  backface-visibility: hidden;
  background: rgb(73, 82, 244);
  color: rgb(255, 255, 255);
  margin-right: 0px;
  margin-bottom: 0px;

  ::before {
    position: absolute;
    content: " ";
    inset: 0px;
    background-color: rgb(255, 255, 255);
    z-index: 1;
    opacity: 0;
    transition: all 0.3s ease 0s;
    border-radius: inherit;
    pointer-events: none;
  }

  ::after {
    position: absolute;
    content: " ";
    inset: 0px;
    z-index: 1;
    border-radius: inherit;
    pointer-events: none;
  }
`;

export const FloatingBtnInner = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
`;

export const UpArrowSvg = styled.svg`
  fill: rgb(255, 255, 255);
  width: 31.5px;
  height: 31.5px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease 0s;
`;

export const ProgressContainer = styled.div`
  margin-top: 5px;
  padding: 0;
  width: 100%;
  height: 10px;
  overflow: hidden;
  background: #fff;
  border-radius: 20px;
`;

export const Progress = styled.div<{ width: number; background: string }>`
  position: relative;
  float: left;
  min-width: 1%;
  width: ${({ width }) => width}%;
  max-width: 100%;
  background: ${({ background }) => background};
  height: 100%;
  transition: width 1s;
`;

export const AboutMePhoto = styled.img`
  height: 350px;
  width: 300px;
  border-radius: 12px;
  object-fit: cover;
`;

export const CompanyLogo = styled.img`
  height: 50%;
  width: 50%;
`;
