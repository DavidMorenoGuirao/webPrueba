import React from "react";
// import { Post } from "@prisma/client";
import { PostImage, FormattedPost } from "../types";
import Image from "next/image";
import Link from "next/link";

type TrendingCardProps = {
  className?: string;
  post: FormattedPost;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  let firstImage = "/assets/no-photo.png"; // Valor predeterminado en caso de que no haya imágenes

  if (Array.isArray(post.images) && post.images.length > 0) {
    const firstImageObject = post.images[0] as PostImage;
    firstImage = firstImageObject.url;
  }

  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70 transition-opacity duration-200 my-2`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <div className="z-0 relative w-full h-full">
        <Image
          loading="lazy"
          fill
          src={firstImage}
          alt="techio"
          // placeholder="blur"
          sizes="(max-width: 480px) 100vw,
                 (max-width: 768px) 75vw,
                 (max-width: 1060px) 50vw,
                 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute z-1 bottom-0 left-0 w-full h-80 bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-2.5">
        <h4 className="inline-block px-2 py-1 font-semibold bg-accent-orange text-wt-900 text-sm">
          {post?.tags[1]}
        </h4>
        <div className="text-white mt-2 leading-snug">{post?.title}</div>
      </div>
    </Link>
  );
};

type Props = {
  trendingPosts: Array<FormattedPost>;
};

const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      {/* <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TENDENCIAS
        </div>
      </div> */}

      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[500px] my-3">
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-500"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-500"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500 "
          post={trendingPosts[3]}
        />
      </div>

      <p className="text-sm">
        Lorem, ipsum dolor sit amet consec tetur adipisicing elit. Optio minus
        illum rem explicabo itaque magni provident fugiat? Ipsum, repellat
        provident! Lorem ipsum dolor sit amet consec tetur adipisicing elit.
        Reprehenderit, delectus?
      </p>
    </section>
  );
};

export default Trending;
