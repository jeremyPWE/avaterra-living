import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { product_card } from "../../data/product_data";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Collectionbanner from "../../components/Collectionbanner";

function one() {
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
  const [isThumb, setIsThumb] = useState(true);
  const [isPic1, setIsPic1] = useState(false);
  const [isPic2, setIsPic2] = useState(false);
  const toggleT = () => {
    setIsThumb(true);
    setIsPic1(false);
    setIsPic2(false);
  };
  const toggleP1 = () => {
    setIsThumb(false);
    setIsPic1(true);
    setIsPic2(false);
  };
  const toggleP2 = () => {
    setIsThumb(false);
    setIsPic1(false);
    setIsPic2(true);
  };

  const rItem = product_card.filter((item) => item.id === 21);
  const gItem = rItem.map((item) => (
    <div key={item.id} className="p-5">
      <div className="flex flex-col text-sm text-center w-72 md:hidden">
        <p className="text-xl">{item.product_name}</p>
        <div className="py-5">
          <div>
            <div
              className={
                isThumb ? "h-72 w-72 xl:h-80 xl:w-80 relative" : "hidden"
              }
            >
              <Image
                className="object-contain rounded-2xl"
                src={item.thumb}
                alt={item.product_name}
                layout="fill"
              ></Image>
            </div>
            <div
              className={
                isPic1 ? "h-72 w-72 xl:h-80 xl:w-80 relative" : "hidden"
              }
            >
              <Image
                className="object-contain rounded-2xl"
                src={item.pic1}
                alt={item.product_name}
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="grid grid-cols-3 py-5">
            <div onClick={toggleT} className="cursor-pointer">
              <div
                className={
                  isThumb
                    ? "shadow-md rounded-2xl w-20 h-20 relative"
                    : " rounded-2xl w-20 h-20 relative"
                }
              >
                <Image
                  className={"object-contain rounded-2xl"}
                  src={item.thumb}
                  alt={item.product_name}
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div onClick={toggleP1} className="cursor-pointer">
              <div
                className={
                  isPic1
                    ? "shadow-md rounded-2xl w-20 h-20 relative"
                    : "rounded-2xl w-20 h-20 relative"
                }
              >
                <Image
                  className="object-contain rounded-2xl"
                  src={item.pic1}
                  alt={item.product_name}
                  layout="fill"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg">
          <p className="underline">Specifications</p>
          <div className="text-left py-2 grid grid-cols-3 gap-1">
            <p>Material:</p>
            <p className="col-span-2">{item.material}</p>
            <p>Length:</p>
            <p className="col-span-2">{item.length}</p>
            <p>Width:</p>
            <p className="col-span-2">{item.width}</p>
          </div>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-2 gap-14">
        <div>
          <div>
            <div className={isThumb ? "h-80 w-80 relative" : "hidden"}>
              <Image
                className="object-contain rounded-2xl"
                src={item.thumb}
                alt={item.product_name}
                layout="fill"
              ></Image>
            </div>
            <div className={isPic1 ? "h-80 w-80 relative" : "hidden"}>
              <Image
                className="object-contain rounded-2xl"
                src={item.pic1}
                alt={item.product_name}
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="grid grid-cols-3 py-5 w-80">
            <div onClick={toggleT} className="cursor-pointer">
              <div
                className={
                  isThumb
                    ? "shadow-md rounded-2xl w-20 h-20 relative"
                    : " rounded-2xl w-20 h-20 relative"
                }
              >
                <Image
                  className={"object-contain rounded-2xl"}
                  src={item.thumb}
                  alt={item.product_name}
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div onClick={toggleP1} className="cursor-pointer">
              <div
                className={
                  isPic1
                    ? "shadow-md rounded-2xl w-20 h-20 relative"
                    : "rounded-2xl w-20 h-20 relative"
                }
              >
                <Image
                  className="object-contain rounded-2xl"
                  src={item.pic1}
                  alt={item.product_name}
                  layout="fill"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <h2 className="text-xl">{item.product_name}</h2>
          <div className="text-lg pt-5">
            <p className="underline">Specifications</p>
            <div className="text-left py-2 grid grid-cols-3 gap-1">
              <p>Material:</p>
              <p className="col-span-2">{item.material}</p>
              <p>Length:</p>
              <p className="col-span-2">{item.length}</p>
              <p>Width:</p>
              <p className="col-span-2">{item.width}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Avaterra Living</title>
        <meta name="description" content="Avaterra Living Product Page" />
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
        <div className="flex justify-center md:pt-10">{gItem}</div>
        <p className="flex self-center text-xs pt-5 text-left w-80 md:w-1/2">
          *The product images shown are for illustration purposes only and may
          not be an exact representation of the product due to the handmade and
          natural. We cannot guaranteed the natural wood grains will be the same
          when you received Avaterra Living reserves the right to change product
          images and specifications at any time without notice
        </p>
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
export default one;
