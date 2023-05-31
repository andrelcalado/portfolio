import styled from "styled-components";
import { theme } from "../../theme/globalStyles";
import Image from "next/image";
import {
  displayMdBold,
  displaySmBold,
  displayX1Bold,
  displayXsRegular,
  textSmMedium,
  textSmRegular,
  textX1Bold,
  textXsRegular,
} from "../../theme/typography";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export const Main = styled.main`
  color: ${theme.colors.white};
  height: 100%;
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    width: 400px;
    height: 400px;
    bottom: -25%;
    left: -10%;
    background: radial-gradient(
      circle,
      ${theme.colors.blue.darkLight} 0%,
      rgba(60, 255, 209, 0.5) 54%
    );
    position: absolute;
    filter: blur(200px);
  }
`;

export const HeroImgBG = styled(Image)`
  object-fit: contain;
  transform: translate(100px, 40px);
  pointer-events: none;
`;

export const HeroTexts = styled.div`
  position: relative;
  z-index: 5;

  & h2 {
    ${displayXsRegular}
  }

  & h1 {
    ${displayX1Bold}
  }
`;

export const StacksContainer = styled.div`
  height: 53px;
  overflow: hidden;
  margin-bottom: 25px;
`;

export const StacksMoviment = styled.div`
  margin-top: 10px;

  & h3 {
    ${displayMdBold}
    color: ${theme.colors.green.light};
    margin-bottom: 20px;
  }
`;

export const HeroCTA = styled.div`
  display: flex;
  gap: 20px;
`;

export const ScrollDrop = styled.div`
  width: 15px;
  height: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 15px;
  border: 1px solid ${theme.colors.green.light};
  position: absolute;
  bottom: 30px;

  &::after {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background-color: ${theme.colors.green.light};
    position: absolute;
    top: 4px;
    left: 52%;
    transform: translate(-50%, 0);
    animation: scrollDown 2.5s infinite ease-in-out;
  }
`;

// Skills Section
export const SkillsSection = styled.section`
  position: relative;
`;

export const TopPolygon = styled.div`
  width: 100%;
  height: 75px;
  filter: drop-shadow(-407px -20px 51px #000);

  & svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const SkillsSectionWrapper = styled.div`
  background-color: ${theme.colors.white};
  position: relative;
  z-index: 3;
  padding: 50px 0;
  min-height: 100vh;

  & h2 {
    opacity: 0;
    top: 40px;
    ${displaySmBold}
    background: -webkit-linear-gradient(0deg, ${theme.colors.green
      .light} -20%, ${theme.colors.blue.dark} 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 0 auto 60px;
    position: relative;
    width: fit-content;

    &::after {
      content: "";
      position: absolute;
      height: 8px;
      width: 8px;
      background-color: ${theme.colors.blue.dark};
      right: -20px;
      bottom: 9px;
      animation: typing 1.5s infinite ease-out;
      transition: none;
      border-radius: 1px;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 220px;
      height: 2px;
      background-color: ${theme.colors.blue.dark};
      filter: blur(10px);
      border-radius: 100%;
      opacity: 0.7;
    }
  }
`;

export const SkillsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  position: relative;
  top: 40px;
  opacity: 0;
`;

export const SkillCard = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  gap: 20px;
  opacity: 0.5;
  transition: 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  filter: blur(0.7px);

  &:hover {
    opacity: 1;
    transform: scale(1.03);
    filter: blur(0);
  }
`;

export const SkillTexts = styled.div`
  & p {
    ${textSmRegular}
    color: ${theme.colors.gray[200]};
    line-height: 12px;
  }

  & h4 {
    ${textX1Bold}
    color: ${theme.colors.gray[400]};
  }
`;

export const SkillLogo = styled.figure`
  width: 50px;
  height: 100%;

  & svg,
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative !important;
    fill: #62dafb;
  }
`;

export const SkillsFooterContainer = styled.div`
  margin: 100px auto 0;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 130px;
    height: 1px;
    background-color: ${theme.colors.blue.dark};
    animation: widthLine 3.5s infinite cubic-bezier(0.47, 1.64, 0.41, 0.8);
  }
`;

export const SkillsSymbolAnimated = styled.figure`
  width: 30px;
  height: 30px;
  animation: symRotate 3.5s infinite cubic-bezier(0.47, 1.64, 0.41, 0.8);

  & img {
    object-fit: contain;
    position: relative !important;
  }
`;

// Projects Section
export const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 120px 0 70px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    width: 400px;
    height: 400px;
    top: -25%;
    right: 50%;
    background: radial-gradient(
      circle,
      ${theme.colors.blue.darkLight} 0%,
      rgba(60, 255, 209, 0.5) 54%
    );
    position: absolute;
    filter: blur(200px);
  }

  & h2,
  & p {
    top: 40px;
    opacity: 0;
  }

  & h2 {
    ${displaySmBold}
    background: -webkit-linear-gradient(0deg, ${theme.colors.green
      .light} 30%, ${theme.colors.green.shadow} 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 0 auto 20px;
    position: relative;
    width: fit-content;
    z-index: 5;

    &::after {
      content: "";
      position: absolute;
      height: 8px;
      width: 8px;
      background-color: ${theme.colors.green.light};
      right: -20px;
      bottom: 9px;
      animation: typing 1.5s infinite ease-out;
      transition: none;
      border-radius: 1px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 5px;
      background-color: ${theme.colors.green.light};
      filter: blur(15px);
      border-radius: 100%;
      opacity: 0.5;
    }
  }

  & p {
    ${textSmRegular}
    text-align: center;
    max-width: 500px;
    margin: 0 auto 60px;
    color: ${theme.colors.gray[200]};
    position: relative;
    z-index: 5;
  }
`;

export const ProjectsSlideContainer = styled.div`
  display: flex;
  position: relative;
  top: 40px;
  opacity: 0;
`;

export const ProjectsPlaceholderContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  margin-top: 80px;
`;

// Timeline section
export const TimeLineSection = styled.section`
  width: 100%;
  margin-top: 60px;
  padding: 120px 0 70px;
  position: relative;

  &::before {
    content: "";
    top: 0;
    left: 50%;
    background-color: transparent;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 3px solid ${theme.colors.green.light};
    transform: translate(-50%, 0) rotate(45deg);
    animation: transformSymbol 12s cubic-bezier(0.47, 1.64, 0.41, 0.8) infinite;
  }

  &::after {
    content: "";
    width: 400px;
    height: 400px;
    top: 0;
    right: 150px;
    background: radial-gradient(
      circle,
      ${theme.colors.blue.darkLight} 0%,
      rgba(60, 255, 209, 0.5) 54%
    );
    position: absolute;
    filter: blur(200px);
    opacity: 0.7;
  }

  & h2 {
    ${displaySmBold}
    background: -webkit-linear-gradient(0deg, ${theme.colors.green
      .light} 30%, ${theme.colors.green.shadow} 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 0 auto 50px;
    position: relative;
    width: fit-content;
    opacity: 0;
    z-index: 5;
    top: 40px;

    &::after {
      content: "";
      position: absolute;
      height: 8px;
      width: 8px;
      background-color: ${theme.colors.green.light};
      right: -20px;
      bottom: 9px;
      animation: typing 1.5s infinite ease-out;
      transition: none;
      border-radius: 1px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 5px;
      background-color: ${theme.colors.green.light};
      filter: blur(15px);
      border-radius: 100%;
      opacity: 0.5;
    }
  }
`;

export const TimelineComponent = styled(VerticalTimeline)`
  z-index: 5;

  &::before {
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(1, 21, 28, 1) 0%,
      rgba(60, 255, 209, 1) 100%
    );
    height: 95%;
  }
`;

export const TimelineItem = styled(VerticalTimelineElement)`
  margin-bottom: 150px;

  & h3,
  & h4,
  & p {
    text-align: right;
    max-width: 410px;
    margin: 0 0 0 auto;
  }

  & p {
    ${textXsRegular}
    color: ${theme.colors.gray[250]};
  }

  & h3 {
    ${textX1Bold}
    color: ${theme.colors.white};
  }

  & h4 {
    ${textSmMedium}
    color: ${theme.colors.gray[200]};
    margin-bottom: 10px;

    &::after {
      display: block;
      content: "";
      width: 60px;
      height: 1px;
      background-color: ${theme.colors.green.light};
      margin: 10px 0 0 auto;
    }
  }

  & .vertical-timeline-element-content {
    background: transparent;
    box-shadow: none;
  }

  & .vertical-timeline-element-content-arrow {
    top: 30px;
    height: 13px;
    width: 13px;
    border: 0 solid transparent;
    border-right: 2px solid ${theme.colors.green.light};
    border-top: 2px solid ${theme.colors.green.light};
    transform: rotate(45deg);
  }

  &:nth-of-type(2n) {
    & h3,
    & h4,
    & p {
      text-align: left;
      margin: 0 auto 0 0;
    }

    & h4 {
      margin-bottom: 10px;

      &::after {
        margin: 10px auto 0 0;
      }
    }

    & .vertical-timeline-element-content-arrow {
      top: 29px !important;
      transform: rotate(-135deg) !important;
    }
  }

  & .vertical-timeline-element-icon {
    box-shadow: 0 0 20px 13px #1315157d;
    width: 70px;
    height: 70px;
    overflow: hidden;
    margin-left: -36px;
  }

  & .vertical-timeline-element-date {
    top: 14px !important;
    ${textSmMedium}
    color: ${theme.colors.gray[200]};
  }
`;

export const ALCodeBorderSymbol = styled.figure`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: -300px;
  z-index: 20;

  & svg {
    width: 100%;
    height: 100%;
    object-fit: contain;

    & path {
      stroke-dasharray: 300;
      stroke-dashoffset: 200;
    }
  }
`;

// Contact Section
export const ContactSection = styled.section`
  padding: 120px 0 70px;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::after {
    content: "";
    width: 100%;
    height: 100px;
    top: -100px;
    left: 0;
    background: linear-gradient(
      180deg,
      ${theme.colors.blue.darkLight} 0%,
      rgba(60, 255, 209, 0.5) 100%
    );
    position: absolute;
    opacity: 0.2;
  }

  & h2 {
    ${displaySmBold}
    background: -webkit-linear-gradient(0deg, ${theme.colors.green
      .light} 30%, ${theme.colors.green.shadow} 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 0 auto 90px;
    position: relative;
    width: fit-content;
    z-index: 5;
    opacity: 0;
    top: 40px;

    &::after {
      content: "";
      position: absolute;
      height: 8px;
      width: 8px;
      background-color: ${theme.colors.green.light};
      right: -20px;
      bottom: 9px;
      animation: typing 1.5s infinite ease-out;
      transition: none;
      border-radius: 1px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 5px;
      background-color: ${theme.colors.black};
      filter: blur(15px);
      border-radius: 100%;
      opacity: 1;
    }
  }
`;

export const BGVideo = styled.video`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  opacity: 0.6;
  filter: blur(1px);
`;

export const ContactCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  opacity: 0;
  gap: 30px;
  top: 40px;
`;

export const ContactSymbolAnimated = styled(SkillsSymbolAnimated)`
  & img {
    filter: invert(1) brightness(20);
  }
`;

export const ContactFooterContainer = styled(SkillsFooterContainer)`
  margin: 140px auto 0;

  &::before,
  &::after {
    background-color: ${theme.colors.white};
    height: 2px;
  }
`;
