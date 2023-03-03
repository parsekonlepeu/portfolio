import clsx from "clsx";
import * as React from "react";

type WrapperAnimProps = {
  startAnim: "left" | "right";
  appeared: boolean;
  classname?: string;
};

export const WrapperAnim: React.FC<
  React.PropsWithChildren<WrapperAnimProps>
> = ({ children, startAnim, appeared, classname }) => {
  return (
    <div
      className={clsx("transition", "duration-700", classname)}
      style={{
        transform: appeared
          ? "translateX(0px)"
          : startAnim === "left"
          ? "translateX(-100px)"
          : "translateX(100px)",
        opacity: appeared ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};
