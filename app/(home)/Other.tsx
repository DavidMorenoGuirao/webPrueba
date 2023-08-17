import React from "react";
import Card from "../(shared)/Card";
import { Rev } from "@prisma/client";

// type Props = {
//   otherPosts: Array<Post>;
// };
type Props = {
  otherPosts: Array<Rev>;
  numCards: number;
};

const Other = ({ otherPosts, numCards }: Props) => {
  const postsToShow = otherPosts.slice(0, numCards);

  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      {/* header */}
      <p className="font-bold text-2xl my-8">Other Trending Post</p>
      <div className="sm:grid grid-cols-2 gap-16">
        {postsToShow.map((otherPosts, index) => (
          <Card
            key={index}
            className="mt-5 sm:mt-0"
            imageHeight="h-80"
            post={otherPosts}
          />
        ))}
      </div>
    </section>
  );
};

// const Other = ({ otherPosts }: Props) => {
//   return (
//     <section className="pt-4 mb-16">
//       <hr className="border-1" />
//       {/* header */}
//       <p className="font-bold text-2xl my-8">Other Trending Post</p>
//       <div className="sm:grid grid-cols-2 gap-16">
//         <Card
//           className="mt-5 sm:mt-0"
//           imageHeight="h-80"
//           post={otherPosts[0]}
//         />
//         <Card
//           className="mt-5 sm:mt-0"
//           imageHeight="h-80"
//           post={otherPosts[1]}
//         />
//         <Card
//           className="mt-5 sm:mt-0"
//           imageHeight="h-80"
//           post={otherPosts[2]}
//         />
//         <Card
//           className="mt-5 sm:mt-0"
//           imageHeight="h-80"
//           post={otherPosts[3]}
//         />
//       </div>
//     </section>
//   );
// };

export default Other;
