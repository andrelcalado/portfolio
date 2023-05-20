import styled from "styled-components";
import { Swiper } from "swiper/react";
import { theme } from "@/theme/globalStyles";

export const ProjectsSwiper = styled(Swiper)`
  position: relative;
  max-width: 1400px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 103%;
    width: 250px;
    z-index: 5;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      90deg,
      ${theme.colors.blue.darkLight} 10%,
      rgba(1, 21, 28, 0) 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      -90deg,
      ${theme.colors.blue.darkLight} 10%,
      rgba(1, 21, 28, 0) 100%
    );
  }
`;