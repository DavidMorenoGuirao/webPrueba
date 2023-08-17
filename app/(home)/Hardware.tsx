import React from "react";
import Card from "../(shared)/Card";
import { Rev } from "@prisma/client";

type Props = {
  hardPosts: Array<Rev>;
  largeCardsCount: number;
  smallCardsCount: number;
  largeCardClassName: string;
  smallCardClassName: string;
  largeimageHeight: string;
  smallImageHeight: string;
};

const Hardware = ({
  hardPosts,
  largeCardsCount,
  smallCardsCount,
  largeCardClassName,
  smallCardClassName,
  largeimageHeight,
  smallImageHeight,
}: Props) => {
  const largeCards = hardPosts.slice(0, largeCardsCount);
  const smallCards = hardPosts.slice(
    largeCardsCount,
    largeCardsCount + smallCardsCount
  );

  return (
    <section>
      <hr className="border-1" />
      {/* header */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          HARDWARE
        </h4>
        <p className="font-bold text-2xl">Lo último en Hardware</p>
      </div>
      {/* grid */}
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
        {/* LARGE CARDS */}
        {largeCards.map((post, index) => (
          <Card
            key={index}
            className={largeCardClassName}
            imageHeight={largeimageHeight}
            post={post}
            isLongForm
          />
        ))}
        {/* SMALL CARDS */}
        {smallCards.map((post, index) => (
          <Card
            key={index}
            className={smallCardClassName}
            imageHeight={smallImageHeight}
            post={post}
            isSmallCard
          />
        ))}
      </div>
    </section>
  );
};

export default Hardware;
