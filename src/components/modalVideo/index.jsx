import React from "react";
import { ModalVideoContainer, ModalVideoScreen, Video } from "./styles";

export default function ModalVideo() {
  return (
    <ModalVideoScreen>
      <ModalVideoContainer>
        <Video controls>
          <source
            src={require("../../assets/videos/codding.mp4")}
            type="video/mp4"
          />
        </Video>
      </ModalVideoContainer>
    </ModalVideoScreen>
  );
}
