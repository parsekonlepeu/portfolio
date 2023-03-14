"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import logoP from "../../public/logoP.png";
import { useVisible } from "../utils/useVisible";

const style = {
  header: clsx(
    "fixed",
    "flex h-16",
    "top-0",
    "left-0",
    "right-3",
    "justify-between",
    "items-center",
    "flex-row",
    "bg-primary",
    "pr-14",
    "pl-14",
    "forAbout:pr-4",
    "forAbout:pl-4",
    "bg-primary",
    "z-50"
  ),
  nav: clsx(
    "flex",
    "h-16",
    "bg-primary",
    "justify-end",
    "items-center",
    "flex-row",
    "pr-4"
  ),
  link: clsx(
    "font-bold",
    "before:mr-1",
    "before:text-secondary",
    "before:font-mono",
    "text-textLigth",
    "text-sm",
    "font-mono",
    "hover:text-secondary"
  ),
  linkVertical: clsx(
    "font-bold",
    "before:mr-1",
    "before:text-secondary",
    "before:font-mono",
    "text-textLigth",
    "text-sm",
    "font-mono",
    "hover:text-secondary"
  ),
};

const animateline = clsx(
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
  ["not:hover:after:scale-x-0"]
);

export const NavBar: React.FC = () => {
  const { visible } = useVisible();
  const [navBarVisible, setNavBarVisible] = React.useState(true);
  const refLastTouch = React.useRef<TouchList | null>(null);
  const refASideOpen = React.useRef(false);
  React.useEffect(() => {
    const contenair = document.getElementById("contenair");
    const handleWheel = (e: WheelEvent) => {
      if (!refASideOpen.current) {
        if (e.deltaY > 0) {
          setNavBarVisible(false);
        } else {
          setNavBarVisible(true);
        }
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!refASideOpen.current) {
        if (refLastTouch.current) {
          const diff = e.touches[0].clientY - refLastTouch.current[0].clientY;
          if (diff > 0) {
            setNavBarVisible(true);
          } else if (diff < 0) {
            setNavBarVisible(false);
          }
        }
        refLastTouch.current = e.touches;
      }
    };
    contenair?.addEventListener("wheel", handleWheel);
    contenair?.addEventListener("touchmove", handleTouchMove);
    return () => {
      contenair?.removeEventListener("wheel", handleWheel);
      contenair?.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
  return (
    <header
      id="header"
      className={style.header}
      style={{
        transform: navBarVisible ? "translateY(0rem)" : "translateY(-4rem)",
        transition: "0.3s",
      }}
    >
      <a
        href="https://portfolio-parsekonlepeu.vercel.app/"
        className={clsx("h-10", "w-10", "relative")}
      >
        <Image
          src={logoP}
          alt="logo"
          fill
        />
      </a>
      {visible ? (
        <MenuLargeScreen direction="horizontal" />
      ) : (
        <MenuSmallScreen refASideOpen={refASideOpen} />
      )}
    </header>
  );
};

type MenuLargeScreenProps = {
  direction: "horizontal" | "vertical";
  onClick?: () => void;
};

const MenuLargeScreen: React.FC<MenuLargeScreenProps> = ({
  direction,
  onClick,
}) => {
  return (
    <nav
      className={style.nav}
      style={{
        flexDirection: direction === "horizontal" ? "row" : "column",
        height: direction === "horizontal" ? "4rem" : "auto",
        paddingRight: direction === "horizontal" ? "1rem" : "0rem",
      }}
    >
      <ol
        className={clsx(
          "flex",
          "bg-primary",
          "justify-end",
          "items-center",
          "flex-row",
          "gap-x-10 "
        )}
        style={{
          flexDirection: direction === "horizontal" ? "row" : "column",
          gap: direction === "horizontal" ? undefined : "25px",
          height: direction === "horizontal" ? "64px" : "100%",
          justifyContent: direction === "horizontal" ? "end" : "center",
        }}
      >
        <li className="relative">
          <a
            className={
              direction === "horizontal"
                ? clsx("before:content-['01.']  ", animateline, style.link)
                : clsx(
                    "before:content-['01.']  ",
                    animateline,
                    style.link,
                    "before:block",
                    "text-center",
                    "text-lg"
                  )
            }
            style={{
              display: direction === "horizontal" ? undefined : "block",
              position: "relative",
            }}
            href="#about"
            onPointerUp={onClick}
          >
            A propos
          </a>
        </li>
        <li className="relative">
          <a
            className={
              direction === "horizontal"
                ? clsx("before:content-['02.']  ", animateline, style.link)
                : clsx(
                    "before:content-['02.']  ",
                    animateline,
                    style.link,
                    "before:block",
                    "text-center",
                    "text-lg"
                  )
            }
            href="#Realisation"
            onPointerUp={onClick}
          >
            Realisation
          </a>
        </li>
        <li className="relative">
          <a
            className={
              direction === "horizontal"
                ? clsx("before:content-['03.']  ", animateline, style.link)
                : clsx(
                    "before:content-['03.']  ",
                    animateline,
                    style.link,
                    "before:block",
                    "text-center",
                    "text-lg"
                  )
            }
            href="#contact"
            onPointerUp={onClick}
          >
            Contact
          </a>
        </li>
      </ol>
      <Link
        href="/cv-dev-2023.pdf"
        target="_blank"
        className={clsx(
          "p-1",
          "pl-2",
          "pr-2",
          "border",
          "border-secondary",
          "rounded-sm",
          "ml-10",
          "hover:bg-hoverSecondary"
        )}
        style={{
          marginLeft: direction === "horizontal" ? "2.5rem" : "0rem",
          marginTop: direction === "horizontal" ? "0rem" : "2.5rem",
        }}
        onPointerUp={onClick}
      >
        <p className={clsx("text-secondary", "font-mono")}>Curriculum Vitae</p>
      </Link>
    </nav>
  );
};

type MenuSmallScreenProps = {
  refASideOpen: React.MutableRefObject<boolean>;
};

const MenuSmallScreen: React.FC<MenuSmallScreenProps> = ({ refASideOpen }) => {
  const [clicked, setClicked] = React.useState(false);
  const handlePointerDown = React.useCallback(() => {
    setClicked((prev) => !prev);
    refASideOpen.current = !clicked;
  }, [clicked]);
  React.useEffect(() => {
    const main = document.getElementById("main");
    const contenair = document.getElementById("contenair");
    if (clicked) {
      if (main && contenair) {
        main.style.filter = "blur(5px) brightness(0.7)";
        main.style["userSelect"] = "none";
        main.style["pointerEvents"] = "none";
        contenair.style.overflowY = "hidden";
      }
    } else {
      if (main && contenair) {
        main.style.filter = "";
        main.style["userSelect"] = "";
        main.style["pointerEvents"] = "";
        contenair.style.overflowY = "scroll";
      }
    }
  }, [clicked]);
  const handleClickButtonMenu = React.useCallback(() => {
    setClicked(false);
  }, []);
  return (
    <div>
      <button
        className={clsx(
          "h-12",
          "w-12",
          "flex",
          "relative",
          "justify-between",
          "items-center",
          "flex-col",
          "pt-2",
          "pb-2",
          "z-20"
        )}
        onPointerDown={handlePointerDown}
      >
        <div
          className={clsx("w-10", "h-0.5", "bg-secondary", "relative")}
          style={{
            transform: clicked
              ? "rotate(45deg) translateX(10px) translateY(10px)"
              : "rotate(0deg)",
            transition: "0.3s",
          }}
        />
        <div
          className={clsx("w-10", "h-0.5", "bg-secondary", "relative")}
          style={{
            opacity: clicked ? 0 : 1,
            transition: "0.3s",
          }}
        />
        <div
          className={clsx("w-10", "h-0.5", "bg-secondary", "relative")}
          style={{
            transform: clicked
              ? "rotate(-45deg) translateX(10px) translateY(-10px)"
              : "rotate(0deg)",
            transition: "0.3s",
          }}
        />
      </button>
      <aside
        className={clsx(
          "flex",
          "items-center",
          "justify-center",
          "fixed",
          "top-0",
          "bottom-0",
          "right-0",
          "h-screen",
          "w-aside",
          "z-10",
          "bg-primary"
        )}
        style={{
          transform: clicked ? "translate(0vw)" : "translate(100vw)",
          transition: "0.3s",
          visibility: clicked ? "visible" : "hidden",
        }}
      >
        <MenuLargeScreen
          direction="vertical"
          onClick={handleClickButtonMenu}
        />
      </aside>
    </div>
  );
};
