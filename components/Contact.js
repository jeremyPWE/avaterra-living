import Image from "next/image";

function Contact() {
  return (
    <div id="contact" className="flex justify-center md:pt-14">
      <div className="flex xl:hidden">
        <Image
          className="object-contain"
          src="/images/icons/phone-icon.svg"
          alt="contact us icon"
          width={50}
          height={50}
        ></Image>
      </div>
      <div className="hidden xl:flex">
        <Image
          className="object-contain"
          src="/images/icons/phone-icon.svg"
          alt="contact us icon"
          width={70}
          height={70}
        ></Image>
      </div>
      <div className="ml-5">
        <h2 className="xl:text-xl">Contact us for more information</h2>
        <p className="text-brown-Default">
          We will get back to you in the shortest time
        </p>
        <div className="bg-obrown-Default p-px" />
        <p>marketing@avaterraliving.com</p>
        <p>+62 812 1234 1234</p>
        <p>Monday to Friday, 9am-5pm.</p>
      </div>
    </div>
  );
}

export default Contact;
