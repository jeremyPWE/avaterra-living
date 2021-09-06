import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
  isSubOpen,
  toggleSub,
  toggleCat_board,
  toggleCat_bowl,
  toggleCat_cut,
  toggleCat_din,
  toggleCat_uten,
}) => {
  return (
    <div className="sticky top-0 z-30 md:hidden">
      <div
        className={
          isOpen ? "absolute top-0 right-0 h-screen w-full z-30 " : "hidden"
        }
      >
        <div className="absolute top-0 right-0 z-30 w-3/5 h-full bg-bwhite-Default ">
          <ul>
            <li>
              <Link href="/">
                <a className="block hover:bg-white-Default p-3 border-b border-t border-brown-Default">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <div
                className="p-3 hover:bg-white-Default border-b border-brown-Default flex justify-between items-center"
                onClick={toggleSub}
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
              <div
                className={isSubOpen ? "bg-white-Default" : "hidden"}
                onClick={toggle}
              >
                <ul>
                  <li>
                    <Link href="/categories/bowls-plates">
                      <a className="block p-3 pl-8 hover:bg-white-Default border-b border-brown-Default">
                        Bowls & Plates
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/categories/cutleries"}>
                      <a className="block p-3 pl-8 hover:bg-white-Default border-b border-brown-Default">
                        Cutleries
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/utensils">
                      <a className="block p-3 pl-8 hover:bg-white-Default border-b border-brown-Default">
                        Utensils
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/dining-essentials">
                      <a className="block p-3 pl-8 hover:bg-white-Default border-b border-brown-Default">
                        Dining Essentials
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/board">
                      <a className="block p-3 pl-8 hover:bg-white-Default border-b border-brown-Default">
                        Board
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/about">
                <a className="block p-3 hover:bg-white-Default border-b border-brown-Default">
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a
                  className="block p-3 hover:bg-white-Default border-b border-brown-Default"
                  onClick={toggle}
                >
                  Contact us
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="absolute top-0 left-0 z-0 w-screen h-screen bg-black-Default"
          onClick={toggle}
        />
      </div>
    </div>
  );
};

export default Sidebar;
