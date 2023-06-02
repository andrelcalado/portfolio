import styled from "styled-components";
import { Swiper } from "swiper/react";
import { theme } from "../../theme/globalStyles";

export const ProjectsSwiper = styled(Swiper)`
  position: relative;
  max-width: 1400px;
  overflow: unset !important;

  & .swiper-pagination {
    bottom: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .swiper-button-prev::after,
  & .swiper-button-next::after {
    font-size: 25px;
    color: ${theme.colors.green.light};
    text-align: center;
    flex-shrink: 0;
    transition: 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);

    &:hover {
      transform: scale(2);
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    transition: 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);

    &:hover {
      transform: scale(1.25);
    }
  }

  & .swiper-button-prev {
    left: -10px;
  }

  & .swiper-button-next {
    right: -10px;
  }

  & .swiper-pagination-bullet {
    padding: 4px;
    border: 2px solid transparent;

    &:hover {
      border: 2px solid ${theme.colors.green.light};
    }
  }

  & .swiper-pagination-bullet-active {
    border: 2px solid ${theme.colors.green.light};
    background-color: transparent;
  }

  & .swiper-slide {
    box-shadow: 0 0 15px rgba(60,255,209,.3);
  }
`;
