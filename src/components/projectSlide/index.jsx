import React from "react";
import {
  ProjectCTA,
  ProjectCTAContainer,
  ProjectFigure,
  ProjectInfos,
  ProjectSlide,
} from "./styles";
import Image from "next/image";

export default function ProjectSlideComponent({ title, figure, url, youtube }) {
  return (
    <ProjectSlide>
      <ProjectFigure className="projectFigure" fill src={figure} alt={title} />

      <ProjectInfos className="projectInfos">
        <ProjectCTAContainer className="projectCTAContainer">
          {url && (
            <ProjectCTA href={url}>
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          )}
        </ProjectCTAContainer>

        <h4>{title}</h4>
      </ProjectInfos>
    </ProjectSlide>
  );
}
