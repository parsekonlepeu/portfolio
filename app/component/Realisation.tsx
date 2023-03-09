"use client";

import clsx from "clsx";
import * as React from "react";
import { useAppeared } from "../utils/useAppeared";
import { WrapperAnim } from "./WrapperAnim";
import Image from "next/image";
import diary1 from "../../public/diary-1.png";
import messageOkeys from "../../public/message_okeys.jpg";
import prestationOkeys from "../../public/prestation_esthe.jpg";
import rdvOkeys from "../../public/prise_rdv.jpg";
import qrOkeys from "../../public/qr_code.jpg";
import agendaOkeys from "../../public/agenda.jpg";
import choicePrestOkeys from "../../public/choixOkeys.jpg";
import { Carroussel } from "./Carroussel";

const imageOkeys = [
  messageOkeys,
  prestationOkeys,
  rdvOkeys,
  qrOkeys,
  agendaOkeys,
  choicePrestOkeys,
];

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
        // "bg-red-300",
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
      <div className={clsx("w-full", "h-auto", "relative")}>
        <Carroussel
          images={imageOkeys}
          width={200}
          height={400}
          typeGapHorizontal={2}
          typeGapVertical={2}
          Component={Image}
        />
      </div>
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
