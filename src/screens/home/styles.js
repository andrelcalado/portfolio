import styled from "styled-components";
import { theme } from "../../theme/globalStyles";
import Image from "next/image";
import {
  displayMdBold,
  displaySmMedium,
  displayX1Bold,
  displayX2Bold,
  displayXsMedium,
  displayXsRegular,
  textLgMedium,
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
  border: 1px solid ${theme.colors.white};
  position: absolute;
  bottom: 30px;
  opacity: 0.7;

  &::after {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background-color: ${theme.colors.white};
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
`;

export const SkillsCardsContainer = styled.div`
`;
