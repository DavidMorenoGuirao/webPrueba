import React from "react";
import Hardware from "@/app/(home)/Hardware";
import { prisma } from "../../api/client";
import { Rev } from "@prisma/client";
import Sidebar from "../../(shared)/Sidebar";

type Props = {
  params: { id: string };
};

// export const revalidate = 600;

const getAllHardwarePosts = async () => {
  const posts: Array<Rev> = await prisma.rev.findMany({
    where: {
      tags: {
        hasSome: ["Hardware"],
      },
    },
    take: 20,
    orderBy: {
      date: "desc",
    },
  });
  return posts;
};

const AllHardwarePosts = async ({ params }: Props) => {
  const posts: Rev[] = await getAllHardwarePosts();
  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }

  // Organizar los posts por fecha en orden descendente
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(b.date.split("/").reverse().join("/"));
    const dateB = new Date(a.date.split("/").reverse().join("/"));
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Hardware
            hardPosts={sortedPosts}
            largeCardsCount={20}
            largeCardClassName="col-span-1 row-span-3"
            largeimageHeight="h-44"
            smallCardsCount={0}
            smallCardClassName="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
            smallImageHeight="h-36"
          />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default AllHardwarePosts;
