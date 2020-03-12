import React, { useEffect, useCallback, useRef } from "react";

function FirstFrameSole({ setSoleIsLoaded, soleIsLoaded }) {
  const soleRef = useRef(null);

  const onLoad = useCallback(() => setSoleIsLoaded(true), []);

  useEffect(() => {
    // Check if sole is loaded. Method for SSR
    soleRef.current.complete
      ? onLoad()
      : soleRef.current.addEventListener("load", onLoad);
    return () => {
      soleRef.current.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <img
      ref={soleRef}
      alt="Dancing spaceman character and alien snake"
      src="https://yurko-personal-page.s3.eu-central-1.amazonaws.com/FirstFrame.jpg"
      className="m-video__first-frame-sole"
    />
  );
}

export default FirstFrameSole;
