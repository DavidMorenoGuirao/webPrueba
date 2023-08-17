"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

const NewsTicker = ({
  posts,
  tagIndex,
}: {
  posts: { title: string; id: string; tags: string[] }[];
  tagIndex: number;
}) => {
  const { theme } = useTheme();

  const gradientColor: [number, number, number] =
    theme === "dark" ? [0, 0, 0] : [255, 255, 255];

  return (
    <>
      {/* Div para publicidad */}
      <div className="flex justify-center mb-4">
        <Image
          loading="lazy"
          alt="image"
          src="/assets/publicidad_970x90.png"
          width={970}
          height={90}
          style={{ objectFit: "unset" }}
        />
      </div>

      <div className="grid grid-cols-10 items-center w-full">
        {/* EL TEXTO */}
        <div className="col-span-3 sm:col-span-2 md:col-span-1 bg-black text-wh-10 font-bold px-2 flex items-center justify-center">
          TENDENCIAS
        </div>
        {/* EL MARQUEE */}
        <div className="col-span-7 whitespace-nowrap sm:col-span-8 md:col-span-9 relative ml-2 ">
          <div className="overflow-hidden">
            <Marquee
              speed={50}
              direction="left"
              gradient
              gradientColor={gradientColor}
              gradientWidth={50}
            >
              {posts.map((post, i) => (
                <div
                  key={i}
                  className="h-full transform flex items-center text-sm italic space-x-16"
                >
                  <Link
                    href={`/post/${post.id}`}
                    className="hover:text-accent-orange cursor-pointer"
                  >
                    - {post.title}. -
                  </Link>
                  {/* LOS TAGS */}
                  <div className="h-6 mt-0.5">
                    {post.tags[tagIndex] && (
                      <span className="tag bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        {post.tags[tagIndex]}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsTicker;
