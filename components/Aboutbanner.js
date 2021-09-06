import Image from "next/image";

function Aboutbanner() {
  return (
    <div className="h-14 md:h-24 w-full relative">
      <Image
        className="z-0 object-cover"
        src="/images/banner-sect-img.png"
        alt="banner-image"
        layout="fill"
      />
      <div className="absolute h-full w-full bg-black-Default text-white-Default flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-white-Default">About Us</h1>
        </div>
      </div>
    </div>
  );
}

export default Aboutbanner;
