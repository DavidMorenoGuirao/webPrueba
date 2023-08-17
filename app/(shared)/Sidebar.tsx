import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "/public/assets/ad-3.png";
import AboutProfile from "/public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Suscribete y siguenos
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div>
        <Image
          className="hidden md:block my-8 mx-auto "
          alt="advert-2"
          placeholder="blur"
          src={Ad2}
          width={200}
          height={600}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Sobre Nosotros
      </h4>
      <div className="flex justify-center my-3">
        <Image
          alt="about-profile"
          placeholder="blur"
          src={AboutProfile}
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Maria Gianca Galdias
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae deserunt
        laudantium corporis, non accusamus maxime in libero vel.
      </p>
    </section>
  );
};

export default Sidebar;
