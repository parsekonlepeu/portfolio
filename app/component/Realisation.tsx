"use client";

import clsx from "clsx";
import * as React from "react";
import { useAppeared } from "../utils/useAppeared";
import { WrapperAnim } from "./WrapperAnim";
import Image from "next/image";
import messageOkeys from "../../public/message_okeys.jpg";
import prestationOkeys from "../../public/prestation_esthe.jpg";
import rdvOkeys from "../../public/prise_rdv.jpg";
import qrOkeys from "../../public/qr_code.jpg";
import agendaOkeys from "../../public/agenda.jpg";
import choicePrestOkeys from "../../public/choixOkeys.jpg";
import diary1 from "../../public/diary-1.png";
import diary2 from "../../public/diary-2.png";
import diary3 from "../../public/diary-3.jpg";
import diary4 from "../../public/diary-4.jpg";
import diary5 from "../../public/diary-5.jpg";
import diary6 from "../../public/diary-6.jpg";
import diary7 from "../../public/diary-7.jpg";
import appEmployerOkeys from "../../public/app-employer-okeys-1.jpg";
import appEmployerOkeys2 from "../../public/app-employer-okeys-2.jpg";
import appEmployerOkeys3 from "../../public/app-employer-okeys-3.jpg";
import appEmployerOkeys4 from "../../public/app-employer-okeys-4.jpg";
import appEmployerOkeys5 from "../../public/app-employer-okeys-5.jpg";
import certifJs from "../../public/certification-javascript.jpg";
import certifPython from "../../public/certification-python.jpg";
import profilCondinGame1 from "../../public/profil-codin-game-1.jpg";
import profilCondinGame2 from "../../public/profil-codin-game-2.jpg";
import acceuilCodinGame from "../../public/acceuil-codin-game.jpg";
import { Carroussel } from "./Carroussel";

const imageOkeys = [
  messageOkeys,
  prestationOkeys,
  rdvOkeys,
  qrOkeys,
  agendaOkeys,
  choicePrestOkeys,
];

const imageDiary = [diary1, diary2, diary3, diary4, diary5, diary6, diary7];

const imageWebAppEmployer = [
  appEmployerOkeys,
  appEmployerOkeys2,
  appEmployerOkeys3,
  appEmployerOkeys4,
  appEmployerOkeys5,
];

const imageCoddinGame = [
  certifJs,
  certifPython,
  profilCondinGame1,
  profilCondinGame2,
  acceuilCodinGame,
];

const style = {
  mainContenair: clsx(
    "w-full",
    "h-auto",
    "relative",
    "text-text",
    "text-center",
    "mb-20",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "border-t-2",
    "border-l-2",
    "border-t-primaryLigthLigth",
    "border-l-primaryLigthLigth",
    "bg-primaryLigth",
    "rounded-xl",
    "leading-loose",
    "shadow-2xl"
  ),
  desccriptionContenair: clsx(
    "p-5",
    "flex-1",
    "mb-10",
    "w-forTextProjet",
    "rounded-xl",
    "bg-primaryLigth",
    "shadow-2xl",
    "border-2",
    "border-t-primaryLigthLigth",
    "border-l-primaryLigthLigth",
    "border-b-primary",
    "border-r-primary"
  ),
  link: clsx(
    "relative",
    "before:content-['']  ",
    [
      "after:w-full",
      "after:scale-x-0",
      "after:absolute",
      "after:bottom-0",
      "after:left-0",
      "after:primary",
      "after:content-['']",
      "after:origin-left",
      "after:transition",
      "after:duration-300",
      "after:bg-secondary",
      "after:h-px",
    ],
    ["hover:after:scale-x-100"],
    ["not:hover:after:scale-x-0"],
    "before:mr-1",
    "before:text-secondary",
    "before:font-mono",
    "text-sm",
    "font-serif",
    "text-secondary"
  ),
  title: clsx(
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
  ),
};

export const Realisation: React.FC = () => {
  const { ref, appeared } = useAppeared();
  const [sizeCarroussel, setSaizeCarroussel] = React.useState({
    width: 300,
    height: 600,
  });
  const [sizeCarrousselHorizontal, setSizeCarrousselHorizontal] =
    React.useState({
      width: 600,
      height: 300,
    });
  React.useEffect(() => {
    const handleResize = (e: Event): any => {
      const window = e.target as Window;
      console.log(window.innerWidth);
      if (window.innerWidth <= 1250 && window.innerWidth > 950) {
        setSizeCarrousselHorizontal({
          width: 500,
          height: 250,
        });
      } else if (window.innerWidth <= 950 && window.innerWidth > 550) {
        setSizeCarrousselHorizontal({
          width: 400,
          height: 200,
        });
      } else if (window.innerWidth <= 550 && window.innerWidth > 440) {
        setSizeCarrousselHorizontal({
          width: 350,
          height: 175,
        });
      } else if (window.innerWidth <= 440) {
        setSizeCarrousselHorizontal({
          width: 250,
          height: 125,
        });
      } else {
        setSizeCarrousselHorizontal({
          width: 600,
          height: 300,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      ref={ref}
      className={clsx(
        "flex",
        "flex-col",
        "w-11/12",
        "max-w-4xl",
        "items-end",
        "relative",
        "linkNotVisible:min-w-700",
        "linkNotVisible:w-2/3"
      )}
    >
      <WrapperAnim
        appeared={appeared}
        startAnim="right"
      >
        <h1 className={style.title}>Réalisations</h1>
      </WrapperAnim>
      <div className={style.mainContenair}>
        <Carroussel
          images={imageOkeys}
          width={sizeCarroussel.width}
          height={sizeCarroussel.height}
          typeGapHorizontal={2}
          typeGapVertical={2}
          Component={Image}
          color={"#64ffda"}
        />
        <div className={style.desccriptionContenair}>
          <h1 className={clsx("text-xl", "text-textLigthLigth", "font-mono")}>
            Description
          </h1>
          <p className={clsx("text-text", "font-mono", "mb-4")}>
            Création de deux applications mobiles à l'aide de React Native et
            Typescript.
          </p>
          <a
            href=""
            className={style.link}
          >
            Coming soon
          </a>
          <h1
            className={clsx(
              "text-xl",
              "text-textLigthLigth",
              "font-mono",
              "mt-4"
            )}
          >
            Technologies utilisées{" "}
          </h1>
          <p className={clsx("text-text", "font-mono")}>
            | React Native | Typescript | Redux Toolkit | OAuth2 | React
            Navigation | géolocalisation | scan QRCode | AWS cloud |
          </p>
        </div>
      </div>
      <div className={style.mainContenair}>
        <Carroussel
          images={imageDiary}
          width={sizeCarrousselHorizontal.width}
          height={sizeCarrousselHorizontal.height}
          typeGapHorizontal={1}
          typeGapVertical={5}
          Component={Image}
          color={"#64ffda"}
        />
        <div className={style.desccriptionContenair}>
          <h1 className={clsx("text-xl", "text-textLigthLigth", "font-mono")}>
            Description
          </h1>
          <p className={clsx("text-text", "font-mono", "mb-4")}>
            Création d'un agenda type Google Agenda en Open Source, via un
            monorepo qui contient plusieurs composant React que j'ai créé, dont
            le Carroussel utilisé dans ce portfolio. Une bonne maniere de voir
            la qualité de mon code.
          </p>
          <a
            href="https://storybook-monorepo.vercel.app/"
            target={"_blank"}
            className={style.link}
          >
            Storybook Library @Parsekonlepeu
          </a>
          <h1
            className={clsx(
              "text-xl",
              "text-textLigthLigth",
              "font-mono",
              "mt-4"
            )}
          >
            Technologies utilisées{" "}
          </h1>
          <p className={clsx("text-text", "font-mono")}>
            | React JS | Typescript | Luxon JS | Redux Toolkit | Monorepo | Nx |
            Lerna | Mui |
          </p>
        </div>
      </div>
      <div className={style.mainContenair}>
        <Carroussel
          images={imageWebAppEmployer}
          width={sizeCarrousselHorizontal.width}
          height={sizeCarrousselHorizontal.height}
          typeGapHorizontal={1}
          typeGapVertical={5}
          Component={Image}
          color={"#64ffda"}
        />
        <div className={style.desccriptionContenair}>
          <h1 className={clsx("text-xl", "text-textLigthLigth", "font-mono")}>
            Description
          </h1>
          <p className={clsx("text-text", "font-mono")}>
            Création d'un agenda type Google Agenda en Open Source, via un
            monorepo qui contient plusieurs composant React que j'ai créé, dont
            le Carroussel utilisé dans ce portfolio. Une bonne maniere de voir
            la qualité de mon code.
          </p>
          <h1 className={clsx("text-xl", "text-textLigthLigth", "font-mono")}>
            Technologies utilisées{" "}
          </h1>
          <p className={clsx("text-text", "font-mono")}>
            | React JS | Typescript | Luxon JS | Redux Toolkit | Monorepo | Nx |
            Lerna | Mui |
          </p>
        </div>
      </div>
      <div className={style.mainContenair}>
        <Carroussel
          images={imageCoddinGame}
          width={sizeCarrousselHorizontal.width}
          height={sizeCarrousselHorizontal.height}
          typeGapHorizontal={1}
          typeGapVertical={5}
          Component={Image}
          color={"#64ffda"}
        />
        <div className={style.desccriptionContenair}>
          <h1 className={clsx("text-xl", "text-textLigthLigth", "font-mono")}>
            Description
          </h1>
          <p className={clsx("text-text", "font-mono", "mb-4")}>
            Création d'un agenda type Google Agenda en Open Source, via un
            monorepo qui contient plusieurs composant React que j'ai créé, dont
            le Carroussel utilisé dans ce portfolio. Une bonne maniere de voir
            la qualité de mon code.
          </p>
          <a
            href="https://storybook-monorepo.vercel.app/"
            className={style.link}
          >
            Mon profil Condin Game
          </a>
          <h1
            className={clsx(
              "text-xl",
              "text-textLigthLigth",
              "font-mono",
              "mt-4"
            )}
          >
            Technologies utilisées{" "}
          </h1>
          <p className={clsx("text-text", "font-mono")}>
            | React JS | Typescript | Luxon JS | Redux Toolkit | Monorepo | Nx |
            Lerna | Mui |
          </p>
        </div>
      </div>
    </div>
  );
};
