import Link from "next/link";
import { theme } from "@/theme/globalStyles";
import { textSmRegular, textXsMedium, textXsRegular } from "@/theme/typography";
import styled from "styled-components";

export const ButtonComponent = styled(Link)`
  ${textXsMedium}
  padding: 12px 20px;
  border: 1px solid ${theme.colors.green.light};
  background-color: transparent;
  color: ${theme.colors.white};
  text-align: center;
  border-radius: 3px;
  align-items: center;
  display: flex;
  gap: 6px;

  & svg {
    width: 15px;
  }

  &:hover {
    background-color: ${theme.colors.green.light};
    color: ${theme.colors.blue.dark};

    & svg {
        fill: ${theme.colors.blue.dark};
    }
  }
`;
