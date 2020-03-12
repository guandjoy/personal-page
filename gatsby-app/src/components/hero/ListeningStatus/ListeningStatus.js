import React from "react";
import SoundIcon from "./SoundIcon";

function ListeningStatus(props) {
  return (
    <div className="m-listening-status">
      <SoundIcon className="m-listening-status__icon" />
      <a
        href="https://youtu.be/L_u97PqWX6g?t=44"
        target="_blank"
        rel="noopener noreferrer"
      >
        N.E.R.D & Rihanna – Lemon
      </a>
    </div>
  );
}

export default ListeningStatus;
