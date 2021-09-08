import Image from "next/image";
import Link from "next/link";
import React from "react";
import { product_card } from "../data/product_data";

function Cat_din({ isCat_dinOpen }) {
  const rItem = product_card.filter(
    (item) => item.category === "Dining Essentials"
  );
  const gItem = rItem.map((item) => (
    <div key={item.id} className="p-3 md:p-5 ">
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
    <div className={isCat_dinOpen ? "flex justify-center" : "hidden"}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-5">
        {gItem}
      </div>
    </div>
  );
}
export default Cat_din;
