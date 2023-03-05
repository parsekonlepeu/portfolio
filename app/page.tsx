import * as React from "react";
import Image from "next/image";
import agenda from "../public/agenda.jpg";

import "../styles/globals.css";
import { Header } from "./component/Header";
import clsx from "clsx";
import { Home } from "./component/Home";
import { NetworkLink } from "./component/NetworkLink";
import { EmailLink } from "./component/EmailLink";
import { About } from "./component/About";
import Link from "next/link";
import { Realisation } from "./component/Realisation";

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

const style = {
  contenair: clsx(
    "absolute",
    "top-0",
    "left-0",
    "bottom-0",
    "right-0",
    "overflow-y-scroll",
    "bg-primary",
    "overflow-x-hidden"
  ),
  header: clsx(
    "fixed",
    "flex h-16",
    "top-0",
    "left-0",
    "right-3",
    "justify-end",
    "items-center",
    "flex-row",
    "bg-primary",
    "pr-8"
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
    "before:mr-1",
    "before:text-secondary",
    "before:font-mono",
    "text-textLigth",
    "text-sm",
    "font-serif",
    "hover:text-secondary"
  ),
  sectionBase: clsx(
    "w-screen",
    "bg-primary",
    "justify-center",
    "items-center",
    "flex",
    "bg-lime-800"
  ),
};

const Main: React.FC = () => {
  return (
    <div
      className={style.contenair}
      id="contenair"
    >
      <Header />
      <NetworkLink />
      <EmailLink />
      <header
        id="header"
        className={style.header}
      >
        <nav className={style.nav}>
          <ol className="flex h-16 bg-primary justify-end items-center flex-row gap-x-10 ">
            <li className="relative">
              <a
                className={clsx(
                  "before:content-['01.']  ",
                  animateline,
                  style.link
                )}
                href="#about"
              >
                A propos
              </a>
            </li>
            <li className="relative">
              <a
                className={clsx(
                  "before:content-['02.']",
                  animateline,
                  style.link
                )}
                href="#Realisation"
              >
                Realisation
              </a>
            </li>
            <li className="relative">
              <a
                className={clsx(
                  "before:content-['04.']",
                  animateline,
                  style.link
                )}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ol>
          <Link
            href="/cv-dev-2023.pdf"
            target="_blank"
          >
            <p>Mon CV</p>
          </Link>
        </nav>
      </header>
      <main
        id="main"
        className="pt-16 flex flex-col pb-96"
      >
        <section
          id="home"
          className={clsx(style.sectionBase, "h-screen")}
        >
          <Home />
        </section>
        <section
          id="about"
          className={clsx(style.sectionBase)}
        >
          <About />
        </section>
        <section
          id="Realisation"
          className={clsx(
            style.sectionBase,
            "mt-24",
            "justify-end",
            "items-end"
          )}
        >
          <Realisation />
        </section>
        <section
          id="contact"
          className={clsx(style.sectionBase)}
        >
          contact
        </section>
      </main>
    </div>
  );
};

export default Main;
