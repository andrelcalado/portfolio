import { theme } from "@/theme/globalStyles";
import { textLgBold, textSmBold } from "@/theme/typography";
import styled from "styled-components";

export const CardWithLogo = styled.picture`
  width: 250px;
  height: 250px;
  display: block;
  position: relative;
  background-color: ${theme.colors.white};
  padding: 60px;
  transform: skewY(-3deg);
  filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.8));
  cursor: pointer;
  z-index: 5;

  & img {
    position: relative !important;
  }
`;

export const BorderBG = styled.div`
  width: 250px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skewY(-3deg);
  position: absolute;
  background-color: transparent;
  border: 1px solid ${theme.colors.green.light};
  z-index: 1;
  pointer-events: none;
  transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);
`;

export const CardTextsContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: -10px;
  transform: skew(0, -3deg);
  z-index: 5;
  color: ${theme.colors.blue.darkLight};
  max-width: 0;
  overflow: hidden;
  transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);

  &::after {
    content: "";
    bottom: calc(19.5px / 2);
    left: calc(24px / -2);
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-right: 10.5px solid ${theme.colors.green.light};
    position: absolute;
  }

  & h4 {
    ${textLgBold}
    background-color: ${theme.colors.green.light};
    padding: 10px 20px;
    overflow: hidden;

    & span {
      left: 250px;
      position: relative;
      transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);
    }
  }

  & p {
    ${textSmBold}
    margin-top: 2px;
    padding-left: 23px;
    position: relative;
    z-index: -1;
    position: relative;
    top: -25px;
    transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);
  }
`;

export const ContactCardField = styled.a`
  position: relative;
  transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);

  &:hover {
    transform: translate(5px, -5px);

    & .borderBG {
      top: 50%;
      left: 50%;
      transform: translate(-58%, -40%) skewY(-3deg);
    }

    & .cardTextsContainer {
      max-width: 100%;

      & span {
        left: 0;
      }

      & p {
        top: 0;
      }
    }
  }
`;
