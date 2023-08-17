import React from "react";
import Software from "@/app/(home)/Software";
import { prisma } from "../../api/client";
import { Rev } from "@prisma/client";
import Sidebar from "../../(shared)/Sidebar";

type Props = {
  params: { id: string };
};

// export const revalidate = 600;

const getAllSoftwarePosts = async () => {
  const posts: Array<Rev> = await prisma.rev.findMany({
    where: {
      tags: {
        hasSome: ["Seguridad", "Aplicaciones", "Sistemas", "IA"],
      },
    },
    take: 20,
    orderBy: {
      date: "desc",
    },
  });
  return posts;
};

const AllSfotwarePosts = async ({ params }: Props) => {
  const posts: Rev[] = await getAllSoftwarePosts();
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
          <Software
            softPosts={sortedPosts}
            largeCardsCount={0}
            smallCardsCount={0}
          />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default AllSfotwarePosts;
