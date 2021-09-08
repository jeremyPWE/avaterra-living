import Image from "next/image";

function Misi() {
  return (
    <ul className="p-7 xl:pt-10 md:px-32 xl:px-52 2xl:px-96 grid grid-cols-2 text-center gap-5 md:gap-8 xl:gap-16 xl:grid-cols-4">
      <li>
        <div className="xl:hidden">
          <Image
            src="/images/icons/earth-icon.svg"
            alt="indonesian icon"
            width={40}
            height={40}
          ></Image>
        </div>
        <div className="hidden xl:block">
          <Image
            src="/images/icons/earth-icon.svg"
            alt="indonesian icon"
            width={55}
            height={55}
          ></Image>
        </div>
        <h2>100% INDONESIAN</h2>
        <p>Manufactured, designed, and perfected by Indonesian.</p>
      </li>
      <li>
        <div className="xl:hidden">
          <Image
            src="/images/icons/person-icon.svg"
            alt="handcrafted icon"
            width={40}
            height={40}
          ></Image>
        </div>
        <div className="hidden xl:block">
          <Image
            src="/images/icons/person-icon.svg"
            alt="handcrafted icon"
            width={55}
            height={55}
          ></Image>
        </div>
        <h2>HANCRAFTED</h2>
        <p>
          All goods are produced using traditional tools, without the help of
          automatic machines.
        </p>
      </li>
      <li>
        <div className="xl:hidden">
          <Image
            src="/images/icons/plant-icon.svg"
            alt="natural icon"
            width={40}
            height={40}
          ></Image>
        </div>
        <div className="hidden xl:block">
          <Image
            src="/images/icons/plant-icon.svg"
            alt="natural icon"
            width={55}
            height={55}
          ></Image>
        </div>
        <h2>NATURAL</h2>
        <p>Our products use reusable materials. Free from plastic material.</p>
      </li>
      <li>
        <div className="xl:hidden">
          <Image
            src="/images/icons/hand-icon.svg"
            alt="sustainable icon"
            width={40}
            height={40}
          ></Image>
        </div>
        <div className="hidden xl:block">
          <Image
            src="/images/icons/hand-icon.svg"
            alt="sustainable icon"
            width={55}
            height={55}
          ></Image>
        </div>
        <h2>SUSTAINABLE</h2>
        <p>
          Only use materials originating from official production forests and
          comply with applicable legal standards.
        </p>
      </li>
    </ul>
  );
}

export default Misi;
