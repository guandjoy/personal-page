import React, { useEffect } from "react";

function Video(props) {
  useEffect(() => {
    document.getElementById("hero-video").play();
  }, []);

  return (
    <video
      onCanPlay={() => props.setVideoIsReady(true)}
      autoPlay
      muted
      loop
      id="hero-video"
    >
      <source
        src="https://yurko-personal-page.s3.eu-central-1.amazonaws.com/HeroVideo-FullHD-4-bitrate.mp4"
        type="video/mp4"
      />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}

export default Video;
