import Image from "next/image";
import Link from "next/link";
import React from "react";
import { product_card } from "../data/product_data";

function Cat_bowl({ isCat_bowlOpen }) {
  const rItem = product_card.filter(
    (item) => item.category === "Bowls & Plates"
  );
  const gItem = rItem.map((item) => (
    <div key={item.id} className="p-5">
      <div className="flex flex-col w-36 text-sm text-center">
        <Link href={`/product/${item.id}`}>
          <a>
            <Image
              className="object-contain rounded-2xl"
              src={item.thumb}
              alt={item.product_name}
              width={144}
              height={144}
              layout="fixed"
            ></Image>
            <p>{item.product_name}</p>
          </a>
        </Link>
      </div>
    </div>
  ));
  return (
    <div className={isCat_bowlOpen ? "flex justify-center" : "hidden"}>
      <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-5">
        {gItem}
      </div>
    </div>
  );
}
export default Cat_bowl;
