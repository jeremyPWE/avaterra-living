import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Aboutbanner from "../components/Aboutbanner";
import { useState } from "react";
import Image from "next/image";

function about() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isSubOpen, setIsSubOpen] = useState(false);
  const toggleSub = () => {
    setIsSubOpen(!isSubOpen);
  };
  const [isFoot1Open, setIsFoot1Open] = useState(false);
  const toggleFoot1 = () => {
    setIsFoot1Open(!isFoot1Open);
  };
  const [isFoot2Open, setIsFoot2Open] = useState(false);
  const toggleFoot2 = () => {
    setIsFoot2Open(!isFoot2Open);
  };
  return (
    <div>
      <Head>
        <title>Avaterra Living</title>
        <meta name="description" content="Avaterra Living" />
        <link rel="icon" href="/images/avaterra-icon.png" />
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        isSubOpen={isSubOpen}
        toggleSub={toggleSub}
      />
      <Aboutbanner />
      <div className="p-5">
        <div className="md:px-16 xl:px-32 py-5">
          <h2 className="pt-5 pb-3 text-xl">Our Backstory</h2>
          <div className="grid grid-cols-5 gap-14">
            <div className="col-span-5 md:col-span-3">
              <p className="mb-3">
                {
                  "Indonesia is known as a country with abundant natural resources. Natural resources such as marine products, spices, forestry, and others, are very attractive to many business partners from abroad. Indonesia is an archipelagic country that has thousands of islands spread from the eastern end of Sabang to the western end of Merauke. Indonesia is also surrounded by thousands of forests with unique and different characteristics. Timber and reusable products are very promising commodities considering that Indonesia has rich natural resources and various types of wood that are well known to the world."
                }
              </p>
              <p>
                {
                  "We as Indonesians have a dream to introduce the best handicrafts made by local artisans. The dream created a company called AVATERRA LIVING with a mission and vision to promote the best handicrafts from local Indonesian artisans. Furthermore, we also have a goal to replace the use of plastic materials with natural products. With the aim of reducing waste disposal into the sea and encouraging the use of reusable products."
                }
              </p>
            </div>
            <div className="hidden md:grid col-span-2">
              <div className="h-96 w-64 xl:h-64 xl:w-96 2xl:w-xl relative">
                <Image
                  className="object-cover rounded-2xl"
                  src="/images/about-1.png"
                  alt="about-img"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 md:px-16 xl:px-32">
          <h2 className="pt-5 pb-3 text-xl">Material</h2>
          <p className="mb-3">
            {
              "In the last decade, there has been a lot of bad reputations about Indonesia, which is about environmental issues. There are many environmental problems such as excessive trash in the sea and illegal logging of forests. This greatly affects the flora and fauna of Indonesia, and dangerously causes species to become extinct."
            }
          </p>
          <p className="mb-3">
            {
              " Our Company is very concerned about these problems. We put our sweat and effort into ideas by reducing the use of plastic products with natural products without destroying the habitat of Indonesian flora and fauna."
            }
          </p>
          <p>
            {
              "Therefore, we use raw materials from production forests which are protected by the Indonesian government. Producing wood products with work permits that have been approved by the Indonesian government. We do not use raw materials from illegal loggers that destroy animal habitats. Overall, we can produce environmentally friendly products. Help our sea and animals to live happily. "
            }
          </p>
          <div className=" hidden md:flex justify-evenly pt-10">
            <div className="w-36 h-36 xl:w-56 xl:h-44 relative">
              <Image
                className="object-cover rounded-2xl"
                src="/images/about-2.png"
                alt="about-img"
                layout="fill"
              />
            </div>
            <div className="w-36 h-36 xl:w-56 xl:h-44 relative">
              <Image
                className="object-cover rounded-2xl"
                src="/images/about-3.png"
                alt="about-img"
                layout="fill"
              />
            </div>
            <div className="w-36 h-36 xl:w-56 xl:h-44 relative">
              <Image
                className="object-cover rounded-2xl"
                src="/images/about-4.png"
                alt="about-img"
                layout="fill"
              />
            </div>
            <div className="w-36 h-36 xl:w-56 xl:h-44 relative">
              <Image
                className="object-cover rounded-2xl"
                src="/images/about-5.png"
                alt="about-img"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="py-5 md:px-16 xl:px-32">
          <h2 className="pt-5 pb-3 text-xl">Values</h2>
          <p>
            {
              "Commitment, trust, passion, and social responsibility are the main keys to our company values. Building a commitment and trust from our customers is the initial foundation of our company. Passion is also one of the aspects that drives us to always work efficiently and optimistically. Last but not least, apart from taking care of our customers, we are also very concerned about local workers and our environment."
            }
          </p>
        </div>
        <div className="py-5 md:px-16 xl:px-32">
          <h2 className="pt-5 pb-3 text-xl">Mission</h2>
          <p>
            {
              "Our company mission is to promote Indonesian products to the world. Introducing local handicrafts from the hands of the best Indonesian artisans. Our company will be a stepping stone for opening new job opportunities for Indonesian artisans. Changing the habit of using plastic products into natural products."
            }
          </p>
        </div>
      </div>

      <Footer
        isFoot1Open={isFoot1Open}
        toggleFoot1={toggleFoot1}
        isFoot2Open={isFoot2Open}
        toggleFoot2={toggleFoot2}
      />
    </div>
  );
}

export default about;
