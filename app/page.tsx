import Trending from "./(home)/Trending";
import Hardware from "./(home)/Hardware";
import Software from "./(home)/Software";
import Other from "./(home)/Other";
import Subscribe from "./(shared)/Subscribe";
import Sidebar from "./(shared)/Sidebar";
import { prisma } from "./api/client";
import { FormattedPost, PostImage } from "../app/types";
import { Rev } from "@prisma/client";
import NewsTicker from "./(shared)/NewsTicker";
import Games from "./(home)/Games";

export const revalidate = 60;

// Define tu propia función para comprobar si un valor es un array.
const isArray = (value: any): value is Array<any> => {
  return Array.isArray(value);
};

const getPosts = async () => {
  const posts: Array<Rev> = await prisma.rev.findMany({
    orderBy: { date: "desc" },
  });

  const formattedPosts: FormattedPost[] = posts.map((post: Rev) => {
    let image = "";
    let tweet = "";
    let video = "";

    // Usa la función que acabamos de definir para asegurarte de que 'images' es un array antes de intentar acceder a su propiedad 'length' o indexarlo.
    if (isArray(post.images) && post.images.length > 0) {
      let imageObject = post.images[0] as PostImage;

      let imageUrl = imageObject.url;

      if (!imageUrl.startsWith("https:")) {
        imageUrl = `https:${imageUrl}`;
      }

      image = imageUrl;
    }

    // Haz lo mismo para 'tweets' y 'videos'.
    if (isArray(post.tweets) && post.tweets.length > 0) {
      let tweetUrl = post.tweets[0];

      if (!tweetUrl.startsWith("https:")) {
        tweetUrl = `https:${tweetUrl}`;
      }

      tweet = tweetUrl;
    }

    if (isArray(post.videos) && post.videos.length > 0) {
      let videoUrl = post.videos[0];

      if (!videoUrl.startsWith("https:")) {
        videoUrl = `https:${videoUrl}`;
      }

      video = videoUrl;
    }

    // En lugar de devolver un objeto con los mismos campos que 'post' pero con 'image', 'tweet', y 'video' modificados, puedes devolver un objeto de tipo 'FormattedPost'.
    return {
      id: post.id,
      date: post.date,
      title: post.title,
      subtitle: post.subtitle,
      lead: post.lead,
      body: post.body,
      author: post.author,
      tags: post.tags,
      images: isArray(post.images) ? (post.images as PostImage[]) : [],
      tweets: isArray(post.tweets) ? post.tweets : [],
      videos: isArray(post.videos) ? post.videos : [],
      image,
      tweet,
      video,
    };
  });

  return formattedPosts;
};

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Array<FormattedPost> = [];
    const hardPosts: Array<FormattedPost> = [];
    const softPosts: Array<FormattedPost> = [];
    const otherPosts: Array<FormattedPost> = [];
    const aiPosts: Array<FormattedPost> = [];
    const gamePosts: Array<FormattedPost> = [];

    const sortedPosts = [...posts].sort((a, b) => {
      const dateA = new Date(b.date.split("/").reverse().join("/"));
      const dateB = new Date(a.date.split("/").reverse().join("/"));
      return dateA.getTime() - dateB.getTime();
    });

    // sortedPosts.forEach((post: FormattedPost, i: number) => {
    //   if (i < 4) {
    //     trendingPosts.push(post);
    //   } else if (post?.tags.includes("Juegos")) {
    //     gamePosts.push(post);
    //   } else if (post?.tags.includes("Hardware")) {
    //     hardPosts.push(post);
    //   } else if (post?.tags.includes("IA")) {
    //     softPosts.push(post);
    //   } else {
    //     otherPosts.push(post);
    //   }
    // });
    sortedPosts.forEach((post: FormattedPost, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.tags.includes("Juegos")) {
        gamePosts.push(post);
      }
      if (post?.tags.includes("Hardware")) {
        hardPosts.push(post);
      }
      if (post?.tags.includes("Software") && !post?.tags.includes("Juegos")) {
        softPosts.push(post);
      }
      if (
        !post?.tags.includes("Juegos") &&
        !post?.tags.includes("Software") &&
        !post?.tags.includes("Hardware")
      ) {
        otherPosts.push(post);
      }
    });

    return [
      trendingPosts,
      hardPosts,
      softPosts,
      otherPosts,
      aiPosts,
      gamePosts,
    ];
  };

  const [trendingPosts, hardPosts, softPosts, otherPosts, aiPosts, gamePosts] =
    formatPosts();

  return (
    <main className="px-10 leading-7">
      <NewsTicker posts={posts} tagIndex={0} />
      <Trending trendingPosts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Hardware
            hardPosts={hardPosts}
            largeCardsCount={1}
            largeimageHeight="h-80"
            largeCardClassName="row-span-2 mt-1.5"
            smallCardsCount={6}
            smallImageHeight="h-36"
            smallCardClassName="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          />
          <Software
            softPosts={softPosts}
            largeCardsCount={1}
            smallCardsCount={4}
          />
          <Games
            gamePosts={gamePosts}
            largeCardsCount={6}
            largeimageHeight="h-80"
            largeCardClassName="row-span-1 mt-1.5"
            smallCardsCount={0}
            smallImageHeight="h-36"
            smallCardClassName="col-span-1 row-span-1 "
          />
          <Other otherPosts={otherPosts} numCards={6} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
