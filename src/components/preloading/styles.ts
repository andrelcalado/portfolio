import styled from "styled-components";
import { theme } from "../../theme/globalStyles";

export const PreloadingScreen = styled.div`
  height: 100svh;
  width: 100svw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blue.darkLight};
  position: fixed;
  z-index: 9999999;

  &::after,
  &::before {
    content: "";
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      ${theme.colors.blue.darkLight} 0%,
      rgba(60, 255, 209, 0.5) 54%
    );
    position: absolute;
    filter: blur(200px);
    transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);
    animation: ballBlurOpacity 3s infinite ease-in-out alternate-reverse;
  }

  &::after {
    bottom: -250px;
    left: -250px;
  }

  &::before {
    top: -250px;
    right: -250px;
  }
`;

export const LogoAnimationContainer = styled.div`
  position: relative;
  top: 20px;

  & svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ALLogoFigure = styled.figure`
  width: 100px;
  height: 100px;

  & svg {
    & path {
      fill: transparent;
      stroke: ${theme.colors.white};
      stroke-dasharray: 3400;
      stroke-dashoffset: 3400;
      stroke-width: 10px;
    }
  }
`;

export const CodeLogoFigure = styled.figure`
  width: 40px;
  height: 20px;
  margin: 2px auto 0;
  overflow: hidden;

  & svg {
    top: -50px;
    opacity: 0;
    position: relative;
    fill: ${theme.colors.white};
  }
`;
