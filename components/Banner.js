import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="flex justify-center p-8 relative xl:pt-14 md:w-full">
      <div className="h-48 w-96 md:w-3/4 md:h-60 xl:h-80 relative">
        <Image
          className="rounded-2xl object-cover"
          src="/images/banner-img-m.png"
          alt="banner-img"
          layout="fill"
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full bg-black-Default rounded-2xl" />
        <div className="absolute top-0 left-0 w-3/5 md:w-1/2 xl:w-1/3 h-5/6 bg-black-Default m-4 md:m-5 xl:m-7 rounded-2xl flex items-center justify-center md:pb-5 xl:pb-10">
          <div className="flex flex-col p-2 xl:px-7">
            <h2 className="text-white-Default text-base md:text-xl xl:text-2xl">
              <div>Commitment, trust,</div>
              <div>and passion.</div>
            </h2>
            <p className="text-white-Default text-sm xl:text-base md:pt-2 xl:pt-4 ">
              Introducing local handicrafts from the hands of the best
              Indonesian artisans.
            </p>
          </div>
          <div className="hidden md:flex justify-center absolute bottom-5 xl:bottom-10">
            <Link href="/categories/bowls-plates">
              <a className="flex bg-ogreen-Default rounded-lg p-0.5 xl:p-2 font-semibold w-28 text-white-Default justify-center">
                Learn more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
