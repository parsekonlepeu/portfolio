"use client";

import clsx from "clsx";
import * as React from "react";
import { isInViewport } from "../utils/isInViewport";
import photo from "../../public/photo.jpg";
import Image from "next/image";
import { WrapperPhoto } from "./WrapperPhoto";
import { WrapperAnim } from "./WrapperAnim";

const classLiTechno = clsx(
  "before:content-[`▹`]",
  "before:text-secondary",
  "before:leading-3",
  "before:text-lg",
  "before:mr-2"
);

export const About: React.FC = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [appeared, setAppeared] = React.useState(false);
  React.useEffect(() => {
    const handlerEvent = () => {
      const isIn = ref.current ? isInViewport(ref.current) : false;
      isIn && setAppeared(isIn);
      isIn && contenair?.removeEventListener("scroll", handlerEvent);
    };
    const contenair = document.getElementById("contenair");
    contenair?.addEventListener("scroll", handlerEvent);
    return () => contenair?.removeEventListener("scroll", handlerEvent);
  }, []);
  return (
    <div
      ref={ref}
      className={clsx(
        "border-px",
        "flex",
        "flex-col",
        "w-2/3",
        "max-w-4xl",
        "forAbout:w-11/12"
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
            "before:content-['01.']",
            "before:text-secondary",
            "before:font-normal",
            "before:text-xl",
            "before:mt-2",
            "before:mr-3",
            "before:font-mono"
          )}
        >
          A propos
        </h1>
      </WrapperAnim>
      <div
        className={clsx(
          "flex",
          "flex-wrap",
          "flex-row",
          "forAboutLarge:items-center",
          "forAboutLarge:justify-center",
          "forAbout:flex-col"
        )}
      >
        <WrapperAnim
          appeared={appeared}
          startAnim="left"
          classname={clsx("pr-10", "max-w-lg", "mb-8")}
        >
          <p className={clsx("text-text")}>
            {`
              Re-bonjour, je Re-m'appelle Nicolas,
              de formation mathématique appliquée dont le but etais d'integrer
              l'industrie de la banque ou de la finance , je me suis réorienter
              lors de ma 3eme année de licence vers la programmation.
            `}
          </p>
          <p className={clsx("text-text", "mt-3")}>
            {`
              Deux voies m'interressait fortement, tout d'abord le deep learning a
              ces debut et ensuite le web et son fonctionnement dans un second
              temps, je me suis donc former en autodidact sur les langages Python
              et Javascript, sur le web en général et sur le Deep Learning durant
              quelques années.
            `}
          </p>
          <p className={clsx("text-text", "mt-3")}>
            {`
              C'est durant cette periode que j'ai eu l'idées qui finira par
              m'occuper jusqu'à aujourd'hui: la création d'une application SAAS,
              contenant 2 application mobile React Native, 2 Web App SPA React JS
              et le tous avec un back-end utilisant plusieurs services AWS tel que
              (lambda, SNS, SQS, DynamoDB, Cognito etc...).
            `}
          </p>
          <p className={clsx("text-text", "mt-3")}>
            {`
              Après plus de 4 ans passez a travaillez sur ce projet, seul, je me
              suis rendu compte que la programmation est un sport d'équipe... J'ai
              donc decidé de passez ce projet en projet annexes et de chercher la
              prochaine equipe pour laquelle je mettrait mes talents a
              dispositions.
            `}
          </p>
          <p className={clsx("text-text", "mt-3")}>
            {"Voici les technologies que j'ai utilisée :"}
          </p>
          <ul className={clsx("text-text", "grid", "grid-cols-140200", "mt-4")}>
            <li className={classLiTechno}>Typescript</li>
            <li className={classLiTechno}>Javascript (ES6+)</li>
            <li className={classLiTechno}>React JS</li>
            <li className={classLiTechno}>React Native</li>
            <li className={classLiTechno}>Redux Toolkit</li>
            <li className={classLiTechno}>Node JS</li>
            <li className={classLiTechno}>AWS</li>
            <li className={classLiTechno}>Next JS</li>
          </ul>
        </WrapperAnim>
        <WrapperAnim
          appeared={appeared}
          startAnim="right"
          classname={clsx("max-w-xs")}
        >
          <WrapperPhoto>
            <Image
              className={clsx("rounded-md")}
              src={photo}
              alt="ess"
              height={800}
            />
          </WrapperPhoto>
        </WrapperAnim>
      </div>
    </div>
  );
};
