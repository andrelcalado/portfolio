// Core
import React, { useEffect, useState } from "react";

// Theme
import { Container, theme } from "../../theme/globalStyles";

// Libraries
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "react-vertical-timeline-component/style.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

// Styles
import {
  HeroSection,
  Main,
  HeroImgBG,
  HeroTexts,
  StacksContainer,
  StacksMoviment,
  HeroCTA,
  ScrollDrop,
  SkillsSection,
  TopPolygon,
  SkillsSectionWrapper,
  SkillsCardsContainer,
  SkillCard,
  SkillLogo,
  SkillTexts,
  SkillsFooterContainer,
  SkillsSymbolAnimated,
  ProjectsSection,
  ProjectsSlideContainer,
  ProjectsPlaceholderContainer,
  TimeLineSection,
  TimelineComponent,
  TimelineItem,
  ALCodeBorderSymbol,
  ContactSection,
  BGVideo,
  ContactCardsContainer,
  ContactSymbolAnimated,
  ContactFooterContainer,
  HeroImgContainer,
  ChatBalloon,
  ProjectsSwiper,
  TimelinePeriodContent,
  TimelinePeriodDate,
  TimelinePeriodDateSimp,
} from "./styles.ts";

// Components
import BackToTop from "../../components/backToTop";
import { timelineProjects } from "../../constants/homeMockData";
import ProjectPlaceholder from "../../components/projectPlaceholder";
import ALButton from "../../components/button";
import ProjectSlide from "../../components/projectSlide";
import ContactCard from "../../components/contactCard";
import Preloading from "../../components/preloading";
import ModalVideo from "../../components/modalVideo";

// Constants
import { projects, stacks } from "../../constants/homeMockData";

// Utils
import { goToSection } from "../../utils/actions";

gsap.registerPlugin(ScrollTrigger);

export default function HomeScreen() {
  let stacksMovimentRef: HTMLDivElement | null;
  const [videoModal, setVideoModal] = useState<boolean>(false);

  useEffect(() => {
    // Hero Stacks Animation
    gsap.to(stacksMovimentRef, {
      keyframes: [
        { y: 0, delay: 2, ease: "back.out(2)" },
        { y: -70, delay: 2, ease: "back.out(2)" },
        { y: -130, delay: 2, ease: "back.out(2)" },
        { y: -190, delay: 2, ease: "back.out(2)" },
      ],
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });

    // Skills ScrollTrigger
    const skillsTimeline: gsap.core.Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".skillsTitle",
        start: "top 85%",
        end: "top 55%",
        scrub: 1,
      },
    });

    skillsTimeline
      .to(".skillsTitle", { opacity: 1, y: -40 })
      .to(".skillsCards", { opacity: 1, y: -40 });

    // Projects ScrollTrigger
    const projectsTimeline: gsap.core.Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".projectsTitle",
        start: "top 75%",
        end: "top 50%",
        scrub: 1,
      },
    });

    projectsTimeline
      .to(".projectsTitle", { opacity: 1, y: -40 })
      .to(".projectsDesc", { opacity: 1, y: -40 })
      .to(".projectsSlide", { opacity: 1, y: -40 });

    // Timeline ScrollTrigger
    const timelineTimeline: gsap.core.Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".timelineTitle",
        start: "top 85%",
        end: "top 75%",
        scrub: 1,
      },
    });

    timelineTimeline.to(".timelineTitle", { opacity: 1, y: -40 });

    const borderTimeline: gsap.core.Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".ALCodeBorderSymbol",
        start: "top 75%",
        end: "top 0%",
        scrub: 1,
      },
    });
    borderTimeline.to(".ALCodeBorderSymbol", { strokeDashoffset: 0, y: 40 });

    // Contact ScrollTrigger
    const contactTimeline: gsap.core.Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contactTitle",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });

    contactTimeline
      .to(".contactTitle", { opacity: 1, y: -40 })
      .to(".contactCard1", { opacity: 1, y: -40 })
      .to(".contactCard2", { opacity: 1, y: -40 })
      .to(".contactCard3", { opacity: 1, y: -40 })
      .to(".contactCard4", { opacity: 1, y: -40 });
  }, []);

  return (
    <>
      <Preloading />

      <Main style={{ display: 'none' }}>
        <BackToTop />

        <HeroSection>
          <ScrollDrop className="scrollDown" />

          <Container>
            <HeroTexts>
              <h2 className="heroText1">Hi, I&apos;m</h2>
              <h1 className="heroText2">André Luis</h1>

              <StacksContainer className="heroText3">
                <StacksMoviment ref={(el) => (stacksMovimentRef = el)}>
                  <h3>I&apos;m Front End Developer</h3>
                  <h3>I build responsive websites</h3>
                  <h3>I build mobile apps</h3>
                  <h3>I develop complex platforms</h3>
                </StacksMoviment>
              </StacksContainer>

              <HeroCTA className="heroText4">
                <ALButton
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("projects");
                  }}
                >
                  See My Job
                </ALButton>
                <ALButton href="https://github.com/andrelcalado">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={theme.colors.white}
                    viewBox="0 0 325.52 347.73"
                  >
                    <path d="M227.29 344.01h-.11c-5.25-.06-9.45-4.36-9.4-9.6.22-20.61.39-39.19.19-57.8-.14-13.31-3.59-23.01-10.83-30.51-3.03-3.13-3.6-7.93-1.39-11.67a9.501 9.501 0 0 1 8.11-4.66c3.08-.67 6.15-1.31 9.14-1.92 7.99-1.65 15.54-3.2 22.89-5.4 23.7-7.09 39.54-20.7 48.4-41.59 4.92-11.61 7.45-24.65 8.2-42.29.91-21.49-5.09-39.31-18.32-54.46-3.33-3.81-3.69-9.24-2.56-12.93 3.81-12.51 3.82-25.26.03-38.95-.18-.67-.59-2.12-.99-3.4-1.4.22-3.02.55-3.84.71-13.94 2.78-26.45 9.38-40.95 18.42-3.75 2.34-8.87 3.19-13.05 2.17-32.73-7.96-65.72-7.94-98.06.06-4.08 1.01-9.08.19-12.75-2.08-11.49-7.13-22.83-13.81-35.34-17.1-3.09-.81-6.49-1.2-10.08-1.52-4.69 14.79-4.91 28.18-.69 40.81 1.87 5.6.87 10.63-2.99 14.94-7.51 8.41-12.76 18.41-15.61 29.74-3.77 14.99-2.31 30-.39 42.7 3.03 19.99 10.46 35.35 22.72 46.94 10.48 9.91 24.05 16.71 41.49 20.76 5.29 1.23 10.69 2.18 16.41 3.18 2.7.47 5.44.95 8.23 1.47 3.44.64 6.25 3.13 7.31 6.47s.2 6.99-2.25 9.5c-5.77 5.93-8.79 11.18-9.49 16.52-1.25 9.48-6.72 15.33-16.26 17.41-.29.11-.65.23-1.07.35-22.04 6.06-40.43 1.9-54.64-12.37-3.85-3.86-6.87-8.33-9.54-12.28l-.23-.34a61.416 61.416 0 0 0-4.02-5.34c3.89 5.48 7.28 11.84 10.28 19.19 3.5 8.57 9.25 14.88 17.58 19.29 8.75 4.63 18.91 6.37 31.04 5.31 3.01-.26 6.14-.69 9.46-1.15 1.68-.23 3.41-.47 5.22-.7 2.71-.34 5.43.49 7.48 2.29 2.05 1.8 3.22 4.4 3.22 7.13 0 3.22-.01 6.4-.03 9.57-.03 7.44-.06 14.47.08 21.58.1 5.25-4.07 9.58-9.31 9.68h-.19c-5.16 0-9.39-4.13-9.49-9.31-.13-6.88-.12-13.87-.09-20.67-1.56.19-3.11.36-4.69.5-15.9 1.39-29.5-1.04-41.59-7.44-12.26-6.49-21.11-16.22-26.29-28.91-5.65-13.85-12.44-22.58-22.01-28.32-2.76-1.65-5.35-3.94-7.92-6.98-3.39-4.01-4.42-8.79-2.82-13.1 1.56-4.22 5.29-7.12 10.24-7.93 6.34-1.04 11.43-1.07 16.02-.08 13.26 2.87 24.24 10.96 33.56 24.73l.23.34c2.41 3.56 4.68 6.93 7.26 9.51 9.21 9.24 20.59 11.65 35.8 7.55.48-.19 1.2-.44 2.1-.62.83-.16 1.31-.32 1.57-.42.06-.19.13-.51.19-.97.64-4.86 2.15-9.49 4.63-14.04-3.45-.64-6.86-1.31-10.31-2.12-20.8-4.84-37.24-13.17-50.24-25.46-15.46-14.62-24.76-33.55-28.45-57.9-2.08-13.72-3.87-31.82.75-50.18 3.42-13.57 9.59-25.68 18.36-36.03-5.36-17.56-4.35-35.86 3.08-55.9 1.86-5.03 7.7-8.74 13.04-8.27.75.07 1.51.13 2.27.19 5.15.43 10.47.87 15.89 2.3 14.73 3.88 27.71 11.4 39.75 18.85 34.71-8.42 70.08-8.43 105.17-.04 16.01-9.95 30.12-17.25 46.67-20.55 6.38-1.27 12.4-2.47 17.86.77 5.64 3.35 7.35 9.52 9 15.49 4.45 16.08 4.65 31.85.6 46.9 14.95 18.26 21.99 40.22 20.93 65.32-.84 20.02-3.83 35.11-9.69 48.91-11.06 26.06-31.39 43.68-60.45 52.38-7.05 2.11-14.24 3.68-21.26 5.14 4.49 8.68 6.76 18.81 6.88 30.62.2 18.81.03 37.49-.19 58.21-.02 5.21-4.27 9.4-9.46 9.4zm-22.82-104.55v.01-.01zm95.34-162.82c-.01.02-.01.04-.02.06.01-.02.02-.04.02-.06zM225.85 31.8c-.01.01-.02.01-.03.02.01 0 .02-.01.03-.02z" />
                  </svg>

                  <span>Github</span>
                </ALButton>
              </HeroCTA>
            </HeroTexts>

            <HeroImgContainer>
              <ChatBalloon className="chatBalloon">
                Motorcycle lifestyle ✊❤️
              </ChatBalloon>
              <HeroImgBG
                className="heroImgBG"
                fill
                src="/assets/images/hero.png"
                alt="Background photography"
              />
            </HeroImgContainer>
          </Container>
        </HeroSection>

        <SkillsSection id="skills" data-js="section">
          <TopPolygon>
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill={theme.colors.white}
            >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </TopPolygon>

          <SkillsSectionWrapper>
            <Container>
              <h2 className="skillsTitle">Skills</h2>

              <SkillsCardsContainer className="skillsCards">
                {stacks &&
                  stacks.map((stack, index) => (
                    <SkillCard key={index}>
                      <SkillLogo>{stack.icon}</SkillLogo>

                      <SkillTexts>
                        <h4>{stack.title}</h4>
                        <p>{stack.time}</p>
                      </SkillTexts>
                    </SkillCard>
                  ))}
              </SkillsCardsContainer>

              <SkillsFooterContainer>
                <SkillsSymbolAnimated>
                  <Image
                    fill
                    src="/assets/icons/al-symbol.svg"
                    alt="AL Symbol"
                  />
                </SkillsSymbolAnimated>
              </SkillsFooterContainer>
            </Container>
          </SkillsSectionWrapper>
        </SkillsSection>

        <ProjectsSection id="projects" data-js="section">
          <ModalVideo
            video="loadout"
            active={videoModal}
            setActive={setVideoModal}
          />

          <h2 className="projectsTitle">Projects</h2>
          <p className="projectsDesc">
            Some of the bests projects that I developed alone as Front End
            Developer and projects that I developed with the supreme develop
            teams.
          </p>

          <ProjectsSlideContainer className="projectsSlide">
            <ProjectsSwiper
              slidesPerView={3}
              spaceBetween={20}
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              autoplay={{ delay: 5000 }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  width: 335,
                },
                414: {
                  width: 375,
                  slidesPerView: 1,
                },
                830: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              loop
            >
              {projects?.map((eachProject, index) => (
                <SwiperSlide key={index}>
                  <ProjectSlide
                    tag={eachProject.tag}
                    title={eachProject.title}
                    thumbnail={eachProject.thumbnail}
                    link={eachProject.link}
                    video={eachProject.video}
                    videoHandle={
                      eachProject.video
                        ? (e) => {
                            e.preventDefault();
                            setVideoModal(!videoModal);
                          }
                        : undefined
                    }
                  />
                </SwiperSlide>
              ))}
            </ProjectsSwiper>
          </ProjectsSlideContainer>

          <ProjectsPlaceholderContainer>
            <ProjectPlaceholder
              type="alone"
              desc="Project developed with only me as Front End Developer"
            />
            <ProjectPlaceholder
              type="teamwork"
              desc="Project developed with a Front End Team"
            />
          </ProjectsPlaceholderContainer>
        </ProjectsSection>

        <TimeLineSection id="timeline" data-js="section">
          <ALCodeBorderSymbol>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 541.7 729"
            >
              <path
                className="ALCodeBorderSymbol"
                stroke={theme.colors.green.light}
                strokeWidth={1}
                d="m327.8 3 187.1 645.4 22.8 77.6H4L213.6 3h114.2M149.5 613h242.3l-1.1-3.8L273.5 205l-2.9-9.9-2.9 9.9-117.1 404.2-1.1 3.8"
              />
            </svg>
          </ALCodeBorderSymbol>

          <h2 className="timelineTitle">Timeline</h2>

          <TimelineComponent>
            {timelineProjects.map((item, i) => (
              <TimelineItem
                key={i}
                // @ts-ignore
                date={
                  <TimelinePeriodContent>
                    <TimelinePeriodDate>{item.period}</TimelinePeriodDate>
                    <TimelinePeriodDateSimp>
                      {item.periodSimplified}
                    </TimelinePeriodDateSimp>
                  </TimelinePeriodContent>
                }
                icon={
                  <Image
                    fill
                    src={`/assets/images/timeline/${item.logo}.jpg`}
                    alt={item.business + " Logo"}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <h4>{item.business}</h4>
                <p>{item.desc}</p>
              </TimelineItem>
            ))}
          </TimelineComponent>
        </TimeLineSection>

        <ContactSection id="contact" data-js="section">
          <BGVideo autoPlay loop>
            <source
              src={require("../../assets/videos/codding.mp4")}
              type="video/mp4"
            />
          </BGVideo>

          <Container>
            <h2 className="contactTitle">Contact</h2>

            <ContactCardsContainer>
              <ContactCard
                className="contactCard1"
                href="https://github.com/andrelcalado"
                label="/andrelcalado"
                logo="github"
                type="github"
              />
              <ContactCard
                className="contactCard2"
                href="https://www.linkedin.com/in/andreluisgp/"
                label="/andreluisgp"
                logo="linkedin"
                type="linkedin"
              />
              <ContactCard
                className="contactCard3"
                href="mailto: andrelcalad@gmail.com"
                label="andrelcalad@gmail.com"
                logo="email"
                type="email"
              />
              <ContactCard
                className="contactCard4"
                label="+5585996419694"
                logo="phone"
                type="phone"
              />
            </ContactCardsContainer>

            <ContactFooterContainer>
              <ContactSymbolAnimated>
                <Image fill src="/assets/icons/al-symbol.svg" alt="AL Symbol" />
              </ContactSymbolAnimated>
            </ContactFooterContainer>
          </Container>
        </ContactSection>
      </Main>
    </>
  );
}
