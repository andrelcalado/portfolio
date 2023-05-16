import styled from "styled-components";
import { theme } from "../../theme/globalStyles";
import Image from "next/image";
import {
  displayMdBold,
  displaySmBold,
  displaySmMedium,
  displayX1Bold,
  displayX2Bold,
  displayXsBold,
  displayXsMedium,
  displayXsRegular,
  textLgMedium,
  textLgRegular,
  textMdRegular,
  textSmRegular,
  textX1Bold,
  textX1Medium,
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
    animation: scrollDown 1.5s infinite ease-in-out;
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

  & h2 {
    ${displaySmBold}
    background: -webkit-linear-gradient(0deg, ${theme.colors.green.light} -20%, ${theme.colors.blue.dark} 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 0 auto 60px;
    position: relative;
    width: fit-content;

    &::after {
      content: '';
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
  transition: 0.4s cubic-bezier(.47,1.64,.41,.8);
  filter: blur(.7px);

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
