import Image from "next/image";
import React from "react";
import { ProjectPlaceholderCard } from "./styles";

export default function ProjectPlaceholder({ desc, type }) {
  return (
    <ProjectPlaceholderCard>
      <Image
        fill
        src={`/assets/icons/${type === "alone" ? "alone" : "teamwork"}.svg`}
        alt="Placeholder type"
      />

      <p>{desc}</p>
    </ProjectPlaceholderCard>
  );
}
