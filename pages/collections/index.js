import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Collectionbanner from "../../components/Collectionbanner";
import { useState } from "react";
import Categorybar from "../../components/Categorybar";
import Item from "../../components/Item";

function Collections({
  toggleCat_board,
  toggleCat_bowl,
  toggleCat_cut,
  toggleCat_din,
  toggleCat_uten,
  isCat_boardOpen,
  isCat_bowlOpen,
  isCat_cutOpen,
  isCat_dinOpen,
  isCat_utenOpen,
}) {
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

  return (
    <div>
      <Head>
        <title>Avaterra Living</title>
        <meta name="description" content="Avaterra Living" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <Collectionbanner />
      <Categorybar
        isCatOpen={isCatOpen}
        toggleCat={toggleCat}
        toggleCat_board={toggleCat_board}
        toggleCat_bowl={toggleCat_bowl}
        toggleCat_cut={toggleCat_cut}
        toggleCat_din={toggleCat_din}
        toggleCat_uten={toggleCat_uten}
      />
      <Item
        isCat_boardOpen={isCat_boardOpen}
        isCat_bowlOpen={isCat_bowlOpen}
        isCat_cutOpen={isCat_cutOpen}
        isCat_dinOpen={isCat_dinOpen}
        isCat_utenOpen={isCat_utenOpen}
      />
      <Footer
        isFoot1Open={isFoot1Open}
        toggleFoot1={toggleFoot1}
        isFoot2Open={isFoot2Open}
        toggleFoot2={toggleFoot2}
      />
    </div>
  );
}

export default Collections;
