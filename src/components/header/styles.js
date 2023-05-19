import { theme } from "@/theme/globalStyles";
import styled, { css } from "styled-components";
import { textMdRegular } from "@/theme/typography";

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
        transition: .5s ease-out;
        pointer-events: none;
      }
    `}
`;

export const LogoContainer = styled.figure`
  width: ${({ scrolled }) => (scrolled ? "30px" : "60px")};
  transition: .5s ease-out;

  & svg {
    width: 100%;
    object-fit: contain;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ scrolled }) => (scrolled ? "20px 0 " : "30px 0")};
  transition: .5s ease-out;
`;

export const NavContainer = styled.nav`
  margin-top: ${({scrolled}) => scrolled ? '0' : '-50px' };
  transition: .5s ease-out;

  & ul {
    display: flex;
    gap: 30px;
    align-items: center;

    & li {
      ${textMdRegular}
      color: ${theme.colors.white};
      cursor: pointer;

      & a {
        display: flex;
        gap: 5px;
        align-items: center;
      }

      & svg {
        width: 15px;
        flex-shrink: 0;
      }

      &:hover {
        transform: scale(1.04);
        color: ${theme.colors.green.light};

        & svg {
          fill: ${theme.colors.green.light};
        }
      }
    }
  }
`;
