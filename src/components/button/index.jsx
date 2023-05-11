import React from "react";
import { ButtonComponent } from "./styles";

export default function ALButton({ children, href }) {
  return <ButtonComponent href={href}>{children}</ButtonComponent>;
}
