import { Container } from "../../theme/globalStyles";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  LogoContainer,
  NavContainer,
  NavLinkItem,
  HambButton,
} from "./styles";
import { goToSection, toggleHtmlScroll } from "../../utils/actions";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const [activeSection, setActiveSection] = useState();
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;

      if (pageYOffset >= sectionOffsetTop / 1.1) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-js=section]");
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Container>
        <HeaderWrapper scrolled={scrolled}>
          <LogoContainer
            className="logoFigure"
            active={menuMobile}
            scrolled={scrolled}
          >
            <svg
              id="Layer_1"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 541.65 860.22"
              fill="#fafafa"
            >
              <path d="m541.65 729-23.96-81.48-135.51-467.5-28.25-16.85 15.73-26.36L330.15.53l.16-.53H211l.15.53L0 729h119l151.65-523.2 47.18 162.76-14.51 24.32 26.07 15.55L387.81 610H255.65l-35 119H541.31zM147.98 846.93h23.26v11.63c-6.32.96-12.95 1.44-19.9 1.44h-5.16c-16.71 0-25.06-7.67-25.06-23.02v-19.9c0-15.35 8.35-23.02 25.06-23.02h4.92c7.27 0 13.91.52 19.9 1.56v11.51h-23.02c-7.03 0-10.55 3.52-10.55 10.55v18.82c0 3.68.84 6.34 2.52 7.97 1.68 1.64 4.36 2.46 8.03 2.46zM183.47 836.98v-19.9c0-15.35 8.35-23.02 25.06-23.02h10.31c16.79 0 25.18 7.67 25.18 23.02v19.9c0 15.35-8.39 23.02-25.18 23.02h-10.31c-16.71 0-25.06-7.67-25.06-23.02zm44.24-.48v-18.82c0-3.6-.84-6.25-2.52-7.97-1.68-1.72-4.36-2.58-8.03-2.58h-6.83c-3.68 0-6.35.86-8.03 2.58-1.68 1.72-2.52 4.38-2.52 7.97v18.82c0 3.6.82 6.24 2.46 7.91 1.64 1.68 4.33 2.52 8.09 2.52h6.83c3.68 0 6.35-.84 8.03-2.52 1.69-1.67 2.52-4.31 2.52-7.91zM314.4 772.48v84.41c-8.71 2.08-18.46 3.12-29.26 3.12h-4.56c-15.91 0-23.86-7.43-23.86-22.3v-21.22c0-7.27 2-12.83 6-16.67 4-3.84 9.95-5.75 17.86-5.75h4.44c3.52 0 7.87.36 13.07 1.08v-22.66h16.31zm-41.37 45.56v18.1c0 6.88 3.48 10.31 10.43 10.31h3.48c3.84 0 7.55-.24 11.15-.72v-37.17c-3.36-.56-7.07-.84-11.15-.84h-3.48c-6.95 0-10.43 3.44-10.43 10.32zM386.34 817.08v15.71h-41.13v4.44c0 3.68.84 6.34 2.52 7.97 1.68 1.64 4.36 2.46 8.03 2.46h27.7v10.67c-6.71 1.12-14.83 1.68-24.34 1.68h-5.04c-16.79 0-25.18-7.67-25.18-23.02v-19.9c0-15.35 8.39-23.02 25.18-23.02h7.07c16.79-.01 25.19 7.66 25.19 23.01zM345.21 816v5.28h24.82v-4.2c0-7.11-3.32-10.67-9.95-10.67h-5.04c-6.55 0-9.83 3.19-9.83 9.59zM410.16 845.5h14.72v14.72h-14.72z" />
            </svg>
          </LogoContainer>

          <HambButton
            active={menuMobile}
            onClick={() => {
              toggleHtmlScroll();
              setMenuMobile(!menuMobile);
            }}
          />

          <NavContainer active={menuMobile} scrolled={scrolled}>
            <ul>
              <NavLinkItem
                active={activeSection === "skills"}
                className="navItem1"
                onClick={() => setMenuMobile(false)}
              >
                <Link
                  href="skills"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("skills");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fafafa"
                    viewBox="0 0 311.45 311.66"
                  >
                    <path d="M155.73 14.46c7.25-7.49 15.59-12.57 25.73-13.83 18.3-2.28 33.81 4.02 47.16 16.22 5.96 5.45 10.34 12.09 13.75 19.41.67 1.45 1.96 2.88 3.33 3.69 22.5 13.2 33.85 32.75 33.62 58.87-.02 2.56.69 3.89 2.88 5.26 18.66 11.62 28.8 28.54 28.94 50.48.05 7.63-3.04 15.27-4.52 22.94-.39 2.03-.74 4.45-.03 6.27 15.05 38.74-6.12 81.58-46.09 93.25-1.63.48-3.39 2.02-4.2 3.53-10.71 19.86-27.24 30.09-49.79 30.85-20.38.69-37.31-6.35-50.71-22.4-1.33 1.43-2.57 2.75-3.79 4.1-23 25.4-72.61 26.19-93.16-6.76-3.91-6.27-8.46-9.47-15.07-12.07C8.19 260.3-9.1 219.57 4.8 183.91c.71-1.83.79-4.44.06-6.23-13.19-32.48 3.18-61.66 25.13-74.24 1.06-.61 2.02-2.44 2-3.7C31.7 73 43.1 53.03 66.25 39.66c1.35-.78 2.39-2.42 3.11-3.9C79.78 14.35 96.88 2.35 120.5.18c13.76-1.26 25.32 4.17 35.23 14.28zm12.15 171.79c4.94-3.21 9.35-6.51 14.15-9.09 8.04-4.33 17.43 1.74 17.24 10.85-.11 5.19-2.97 8.46-7.28 10.91-13.42 7.62-21.65 19.11-23.85 34.34-.99 6.85-.42 13.94-.46 20.92-.05 8.33 2.77 15.64 8.24 21.89 8.05 9.21 18.51 11.79 30.32 11.47 13.42-.37 25.78-8.15 29.96-20.85 2.49-7.58 7.02-10.84 14.59-12.23 28.92-5.3 45.33-38.06 32.17-64.27-3.12-6.21-3.26-11.48-.35-17.67 3.07-6.52 5.61-13.5 4.59-20.91-2.01-14.58-10.02-24.67-23.76-30.06-7.87-3.09-10.52-7.77-8.86-16.03 3.84-19.13-5.55-37.86-23.36-45.91-4.93-2.23-7.81-5.56-9.68-10.59-5-13.42-14.73-21.69-28.83-24.41-13.74-2.65-24.97 6.9-24.99 21.03-.03 19.21-.01 38.42 0 57.64 0 1.04.13 2.08.2 3.16 4.72-3.1 9.09-6.17 13.66-8.91 4.26-2.57 8.64-2.14 12.68.63 4.11 2.82 5.61 6.9 4.87 11.75-.67 4.44-3.57 7.13-7.34 9.3-13.5 7.76-22 19.4-23.68 34.83-1.16 10.53-.23 21.32-.23 32.21zm-24.46-79.89c.13-.31.29-.52.29-.74.01-20.7.26-41.41-.09-62.11-.21-12.29-11.97-21.29-24.02-19.08-14.88 2.73-24.95 11.29-30.06 25.5-1.53 4.26-4.05 7.21-8.18 9.13-19.51 9.06-28.4 26.74-24.29 47.8.33 1.66.39 3.48.09 5.14-.95 5.23-4.51 8.04-9.35 9.65-15.04 5-28.93 23.94-21.74 43.37 1.34 3.62 2.58 7.28 4.11 10.81 1.77 4.08 1.56 7.88-.51 11.82-15 28.6 1.03 61.46 32.96 67.28 6.42 1.17 10.12 4.39 12.11 10.52 3.44 10.58 10.74 17.67 21.44 20.58 4.59 1.25 9.6 1.31 14.42 1.35 15.84.13 30.01-11.02 32.27-26.69 1.33-9.26 1.36-18.99.17-28.27-1.93-14.98-10.55-26.02-23.63-33.62-2.19-1.27-4.34-3.06-5.75-5.13-2.97-4.38-2.15-10.35 1.41-14.17 3.66-3.92 9.61-5.09 14.39-2.34 4.78 2.75 9.3 5.97 14.3 9.21 0-7.03.04-13.72-.01-20.42-.03-4.23.28-8.55-.39-12.69-2.56-15.65-11.12-27.14-24.95-34.87-6.32-3.53-8.3-10.8-4.86-16.66 3.37-5.74 10.5-7.63 16.58-4.07 4.49 2.63 8.73 5.69 13.29 8.7z" />
                  </svg>
                  <span>Skills</span>
                </Link>
              </NavLinkItem>
              <NavLinkItem
                active={activeSection === "projects"}
                className="navItem2"
                onClick={() => setMenuMobile(false)}
              >
                <Link
                  href="projects"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("projects");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fafafa"
                    viewBox="0 0 280.21 311.81"
                  >
                    <path d="M64.37 31.97c.93-11.53 5.56-20.53 15-26.73C84.71 1.72 90.61 0 97.03 0c28.69.01 57.39.01 86.08 0 15.95 0 29.26 11.27 31.96 27.08.25 1.47.48 2.94.81 4.93 1.5 0 3.07.11 4.61-.02 33.69-2.87 59.99 22.49 59.71 56.3-.46 55.64-.45 111.3 0 166.94.27 33.27-25.05 58.42-58.17 56.47-1.62-.1-3.24-.12-4.86-.12-51.4-.01-102.8.01-154.2-.03-6.21-.01-12.56.38-18.62-.68C18.23 306.29-.06 283.93 0 257.49c.12-54.28.13-108.55.3-162.83.02-7.07-.22-14.35 1.28-21.17C7.41 46.9 32.2 29.35 59.27 31.95c1.58.15 3.19.02 5.1.02zm.01 24.34c-3.91 0-7.64-.24-11.32.04-16.39 1.27-25.53 9.5-28.02 25.39-.67 4.29-.78 8.7-.79 13.05-.05 51.15-.05 102.3-.01 153.44 0 3.98.2 7.98.56 11.95 1.36 14.87 9.61 24.03 24 26.46 4.03.68 8.19.92 12.29.92 52.64.06 105.27.05 157.91.01 3.73 0 7.48-.28 11.18-.76 13.84-1.8 22.05-9.49 24.53-23.28.83-4.63 1.16-9.42 1.17-14.13.08-51.77.06-103.54.03-155.31 0-3.61-.15-7.25-.59-10.83-1.27-10.28-5.09-19.05-15.2-23.66-7.7-3.51-15.85-3.79-24.29-3.42-.12.9-.21 1.62-.31 2.34-2.73 18.82-16.13 29.66-35.18 29.45-27.31-.3-54.63-.11-81.94.03-10.66.06-19.44-3.67-26.35-11.77-4.89-5.68-7.03-12.48-7.67-19.92zm75.48 7.61v-.1c14.22 0 28.44.11 42.66-.05 6.49-.07 9.08-2.72 9.24-9.18.18-7.11.18-14.22-.01-21.33-.16-6.1-2.62-8.52-8.65-9.1-1.36-.13-2.74-.11-4.11-.11-25.95-.01-51.89-.02-77.84.02-2.11 0-4.23.21-6.32.5-3.91.54-6.17 3.08-6.28 6.8-.25 8.47-.28 16.96.03 25.43.15 4.06 2.69 6.23 6.75 6.8 2.09.29 4.23.3 6.35.3 12.74.03 25.46.02 38.18.02z" />
                    <path d="M126.83 187c3.97-4.08 7.57-7.86 11.26-11.56 11-11.04 21.99-22.08 33.07-33.05 5.17-5.12 12.6-5.14 17.37-.27 4.64 4.74 4.6 12.1-.38 17.11-17.48 17.6-35.01 35.16-52.6 52.65-5.36 5.33-12.2 5.22-17.6-.11-8.7-8.57-17.36-17.2-25.95-25.89-4.96-5.02-5.06-12.37-.44-17.12 4.77-4.91 12.16-4.9 17.36.2 5.94 5.84 11.74 11.82 17.91 18.04z" />
                  </svg>
                  <span>Projects</span>
                </Link>
              </NavLinkItem>
              <NavLinkItem
                active={activeSection === "timeline"}
                className="navItem3"
                onClick={() => setMenuMobile(false)}
              >
                <Link
                  href="timeline"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("timeline");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fafafa"
                    viewBox="0 0 38.99 38.9"
                  >
                    <path d="M30.24 34.44c-1.56 0-3.13-.01-4.69.02-.12 0-.3.22-.36.37-.84 2.21-2.4 3.59-4.73 3.99-2.9.5-5.7-1.21-6.63-3.99-.11-.32-.24-.4-.56-.39-1.37.02-2.75.01-4.13 0-.28 0-.43.07-.56.35-.9 1.98-3 3.01-5.11 2.54C1.43 36.86-.03 35 0 32.86c.02-2.03 1.49-3.83 3.47-4.29 2.04-.47 4.14.53 5.06 2.4.08.15.14.31.23.48 1.56 0 3.13.01 4.69-.02.13 0 .31-.21.36-.36 1.34-3.84 5.93-5.31 9.21-2.95 1.05.75 1.77 1.75 2.17 2.97.09.27.2.36.49.36 1.41-.01 2.81-.02 4.22 0 .28 0 .39-.1.51-.35.96-2.11 3.28-3.14 5.47-2.44 2.16.69 3.45 2.84 3.05 5.11-.39 2.19-2.38 3.78-4.65 3.65-1.73-.1-3-.97-3.8-2.5-.09-.15-.16-.3-.24-.48zm-7.74-1.51a3.011 3.011 0 0 0-3.03-2.98 2.99 2.99 0 0 0-2.97 3.03c.01 1.63 1.37 2.96 3 2.95 1.67.01 3.01-1.34 3-3zM4.49 34.44A1.5 1.5 0 0 0 6 32.97a1.51 1.51 0 0 0-1.51-1.52c-.82 0-1.49.68-1.48 1.5 0 .82.66 1.48 1.48 1.49zm30.04 0c.82-.01 1.48-.69 1.48-1.5-.01-.83-.7-1.51-1.54-1.49-.81.02-1.47.71-1.45 1.53.01.81.69 1.47 1.51 1.46zM31.51 12.01c-.01 6.6-5.41 11.97-12 11.95-6.67-.02-12.02-5.39-12-12.05C7.52 5.33 12.93-.02 19.55 0c6.61.02 11.97 5.4 11.96 12.01zm-12.03 8.95c5.02 0 9.03-4.02 9.02-9.05 0-4.9-4.06-8.91-9.02-8.91-4.93-.01-8.98 4.04-8.98 8.96.01 4.96 4.03 9 8.98 9z" />
                    <path d="M21 10.48c.51 0 .98-.01 1.44 0 .88.01 1.55.64 1.56 1.47.01.85-.65 1.51-1.56 1.52-.97.01-1.94.01-2.9 0-.9-.01-1.53-.64-1.53-1.54-.01-1.46-.01-2.93 0-4.39.01-.88.65-1.54 1.48-1.55.85-.01 1.51.66 1.51 1.56.01.95 0 1.91 0 2.93z" />
                  </svg>
                  <span>Timeline</span>
                </Link>
              </NavLinkItem>
              <NavLinkItem
                active={activeSection === "contact"}
                className="navItem4"
                onClick={() => setMenuMobile(false)}
              >
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("contact");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fafafa"
                    viewBox="0 0 312.72 264.67"
                  >
                    <path d="M156.74 264.42c-31.38 0-62.76-.13-94.14.08-9.42.06-18.67.14-27.68-3.32C13.82 253.06-.1 232.97 0 210.41c.11-24.25.26-48.5.31-72.74.05-25.25.16-50.5-.07-75.75-.08-8.54-.26-16.96 2.55-25.18C10.92 12.92 34.28-2.15 59.42.25c1.36.13 2.75.13 4.12.13C125.43.39 187.31.5 249.19.27c9.8-.04 19.43-.35 28.78 3.26 21.02 8.1 34.93 28.38 34.75 50.9-.12 14.75-.28 29.5-.3 44.24-.04 34.5.06 69-.07 103.5-.03 7.2.16 14.63-1.46 21.55-5.69 24.41-27.46 40.99-52.52 40.96-33.88-.04-67.76-.01-101.64-.01.01-.09.01-.17.01-.25zm-.31-240.04c-31.13 0-62.26-.01-93.39.01-3.25 0-6.51.02-9.74.26-15.92 1.22-25.23 9.09-27.93 23.87-.74 4.03-.98 8.2-.99 12.31-.07 47.63-.06 95.25-.01 142.88 0 3.61.29 7.24.75 10.83 1.75 13.74 9.33 22.02 22.9 24.57 4.88.92 9.93 1.24 14.9 1.25 62.26.08 124.52.06 186.78.03 3.74 0 7.5-.21 11.23-.56 14.95-1.4 24.07-9.61 26.52-24.06.68-4.04.92-8.21.93-12.31.06-47.38.06-94.75.01-142.13 0-3.86-.27-7.75-.8-11.58-1.92-13.97-10.07-22.35-23.95-24.43-4.55-.68-9.2-.89-13.81-.9-31.14-.07-62.27-.04-93.4-.04z" />
                    <path d="M156.52 148.46c-6.09.14-11.59-1.66-16.49-5.21-26.09-18.93-52.17-37.87-78.21-56.87-5.96-4.35-7.19-11.63-3.11-17.14 4.13-5.57 11.21-6.56 17.27-2.17 25 18.1 49.94 36.26 74.91 54.4 5.5 4 5.49 4 11.01-.02 24.65-17.93 49.33-35.84 73.96-53.79 3.26-2.38 6.67-4 10.78-3.09 4.8 1.06 8.17 3.96 9.3 8.75 1.27 5.36-.53 9.84-5.05 13.13-10.21 7.42-20.41 14.84-30.62 22.26-15.56 11.31-31.13 22.62-46.68 33.94-5.1 3.73-10.69 5.9-17.07 5.81z" />
                  </svg>
                  <span>Contact</span>
                </Link>
              </NavLinkItem>
              <NavLinkItem
                className="navItem5"
                onClick={() => setMenuMobile(false)}
              >
                <Link href="/assets/downloads/Curriculum.pdf" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fafafa"
                    viewBox="0 0 311.56 311.67"
                  >
                    <path d="M51.87 311.58c-12.85 0-25.69.02-38.54-.01-8.41-.02-13.28-4.84-13.29-13.19-.02-25.81.02-51.63-.04-77.45-.01-4.12 1.34-7.48 4.24-10.38 65.4-65.66 130.73-131.39 196.19-196.98 18.17-18.2 45.04-18.01 63.22.09 11.93 11.88 24.12 23.53 35.56 35.87 17.04 18.37 16.32 44.07-1.34 61.86-19.33 19.47-38.86 38.76-58.3 58.12-45.7 45.49-91.43 90.96-137.06 136.52-3.89 3.88-8.06 5.75-13.6 5.64-12.34-.26-24.69-.08-37.04-.09zm-27.88-23.95h4.45c17.84 0 35.68-.09 53.51.07 3.5.03 5.97-.92 8.48-3.43 46.06-46.02 92.23-91.94 138.36-137.89.75-.75 1.41-1.6 1.49-1.69-21.3-21.3-42.32-42.33-63.21-63.22-8.39 8.28-17.25 16.88-25.96 25.62-38.14 38.25-76.24 76.52-114.3 114.84-1.22 1.23-2.69 3-2.7 4.53-.18 20.2-.12 40.4-.12 61.17zM248.58 126.6c11.3-11.26 23.03-22.45 34.15-34.21 6.88-7.28 6.57-18.73-.37-25.91-12.22-12.64-24.63-25.11-37.32-37.27-6.14-5.88-13.72-6.64-21.54-3.14-1.46.65-2.99 1.44-4.1 2.55-11.56 11.52-23.05 23.11-34.37 34.5 21.13 21.1 42.19 42.14 63.55 63.48z" />
                  </svg>
                  <span>Resume</span>
                </Link>
              </NavLinkItem>
            </ul>
          </NavContainer>
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
}