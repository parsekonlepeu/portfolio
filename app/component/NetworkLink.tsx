"use client";

import clsx from "clsx";
import * as React from "react";
import { useVisible } from "../utils/useVisible";
import { CodinGameSvg } from "./logoSvg/CodinGameSvg";
import { GithubSvg } from "./logoSvg/GithubSvg";
import { LinkedinSvg } from "./logoSvg/LinkedinSvg";
import { TwitterSvg } from "./logoSvg/TwitterSvg";

export const NetworkLink: React.FC = () => {
  const { visible } = useVisible();
  if (visible) {
    return (
      <div
        className={clsx("fixed", "bottom-0", "left-16", [
          "after:content-['']",
          "after:w-px",
          "after:h-48",
          "after:bg-textLigth",
          "after:block",
          "after:m-auto",
        ])}
      >
        <ul className={clsx("mb-8")}>
          {/* https://www.codingame.com/profile/68534aa99235adadb53c9c360c42a39c5351984 */}
          <li className={clsx("mb-8", "cursor-pointer")}>
            <a
              href="https://www.codingame.com/profile/68534aa99235adadb53c9c360c42a39c5351984"
              target="_blank"
            >
              <CodinGameSvg />
            </a>
          </li>
          <li className={clsx("mb-8", "cursor-pointer")}>
            <a
              href="https://github.com/parsekonlepeu"
              target="_blank"
            >
              <GithubSvg />
            </a>
          </li>
          <li className={clsx("mb-8", "cursor-pointer")}>
            <a
              href="https://linkedin.com/in/nicolas-angeon-5b27111b6"
              target="_blank"
            >
              <LinkedinSvg />
            </a>
          </li>
          <li className={clsx("mb-8", "cursor-pointer")}>
            <a
              href="https://twitter.com/parsekonlepeu"
              target="_blank"
            >
              <TwitterSvg />
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};
