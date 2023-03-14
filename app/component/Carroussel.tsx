"use client";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";
import * as React from "react";
import { ButtonCarrousel } from "./ButtonCarroussel";
import { useGap } from "../utils/useGap";
import { usePointerHandler } from "../utils/usePointerHandler";
import { getStyle } from "../utils/getStyleCarroussel";
import { getIndexImage } from "../utils/getIndexImageCarroussel";

const pasVariable = 0.0125;

type TypeGapHorizontal = 1 | 2 | 3 | 4 | 5;
type TypeGapVertical = 1 | 2 | 3 | 4 | 5;
type ImageComponent = React.FC<{ src: any; alt: string; fill?: boolean }>;
export type Images = StaticImageData[] | string[];

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
  const arrayForMap = React.useRef(new Array(7).fill(null));
  const { gapHorizontal, spacebetweenRow } = useGap(
    typeGapHorizontal,
    typeGapVertical,
    width
  );

  const {
    numberImage,
    stateNumber,
    percentage,
    mouseDown,
    indexImageLoadRight,
    indexImageLoadLeft,
    directiobOfmouvement,
    handleDownButton,
    handleUpButtonRight,
    handleUpButtonLeft,
    handlePointerDown,
  } = usePointerHandler(images, pasVariable);

  return (
    <div
      className={clsx("relative", "cursor-grab", "touch-none")}
      style={{
        height: `${height + 100}px`,
        width: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ButtonCarrousel
        width={20}
        height={20}
        onPointerDown={handleDownButton}
        onPointerUp={handleUpButtonRight}
        color={color}
      />
      <ButtonCarrousel
        width={20}
        height={20}
        reverse
        onPointerDown={handleDownButton}
        onPointerUp={handleUpButtonLeft}
        color={color}
      />
      <div
        id="carroussel"
        className={clsx("relative", "cursor-grab")}
        style={{
          height: `${height + 100}px`,
          width: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPointerDown={handlePointerDown}
      >
        {arrayForMap.current.map((item, index) => {
          return (
            <div
              key={index.toString()}
              className={clsx("absolute", "cursor-grab")}
              style={{
                ...getStyle(
                  stateNumber,
                  percentage,
                  index,
                  mouseDown,
                  spacebetweenRow,
                  gapHorizontal,
                  directiobOfmouvement
                ),
                height: height,
                width: width,
                boxShadow: `0px 0px 10px 3px ${color}`,
              }}
            >
              <WrapperComponent
                Component={Component}
                images={images}
                indexImage={getIndexImage(
                  indexImageLoadLeft,
                  indexImageLoadRight,
                  (stateNumber + index) % 7,
                  numberImage
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

type WrapperComponentProps = {
  Component: ImageComponent;
  images: Images;
  indexImage: number;
};

// eslint-disable-next-line react/display-name
const WrapperComponent: React.FC<WrapperComponentProps> = React.memo(
  ({ Component, images, indexImage }) => {
    return (
      <Component
        src={images.at(indexImage)}
        alt={`images${indexImage}`}
        fill
      />
    );
  },
  (prevProps, nextProps) => {
    return prevProps.indexImage === nextProps.indexImage;
  }
);
