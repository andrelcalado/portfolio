import Image from "next/image";
import React from "react";
import {
  BorderBG,
  CardTextsContainer,
  CardWithLogo,
  ContactCardField,
} from "./styles";

export default function ContactCard({ logo, type, label, href }) {
  return (
    <ContactCardField href={href} target="_blank">
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
