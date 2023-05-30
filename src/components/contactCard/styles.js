import styled from "styled-components";

export const ContactCardField = styled.div`
  position: relative;
`;

export const CardWithLogo = styled.picture`
  width: 150px;
  height: 150px;
  display: block;

  & img {
    position: relative !important;
  }
`;

export const CardTextsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: -50%;
`;
