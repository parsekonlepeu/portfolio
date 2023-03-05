"use client";
import clsx from "clsx";
import * as React from "react";

const pasVariable = 0.0125;

export const Carroussel: React.FC = () => {
  const [stateNumber, setStateNumber] = React.useState(0);
  const [percentage, setPercentage] = React.useState(0);
  const [mouseDown, setMouseDown] = React.useState(false);
  const refStateNumber = React.useRef(0);
  const refStateNumberStatic = React.useRef(0);
  const refPercentage = React.useRef(0);
  const getZIndex = (stateNumber: number, percentage: number) => {
    switch (stateNumber) {
      case 0:
        return percentage < 0.5 ? 10 : 5;
      case 1:
        return percentage < 0.5 ? 5 : 1;
      case 4:
        return percentage > 0.5 ? 10 : 5;
      case 2:
        return 1;
      case 3:
        return 1;

      default:
        return 10;
    }
  };
  const getTranslateX = (intPart: number, floatPart: number): number => {
    switch (intPart) {
      case 0:
        return floatPart * -150;
      case 1:
        return -150;
      case 2:
        return -150 + floatPart * 250;
      case 3:
        return 100;
      case 4:
        return 100 + floatPart * -100;

      default:
        return floatPart * 0;
    }
  };
  const getScale = (intPart: number, floatPart: number): number => {
    switch (intPart) {
      case 0:
        return 1 - floatPart * 0.1;
      case 1:
        return 0.9 - floatPart * 0.2;
      case 2:
        return 0.7;
      case 3:
        return 0.7 + floatPart * 0.2;
      case 4:
        return 0.9 + floatPart * 0.1;

      default:
        return floatPart * 1;
    }
  };
  const getTranslateZ = (intPart: number, floatPart: number) => {
    switch (intPart) {
      case 0:
        return 0 - floatPart * 100;
      case 1:
        return -100 - floatPart * 100;
      case 2:
        return -200;
      case 3:
        return -200 + floatPart * 100;
      case 4:
        return -100 + floatPart * 100;

      default:
        return floatPart * 1;
    }
  };
  React.useEffect(() => {
    console.log("stateNumber red :", stateNumber);
    console.log("percentage red :", percentage);
  }, [stateNumber, percentage]);
  const makeHandlepointerMove = (xInit: number) => (e: PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nbrBrut = (e.clientX - xInit) * pasVariable;
    const valeurEntier = Math.floor(nbrBrut);
    const valeurFlootante = nbrBrut - valeurEntier;
    const restPar5deValeurEntier =
      ((valeurEntier % 5) + refStateNumberStatic.current) % 5;
    const nbrFinal = restPar5deValeurEntier + valeurFlootante;
    setStateNumber(restPar5deValeurEntier);
    setPercentage(valeurFlootante);
    refStateNumber.current = restPar5deValeurEntier;
    refPercentage.current = valeurFlootante;
  };
  const handlePointerDown = React.useCallback((e: React.PointerEvent) => {
    const handlepointerMove = makeHandlepointerMove(e.clientX);
    setMouseDown(true);
    document.addEventListener("pointermove", handlepointerMove);
    document.addEventListener(
      "pointerup",
      () => {
        const newStateNumber = Math.round(
          refStateNumber.current + refPercentage.current
        );
        setStateNumber(newStateNumber === 5 ? 0 : newStateNumber);
        refStateNumberStatic.current =
          newStateNumber === 5 ? 0 : newStateNumber;
        setPercentage(0);
        setMouseDown(false);
        refPercentage.current = 0;
        document.removeEventListener("pointermove", handlepointerMove);
      },
      { once: true }
    );
  }, []);
  return (
    <div
      id="carroussel"
      className={clsx("bg-white", "h-96", "w-full", "relative", "cursor-grab")}
      onPointerDown={handlePointerDown}
    >
      <div
        className={clsx(
          "bg-red-800",
          "h-5/6",
          "w-40",
          "absolute",
          "top-1/2",
          "left-1/2"
        )}
        style={{
          transform: `perspective(300px) translateZ(${getTranslateZ(
            stateNumber,
            percentage
          )}px) translateY(calc(-50% + ${
            getTranslateZ(stateNumber, percentage) / 2
          }px)) translateX(calc(-50% + ${getTranslateX(
            stateNumber,
            percentage
          )}px))`,
          zIndex: getZIndex(stateNumber, percentage),
          transition: mouseDown ? undefined : "0.5s",
        }}
      ></div>
      <div
        className={clsx(
          "bg-green-800",
          "h-5/6",
          "w-40",
          "absolute",
          "top-1/2",
          "left-1/2"
        )}
        style={{
          transform: `perspective(300px) translateZ(${getTranslateZ(
            (stateNumber + 1) % 5,
            percentage
          )}px) translateY(calc(-50% + ${
            getTranslateZ((stateNumber + 1) % 5, percentage) / 2
          }px)) translateX(calc(-50% + ${getTranslateX(
            (stateNumber + 1) % 5,
            percentage
          )}px))`,
          zIndex: getZIndex((stateNumber + 1) % 5, percentage),
          transition: mouseDown ? undefined : "0.5s",
        }}
      ></div>
      <div
        className={clsx(
          "bg-secondary",
          "h-5/6",
          "w-40",
          "absolute",
          "top-1/2",
          "left-1/2"
        )}
        style={{
          transform: `perspective(300px) translateZ(${getTranslateZ(
            (stateNumber + 2) % 5,
            percentage
          )}px) translateY(calc(-50% + ${
            getTranslateZ((stateNumber + 2) % 5, percentage) / 2
          }px)) translateX(calc(-50% + ${getTranslateX(
            (stateNumber + 2) % 5,
            percentage
          )}px))`,
          zIndex: getZIndex((stateNumber + 2) % 5, percentage),
          transition: mouseDown ? undefined : "0.5s",
        }}
      ></div>
      <div
        className={clsx(
          "bg-yellow-700",
          "h-5/6",
          "w-40",
          "absolute",
          "top-1/2",
          "left-1/2"
        )}
        style={{
          transform: `perspective(300px) translateZ(${getTranslateZ(
            (stateNumber + 3) % 5,
            percentage
          )}px) translateY(calc(-50% + ${
            getTranslateZ((stateNumber + 3) % 5, percentage) / 2
          }px)) translateX(calc(-50% + ${getTranslateX(
            (stateNumber + 3) % 5,
            percentage
          )}px))`,
          zIndex: getZIndex((stateNumber + 3) % 5, percentage),
          transition: mouseDown ? undefined : "0.5s",
        }}
      ></div>
      <div
        className={clsx(
          "bg-sky-700",
          "h-5/6",
          "w-40",
          "absolute",
          "top-1/2",
          "left-1/2"
        )}
        style={{
          transform: `perspective(300px) translateZ(${getTranslateZ(
            (stateNumber + 4) % 5,
            percentage
          )}px) translateY(calc(-50% + ${
            getTranslateZ((stateNumber + 4) % 5, percentage) / 2
          }px)) translateX(calc(-50% + ${getTranslateX(
            (stateNumber + 4) % 5,
            percentage
          )}px))`,
          zIndex: getZIndex((stateNumber + 4) % 5, percentage),
          transition: mouseDown ? undefined : "0.5s",
        }}
      ></div>
    </div>
  );
};
