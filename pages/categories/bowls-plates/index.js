import Head from "next/head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Sidebar from "../../../components/Sidebar";
import Collectionbanner from "../../../components/Collectionbanner";
import { useState } from "react";
import Categorybar from "../../../components/Categorybar";
import Item from "../../../components/Item";

function Bowls_plates() {
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
  const [isCatOpen, setIsCatOpen] = useState(false);
  const toggleCat = () => {
    setIsCatOpen(!isCatOpen);
  };
  const [isCat_boardOpen, setIsCat_boardOpen] = useState(false);
  const toggleCat_board = () => {
    setIsCat_utenOpen(false);
    setIsCat_dinOpen(false);
    setIsCat_cutOpen(false);
    setIsCat_bowlOpen(false);
    setIsCat_boardOpen(true);
  };
  const [isCat_bowlOpen, setIsCat_bowlOpen] = useState(true);
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
        />
        <Collectionbanner />
        <div className="xl:flex xl:gap-14 xl:justify-center xl:px-48 xl:pt-10">
          <Categorybar
            isCatOpen={isCatOpen}
            toggleCat={toggleCat}
            toggleCat_board={toggleCat_board}
            toggleCat_bowl={toggleCat_bowl}
            toggleCat_cut={toggleCat_cut}
            toggleCat_din={toggleCat_din}
            toggleCat_uten={toggleCat_uten}
            isCat_boardOpen={isCat_boardOpen}
            isCat_bowlOpen={isCat_bowlOpen}
            isCat_cutOpen={isCat_cutOpen}
            isCat_dinOpen={isCat_dinOpen}
            isCat_utenOpen={isCat_utenOpen}
          />
          <Item
            isCat_boardOpen={isCat_boardOpen}
            isCat_bowlOpen={isCat_bowlOpen}
            isCat_cutOpen={isCat_cutOpen}
            isCat_dinOpen={isCat_dinOpen}
            isCat_utenOpen={isCat_utenOpen}
          />
        </div>
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

export default Bowls_plates;
