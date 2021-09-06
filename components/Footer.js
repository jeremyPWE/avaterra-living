import Image from "next/image";
import Link from "next/link";

const Footer = ({ isFoot1Open, isFoot2Open, toggleFoot1, toggleFoot2 }) => {
  return (
    <div className="pt-14">
      <ul className="md:hidden">
        <li>
          <div
            className="py-3 px-5 hover:bg-white-Default border-b border-t border-brown-Default flex justify-between items-center"
            onClick={toggleFoot1}
          >
            Other Link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <ul className={isFoot1Open ? "bg-white-Default" : "hidden"}>
              <li>
                <a
                  className="block p-3 pl-8 border-b border-brown-Default"
                  href="https://www.instagram.com/avaterraliving/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div
            className="py-3 px-5 hover:bg-white-Default border-b border-brown-Default flex justify-between items-center"
            onClick={toggleFoot2}
          >
            Collections
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <ul className={isFoot2Open ? "bg-white-Default" : "hidden"}>
              <li>
                <Link href="/categories/bowls-plates">
                  <a className="block p-3 pl-8 border-b border-brown-Default">
                    Bowls & Plates
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories/cutleries">
                  <a className="block p-3 pl-8 border-b border-brown-Default">
                    Cutleries
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories/utensils">
                  <a className="block p-3 pl-8 border-b border-brown-Default">
                    Utensils
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories/dining-essentials">
                  <a className="block p-3 pl-8 border-b border-brown-Default">
                    Dining Essentials
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/categories/board">
                  <a className="block p-3 pl-8 border-b border-brown-Default">
                    Board
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/about">
            <a className="block py-3 px-5 hover:bg-white-Default border-b border-brown-Default">
              About us
            </a>
          </Link>
        </li>
      </ul>
      <div className="hidden md:block border-t-2 border-brown-Default">
        <div className="flex justify-between px-12 py-5 xl:px-32">
          <div>
            <Link href="/">
              <Image
                className="object-contain cursor-pointer"
                src="/images/avaterra-logo.png"
                alt="avaterra-logo"
                width={160}
                height={80}
                layout="fixed"
              />
            </Link>
          </div>
          <div>
            <ul className="flex">
              <li>
                <div className="px-10 xl:px-20 font-semibold">Other Link</div>
                <div>
                  <ul className="px-10 xl:px-20">
                    <li className="pt-1">
                      <a
                        href="https://www.instagram.com/avaterraliving/"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="px-10 xl:px-20 font-semibold">Collections</div>
                <div>
                  <ul className="px-10 xl:px-20">
                    <li className="pt-1">
                      <Link href="/categories/bowls-plates">
                        <a>Bowls & Plates</a>
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="/categories/cutleries">
                        <a>Cutleries</a>
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="/categories/utensils">
                        <a>Utensils</a>
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="/categories/dining-essentials">
                        <a>Dining Essentials</a>
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="/categories/board">
                        <a>Board</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="px-10 xl:pl-20 font-semibold">
                  Customer Care
                </div>
                <div>
                  <ul className="px-10 xl:pl-20">
                    <li className="pt-1">
                      <Link href="/about">
                        <a>About us</a>
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link href="/#contact">
                        <a>Contact us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="md:hidden">
          <Link href="/">
            <Image
              className="object-contain cursor-pointer"
              src="/images/avaterra-logo.png"
              alt="avaterra-logo"
              width={160}
              height={80}
              layout="fixed"
            />
          </Link>
        </div>

        <div className="bg-obrown-Default p-5 text-white-Default text-xs w-full items-center">
          <div className="flex justify-center">
            All rights Reserved © AVATERRA LIVING, 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
