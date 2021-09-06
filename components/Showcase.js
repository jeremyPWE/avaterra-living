import Image from "next/image";
import Link from "next/link";

function Showcase() {
  return (
    <div className="relative pt-8">
      <div className="text-center">
        <h2 className="md:text-xl xl:text-2xl">COLLECTIONS</h2>
        <p className="text-ogreen-Default md:text-lg xl:text-xl">
          our collections for you
        </p>
      </div>
      <ul className="flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 xl:space-x-16 overflow-x-scroll scrollbar-hide pt-5 text-center xl:justify-center">
        <li>
          <Link href="/categories/bowls-plates">
            <a>
              <div className="xl:hidden">
                <Image
                  className="object-contain"
                  src="/images/thumb/bowl.png"
                  alt="bowls & plate thumbnail"
                  width={120}
                  height={120}
                  layout="fixed"
                ></Image>
              </div>
              <div className="hidden xl:block">
                <Image
                  className="object-contain"
                  src="/images/thumb/bowl.png"
                  alt="bowls & plate thumbnail"
                  width={160}
                  height={160}
                  layout="fixed"
                ></Image>
              </div>

              <p>BOWLS & PLATES</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/categories/cutleries">
            <a>
              <div className="xl:hidden">
                <Image
                  className="object-contain"
                  src="/images/thumb/cuttleries.png"
                  alt="cutleries thumbnail"
                  width={120}
                  height={120}
                  layout="fixed"
                ></Image>
              </div>
              <div className="hidden xl:block">
                <Image
                  className="object-contain"
                  src="/images/thumb/cuttleries.png"
                  alt="cutleries thumbnail"
                  width={160}
                  height={160}
                  layout="fixed"
                ></Image>
              </div>
              <p>CUTLERIES</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/categories/utensils">
            <a>
              <div className="xl:hidden">
                <Image
                  className="object-contain"
                  src="/images/thumb/utensil.png"
                  alt="utensils thumbnail"
                  width={120}
                  height={120}
                  layout="fixed"
                ></Image>
              </div>
              <div className="hidden xl:block">
                <Image
                  className="object-contain"
                  src="/images/thumb/utensil.png"
                  alt="utensils thumbnail"
                  width={160}
                  height={160}
                  layout="fixed"
                ></Image>
              </div>
              <p>UTENSILS</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/categories/dining-essentials">
            <a>
              <div className="xl:hidden">
                <Image
                  className="object-contain"
                  src="/images/thumb/dining.png"
                  alt="dining essentials thumbnail"
                  width={120}
                  height={120}
                  layout="fixed"
                ></Image>
              </div>
              <div className="hidden xl:block">
                <Image
                  className="object-contain"
                  src="/images/thumb/dining.png"
                  alt="dining essentials thumbnail"
                  width={160}
                  height={160}
                  layout="fixed"
                ></Image>
              </div>
              <p>DINING ESSENTIALS</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/categories/board">
            <a>
              <div className="xl:hidden">
                <Image
                  className="object-contain"
                  src="/images/thumb/board.png"
                  alt="board thumbnail"
                  width={120}
                  height={120}
                  layout="fixed"
                ></Image>
              </div>
              <div className="hidden xl:block">
                <Image
                  className="object-contain"
                  src="/images/thumb/board.png"
                  alt="board thumbnail"
                  width={160}
                  height={160}
                  layout="fixed"
                ></Image>
              </div>
              <p>BOARD</p>
            </a>
          </Link>
        </li>
      </ul>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-bwhite-Default h-full w-1/12" />
    </div>
  );
}

export default Showcase;
