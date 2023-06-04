import { theme } from "../../theme/globalStyles";
import { textXsSemiBold } from "../../theme/typography";
import styled from "styled-components";

export const ProjectPlaceholderCard = styled.div`
  position: relative;
  background-color: ${theme.colors.white};
  border-radius: 3px;
  padding: 15px;
  width: 280px;
  height: fit-content;
  display: flex;
  gap: 20px;
  overflow: hidden;
  opacity: 1;
  z-index: 5;

  @media (max-width: 584px) {
    width: 100%;
  }

  & img {
    z-index: 1;
    position: relative !important;
    width: fit-content !important;
    height: 33px !important;
    filter: brightness(0);
  }

  & > p {
    ${textXsSemiBold}
    text-align: left;
    color: ${theme.colors.blue.dark};
    margin: 0 !important;
    z-index: 1;
  }
`;
