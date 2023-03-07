"use client";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";
import * as React from "react";

const pasVariable = 0.0125;

type TypeGapHorizontal = 1 | 2 | 3 | 4 | 5;
type TypeGapVertical = 1 | 2 | 3 | 4 | 5;
type ImageComponent = React.FC<{ src: any; alt: string; fill?: boolean }>;
type Images = StaticImageData[] | string[];

type CarrousselProps = {
  images: Images;
  Component: ImageComponent;
  height: number;
  width: number;
  typeGapHorizontal: TypeGapHorizontal;
  typeGapVertical: TypeGapVertical;
};

export const Carroussel: React.FC<CarrousselProps> = ({
  images,
  height,
  width,
  typeGapHorizontal,
  typeGapVertical,
  Component,
}) => {
  const [indexImageDisplay, setindexImageDisplay] = React.useState(0);
  const [stateNumber, setStateNumber] = React.useState(0);
  const [percentage, setPercentage] = React.useState(0);
  const [mouseDown, setMouseDown] = React.useState(false);
  const refPreviousPosX = React.useRef(0);
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
  const getGapVertical = (typeGapVertical: TypeGapVertical) => {
    switch (typeGapVertical) {
      case 1:
        return 20;
      case 2:
        return 50;
      case 3:
        return 80;
      case 4:
        return 110;
      case 5:
        return 140;
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
  const makeHandlepointerMove =
    (xInit: number, imagesLenght: number) => (e: PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const nbrBrut = (e.clientX - xInit) * pasVariable;
      const valeurEntier = Math.floor(nbrBrut);
      const valeurFlootante = nbrBrut - valeurEntier;
      const restPar7deValeurEntier =
        ((valeurEntier % 7) + refStateNumberStatic.current) % 7;
      setStateNumber(restPar7deValeurEntier);
      setPercentage(valeurFlootante);
      // console.log("refStateNumber.current : ", refStateNumber.current);
      // console.log("restPar7deValeurEntier : ", restPar7deValeurEntier);
      if (refStateNumber.current < restPar7deValeurEntier) {
        setindexImageDisplay((prev) =>
          prev + 1 >= imagesLenght ? 0 : prev + 1
        );
      } else if (refStateNumber.current > restPar7deValeurEntier) {
        setindexImageDisplay((prev) =>
          prev - 1 >= 0 ? prev - 1 : imagesLenght - 1
        );
      }
      refStateNumber.current = restPar7deValeurEntier;
      refPercentage.current = valeurFlootante;

      const diffPrevNext = nbrBrut - refPreviousPosX.current;
      refPreviousPosX.current = nbrBrut;
      // console.log("diffPrevNext : ", diffPrevNext);
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

    const diffPrevNext = nbrBrut - refPreviousPosX.current;
    refPreviousPosX.current = nbrBrut;
    console.log("diffPrevNext : ", diffPrevNext);
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
    const handlepointerMove = makeHandlepointerMove(e.clientX, images.length);
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
    numberOfImage: number,
    width: number
  ) => {
    const transZ = getTranslateZ((stateNumber + numberOfImage) % 7, percentage);
    const transX = getTranslateX((stateNumber + numberOfImage) % 7, percentage);
    return {
      top: "20px",
      left: width + "px",
      transform: `perspective(300px) translateZ(${transZ}px)  translateX(${transX}px)`,
      zIndex: getZIndex((stateNumber + numberOfImage) % 7, percentage),
      transition: mouseDown ? undefined : "0.5s",
    };
  };
  const getImageDisplay = () => {};

  React.useEffect(() => {
    console.log("indexImageDisplay : ", indexImageDisplay);
    console.log("stateNumber : ", stateNumber);
  }, [indexImageDisplay, stateNumber]);

  const gapHorizontal = width / getGapHorizontal(typeGapHorizontal);
  const spacebetweenRow = getGapVertical(typeGapVertical);
  const contenairWidth = 3 * width;

  const getIndexImage = (
    indexImageDisplay: number,
    numberCurrentImage: number,
    stateNumber: number
  ) => {
    switch (stateNumber) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;

      default:
        break;
    }
  };

  return (
    <div
      id="carroussel"
      className={clsx("relative", "cursor-grab")}
      style={{
        height: `${height + 40}px`,
        width: `${contenairWidth}px`,
      }}
      onPointerDown={handlePointerDown}
      onTouchStart={handleTouchStart}
    >
      <div
        id="contenair-image-0"
        className={clsx("bg-red-800", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 0, width),
          height: height,
          width: width,
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={0}
        />
        <div
          className={clsx(
            "absolute",
            "top-0",
            "left-0",
            "bg-violet-700",
            "text-white"
          )}
        >
          0eme
        </div>
      </div>
      <div
        id="contenair-image-1"
        className={clsx("bg-green-800", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 1, width),
          height: height,
          width: width,
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={1}
        />
        <div
          className={clsx(
            "absolute",
            "top-0",
            "left-0",
            "bg-violet-700",
            "text-white"
          )}
        >
          1eme
        </div>
      </div>
      <div
        id="contenair-image-2"
        className={clsx("bg-secondary", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 2, width),
          height: height,
          width: width,
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={2}
        />
        <div
          className={clsx(
            "absolute",
            "top-0",
            "left-0",
            "bg-violet-700",
            "text-white"
          )}
        >
          2eme
        </div>
        {/* <Image
          src={images[2]}
          alt="image 2"
          fill
        /> */}
      </div>
      <div
        id="contenair-image-3"
        className={clsx("bg-yellow-700", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 3, width),
          height: height,
          width: width,
        }}
      >
        <div
          className={clsx(
            "absolute",
            "top-0",
            "left-0",
            "bg-violet-700",
            "text-white"
          )}
        >
          3eme
        </div>
      </div>
      <div
        id="contenair-image-4"
        className={clsx("bg-sky-700", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 4, width),
          height: height,
          width: width,
        }}
      >
        <div
          className={clsx(
            "absolute",
            "top-0",
            "left-0",
            "bg-violet-700",
            "text-white"
          )}
        >
          4eme
        </div>
      </div>
      <div
        id="contenair-image-5"
        className={clsx("bg-purple-700", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 5, width),
          height: height,
          width: width,
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={3}
        />
        <div
          className={clsx(
            "absolute",
            "top-0",
            "left-0",
            "bg-violet-700",
            "text-white"
          )}
        >
          5eme
        </div>
        {/* <Image
          src={images[3]}
          alt="image 3"
          fill
        /> */}
      </div>
      <div
        id="contenair-image-6"
        className={clsx("bg-indigo-900", "absolute")}
        style={{
          ...getStyle(stateNumber, percentage, 6, width),
          height: height,
          width: width,
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={4}
        />
        <div
          className={clsx(
            "absolute",
            "top-0",
            "left-0",
            "bg-violet-700",
            "text-white"
          )}
        >
          6eme
        </div>
        {/* <Image
          src={images[4]}
          alt="image 4"
          fill
        /> */}
      </div>
    </div>
  );
};

type WrapperComponentProps = {
  Component: ImageComponent;
  images: Images;
  indexImage: number;
};

const WrapperComponent: React.FC<WrapperComponentProps> = ({
  Component,
  images,
  indexImage,
}) => {
  return (
    <Component
      src={images[indexImage]}
      alt="image 0"
      fill
    />
  );
};
