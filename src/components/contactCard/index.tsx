// Core
import Image from "next/image";
import React from "react";

// Styles
import {
  BorderBG,
  CardTextsContainer,
  CardWithLogo,
  ContactCardField,
} from "./styles";

// Types
import { ContactCardTypes } from "../../types/elementsTypes";

export default function ContactCard({ className, logo, type, label, href }: ContactCardTypes) {
  return (
    <ContactCardField className={className} href={href} target="_blank">
      <BorderBG className="borderBG" />

      <CardWithLogo className="cardWithLogo">
        <Image fill src={`/assets/icons/${logo}.svg`} alt={`${type} Logo`} />
      </CardWithLogo>

      <CardTextsContainer className="cardTextsContainer">
        <h4 className="contactCardValue">
          <span>{label}</span>
        </h4>
        <p>{type}</p>
      </CardTextsContainer>
    </ContactCardField>
  );
}
