import styled, { css } from "styled-components";
import { theme } from "../../theme/globalStyles";

export const ModalVideoScreen = styled.div<{ active: boolean }>`
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
  position: relative;
  border-radius: 3px;
  max-width: 960px;
  max-height: 640px;
  padding: 5px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.button`
  top: -20px;
  right: -20px;
  background-color: ${theme.colors.blue.darkLight};
  filter: drop-shadow(0 0 5px ${theme.colors.black});
  border: 1px solid ${theme.colors.green.light};
  border-radius: 100%;
  position: absolute;
  height: 40px;
  width: 40px;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    width: 2px;
    height: 20px;
    background-color: ${theme.colors.green.light};
    transform: translate(-50%, -50%) rotate(45deg);
    position: absolute;
    left: 50%;
    top: 50%;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    transform: scale(1.2);
    background-color: ${theme.colors.green.light};

    &::before,
    &::after {
      background-color: ${theme.colors.blue.darkLight};
    }
  }
`;
