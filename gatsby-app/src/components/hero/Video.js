import React, { useEffect } from "react";

function Video(props) {
  // useEffect(() => {
  //   document.getElementById("hero-video").play();
  // }, []);
  // http://yurko-personal-page.s3.eu-central-1.amazonaws.com/HeroVideo.mp4
  return (
    <video autoPlay muted loop id="hero-video">
      <source
        src="http://yurko-personal-page.s3.eu-central-1.amazonaws.com/HeroVideo.mp4"
        type="video/mp4"
      />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}

export default Video;
