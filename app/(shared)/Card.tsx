import React from "react";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import DisqusComment from "../(shared)/disqus/DisqusComment";
import { FormattedPost } from "../types";

type Props = {
  className?: string;
  post: Post;
  tags?: string[];
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  post,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  const { id, title, subtitle, author, date, images, tweets, videos, tags } =
    post || {};

  // Obtener el array de imágenes en la posición deseada
  let selectedImages = null;
  if (Array.isArray(images) && images.length > 0) {
    selectedImages = images[0] as { url: string };
  }
  const selectedTweets = Array.isArray(tweets) && tweets[0];
  const selectedVideos = Array.isArray(videos) && videos[0];

  const remainingTags =
    Array.isArray(tags) && tags.length >= 2 ? tags.slice(1) : [];

  return (
    <div className={className}>
      <Link
        className="basis-full hover:opacity-70 transition-opacity duration-200 my-2"
        href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      >
        <div
          className={`relative w-auto mb-3 ${imageHeight}`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {selectedImages ? (
            <Image
              loading="lazy"
              fill
              alt="image"
              src={selectedImages.url}
              // src="/assets/test.webp"
              sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
              style={{ objectFit: "unset" }}
            />
          ) : selectedTweets ? (
            <Image
              loading="lazy"
              fill
              alt="tweet"
              src={selectedTweets}
              sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
              style={{ objectFit: "unset" }}
            />
          ) : selectedVideos ? (
            <iframe
              src={selectedVideos}
              style={{ objectFit: "unset" }}
              allowFullScreen
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              width="100%"
              height="100%"
            />
          ) : (
            <Image
              loading="lazy"
              fill
              alt="no photo"
              src="/assets/no-photo.png"
              sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
              style={{ objectFit: "contain" }}
            />
          )}

          <div className="absolute top-0 left-0 bg-black text-wh-10 px-1 text-xs">
            {remainingTags}
          </div>
        </div>
      </Link>

      <div className="basis-full">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
          <h4
            className={`font-bold transition-colors duration-200 hover:text-accent-green text-overflow: ellipsis
            ${isSmallCard ? "line-clamp-2" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : "line-clamp-2"}
            `}
          >
            {title}
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "mt-2 mb-1"}`}>
          <div className="flex flex-col-2 justify-between ">
            <div className="flex flex-col">
              <h5 className="font-semibold text-xs">{author}</h5>
              <h6 className="text-wh-300 text-xs">{date}</h6>
            </div>
            {/* NUMERO DE COMENTARIOS */}
            <div>
              <DisqusComment id={id} />
            </div>
          </div>
        </div>
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
