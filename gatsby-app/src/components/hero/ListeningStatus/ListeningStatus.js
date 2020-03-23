import React from "react";
import SoundIcon from "./SoundIcon";

function ListeningStatus(props) {
  return (
    <div className="m-listening-status">
      <a
        href="https://youtu.be/L_u97PqWX6g?t=44"
        target="_blank"
        className="m-listening-status__link"
        rel="noopener noreferrer"
      >
        <SoundIcon className="m-listening-status__icon" />
        <span>N.E.R.D & Rihanna – Lemon</span>
      </a>
    </div>
  );
}

export default ListeningStatus;
