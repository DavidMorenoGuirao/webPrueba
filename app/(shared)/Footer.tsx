import React from "react";
import Link from "next/link";

const Footer = () => {
  const email = (
    <Link href={`mailto:${process.env.EMAIL}`}>{process.env.EMAIL}</Link>
  );

  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold font-sans">RAMDOMtech.</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit
            ut rem. Ab, sed pariatur! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quas tempora sit nobis.
          </p>
          <p className="my-5">© RAMDOMtech. All rights reserved.</p>
        </div>
        {/* SECOND COLUMN  */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectum</p>
          <p className="my-5">some random link again</p>
          <p className="my-5">Ergo sactum vivanciturum</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contacto</h4>
          <p className="my-5">{email}</p>
          <p className="my-5">(+34) 123 456 789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
