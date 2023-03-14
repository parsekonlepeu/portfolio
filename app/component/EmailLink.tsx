"use client";

import clsx from "clsx";
import * as React from "react";
import { useVisible } from "../utils/useVisible";

export const EmailLink: React.FC = () => {
  const { visible } = useVisible();
  if (visible) {
    return (
      <div
        className={clsx("fixed", "bottom-0", "right-16", [
          "after:content-['']",
          "after:w-px",
          "after:h-48",
          "after:bg-textLigth",
          "after:block",
          "after:m-auto",
        ])}
      >
        <div>
          <a
            className={clsx(
              "mb-4",
              "text-textLigth",
              "hover:text-secondary",
              "hover:-translate-y-1",
              "transition"
            )}
            id="email-right"
            href="mailto:parsekonlepeu@gmail.com"
          >
            <p>parsekonlepeu@gmail.com</p>
          </a>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
