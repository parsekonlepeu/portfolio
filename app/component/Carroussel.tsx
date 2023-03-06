"use client";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";
import * as React from "react";

const pasVariable = 0.0125;
const spacebetweenRow = 20;

type TypeGapHorizontal = 1 | 2 | 3 | 4 | 5;

type CarrousselProps = {
  images: StaticImageData[];
  height: number;
  width: number;
  typeGapHorizontal: TypeGapHorizontal;
};

export const Carroussel: React.FC<CarrousselProps> = ({
  images,
  height,
  width,
  typeGapHorizontal,
}) => {
  const [stateNumber, setStateNumber] = React.useState(0);
  const [percentage, setPercentage] = React.useState(0);
  const [mouseDown, setMouseDown] = React.useState(false);
  const refStateNumber = React.useRef(0);
  const refStateNumberStatic = React.useRef(0);
  const refPercentage = React.useRef(0);

  const getGapHorizontal = (typeGapHorizontal: TypeGapHorizontal) => {
    switch (typeGapHorizontal) {
      case 1:
        return 3;
      case 2:
        return 2;
      case 3:
        return 1.5;
      case 4:
        return 1.2;
      case 5:
        return 1;
    }
  };

  const getZIndex = (stateNumber: number, percentage: number) => {
    switch (stateNumber) {
      case 0:
        return percentage < 0.5 ? 10 : 5;
      case 1:
        return 3;
      case 2:
        return 2;
      case 3:
        return -1;
      case 4:
        return -1;
      case 5:
        return 3;
      case 6:
        return percentage > 0.5 ? 10 : 5;

      default:
        return 10;
    }
  };
  const getTranslateX = (intPart: number, floatPart: number): number => {
    switch (intPart) {
      case 0:
        return floatPart * -gapHorizontal;
      case 1:
        return -gapHorizontal + floatPart * -gapHorizontal;
      case 2:
        return -(2 * gapHorizontal);
      case 3:
        return -(2 * gapHorizontal) + floatPart * 4 * gapHorizontal;
      case 4:
        return 2 * gapHorizontal;
      case 5:
        return 2 * gapHorizontal - floatPart * gapHorizontal;
      case 6:
        return gapHorizontal + floatPart * -gapHorizontal;
      case -1:
        return floatPart * gapHorizontal;
      case -2:
        return gapHorizontal + floatPart * -gapHorizontal;
      case -3:
        return -(2 * gapHorizontal);
      case -4:
        return -(2 * gapHorizontal) + floatPart * 4 * gapHorizontal;
      case -5:
        return 2 * gapHorizontal;
      case -6:
        return 2 * gapHorizontal - floatPart * gapHorizontal;
      case -7:
        return gapHorizontal + floatPart * -gapHorizontal;

      default:
        return floatPart * 0;
    }
  };
  const getTranslateZ = (intPart: number, floatPart: number) => {
    switch (intPart) {
      case 0:
        return 0 - floatPart * spacebetweenRow;
      case 1:
        return -spacebetweenRow - floatPart * spacebetweenRow;
      case 2:
        return -2 * spacebetweenRow - floatPart * spacebetweenRow;
      case 3:
        return -3 * spacebetweenRow;
      case 4:
        return -3 * spacebetweenRow + floatPart * spacebetweenRow;
      case 5:
        return -2 * spacebetweenRow + floatPart * spacebetweenRow;
      case 6:
        return -spacebetweenRow + floatPart * spacebetweenRow;

      default:
        return floatPart * 1;
    }
  };
  const makeHandlepointerMove = (xInit: number) => (e: PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nbrBrut = (e.clientX - xInit) * pasVariable;
    const valeurEntier = Math.floor(nbrBrut);
    const valeurFlootante = nbrBrut - valeurEntier;
    const restPar7deValeurEntier =
      ((valeurEntier % 7) + refStateNumberStatic.current) % 7;
    setStateNumber(restPar7deValeurEntier);
    setPercentage(valeurFlootante);
    refStateNumber.current = restPar7deValeurEntier;
    refPercentage.current = valeurFlootante;
  };
  const makeHandleTouchMove = (xInit: number) => (e: TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nbrBrut = (e.touches[0].clientX - xInit) * pasVariable;
    const valeurEntier = Math.floor(nbrBrut);
    const valeurFlootante = nbrBrut - valeurEntier;
    const restPar7deValeurEntier =
      ((valeurEntier % 7) + refStateNumberStatic.current) % 7;
    setStateNumber(restPar7deValeurEntier);
    setPercentage(valeurFlootante);
    refStateNumber.current = restPar7deValeurEntier;
    refPercentage.current = valeurFlootante;
  };
  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    const handlepointerMove = makeHandleTouchMove(e.touches[0].clientX);
    setMouseDown(true);
    document.addEventListener("touchmove", handlepointerMove);
    document.addEventListener(
      "touchend",
      () => {
        const newStateNumber = Math.round(
          refStateNumber.current + refPercentage.current
        );
        setStateNumber(newStateNumber === 7 ? 0 : newStateNumber);
        refStateNumberStatic.current =
          newStateNumber === 7 ? 0 : newStateNumber;
        setPercentage(0);
        setMouseDown(false);
        refPercentage.current = 0;
        document.removeEventListener("touchmove", handlepointerMove);
      },
      { once: true }
    );
  }, []);
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
        setStateNumber(newStateNumber === 7 ? 0 : newStateNumber);
        refStateNumberStatic.current =
          newStateNumber === 7 ? 0 : newStateNumber;
        setPercentage(0);
        setMouseDown(false);
        refPercentage.current = 0;
        document.removeEventListener("pointermove", handlepointerMove);
      },
      { once: true }
    );
  }, []);
  const getStyle = (
    stateNumber: number,
    percentage: number,
    numberOfImage: number
  ) => {
    const transZ = getTranslateZ((stateNumber + numberOfImage) % 7, percentage);
    const transX = getTranslateX((stateNumber + numberOfImage) % 7, percentage);
    const decalageY = (300 + Math.abs(transZ)) / 300;
    console.log("decalageY", decalageY);
    console.log("transZ", transZ);
    console.log("----------------");
    return {
      top: "20px",
      left: gapHorizontal + "px",
      transform: `perspective(300px) translateZ(${transZ}px)  translateX(${transX}px)`,
      zIndex: getZIndex((stateNumber + numberOfImage) % 7, percentage),
      transition: mouseDown ? undefined : "0.5s",
    };
  };

  const gapHorizontal = width / getGapHorizontal(typeGapHorizontal);

  return (
    <div
      id="carroussel"
      className={clsx("bg-white", "w-full", "relative", "cursor-grab")}
      style={{
        height: height + 40 + "px",
      }}
      onPointerDown={handlePointerDown}
      onTouchStart={handleTouchStart}
    >
      <div
        className={clsx("bg-red-800", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 0),
          height: height,
          width: width,
        }}
      >
        <Image
          src={images[0]}
          alt="image 0"
          fill
        />
      </div>
      <div
        className={clsx("bg-green-800", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 1),
          height: height,
          width: width,
        }}
      >
        <Image
          src={images[1]}
          alt="image 1"
          fill
        />
      </div>
      <div
        className={clsx("bg-secondary", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 2),
          height: height,
          width: width,
        }}
      >
        <Image
          src={images[2]}
          alt="image 2"
          fill
        />
      </div>
      <div
        className={clsx("bg-yellow-700", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 3),
          height: height,
          width: width,
        }}
      ></div>
      <div
        className={clsx("bg-sky-700", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 4),
          height: height,
          width: width,
        }}
      ></div>
      <div
        className={clsx("bg-purple-700", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 5),
          height: height,
          width: width,
        }}
      >
        <Image
          src={images[3]}
          alt="image 3"
          fill
        />
      </div>
      <div
        className={clsx("bg-indigo-900", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 6),
          height: height,
          width: width,
        }}
      >
        <Image
          src={images[4]}
          alt="image 4"
          fill
        />
      </div>
    </div>
  );
};
