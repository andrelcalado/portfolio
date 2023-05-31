import { theme } from "@/theme/globalStyles";
import styled from "styled-components";
import { textXsRegular } from "@/theme/typography";

export const FooterSection = styled.footer`
  ${textXsRegular}
  color: ${theme.colors.gray[200]};
  text-align: center;
  margin-top: 10px;
  padding: 10px 0;
`;
