import styled from "styled-components";
import { theme } from "../../theme/globalStyles";

export const PreloadingScreen = styled.div`
  display: flex;
`;

export const LogoAnimationContainer = styled.div`
  position: relative;
  display: block !important;
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
