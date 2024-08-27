// Core
import React from "react";
import Image from "next/image";

// Styles
import {
  ProjectCTA,
  ProjectCTAContainer,
  ProjectFigure,
  ProjectInfos,
  ProjectSlideStyled,
  ProjectTag,
} from "./styles";

// Types
import { ProjectType } from "../../types/dataTypes";

export default function ProjectSlide({
  tag,
  title,
  thumbnail,
  link,
  video,
  videoHandle,
}: ProjectType) {
  return (
    <ProjectSlideStyled>
      <ProjectTag className="projectTag">
        <Image fill src={`/assets/icons/${tag}.svg`} alt="Project Tag" />
      </ProjectTag>

      <ProjectFigure
        className="projectFigure"
        fill
        src={thumbnail}
        alt={title}
      />

      <ProjectInfos className="projectInfos">
        <ProjectCTAContainer className="projectCTAContainer">
          {(link || video) && (
            <ProjectCTA href={link || '#'} target="_blank" onClick={videoHandle}>
              <Image fill src={`/assets/icons/${link ? 'browser' : 'youtube'}.svg`} alt="Refer Icon" />
            </ProjectCTA>
          )}
        </ProjectCTAContainer>

        <h4>{title}</h4>
      </ProjectInfos>
    </ProjectSlideStyled>
  );
}
