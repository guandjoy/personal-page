import React from "react";

function Icon({ id, Component, url }) {
  return (
    <a href={url}>
      <Component id={id} className="a-button" />
    </a>
  );
}

export default Icon;
