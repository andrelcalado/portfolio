import React from "react";
import { ModalVideoContainer, ModalVideoScreen, Video } from "./styles";

export default function ModalVideo({ active, setActive, video }) {
  return (
    <ModalVideoScreen active={active}>
      <ModalVideoContainer>
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
