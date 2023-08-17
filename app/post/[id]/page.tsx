import React from "react";
import { prisma } from "../../api/client";
import { Post, Rev } from "@prisma/client";
import { FormattedPost, PostImage } from "../../types";
import Sidebar from "../../(shared)/Sidebar";
import Content from "@/app/post/[id]/Content";

type Props = {
  params: { id: string };
};

export const revalidate = 120;

// Define tu propia función para comprobar si un valor es un array.
const isArray = (value: any): value is Array<any> => {
  return Array.isArray(value);
};

const getPost = async (id: string) => {
  const post: Post | null = await prisma.rev.findUnique({
    where: { id },
  });
  if (!post) {
    console.log(`post with id ${id} not found`);
    return null;
  }

  let images = isArray(post.images) ? (post.images as PostImage[]) : [];
  let tweets = isArray(post.tweets) ? post.tweets : [];
  let videos = isArray(post.videos) ? post.videos : [];

  const formattedPost: FormattedPost = {
    ...post,
    images,
    tweets,
    videos,
  };
  return formattedPost;
};

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-40 mb-5 justify-center">
        <div className="basis-3/4 ">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
