import { FormattedPost, PostImage } from "@/app/types";
import React from "react";
import Image from "next/image";
import SocialLinks from "@/app/(shared)/SocialLinks";
import DisqusComments from "@/app/(shared)/disqus/Comments";
import Link from "next/link";
import parse from "html-react-parser";
import MiniGallery from "@/app/(shared)/ImageGrid";

type Props = {
  post: FormattedPost;
};

type MultimediaContentProps = {
  multimediaUrl: string;
  multimediaType: "image" | "video";
};

const Content = ({ post }: Props) => {
  const no_image = "/assets/no-photo.png";

  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_URL}/post/${post.id}`,
    identifier: `#${post.id}`,
    title: post.title,
  };

  let parsedTitle = post.title;
  if (parsedTitle.startsWith("<h1>") && parsedTitle.endsWith("</h1>")) {
    parsedTitle = parsedTitle.slice(4, -5);
  }
  let parseTitle2 = parse(`${post.title}`);
  let parsedSubtitle = parse(`${post.subtitle}`);
  let parseLead = parse(`${post.lead}`);
  let parsedBody = parse(`${post.body}`);

  const extractCredit = (url: string, keywords: string[]) => {
    if (url === no_image) {
      return "sin imagen";
    }
    for (let keyword of keywords) {
      if (url.includes(keyword)) {
        return keyword;
      }
    }
    const startIndex = url.indexOf("//") + 2;
    const endIndex = url.indexOf("/", startIndex);
    return url.substring(startIndex, endIndex);
  };

  const MultimediaContent = ({
    multimediaUrl,
    multimediaType,
  }: MultimediaContentProps) => {
    let mediaComponent, creditUrl;

    if (!multimediaUrl) {
      multimediaType = "image";
      multimediaUrl = no_image;
    }

    const keywords = {
      image: [
        "tpucdn.com",
        "i.kinja-img.com",
        "hipertextual.com",
        "hardzone.es",
      ],
      video: ["youtube.com"],
    };

    if (multimediaType === "image") {
      mediaComponent = (
        <Image
          loading="lazy"
          fill
          alt={post.title}
          src={multimediaUrl}
          sizes="(max-width: 780px) 100vw,
            (max-width: 768px) 85vw,
            (max-width: 1060px) 75vw,
            60vw"
          style={{
            objectFit: multimediaUrl === no_image ? "cover" : "contain",
          }}
        />
      );
    } else if (multimediaType === "video") {
      mediaComponent = (
        <iframe
          src={multimediaUrl}
          title={post.title}
          allowFullScreen
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          width="100%"
          height="100%"
        />
      );
    }

    creditUrl = extractCredit(multimediaUrl, keywords[multimediaType]);

    return (
      <div className="relative w-auto mt-2 mb-20 h-96">
        {mediaComponent}
        <Link
          className={
            "text-gray-400 text-center text-xs italic absolute -bottom-12 w-full no-underline hover:underline"
          }
          href={`https://${creditUrl}`}
          target="_blank"
        >
          {creditUrl}
        </Link>
      </div>
    );
  };

  return (
    <div className="prose max-w-full">
      <div className="w-full h-20 border-solid border-2 border-indigo-600 flex justify-center ">
        Publicidad
      </div>

      <h5 className="text-wh-300">{`Home > ${post.tags[0]} > ${post.tags[1]} > ${parsedTitle}`}</h5>

      <main style={{ width: "100%", margin: "auto" }}>
        <h3 className="font-bold text-4xl mt-10 md:ml-12">{parsedTitle}</h3>

        <p className="italic -mt-5 md:ml-12">{parsedSubtitle}</p>
        <div className="flex gap-3 -mt-3 md:ml-12">
          <h5 className="font-semibold text-xs">Por {post.author}</h5>
          <h6 className="text-wh-300 text-xs">{post.date}</h6>
        </div>

        <MultimediaContent
          multimediaUrl={
            (post.images as PostImage[])[0]?.url || post.videos?.[0]
          }
          multimediaType={
            (post.images as PostImage[])[0]?.url ? "image" : "video"
          }
        />

        {/* LEAD */}
        <p className="mt-3 md:ml-12 md:mr-8">{parseLead}</p>
        {/* MULTIMEDIA 1 */}
        <MultimediaContent
          multimediaUrl={
            (post.images as PostImage[])[1]?.url || post.videos?.[1]
          }
          multimediaType={
            (post.images as PostImage[])[1]?.url ? "image" : "video"
          }
        />
        {/* BODY  */}
        <div className="mt-3 md:ml-12 md:mr-8">{parsedBody}</div>

        <div>
          {(post.images as PostImage[]).length > 5 && (
            <div className="mx-56 w-auto mb-20">
              <MiniGallery images={(post.images as PostImage[]).slice(2)} />
            </div>
          )}
        </div>

        {/* <div className="mt-3 md:ml-12 md:mr-8">{post.sources}</div> */}
        {/* Adsense dummy div */}
        <div className="w-full h-20 mt-11 border-solid border-2 border-indigo-600 flex justify-center">
          Publicidad
        </div>

        {/* COMENTARIOS */}
        <div className="mt-6">
          <DisqusComments shortname="randomtech-1" config={disqusConfig} />
        </div>
      </main>
      {/* SOCIAL LINKS */}
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
