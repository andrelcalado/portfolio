// Core
import React from "react";

// Styles
import { ButtonComponent } from "./styles";

// Types
import { ALButtonTypes } from "../../types/elementsTypes";

export default function ALButton({ children, href, onClick }: ALButtonTypes) {
  return (
    <ButtonComponent href={href || '#'} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}
