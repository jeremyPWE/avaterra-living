import Image from "next/image";

function Collectionbanner() {
  return (
    <div className="h-14 md:h-24 relative">
      <Image
        className="z-0 object-cover"
        src="/images/banner-sect-img.png"
        alt="banner-image"
        layout="fill"
      />
      <div className="absolute h-full w-full bg-black-Default text-white-Default flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-white-Default">Collections</h1>
        </div>
      </div>
    </div>
  );
}

export default Collectionbanner;
