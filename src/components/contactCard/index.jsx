import Image from "next/image";
import React from "react";
import { CardTextsContainer, CardWithLogo, ContactCardField } from "./styles";

export default function ContactCard({ logo, type, label }) {
  return (
    <ContactCardField>
      <CardWithLogo>
        <Image fill src={`/assets/icons/${logo}.svg`} alt={`${type} Logo`} />
      </CardWithLogo>

      <CardTextsContainer>
        <h4>{label}</h4>
        <p>{type}</p>
      </CardTextsContainer>
    </ContactCardField>
  );
}
