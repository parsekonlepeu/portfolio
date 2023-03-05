"use client";

import clsx from "clsx";
import * as React from "react";
import { useAppeared } from "../utils/useAppeared";
import { WrapperAnim } from "./WrapperAnim";
import Image from "next/image";
import diary1 from "../../public/diary-1.png";
import { Carroussel } from "./Carroussel";

export const Realisation: React.FC = () => {
  const { ref, appeared } = useAppeared();
  return (
    <div
      ref={ref}
      className={clsx(
        "border-px",
        "flex",
        "flex-col",
        "w-2/3",
        "max-w-4xl",
        "items-end",
        "bg-red-300",
        "relative"
      )}
    >
      <WrapperAnim
        appeared={appeared}
        startAnim="right"
      >
        <h1
          className={clsx(
            "titre-section-reverse",
            "text-textLigthLigth",
            "leading-tight",
            "font-bold",
            "font-sans",
            "flex",
            "items-center",
            "relative",
            "mb-10",
            "text-3xl",
            "after:content-['.02']",
            "after:text-secondary",
            "after:font-normal",
            "after:text-xl",
            "after:mt-2",
            "after:ml-3",
            "after:font-mono"
          )}
        >
          Projets
        </h1>
      </WrapperAnim>
      <Carroussel />
      {/* <WrapperAnim
        appeared={appeared}
        startAnim="left"
      >
        <div className={clsx("grid")}>
          <Image
            src={diary1}
            alt="diary"
            width={800}
          />
        </div>
      </WrapperAnim> */}
    </div>
  );
};
