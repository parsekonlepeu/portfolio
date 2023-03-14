"use client";

import clsx from "clsx";
import * as React from "react";

export const Home: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className={clsx("w-full", "h-auto", "-translate-y-15p", "max-w-1000")}>
      <div>
        <h1
          className={clsx("font-mono", "text-secondary")}
          style={{
            transition: ".5s",
            opacity: isMounted ? "1" : "0",
            transform: isMounted ? "translateX(0px)" : "translateX(-100px)",
          }}
        >
          Bonjour, je m'appelle
        </h1>
      </div>
      <div>
        <h2
          className={clsx(
            "text-textLigthLigth",
            "text-title",
            // "forAbout:text-lg",
            "font-bold",
            "font-sans",
            "leading-tight"
          )}
          style={{
            transition: ".5s",
            opacity: isMounted ? "1" : "0",
            transform: isMounted ? "translateX(0px)" : "translateX(100px)",
          }}
        >
          Angeon Nicolas.
        </h2>
      </div>
      <div>
        <h3
          className={clsx(
            "text-text",
            "text-title",
            // "text-6xl",
            // "forAbout:text-3xl",
            "font-bold",
            "leading-tight"
          )}
          style={{
            transition: ".5s",
            opacity: isMounted ? "1" : "0",
            transform: isMounted ? "translateX(0px)" : "translateX(-100px)",
          }}
        >
          Développeur Front-end React et React Native.
        </h3>
      </div>
      <div className={clsx("mt-8 mb-8")}>
        <p
          className={clsx(
            "text-text",
            "leading-7",
            "font-sans",
            "max-w-2xl",
            "font-semibold",
            "block"
          )}
          style={{
            transition: ".5s",
            opacity: isMounted ? "1" : "0",
            transform: isMounted ? "translateX(0px)" : "translateX(100px)",
          }}
        >
          Autodidact ayant plusieurs années de pratique pour les besoins d'un
          projet personnel. Passionné par l'utilisation de la programmation et
          de l'algorithmie pour resoudre divers problèmes, je pense avoir acquis
          une certaine expertise dans le développement d'applications et par
          conséquent pourrai poser ma pierre a l'édifice de projets plus grand.
        </p>
      </div>
    </div>
  );
};
