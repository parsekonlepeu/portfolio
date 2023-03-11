"use client";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";
import * as React from "react";
import { ButtonCarrousel } from "./ButtonCarroussel";

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
  color: string;
};

export const Carroussel: React.FC<CarrousselProps> = ({
  images,
  height,
  width,
  typeGapHorizontal,
  typeGapVertical,
  Component,
  color,
}) => {
  const arrayAllNumberState = [0, 1, 2, 3, 4, 5, 6];
  const arrayIndexImages = images.map((item, index) => index);
  const numberImage = images.length;

  const [indexImageLoadRight, setIndexImageLoadRight] = React.useState(
    arrayIndexImages[3]
  );
  const [indexImageLoadLeft, setIndexImageLoadLeft] = React.useState(
    arrayIndexImages.at(-3) as number
  );
  const [stateNumber, setStateNumber] = React.useState(0);
  const [percentage, setPercentage] = React.useState(0);
  const [mouseDown, setMouseDown] = React.useState(false);
  const refDirectiobOfmouvement = React.useRef<"right" | "left">("right");
  const refPreviousPosX = React.useRef(0);
  const refStateNumber = React.useRef(0);
  const refStateNumberPrevious = React.useRef(0);
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
        return 0;
      case 4:
        return percentage > 0.5 ? 2 : 0;
      case 5:
        return 3;
      case 6:
        return percentage > 0.5 ? 10 : 5;

      default:
        return 3;
    }
  };
  const getZIndexReverse = (stateNumber: number, percentage: number) => {
    switch (stateNumber) {
      case 0:
        return percentage < 0.5 ? 10 : 5;
      case 1:
        return percentage > 0.5 ? 10 : 5;
      case 2:
        return 3;
      case 3:
        return percentage > 0.5 ? 2 : 0;
      case 4:
        return 0;
      case 5:
        return 2;
      case 6:
        return 3;

      default:
        return 10;
    }
  };
  const getTranslateX = (
    intPart: number,
    floatPart: number,
    gapHorizontal: number
  ): number => {
    switch (intPart) {
      case 0:
        return floatPart * gapHorizontal;
      case 1:
        return gapHorizontal + floatPart * gapHorizontal;
      case 2:
        return 2 * gapHorizontal;
      case 3:
        return 2 * gapHorizontal - floatPart * 4 * gapHorizontal;
      case 4:
        return -2 * gapHorizontal;
      case 5:
        return -2 * gapHorizontal + floatPart * gapHorizontal;
      case 6:
        return -gapHorizontal + floatPart * gapHorizontal;

      default:
        return floatPart * 0;
    }
  };
  const getTranslateXReverse = (
    intPart: number,
    floatPart: number,
    gapHorizontal: number
  ): number => {
    switch (intPart) {
      case 0:
        return -floatPart * gapHorizontal;
      case 1:
        return gapHorizontal - floatPart * gapHorizontal;
      case 2:
        return 2 * gapHorizontal - floatPart * gapHorizontal;
      case 3:
        return 2 * gapHorizontal;
      case 4:
        return -2 * gapHorizontal + floatPart * 4 * gapHorizontal;
      case 5:
        return -2 * gapHorizontal;
      case 6:
        return -gapHorizontal - floatPart * gapHorizontal;

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
  const getTranslateZReverse = (intPart: number, floatPart: number) => {
    switch (intPart) {
      case 0:
        return 0 - floatPart * spacebetweenRow;
      case 1:
        return -spacebetweenRow + floatPart * spacebetweenRow;
      case 2:
        return -2 * spacebetweenRow + floatPart * spacebetweenRow;
      case 3:
        return -3 * spacebetweenRow + floatPart * spacebetweenRow;
      case 4:
        return -3 * spacebetweenRow;
      case 5:
        return -2 * spacebetweenRow - floatPart * spacebetweenRow;
      case 6:
        return -spacebetweenRow - floatPart * spacebetweenRow;

      default:
        return floatPart * 1;
    }
  };
  const makeHandlepointerMove =
    (xInit: number, imagesLenght: number) => (e: PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const movementX = (e.clientX - xInit) * pasVariable;
      const arraySplit = movementX.toString().split(".");
      const valeurEntier = parseInt(arraySplit[0], 10);
      const valeurFlootante = parseFloat(`0.${arraySplit[1]}`);
      const indexCurrentNumber = arrayAllNumberState.findIndex(
        (item) => item === refStateNumberPrevious.current
      );
      const newStateNumber = arrayAllNumberState.at(
        (indexCurrentNumber + valeurEntier) % 7
      ) as number;
      setStateNumber(newStateNumber);
      setPercentage(valeurFlootante);

      const diffPrevNext = movementX - refPreviousPosX.current;
      refPreviousPosX.current = movementX;
      const directionmovement = movementX < 0 ? "left" : "right";
      refDirectiobOfmouvement.current = directionmovement;
      if (refStateNumber.current !== newStateNumber) {
        if (refDirectiobOfmouvement.current === "right") {
          console.log("dans la droite");
          if (diffPrevNext < 0) {
            setIndexImageLoadRight(
              (prev) => Math.round(prev + 1) % numberImage
            );
            setIndexImageLoadLeft((prev) => Math.round(prev + 1) % numberImage);
          } else {
            setIndexImageLoadRight(
              (prev) => Math.round(prev - 1) % numberImage
            );
            setIndexImageLoadLeft((prev) => Math.round(prev - 1) % numberImage);
          }
        } else {
          console.log("dans la gauche");
          if (diffPrevNext > 0) {
            setIndexImageLoadRight(
              (prev) => Math.round(prev - 1) % numberImage
            );
            setIndexImageLoadLeft((prev) => Math.round(prev - 1) % numberImage);
          } else {
            setIndexImageLoadRight(
              (prev) => Math.round(prev + 1) % numberImage
            );
            setIndexImageLoadLeft((prev) => Math.round(prev + 1) % numberImage);
          }
        }
      }
      refStateNumber.current = newStateNumber;
      refPercentage.current = valeurFlootante;
    };
  const makeHandleTouchMove = (xInit: number) => (e: TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const movementX = (e.touches[0].clientX - xInit) * pasVariable;
    const valeurEntier = Math.floor(movementX);
    const valeurFlootante = movementX - valeurEntier;
    const restPar7deValeurEntier =
      ((valeurEntier % 7) + refStateNumberPrevious.current) % 7;
    setStateNumber(restPar7deValeurEntier);
    setPercentage(valeurFlootante);
    refStateNumber.current = restPar7deValeurEntier;
    refPercentage.current = valeurFlootante;

    const diffPrevNext = movementX - refPreviousPosX.current;
    refPreviousPosX.current = movementX;
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
        refStateNumberPrevious.current =
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
    console.log("");
    const handlepointerMove = makeHandlepointerMove(e.clientX, images.length);
    setMouseDown(true);
    document.addEventListener("pointermove", handlepointerMove);
    document.addEventListener(
      "pointerup",
      () => {
        const newStateNumber =
          refDirectiobOfmouvement.current === "right"
            ? Math.round(refStateNumber.current + refPercentage.current)
            : (arrayAllNumberState.at(
                Math.round(refStateNumber.current - refPercentage.current)
              ) as number);
        if (newStateNumber !== refStateNumber.current) {
          if (refDirectiobOfmouvement.current !== "right") {
            setIndexImageLoadRight(
              (prev) => Math.round(prev + 1) % numberImage
            );
            setIndexImageLoadLeft((prev) => Math.round(prev + 1) % numberImage);
          } else {
            setIndexImageLoadRight(
              (prev) => Math.round(prev - 1) % numberImage
            );
            setIndexImageLoadLeft((prev) => Math.round(prev - 1) % numberImage);
          }
        }
        setStateNumber(newStateNumber === 7 ? 0 : newStateNumber);
        refStateNumberPrevious.current =
          newStateNumber === 7 ? 0 : newStateNumber;
        refStateNumber.current = newStateNumber === 7 ? 0 : newStateNumber;
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
    const intPart = (stateNumber + numberOfImage) % 7;
    const transZ =
      refDirectiobOfmouvement.current === "right"
        ? getTranslateZ(intPart, percentage)
        : getTranslateZReverse(intPart, percentage);
    const transX =
      refDirectiobOfmouvement.current === "right"
        ? getTranslateX(intPart, percentage, gapHorizontal)
        : getTranslateXReverse(intPart, percentage, gapHorizontal);
    const zIndex =
      refDirectiobOfmouvement.current === "right"
        ? getZIndex(intPart, percentage)
        : getZIndexReverse(intPart, percentage);
    return {
      transform: `perspective(300px) translateZ(${transZ}px)  translateX(${transX}px)`,
      zIndex: zIndex,
      transition: mouseDown ? undefined : "0.5s",
    };
  };

  // React.useEffect(() => {
  //   console.log("indexImageLoadRight", indexImageLoadRight);
  //   console.log("indexImageLoadLeft", indexImageLoadLeft);
  // }, [indexImageLoadLeft, indexImageLoadRight]);

  const gapHorizontal = width / getGapHorizontal(typeGapHorizontal);
  const spacebetweenRow = getGapVertical(typeGapVertical);
  const contenairWidth = 3 * width;

  const getIndexImage = (
    indexImageLoadLeft: number,
    indexImageLoadRight: number,
    stateNumber: number,
    numberImage: number
  ) => {
    switch (stateNumber) {
      case 0:
        return (indexImageLoadRight - 3) % numberImage;
      case 1:
        return (indexImageLoadRight - 2) % numberImage;
      case 2:
        return (indexImageLoadRight - 1) % numberImage;
      case 3:
        return indexImageLoadRight;
      case 4:
        return indexImageLoadLeft;
      case 5:
        return (indexImageLoadLeft + 1) % numberImage;
      case 6:
        return (indexImageLoadLeft + 2) % numberImage;

      default:
        return 0;
    }
  };

  const handleClickButtonRight = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndexImageLoadRight((prev) => Math.round(prev + 1) % numberImage);
    setIndexImageLoadLeft((prev) => Math.round(prev + 1) % numberImage);
    setStateNumber(
      (previousState) =>
        arrayAllNumberState.at(previousState - (1 % 7)) as number
    );
    setPercentage(0);
    setMouseDown(false);
  };

  const handleClickButtonLeft = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndexImageLoadRight((prev) => Math.round(prev - 1) % numberImage);
    setIndexImageLoadLeft((prev) => Math.round(prev - 1) % numberImage);
    setStateNumber((previousState) =>
      previousState + 1 === 7 ? 0 : previousState + 1
    );
    setPercentage(0);
    setMouseDown(false);
  };

  return (
    <div
      id="carroussel"
      className={clsx("relative", "cursor-grab")}
      style={{
        height: `${height + 100}px`,
        width: "auto",
        // width: `${contenairWidth}px`,
        // backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPointerDown={handlePointerDown}
      onTouchStart={handleTouchStart}
    >
      <ButtonCarrousel
        width={20}
        height={20}
        onClick={handleClickButtonRight}
        color={color}
      />
      <ButtonCarrousel
        width={20}
        height={20}
        reverse
        onClick={handleClickButtonLeft}
        color={color}
      />
      <div
        id="contenair-image-0"
        className={clsx("bg-red-800", "absolute", "shadow-all")}
        style={{
          ...getStyle(stateNumber, percentage, 0, width),
          height: height,
          width: width,
          cursor: stateNumber === 0 ? "pointer" : "grab",
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={getIndexImage(
            indexImageLoadLeft,
            indexImageLoadRight,
            stateNumber,
            numberImage
          )}
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
        className={clsx("bg-green-800", "absolute", "shadow-all")}
        style={{
          ...getStyle(stateNumber, percentage, 1, width),
          height: height,
          width: width,
          cursor: (stateNumber + 1) % 7 === 0 ? "pointer" : "grab",
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={getIndexImage(
            indexImageLoadLeft,
            indexImageLoadRight,
            (stateNumber + 1) % 7,
            numberImage
          )}
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
        className={clsx("bg-secondary", "absolute", "shadow-all")}
        style={{
          ...getStyle(stateNumber, percentage, 2, width),
          height: height,
          width: width,
          cursor: (stateNumber + 2) % 7 === 0 ? "pointer" : "grab",
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={getIndexImage(
            indexImageLoadLeft,
            indexImageLoadRight,
            (stateNumber + 2) % 7,
            numberImage
          )}
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
      </div>
      <div
        id="contenair-image-3"
        className={clsx("bg-yellow-700", "absolute", "shadow-all")}
        style={{
          ...getStyle(stateNumber, percentage, 3, width),
          height: height,
          width: width,
          cursor: (stateNumber + 3) % 7 === 0 ? "pointer" : "grab",
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={getIndexImage(
            indexImageLoadLeft,
            indexImageLoadRight,
            (stateNumber + 3) % 7,
            numberImage
          )}
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
          3eme
        </div>
      </div>
      <div
        id="contenair-image-4"
        className={clsx("bg-sky-700", "absolute", "shadow-all")}
        style={{
          ...getStyle(stateNumber, percentage, 4, width),
          height: height,
          width: width,
          cursor: (stateNumber + 4) % 7 === 0 ? "pointer" : "grab",
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={getIndexImage(
            indexImageLoadLeft,
            indexImageLoadRight,
            (stateNumber + 4) % 7,
            numberImage
          )}
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
          4eme
        </div>
      </div>
      <div
        id="contenair-image-5"
        className={clsx("bg-purple-700", "absolute", "shadow-all")}
        style={{
          ...getStyle(stateNumber, percentage, 5, width),
          height: height,
          width: width,
          cursor: (stateNumber + 5) % 7 === 0 ? "pointer" : "grab",
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={getIndexImage(
            indexImageLoadLeft,
            indexImageLoadRight,
            (stateNumber + 5) % 7,
            numberImage
          )}
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
      </div>
      <div
        id="contenair-image-6"
        className={clsx("bg-indigo-900", "absolute", "shadow-all")}
        style={{
          ...getStyle(stateNumber, percentage, 6, width),
          height: height,
          width: width,
          cursor: (stateNumber + 6) % 7 === 0 ? "pointer" : "grab",
        }}
      >
        <WrapperComponent
          Component={Component}
          images={images}
          indexImage={getIndexImage(
            indexImageLoadLeft,
            indexImageLoadRight,
            (stateNumber + 6) % 7,
            numberImage
          )}
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
      </div>
    </div>
  );
};

type WrapperComponentProps = {
  Component: ImageComponent;
  images: Images;
  indexImage: number;
};

const WrapperComponent: React.FC<WrapperComponentProps> = React.memo(
  ({ Component, images, indexImage }) => {
    return (
      <Component
        src={images.at(indexImage)}
        alt="image 0"
        fill
      />
    );
  },
  (prevProps, nextProps) => {
    return prevProps.indexImage === nextProps.indexImage;
  }
);
