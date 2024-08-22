import React from "react";
import { ButtonComponent } from "./styles";

export default function ALButton({ children, href, onClick }) {
  return (
    <ButtonComponent href={href} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}
