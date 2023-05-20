import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { theme } from "@/theme/globalStyles";
import {
  textMdBold,
} from "@/theme/typography";
import styled from "styled-components";

export const ProjectSlide = styled(SwiperSlide)`
  width: 448px;
  height: 255px;
  position: relative;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid ${theme.colors.white};
  background-color: ${theme.colors.blue.darkLight};
  overflow: hidden;

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
  }
`;

export const ProjectFigure = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
