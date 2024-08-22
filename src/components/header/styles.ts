import { theme } from "../../theme/globalStyles";
import styled, { css } from "styled-components";
import { textMdRegular } from "../../theme/typography";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
  background: transparent;
  transition: 0.4s ease-out;

  ${({ scrolled }) =>
    css`
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${scrolled ? "rgba(1,21,28, 0.9)" : "transparent"};
        z-index: -1;
        box-shadow: 0 4px 30px
          ${scrolled ? "rgba(1,21,28, 0.9)" : "transparent"};
        backdrop-filter: blur(${scrolled ? "5px" : "0"});
        -webkit-backdrop-filter: blur(${scrolled ? "5px" : "0"});
        transition: 0.5s ease-out;
        pointer-events: none;
      }
    `}
`;

export const LogoContainer = styled.figure`
  ${({ active, scrolled }) => css`
    opacity: 0;
    top: -40px;
    position: relative;
    width: ${scrolled ? "30px" : "60px"};
    transition: 0.5s ease-out;
    z-index: 9999999;

    & svg {
      width: 100%;
      object-fit: contain;
    }

    @media (max-width: 670px) {
      width: 30px;
      transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);
    }
  `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ scrolled }) => (scrolled ? "20px 0 " : "30px 0")};
  transition: 0.5s ease-out;

  @media (max-width: 670px) {
    padding: 15px 0;
  }
`;

export const NavContainer = styled.nav`
  ${({ active, scrolled }) => css`
    margin-top: ${scrolled ? "0" : "-50px"};
    transition: 0.5s ease-out;

    @media (max-width: 670px) {
      top: 0;
      left: 0;
      position: fixed;
      background-color: ${theme.colors.blue.darkLight};
      transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);
      pointer-events: ${active ? "all" : "none"};
      width: ${active ? "100vw" : 0};
      height: 100vh;
      z-index: 999999;
      overflow: hidden;
      ${active ? "margin: 0;" : ""}
    }

    & ul {
      position: relative;
      transition: 1s cubic-bezier(0.69, -0.01, 0.24, 1);
      align-items: center;
      display: flex;
      gap: 30px;

      @media (max-width: 670px) {
        right: ${active ? 0 : "-100vw"};
        flex-direction: column;
        padding: 100px 20px 0;
        gap: 0;
      }
    }
  `}
`;

export const NavLinkItem = styled.li`
  ${({ active }) => css`
    opacity: 0;
    top: -40px;
    position: relative;
    ${textMdRegular}
    color: ${theme.colors.white};
    cursor: pointer;

    @media (max-width: 670px) {
      width: 100%;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid ${theme.colors.gray[400]};

      &:first-of-type {
        padding-top: 20px;
        border-top: 1px solid ${theme.colors.gray[400]};
      }
    }

    & a {
      display: flex;
      gap: 5px;
      align-items: center;
    }

    & svg {
      width: 15px;
      flex-shrink: 0;
    }

    ${active ? "" : "&:hover {"}
    transform: scale(1.04);
    color: ${theme.colors.green.light};

    & svg {
      fill: ${theme.colors.green.light};
    }
    ${active ? "" : "}"}
  `}
`;

export const HambButton = styled.button`
  ${({ active }) => css`
    width: 22px;
    display: none;
    height: ${active ? 0 : "2px"};
    background-color: ${theme.colors.white};
    transition: 0.5s ease;
    position: relative;
    z-index: 9999999;
    border: none;

    &::after,
    &::before {
      content: "";
      width: 22px;
      height: 2px;
      right: 0;
      background-color: ${theme.colors.white};
      border-radius: 5.8rem;
      position: absolute;
    }

    &::before {
      top: -8px;
      animation: ${active
        ? "firstLineIn 0.4s forwards, firstCrossIn 0.4s 0.4s forwards"
        : "firstCrossOut 1s forwards"};
    }

    &::after {
      top: 8px;
      animation: ${active
        ? "secondLineIn 0.4s forwards, secondCrossIn 0.4s 0.4s forwards"
        : "secondCrossOut 1s forwards"};
    }

    @media (max-width: 670px) {
      display: block;
    }
  `}
`;
