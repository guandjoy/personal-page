import React from "react";

function ItemIframeImage({ src, title, size }) {
  return (
    <div className={`o-portfolio__image -iframe -${size}`}>
      <iframe
        title={title}
        className="portfolio-iframe"
        src={src}
        scrolling="no"
      ></iframe>
      <a href={src}></a>
    </div>
  );
}

export default ItemIframeImage;
