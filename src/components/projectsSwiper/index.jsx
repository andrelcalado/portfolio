import React from "react";
import { ProjectsSwiper } from "./styles";
import ProjectSlideComponent from "../projectSlide/index";
import { ProjectSlide } from "../projectSlide/styles";
import { ProjectFigure } from "../projectSlide/styles";
import { ProjectInfos } from "../projectSlide/styles";
import { ProjectCTAContainer } from "../projectSlide/styles";
import { ProjectCTA } from "../projectSlide/styles";
import Image from "next/image";

export default function ProjectsSlide() {
  return (
    <ProjectsSwiper
      slidesPerView={3}
      spaceBetween={20}
      onSlideChange={() => console.log("slide change")}
      loop
    >
      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/exit.png"
          alt="Exit - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="https://exit.ag/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Exit - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/nstech.png"
          alt="Nstech - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="https://nstech.com.br">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Nstech - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/weld-vision.png"
          alt="Weld Vision - Creation"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="https://www.weldvision.com/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Weld Vision - Creation</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/techfx.png"
          alt="Techfx - Creation"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="https://techfx.com.br/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Techfx - Creation</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/nstech.png"
          alt="Nstech - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="https://nstech.com.br">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Nstech - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/loadout.png"
          alt="Loadout - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="#">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Loadout - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/fom.png"
          alt="FOM - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="#">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>FOM - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/voll.png"
          alt="Voll - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="http://voll.peakstudio.com.br/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Voll - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/som-maior.png"
          alt="Som Maior - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="https://www.sommaior.com.br/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Som Maior - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/tmg.png"
          alt="TMG - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA href="https://www.tmg.agr.br/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>TMG - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>
    </ProjectsSwiper>
  );
}
