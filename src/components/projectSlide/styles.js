import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { theme } from "../../theme/globalStyles";
import { textMdBold } from "../../theme/typography";
import styled from "styled-components";

export const ProjectSlide = styled(SwiperSlide)`
  min-width: 448px;
  height: 255px;
  position: relative;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid ${theme.colors.white};
  background-color: ${theme.colors.blue.darkLight};
  overflow: hidden;

  @media (max-width: 830px) {
    height: 215px;
    min-width: unset;
  }

  &:hover {
    border: 2px solid ${theme.colors.green.light};

    & .projectFigure {
      filter: blur(3px);
      opacity: 0.8;
    }

    & .projectInfos,
    & .projectCTAContainer {
      opacity: 1;
      transform: translate(0, 0);
      pointer-events: all;
    }

    & .projectTag {
      pointer-events: all;
      opacity: 1;
      top: 0;
    }
  }


`;

export const ProjectFigure = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative !important;
`;

export const ProjectInfos = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transform: translate(0, 50px);

  & h4 {
    ${textMdBold}
    color: ${theme.colors.blue.darkLight};
    background-color: ${theme.colors.green.light};
    text-align: center;
    padding: 8px;
    height: 17%;
  }
`;

export const ProjectCTAContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 83%;
  z-index: 5;
  transform: translate(0, 50px);
`;

export const ProjectCTA = styled(Link)`
  width: 35px;
  display: block;
  filter: drop-shadow(0 0 5px ${theme.colors.black});

  &:hover {
    transform: scale(1.2);
  }

  & img {
    position: relative !important;
  }
`;

export const ProjectTag = styled.div`
  top: -50px;
  left: 0;
  width: 35px;
  height: 45px;
  position: absolute;
  background: ${theme.colors.green.light};
  z-index: 20;
  padding: 5px;
  border-radius: 0 0 10px 0;
  box-shadow: 0 0 15px ${theme.colors.blue.dark};
  pointer-events: none;
  opacity: 0;

   & img {
    position: relative !important;
    filter: invert(1);
  }
`;
