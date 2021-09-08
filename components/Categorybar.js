function Categorybar({
  toggleCat,
  isCatOpen,
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
  return (
    <div>
      <ul className="xl:hidden">
        <li>
          <div
            className="py-3 px-5 md:px-14 border-b border-t border-brown-Default flex justify-between items-center cursor-pointer"
            onClick={toggleCat}
          >
            Category
            <div className="flex items-center">
              <p
                className={
                  isCat_bowlOpen
                    ? "pr-2 font-semibold text-ogreen-Default"
                    : "hidden"
                }
              >
                Bowls & Plates
              </p>
              <p
                className={
                  isCat_cutOpen
                    ? "pr-2 font-semibold text-ogreen-Default"
                    : "hidden"
                }
              >
                Cutleries
              </p>
              <p
                className={
                  isCat_utenOpen
                    ? "pr-2 font-semibold text-ogreen-Default"
                    : "hidden"
                }
              >
                Utensils
              </p>
              <p
                className={
                  isCat_dinOpen
                    ? "pr-2 font-semibold text-ogreen-Default"
                    : "hidden"
                }
              >
                Dining Essentials
              </p>
              <p
                className={
                  isCat_boardOpen
                    ? "pr-2 font-semibold text-ogreen-Default"
                    : "hidden"
                }
              >
                Boards
              </p>
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
          </div>
          <div>
            <ul
              className={
                isCatOpen ? "bg-bwhite-Default cursor-pointer" : "hidden"
              }
              onClick={toggleCat}
            >
              <li>
                <div onClick={toggleCat_bowl}>
                  <a className="block p-3 pl-8 md:px-14 border-b border-brown-Default">
                    Bowls & Plates
                  </a>
                </div>
              </li>
              <li>
                <div onClick={toggleCat_cut}>
                  <a className="block p-3 pl-8 md:px-14 border-b border-brown-Default">
                    Cutleries
                  </a>
                </div>
              </li>
              <li>
                <div onClick={toggleCat_uten}>
                  <a className="block p-3 pl-8 md:px-14 border-b border-brown-Default">
                    Utensils
                  </a>
                </div>
              </li>
              <li>
                <div onClick={toggleCat_din}>
                  <a className="block p-3 pl-8 md:px-14 border-b border-brown-Default">
                    Dining Essentials
                  </a>
                </div>
              </li>
              <li>
                <div onClick={toggleCat_board}>
                  <a className="block p-3 pl-8 md:px-14 border-b border-brown-Default">
                    Boards
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul className="hidden xl:block">
        <li>
          <div className="border-b border-brown-Default flex justify-between items-center cursor-default">
            <h2>Category</h2>
          </div>
          <div>
            <ul className="cursor-pointer">
              <li>
                <div onClick={toggleCat_bowl} className="pt-6">
                  <a>Bowls & Plates</a>
                </div>
              </li>
              <li>
                <div onClick={toggleCat_cut} className="pt-3">
                  <a>Cutleries</a>
                </div>
              </li>
              <li>
                <div onClick={toggleCat_uten} className="pt-3">
                  <a>Utensils</a>
                </div>
              </li>
              <li>
                <div onClick={toggleCat_din} className="pt-3">
                  <a>Dining Essentials</a>
                </div>
              </li>
              <li>
                <div onClick={toggleCat_board} className="pt-3">
                  <a>Boards</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Categorybar;
