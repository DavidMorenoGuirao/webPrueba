"use client";
import React from "react";
import Image from "next/image";
import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";
import { useTheme } from "next-themes";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  const { theme } = useTheme();
  const gradientColor: string =
    theme === "dark"
      ? "brightness-90 hover:opacity-50"
      : "brightness-0 hover:opacity-50";
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          className={gradientColor}
          alt="twitter"
          src={Twitter}
          width={20}
          height={20}
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          className={gradientColor}
          alt="facebook"
          src={Facebook}
          width={20}
          height={20}
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <Image
          className={gradientColor}
          alt="instagram"
          src={Instagram}
          width={20}
          height={20}
        />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <Image
          className={gradientColor}
          alt="google"
          src={Google}
          width={20}
          height={20}
        />
      </a>
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <Image
          className={gradientColor}
          alt="discord"
          src={Discord}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
