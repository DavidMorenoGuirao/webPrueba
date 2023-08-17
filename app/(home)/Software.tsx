import React from "react";
import Card from "../(shared)/Card";
import { Rev } from "@prisma/client";

type Props = {
  softPosts: Array<Rev>;
  largeCardsCount: number;
  smallCardsCount: number;
};

const Software = ({ softPosts }: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1"></hr>
      {/* header */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          SOFTWARE
        </h4>
        <p className="font-bold text-2xl">Todo sobre Software</p>
      </div>

      {/* CARD ROW */}
      <div className="sm:flex justify-between gap-8">
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={softPosts[0]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={softPosts[1]}
        />
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={softPosts[2]}
        />
      </div>
      <Card
        className="sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
        post={softPosts[3]}
      />
    </section>
  );
};

export default Software;
