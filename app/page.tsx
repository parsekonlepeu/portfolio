import * as React from "react";
import Image from "next/image";
import agenda from "../public/agenda.jpg";

import "../styles/globals.css";
import { Header } from "./component/Header";
import clsx from "clsx";

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
    "h-screen w-screen",
    "absolute",
    "top-0",
    "left-0",
    "overflow-y-scroll",
    "bg-primary",
    "overflow-x-hidden"
  ),
  header: clsx(
    "fixed",
    "flex h-16",
    "w-screen",
    "top-0",
    "justify-end",
    "items-center",
    "flex-row",
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
    "before:mr-2",
    "before:text-secondary",
    "before:font-mono",
    "text-text",
    "font-serif",
    "hover:text-secondary"
  ),
};

const Home: React.FC = () => {
  return (
    <div
      className={style.contenair}
      id="contenair"
    >
      <Header />
      <header
        id="header"
        className={style.header}
      >
        <nav className={style.nav}>
          <ol className="flex h-16 bg-primary justify-end items-center flex-row gap-x-6 ">
            <li className="relative">
              <a
                className={clsx(
                  "before:content-['01.']  ",
                  animateline,
                  style.link
                )}
                href="#about"
              >
                about
              </a>
            </li>
            <li className="relative">
              <a
                className={clsx(
                  "before:content-['02.']",
                  animateline,
                  style.link
                )}
                href="#project"
              >
                project
              </a>
            </li>
            <li className="relative">
              <a
                className={clsx(
                  "before:content-['03.']",
                  animateline,
                  style.link
                )}
                href="#jobs"
              >
                jobs
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
                contact
              </a>
            </li>
          </ol>
        </nav>
      </header>
      <main
        id="main"
        className="pt-16"
      >
        <section
          id="about"
          className="h-screen bg-primary justify-center items-center flex"
        >
          <Image
            height={400}
            src={agenda}
            alt="essai"
          />
        </section>
        <section
          id="project"
          className="h-screen bg-primary"
        >
          work
        </section>
        <section
          id="jobs"
          className="h-screen bg-primary"
        >
          experience
        </section>
        <section
          id="contact"
          className="h-screen bg-primary"
        >
          contact
        </section>
      </main>
    </div>
  );
};

export default Home;
