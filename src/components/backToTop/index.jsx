import React, { useState, useEffect } from "react";
import { BackToTopStyled } from "./styles";

export default function BackToTop() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 100);
    });
  }, []);

  return (
    <BackToTopStyled
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      scrolled={scrolled}
    />
  );
}
