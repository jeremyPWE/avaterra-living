import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-60 md:h-96 xl:h-xl w-full relative">
      <div className="md:hidden">
        <Image
          className="z-0 object-cover"
          src="/images/hero-img.png"
          alt="hero-image"
          layout="fill"
        />
      </div>
      <div className="hidden md:block">
        <Image
          className="z-0 object-cover"
          src="/images/hero-img-big.png"
          alt="hero-image"
          layout="fill"
        />
      </div>

      <div className="absolute h-full w-full bg-black-Default text-white-Default flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-white-Default md:text-2xl">Design by Nature</p>
          <p className="font-bold text-white-Default md:text-xl">
            crafted by hand.
          </p>
          <p className="text-white-Default">Made by 100% natural materials</p>
          <p className="text-white-Default">
            crafted by Indonesian local artisan
          </p>
        </div>
        <div>
          <Link href="/categories/bowls-plates">
            <a className="flex items-center bg-ogreen-Default rounded-lg p-2 mt-5 font-bold">
              See our collections
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
