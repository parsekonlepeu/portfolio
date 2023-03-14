"use client";

import * as React from "react";
import clsx from "clsx";
import { useAppeared } from "../utils/useAppeared";
import { WrapperAnim } from "./WrapperAnim";
import { useVisible } from "../utils/useVisible";
import { CodinGameSvg } from "./logoSvg/CodinGameSvg";
import { GithubSvg } from "./logoSvg/GithubSvg";
import { LinkedinSvg } from "./logoSvg/LinkedinSvg";
import { TwitterSvg } from "./logoSvg/TwitterSvg";

export const Contact: React.FC = () => {
  const { ref, appeared } = useAppeared();
  const { visible } = useVisible();

  return (
    <div
      ref={ref}
      className={clsx(
        "flex",
        "flex-col",
        "w-2/3",
        "max-w-4xl",
        "forAbout:w-11/12",
        "text-text"
      )}
    >
      <WrapperAnim
        appeared={appeared}
        startAnim="right"
      >
        <h1
          className={clsx(
            "titre-section",
            "text-textLigthLigth",
            "leading-tight",
            "font-bold",
            "font-sans",
            "flex",
            "items-center",
            "relative",
            "mb-10",
            "text-3xl",
            "before:content-['03.']",
            "before:text-secondary",
            "before:font-normal",
            "before:text-xl",
            "before:mt-2",
            "before:mr-3",
            "before:font-mono"
          )}
        >
          Contact
        </h1>
      </WrapperAnim>
      <div
        className={clsx("flex", "flex-col", "justify-center", "items-center")}
      >
        <WrapperAnim
          appeared={appeared}
          startAnim="left"
          classname={clsx(
            "max-w-lg",
            "mb-8",
            "flex",
            "flex-col",
            "justify-center",
            "items-center"
          )}
        >
          <p className={clsx("text-text", "text-center")}>
            Toujours à l'écoute envoyer moi un email pour, peut être, démarrer
            un belle aventure.
          </p>
          <a href="mailto:parsekonlepeu@gmail.com">
            <button
              className={clsx(
                "text-secondary",
                "border",
                "border-secondary",
                "pt-2",
                "pb-2",
                "pl-3",
                "pr-3",
                "mt-4",
                "font-mono",
                "rounded-md",
                "hover:bg-hoverSecondary"
              )}
            >
              Envoyer un Email
            </button>
          </a>
        </WrapperAnim>
      </div>
      <div
        className={clsx(
          "mt-20",
          "relative",
          "flex",
          "flex-col",
          "justify-center",
          "items-center"
        )}
      >
        {!visible && (
          <div>
            <ul className={clsx("flex", "flex-row", "gap-20")}>
              <li className={clsx("mb-8", "cursor-pointer")}>
                <CodinGameSvg />
              </li>
              <li className={clsx("mb-8", "cursor-pointer")}>
                <GithubSvg />
              </li>
              <li className={clsx("mb-8", "cursor-pointer")}>
                <LinkedinSvg />
              </li>
              <li className={clsx("mb-8", "cursor-pointer")}>
                <TwitterSvg />
              </li>
            </ul>
          </div>
        )}
        <a
          href="https://github.com/parsekonlepeu/portfolio"
          target={"_blank"}
          className={clsx(
            "font-mono",
            "text-center",
            "hover:text-secondary",
            "border-l",
            "border-t",
            "rounded-md",
            "p-3",
            "shadow-xl",
            "border-t-primaryLigthLigth",
            "border-l-primaryLigthLigth",
            "bg-primaryLigth"
          )}
        >
          <p>
            designer et construit par Nicolas Angeon,
            <br /> cliquez ici pour le code.
          </p>
        </a>
      </div>
    </div>
  );
};
