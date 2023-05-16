import { theme } from "@/theme/globalStyles";
import styled from "styled-components";
import { textMdRegular } from "@/theme/typography";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
`;

export const LogoContainer = styled.figure`
  width: 60px;

  & svg {
    width: 100%;
    object-fit: contain;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 0;
`;

export const NavContainer = styled.nav`
  & ul {
    display: flex;
    gap: 30px;
    align-items: center;

    & li {
      ${textMdRegular}
      color: ${theme.colors.white};
      display: flex;
      gap: 5px;
      cursor: pointer;
      align-items: center;

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
