import React from "react";
import { prisma } from "../../api/client";
import { Prisma, Rev } from "@prisma/client";
import Sidebar from "../../(shared)/Sidebar";
import Other from "../../(home)/Other";

type Props = {
  params: { id: string };
};

const getAllPosts = async () => {
  const posts: Array<Rev> = await prisma.rev.findMany({
    where: {
      NOT: {
        tags: {
          hasSome: ["Hardware", "Software"],
        },
      },
    },
    take: 20,
    orderBy: {
      date: Prisma.SortOrder.asc,
    },
  });
  return posts;
};

const AllPosts = async ({ params }: Props) => {
  const posts: Rev[] = await getAllPosts();
  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-auto justify-center p-12">
        Aun no hay noticias en esta sección
      </div>
    );
  }

  // Organizar los posts por fecha en orden descendente
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Other otherPosts={sortedPosts} numCards={20} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default AllPosts;
