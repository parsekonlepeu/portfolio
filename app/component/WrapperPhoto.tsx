import clsx from "clsx";
import * as React from "react";

export const WrapperPhoto: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isIn, setIsIn] = React.useState(false);
  const handleEnter = React.useCallback(() => {
    setIsIn(true);
  }, []);
  const handleLeave = React.useCallback(() => {
    setIsIn(false);
  }, []);
  return (
    <div
      className={clsx(
        "flex-1",
        "relative",
        "block",
        "z-20",
        "rounded-md",
        "bg-secondary",
        [
          "before:content-['']",
          "before:bg-transparent",
          "before:mix-blend-screen",
          "before:w-full",
          "before:h-full",
          "before:top-0",
          "before:left-0",
          "before:absolute",
        ]
      )}
    >
      <div
        className={clsx(
          "absolute",
          "top-6",
          "left-6",
          "w-full",
          "h-full",
          "border-2",
          "rounded-md",
          "-z-10",
          "border-secondary"
        )}
        style={{
          transform: isIn
            ? "translateX(-10px) translateY(-10px)"
            : "translateX(0px) translateY(0px)",
          transition: "0.250s",
        }}
      />
      <div
        className={clsx(
          "mix-blend-multiply",
          "contrast-100",
          "grayscale",
          "hover:grayscale-0",
          "hover:mix-blend-normal",
          "h-full",
          "w-full"
        )}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {children}
      </div>
    </div>
  );
};
