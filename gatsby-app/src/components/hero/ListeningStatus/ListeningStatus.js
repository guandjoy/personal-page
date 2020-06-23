import React from "react";
import SoundIcon from "./SoundIcon";

function ListeningStatus(props) {
  return (
    <div className="m-listening-status">
      <a
        href="https://youtu.be/Zzej0ETmg4Y"
        target="_blank"
        className="m-listening-status__link"
        rel="noopener noreferrer"
      >
        <SoundIcon className="m-listening-status__icon" />
        <span>Eve – Tambourine (Explicit)</span>
      </a>
    </div>
  );
}

export default ListeningStatus;
