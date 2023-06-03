import React from "react";
import { CloseButton, ModalVideoContainer, ModalVideoScreen, Video } from "./styles";

export default function ModalVideo({ active, setActive, video }) {
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
