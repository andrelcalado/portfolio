import styled from "styled-components";
import { Swiper } from "swiper/react";
import { theme } from "../../theme/globalStyles";

export const ProjectsSwiper = styled(Swiper)`
  position: relative;
  max-width: 100vw;
  padding: 0 60px;

  @media (max-width: 830px) {
    max-width: 375px;
    padding: 0 0 60px;
  }

  @media (max-width: 414px) {
    max-width: calc(375px - 40px);
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    height: 115%;
    width: 270px;
    z-index: 5;
    pointer-events: none;

    @media (max-width: 830px) {
      content: none;
    }
  }

  &::before {
    left: 0;
    background: linear-gradient(
      90deg,
      ${theme.colors.blue.darkLight} 20%,
      rgba(1, 21, 28, 0) 80%
    );

    @media (max-width: 830px) {
      left: 150px;
    }
  }

  &::after {
    right: 0;
    background: linear-gradient(
      -90deg,
      ${theme.colors.blue.darkLight} 5%,
      rgba(1, 21, 28, 0) 40%
    );

    @media (max-width: 830px) {
      right: 150px;
    }
  }

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

  & .swiper-button-prev {
    left: 30px;

    @media (max-width: 830px) {
      left: 100px;
    }
  }

  & .swiper-button-next {
    right: 30px;

    @media (max-width: 830px) {
      right: 100px;
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    transition: 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);

    @media (max-width: 830px) {
      top: unset;
      bottom: 0;
    }

    &:hover {
      transform: scale(1.25);
    }
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
    box-shadow: 0 0 15px rgba(60, 255, 209, 0.3);
  }
`;
