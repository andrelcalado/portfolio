import styled, { css } from "styled-components";
import { theme } from "../../theme/globalStyles";

export const ModalVideoScreen = styled.div`
  ${({ active }) => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);
    pointer-events: ${active ? "all" : "none"};
    opacity: ${active ? 1 : 0};
  `}
`;

export const ModalVideoContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 3px;
  max-width: 960px;
  max-height: 640px;
  padding: 5px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;
