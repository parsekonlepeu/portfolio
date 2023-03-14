import clsx from "clsx";
import * as React from "react";

export const CodinGameSvg: React.FC = () => {
  return (
    <svg
      clip-rule="evenodd"
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      className={clsx(
        "fill-textLigth",
        "hover:fill-secondary",
        "hover:-translate-y-1",
        "transition"
      )}
      viewBox="0 0 2083 2083"
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
    >
      <path d="M0 0h2083v2083H0z" />
      <g className={clsx("fill-primary")}>
        <path d="M0 1636c411.554-97.771 692.897-283.177 724-637 10.714-131.212 67.364-243.777 216-319 207.675-80.617 305.728-52.164 390-10 92.668 81.722 119.468 199.94 50 371.5-31.914 100.266-291.001 223.867-410 258.5-392.539 175.893-595.504 430.282-561 783H0z" />
        <ellipse
          cx="1666.5"
          cy="408"
          rx="196.5"
          ry="192"
        />
      </g>
    </svg>
  );
};
