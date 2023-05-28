import styled from "styled-components";
import { theme } from "@/theme/globalStyles";
import css from "styled-jsx/css";

export const BackToTopStyled = styled.button`
  position: fixed;
  bottom: 10%;
  right: 20px;
  height: 40px;
  width: 40px;
  background-color: ${theme.colors.blue.darkLight};
  border-radius: 100%;
  border: 1px solid ${theme.colors.green.light};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  z-index: 500;
  ${({ scrolled }) => css`
    pointer-events: ${scrolled ? "all" : "none"};
    opacity: ${scrolled ? 1 : 0};
    transform: translate(0, ${scrolled ? 0 : "20px"});
  `}

  &::before {
    content: "next";
    font-family: "swiper-icons";
    display: block;
    color: ${theme.colors.green.light};
    transform: rotate(-90deg);
    transform-origin: center;
  }

  &:hover {
    transform: scale(1.2);
    background-color: ${theme.colors.green.light};

    &::before {
      color: ${theme.colors.blue.darkLight};
    }
  }
`;
