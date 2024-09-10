// Core
import React from "react";

// Styles
import { CloseButton, ModalVideoContainer, ModalVideoScreen, Video } from "./styles";

// Types
import { ModalVideoTypes } from "../../types/elementsTypes";

export default function ModalVideo({ active, setActive, video }: ModalVideoTypes) {
  return (
    <ModalVideoScreen active={active}>
      <ModalVideoContainer>
        <CloseButton onClick={() => setActive(!active)} />

        <Video controls>
          <source
            src={require(`../../assets/videos/${video}.mp4`)}
            type="video/mp4"
          />
        </Video>
      </ModalVideoContainer>
    </ModalVideoScreen>
  );
}
