import React from "react";

function Icon({ id, Component, url }) {
  return (
    <a href={url}>
      <Component id={id} className="social-buttons__item" />
    </a>
  );
}

export default Icon;
