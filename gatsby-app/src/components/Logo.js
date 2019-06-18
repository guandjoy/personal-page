import React from "react";
import { css } from "linaria";

const wrapper = css`
  background-color: white;
  margin: 24px 16px 24px 24px;
`;

const Logo = props => (
  <div className={wrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 333.35"
      width="48"
      height="48"
    >
      <defs />
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_3" data-name="Layer 3">
          <rect className="cls-1" y="133.35" width="100" height="100" />
          <rect className="cls-1" x="100" y="233.35" width="100" height="100" />
          <polygon
            className="cls-1"
            points="241.42 133.34 191.9 83.83 263.93 11.8 261.1 8.97 189.07 81 108.08 0 37.37 70.71 200 233.34 200 233.34 300 233.34 300 133.34 241.42 133.34"
          />
        </g>
      </g>
    </svg>
  </div>
);

export default Logo;
