import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SlowMo } from "gsap/dist/EasePack";
import {
  ALLogoFigure,
  CodeLogoFigure,
  LogoAnimationContainer,
  PreloadingScreen,
} from "./styles";
import { theme } from "../../theme/globalStyles";
gsap.registerPlugin(SlowMo);

export default function Preloading() {
  let ALCodeBorderRef = useRef();

  useEffect(() => {
    const alTimeline = gsap.timeline();

    alTimeline
      .to("html", {
        overflowY: "hidden",
        duration: 0.1,
      })
      .to(ALCodeBorderRef, {
        strokeDashoffset: 0,
        duration: 3,
        ease: SlowMo(1, 1, false),
        delay: 0.5,
      })
      .to(ALCodeBorderRef, {
        fill: theme.colors.white,
        duration: 0.5,
      })
      .to(".codeWord", {
        y: 50,
        duration: 0.5,
        opacity: 1,
        delay: -0.5,
      })
      .to(".logoAnimationContainer", {
        y: -20,
        duration: 0.5,
        delay: -0.5,
      })
      .to(".logoAnimationContainer", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 1.5,
      })
      .to(".preloadingScreen", {
        opacity: 0,
        duration: 1,
        delay: -1,
        pointerEvents: "none",
      })

      // Hero
      .to(".heroImgBG", {
        opacity: 1,
        y: 40,
        duration: 1,
        delay: -1,
        height: 'auto'
      })
      .to(".chatBalloon", {
        opacity: 1,
        top: '14%',
        duration: 1,
        delay: -.5,
      })
      .to(".heroText1", {
        opacity: 1,
        y: -40,
        duration: 1,
        delay: -0.8,
      })
      .to(".heroText2", {
        opacity: 1,
        y: -40,
        duration: 1,
        delay: -0.8,
      })
      .to(".heroText3", {
        opacity: 1,
        y: -40,
        duration: 1,
        delay: -0.8,
      })
      .to(".heroText4", {
        opacity: 1,
        y: -40,
        duration: 1,
        delay: -0.8,
      })
      .to(".scrollDown", {
        opacity: 1,
        y: -40,
        duration: 1,
        delay: -0.8,
      })

      // Header
      .to(".logoFigure", {
        y: 40,
        opacity: 1,
        duration: 1,
        delay: -1,
      })
      .to(".navItem1", {
        y: 40,
        opacity: 1,
        duration: 1,
        delay: -0.8,
      })
      .to(".navItem2", {
        y: 40,
        opacity: 1,
        duration: 1,
        delay: -0.8,
      })
      .to(".navItem3", {
        y: 40,
        opacity: 1,
        duration: 1,
        delay: -0.8,
      })
      .to(".navItem4", {
        y: 40,
        opacity: 1,
        duration: 1,
        delay: -0.8,
      })
      .to(".navItem5", {
        y: 40,
        opacity: 1,
        duration: 1,
        delay: -0.8,
      })
      .to("html", {
        overflowY: "auto",
        duration: 0.1,
      });
  }, []);

  return (
    <PreloadingScreen className="preloadingScreen">
      <LogoAnimationContainer className="logoAnimationContainer">
        <ALLogoFigure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 543 730"
          >
            <path
              ref={(el) => (ALCodeBorderRef = el)}
              d="M542.3 729.5 518.4 648 382.8 180.5l-28.2-16.8 15.7-26.4L330.8 1l.2-.5H211.7l.1.5L.7 729.5h119l151.6-523.2 47.2 162.8-14.5 24.3 26.1 15.5 58.4 201.6H256.3l-35 119H542z"
            />
          </svg>
        </ALLogoFigure>

        <CodeLogoFigure>
          <svg
            className="codeWord"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 303.8 87.7"
          >
            <path d="M26.9 74.5h23.3v11.6c-6.3 1-12.9 1.4-19.9 1.4h-5.2C8.4 87.5 0 79.9 0 64.5V44.6c0-15.3 8.4-23 25.1-23H30c7.3 0 13.9.5 19.9 1.6v11.5h-23c-7 0-10.6 3.5-10.6 10.6V64c0 3.7.8 6.3 2.5 8 1.7 1.6 4.4 2.5 8.1 2.5zM62.3 64.5V44.6c0-15.3 8.4-23 25.1-23h10.3c16.8 0 25.2 7.7 25.2 23v19.9c0 15.3-8.4 23-25.2 23H87.4c-16.7 0-25.1-7.6-25.1-23zm44.3-.5V45.2c0-3.6-.8-6.3-2.5-8-1.7-1.7-4.4-2.6-8-2.6h-6.8c-3.7 0-6.4.9-8 2.6-1.7 1.7-2.5 4.4-2.5 8V64c0 3.6.8 6.2 2.5 7.9 1.6 1.7 4.3 2.5 8.1 2.5H96c3.7 0 6.4-.8 8-2.5 1.7-1.6 2.6-4.3 2.6-7.9zM193.3 0v84.4c-8.7 2.1-18.5 3.1-29.3 3.1h-4.6c-15.9 0-23.9-7.4-23.9-22.3V44c0-7.3 2-12.8 6-16.7 4-3.8 10-5.8 17.9-5.8h4.4c3.5 0 7.9.4 13.1 1.1V0h16.4zm-41.4 45.6v18.1c0 6.9 3.5 10.3 10.4 10.3h3.5c3.8 0 7.6-.2 11.2-.7V36.1c-3.4-.6-7.1-.8-11.2-.8h-3.5c-6.9-.1-10.4 3.4-10.4 10.3zM265.2 44.6v15.7h-41.1v4.4c0 3.7.8 6.3 2.5 8 1.7 1.6 4.4 2.5 8 2.5h27.7v10.7c-6.7 1.1-14.8 1.7-24.3 1.7h-5c-16.8 0-25.2-7.7-25.2-23v-20c0-15.3 8.4-23 25.2-23h7.1c16.7 0 25.1 7.7 25.1 23zm-41.1-1.1v5.3h24.8v-4.2c0-7.1-3.3-10.7-10-10.7h-5c-6.5 0-9.8 3.2-9.8 9.6zM289 73h14.7v14.7H289z" />
          </svg>
        </CodeLogoFigure>
      </LogoAnimationContainer>
    </PreloadingScreen>
  );
}
