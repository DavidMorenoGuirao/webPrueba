import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import ThemeSwitcher from "./Switch_theme";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-2">
      <div className="flex justify-between mt-5 mb-2 items-end mx-10">
        <div className="basis-2/8 md:mt-3">
          <Link href={`${process.env.NEXT_PUBLIC_URL}`}>
            <h1 className="text-5xl font-bold tracking-tighter">
              RANDOM<span className="font-thin tracking-tight">tech.</span>
            </h1>
            <p className="text-sm mt-0">
              {" "}
              &nbsp;- Web dedicada al mundo de la tecnologia -
            </p>
          </Link>
        </div>

        <nav className="flex justify-between gap-10 text-md text-gray-600 mb-0.5">
          <Link className="" href="/post/hardware">
            Hardware
          </Link>
          <Link href="/post/software">Software</Link>
          <Link href="/post/videogames">Videojuegos</Link>
          <Link href="/post/others">Perifericos</Link>
          <Link href="/post/others">IA</Link>
        </nav>
        <div className=" mt-0 mb-0.5 ">
          {/* <SocialLinks isDark /> */}
          <ThemeSwitcher />
        </div>
        {/* <div className="flex flex-col-reverse items-end mt-5 mb-0.5 ">
          <SocialLinks isDark />
          <ThemeSwitcher />
        </div> */}
      </div>

      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
