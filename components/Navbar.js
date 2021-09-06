import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar({ toggle }) {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const toggleSub = () => {
    setIsSubOpen(!isSubOpen);
  };
  return (
    <nav
      className="flex justify-between items-center h-16 sticky top-0 z-30 bg-bwhite-Default"
      role="navigation"
    >
      <div className="flex md:pl-12 xl:pl-32 items-center">
        <Link href="/">
          <Image
            className="object-contain cursor-pointer"
            src="/images/avaterra-logo.png"
            alt="avaterra-logo"
            width={160}
            height={80}
          />
        </Link>
      </div>

      <div
        className="px-4 cursor-pointer md:hidden text-obrown-Default"
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-12 xl:pr-32 md:flex hidden space-x-10 items-center text-obrown-Default">
        <Link className="p-4" href="/">
          Home
        </Link>
        <div
          className="p-4 relative cursor-default"
          onMouseEnter={toggleSub}
          onMouseLeave={toggleSub}
        >
          Collections
          <div
            className={
              isSubOpen
                ? "bg-bwhite-Default absolute top-14 -left-4 w-36"
                : "hidden"
            }
            onClick={toggleSub}
          >
            <ul>
              <li>
                <Link href="/categories/bowls-plates">
                  <a className="block p-3">Bowls & Plates</a>
                </Link>
              </li>
              <li>
                <Link href={"/categories/cutleries"}>
                  <a className="block p-3">Cutleries</a>
                </Link>
              </li>
              <li>
                <Link href="/categories/utensils">
                  <a className="block p-3">Utensils</a>
                </Link>
              </li>
              <li>
                <Link href="/categories/dining-essentials">
                  <a className="block p-3">Dining Essentials</a>
                </Link>
              </li>
              <li>
                <Link href="/categories/board">
                  <a className="block p-3">Board</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link className="p-4" href="/about">
          About us
        </Link>
        <Link className="p-4" href="/#contact">
          Contact us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
