import { theme } from "@/theme/globalStyles";
import { textSmRegular, textXsRegular } from "@/theme/typography";
import styled from "styled-components";

export const ProjectPlaceholderCard = styled.div`
  position: relative;
  background-color: transparent;
  border-radius: 3px;
  padding: 15px;
  width: 280px;
  height: fit-content;
  /* border: .1px solid ${theme.colors.green.light}; */
  display: flex;
  gap: 20px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  opacity: 1;

  &::after {
    content: "";
    z-index:0;
    width: 400px;
    height: 400px;
    top: 0;
    right: 50%;
    background: radial-gradient(
      circle,
      rgba(60, 255, 209, 0.5) 0%,
      ${theme.colors.blue.darkLight} 54%
    );
    position: absolute;
    filter: blur(150px);
  }

  & img {
    z-index: 1;
    position: relative !important;
    width: fit-content !important;
    height: 33px !important;
    opacity: .8;
  }

  & p {
    opacity: .9;
    ${textXsRegular}
    text-align: left;
    color: ${theme.colors.white};
    margin: 0;
    z-index: 1;
  }
`;
