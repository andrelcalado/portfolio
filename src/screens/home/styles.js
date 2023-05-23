import styled from "styled-components";
import { theme } from "../../theme/globalStyles";
import Image from "next/image";
import {
  displayMdBold,
  displaySmBold,
  displayX1Bold,
  displayXsRegular,
  textSmRegular,
  textX1Bold,
} from "@/theme/typography";

export const Main = styled.main`
  color: ${theme.colors.white};
  height: 100%;
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
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
      rgba(60, 255, 209, 0.5) 0%,
      ${theme.colors.blue.darkLight} 54%
    );
    position: absolute;
    filter: blur(150px);
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
  height: 100vh;

  & h2 {
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
`;

export const SkillCard = styled.div`
  width: 100%;
  /* max-width: 300px; */
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
  height: 100vh;
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
      rgba(60, 255, 209, 0.5) 0%,
      ${theme.colors.blue.darkLight} 54%
    );
    position: absolute;
    filter: blur(150px);
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
    color: ${theme.colors.white};
    position: relative;
    z-index: 5;
  }
`;

export const ProjectsSlideContainer = styled.div`
  display: flex;
`;

export const ProjectsPlaceholderContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 80px;
`;

export const TimeLineMarker = styled.div`
  position: absolute;
  top: 1.75rem;
  left: 4rem;
  width: 1rem;
  height: 1rem;
  transform: translate3d(-50%, 0, 0);
  background: blue;
  border-radius: 100%;
  z-index: 2000;
`;

export const TimeLineSection = styled.section`
  width: 100%;
  height: 100vh;
`;

export const TimeLineTrack = styled.div`
  position: relative;
  min-width: max(200rem, 200%);
  padding: 1.5rem max(100rem, 100%) 0 0;
  height: 6rem;
`;

export const TimeLineList = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    user-select: none;

    & a {
      position: relative;
      display: block;
      min-width: 8rem;
      text-align: center;
    }
  }
`;
