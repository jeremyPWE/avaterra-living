import Head from "next/head";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Misi from "../components/Misi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import React from "react";
import Showcase from "../components/Showcase";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isSubOpen, setIsSubOpen] = useState(false);
  const toggleSub = () => {
    setIsSubOpen(!isSubOpen);
  };
  const [isFoot1Open, setIsFoot1Open] = useState(false);
  const toggleFoot1 = () => {
    setIsFoot1Open(!isFoot1Open);
  };
  const [isFoot2Open, setIsFoot2Open] = useState(false);
  const toggleFoot2 = () => {
    setIsFoot2Open(!isFoot2Open);
  };

  const [isCat_boardOpen, setIsCat_boardOpen] = useState(false);
  const toggleCat_board = () => {
    setIsCat_utenOpen(false);
    setIsCat_dinOpen(false);
    setIsCat_cutOpen(false);
    setIsCat_bowlOpen(false);
    setIsCat_boardOpen(true);
  };
  const [isCat_bowlOpen, setIsCat_bowlOpen] = useState(false);
  const toggleCat_bowl = () => {
    setIsCat_utenOpen(false);
    setIsCat_dinOpen(false);
    setIsCat_cutOpen(false);
    setIsCat_bowlOpen(true);
    setIsCat_boardOpen(false);
  };
  const [isCat_cutOpen, setIsCat_cutOpen] = useState(false);
  const toggleCat_cut = () => {
    setIsCat_utenOpen(false);
    setIsCat_dinOpen(false);
    setIsCat_cutOpen(true);
    setIsCat_bowlOpen(false);
    setIsCat_boardOpen(false);
  };
  const [isCat_dinOpen, setIsCat_dinOpen] = useState(false);
  const toggleCat_din = () => {
    setIsCat_utenOpen(false);
    setIsCat_dinOpen(true);
    setIsCat_cutOpen(false);
    setIsCat_bowlOpen(false);
    setIsCat_boardOpen(false);
  };
  const [isCat_utenOpen, setIsCat_utenOpen] = useState(false);
  const toggleCat_uten = () => {
    setIsCat_utenOpen(true);
    setIsCat_dinOpen(false);
    setIsCat_cutOpen(false);
    setIsCat_bowlOpen(false);
    setIsCat_boardOpen(false);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Avaterra Living</title>
        <meta name="description" content="Avaterra Living" />
        <link rel="icon" href="/images/avaterra-icon.png" />
      </Head>
      <div className="flex flex-col flex-grow">
        <Navbar toggle={toggle} />
        <Sidebar
          isOpen={isOpen}
          toggle={toggle}
          isSubOpen={isSubOpen}
          toggleSub={toggleSub}
          toggleCat_board={toggleCat_board}
          toggleCat_bowl={toggleCat_bowl}
          toggleCat_cut={toggleCat_cut}
          toggleCat_din={toggleCat_din}
          toggleCat_uten={toggleCat_uten}
        />
        <Hero />
        <Showcase />
        <Banner />
        <Misi />
        <Contact />
      </div>

      <Footer
        isFoot1Open={isFoot1Open}
        toggleFoot1={toggleFoot1}
        isFoot2Open={isFoot2Open}
        toggleFoot2={toggleFoot2}
      />
    </div>
  );
}
