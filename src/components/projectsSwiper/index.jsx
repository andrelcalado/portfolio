import React from "react";
import { ProjectsSwiper } from "./styles";
import { ProjectSlide, ProjectTag } from "../projectSlide/styles";
import { ProjectFigure } from "../projectSlide/styles";
import { ProjectInfos } from "../projectSlide/styles";
import { ProjectCTAContainer } from "../projectSlide/styles";
import { ProjectCTA } from "../projectSlide/styles";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function ProjectsSlide() {
  return (
    <ProjectsSwiper
      slidesPerView={3}
      spaceBetween={20}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
    >
      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/teamwork.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/exit.png"
          alt="Exit - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="https://exit.ag/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Exit - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/alone.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/loadout.png"
          alt="Loadout - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="#">
              <Image fill src="/assets/icons/youtube.svg" alt="youtube Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Loadout - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/teamwork.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/nstech.png"
          alt="Nstech - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="https://nstech.com.br">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Nstech - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/teamwork.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/weld-vision.png"
          alt="Weld Vision - Creation"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="https://www.weldvision.com/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Weld Vision - Creation</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/teamwork.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/techfx.png"
          alt="Techfx - Creation"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="https://techfx.com.br/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Techfx - Creation</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/teamwork.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/nstech.png"
          alt="Nstech - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="https://nstech.com.br">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Nstech - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/teamwork.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/fom.png"
          alt="FOM - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="#">
              <Image fill src="/assets/icons/youtube.svg" alt="youtube Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>FOM - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/teamwork.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/voll.png"
          alt="Voll - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="http://voll.peakstudio.com.br/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Voll - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/teamwork.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/som-maior.png"
          alt="Som Maior - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="https://www.sommaior.com.br/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>Som Maior - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>

      <ProjectSlide>
        <ProjectTag className="projectTag">
          <Image fill src="/assets/icons/teamwork.svg" alt="Project Tag" />
        </ProjectTag>

        <ProjectFigure
          className="projectFigure"
          fill
          src="/assets/images/projects/tmg.png"
          alt="TMG - Redesign"
        />

        <ProjectInfos className="projectInfos">
          <ProjectCTAContainer className="projectCTAContainer">
            <ProjectCTA target="_blank" href="https://www.tmg.agr.br/">
              <Image fill src="/assets/icons/browser.svg" alt="Browser Icon" />
            </ProjectCTA>
          </ProjectCTAContainer>

          <h4>TMG - Redesign</h4>
        </ProjectInfos>
      </ProjectSlide>
    </ProjectsSwiper>
  );
}
