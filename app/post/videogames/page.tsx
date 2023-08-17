import React from "react";
import { prisma } from "../../api/client";
import { Rev } from "@prisma/client";
import Sidebar from "../../(shared)/Sidebar";
import Games from "@/app/(home)/Games";

type Props = {
  params: { id: string };
};

// export const revalidate = 600;

const getAllGamePosts = async () => {
  const posts: Array<Rev> = await prisma.rev.findMany({
    where: {
      tags: {
        hasSome: ["Juegos", "Videojuegos", "Video Games", "Games"],
      },
    },
    take: 20,
    orderBy: {
      date: "desc",
    },
  });
  return posts;
};

const AllGamePosts = async ({ params }: Props) => {
  const posts: Rev[] = await getAllGamePosts();
  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }

  // Organizar los posts por fecha en orden descendente
  // const sortedPosts = [...posts].sort((a, b) => {
  //   const dateA = new Date(b.date.split("/").reverse().join("/"));
  //   const dateB = new Date(a.date.split("/").reverse().join("/"));
  //   return dateA.getTime() - dateB.getTime();
  // });

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Games
            gamePosts={posts}
            largeCardsCount={0}
            largeimageHeight="h-80"
            largeCardClassName="row-span-2 mt-1.5"
            smallCardsCount={20}
            smallImageHeight="h-36"
            smallCardClassName="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default AllGamePosts;
