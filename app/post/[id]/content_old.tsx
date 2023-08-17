// "use client";
// import { FormattedPost } from "@/app/types";
// import React from "react";
// import Image from "next/image";
// import SocialLinks from "@/app/(shared)/SocialLinks";
// import DisqusComments from "@/app/(shared)/disqus/Comments";
// import Link from "next/link";
// import parse from "html-react-parser";
// import MiniGallery from "@/app/(shared)/ImageGrid";

// type Props = {
//   post: FormattedPost;
// };

// const Content = ({ post }: Props) => {
//   const no_image = "/assets/no-photo.png";

//   const disqusConfig = {
//     url: `http://localhost:3000/post/${post.id}`,
//     identifier: `#${post.id}`,
//     title: post.title,
//   };

//   let parsedBody = parse(`${post.body}`);

//   const extractImageCredit = (imageUrl: any) => {
//     if (!imageUrl) {
//       // Manejar el caso donde imageUrl es null o undefined.
//       return "sin imagen";
//     }
//     if (imageUrl.includes("tpucdn.com")) {
//       return "techpowerup.com";
//     } else if (imageUrl.includes("i.kinja-img.com")) {
//       return "gizmodo.com";
//     } else if (imageUrl.includes("hipertextual.com")) {
//       return "hipertextual.com";
//     } else if (imageUrl.includes("hardzone.es")) {
//       return "hardzone.com";
//     } else {
//       // Manejo de caso por defecto
//       const startIndex = imageUrl.indexOf("//") + 2;
//       const endIndex = imageUrl.indexOf("/", startIndex);
//       return imageUrl.substring(startIndex, endIndex);
//     }
//   };

//   const extractTweetCredit = (tweetUrl: any) => {
//     if (!tweetUrl) {
//       // Manejar el caso donde imageUrl es null o undefined.
//       return "sin imagen";
//     }

//     if (tweetUrl.includes("twitter.com")) {
//       return "twitter.com";
//     } else {
//       // Manejo de caso por defecto
//       const startIndex = tweetUrl.indexOf("//") + 2;
//       const endIndex = tweetUrl.indexOf("/", startIndex);
//       return tweetUrl.substring(startIndex, endIndex);
//     }
//   };

//   const extractVideoCredit = (videoUrl: any) => {
//     if (!videoUrl) {
//       // Manejar el caso donde imageUrl es null o undefined.
//       return "sin imagen";
//     }

//     if (videoUrl.includes("youtube.com")) {
//       return "youtube.com";
//     } else {
//       // Manejo de caso por defecto
//       const startIndex = videoUrl.indexOf("//") + 2;
//       const endIndex = videoUrl.indexOf("/", startIndex);
//       return videoUrl.substring(startIndex, endIndex);
//     }
//   };

//   return (
//     <div className="prose max-w-full">
//       {/* BREADCRUMBS  */}
//       <h5 className="text-wh-300">{`Home > ${post.tags[0]} > ${post.tags[1]} > ${post.title}`}</h5>

//       <main style={{ width: "100%", margin: "auto" }}>
//         {/* HEADER */}
//         <h3 className="font-bold text-3xl mt-10">{post.title}</h3>
//         {/* SUBTITLE, AUTHOR Y DATE */}
//         <p className="italic -mt-3">{post.subtitle}</p>
//         <div className="flex gap-3 -mt-3">
//           <h5 className="font-semibold text-xs">By {post.author}</h5>
//           <h6 className="text-wh-300 text-xs">{post.date}</h6>
//         </div>

//         {/* MULTIMEDIA 0 */}
//         {post.images[0]?.url && (
//           <div className="relative w-auto mb-20 h-96 mx-24">
//             <Image
//               fill
//               alt={post.title}
//               src={post.images[0].url}
//               sizes="(max-width: 480px) 100vw,
//               (max-width: 768px) 85vw,
//               (max-width: 1060px) 75vw,
//               60vw"
//               style={{ objectFit: "contain" }}
//             />
//             <Link
//               className={
//                 "text-sm text-gray-600 text-center italic absolute -bottom-12 w-full "
//               }
//               href={`https://${extractImageCredit(post.images[0]?.url).replace(
//                 /^http:\/\/localhost:3000\/post\//,
//                 ""
//               )}`}
//               target="_blank"
//               // style={{ textDecoration: "none" }}
//             >
//               Image Credit: {extractImageCredit(post.images[0].url)}
//             </Link>
//           </div>
//         )}
//         {!post.images[0]?.url && post.videos[0] && (
//           <div className="relative w-auto mt-2 mb-20 h-96">
//             <iframe
//               src={post.videos[0]}
//               title={post.title}
//               allowFullScreen
//               allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
//               width="100%"
//               height="100%"
//             />
//             <p className={"text-sm text-gray-100 text-center bg-black m-0 p-0"}>
//               Image Credit: {extractVideoCredit(post.videos[0])}
//             </p>
//           </div>
//         )}
//         {!post.images[0]?.url && !post.videos[0] && (
//           <div className="relative w-auto mt-2 mb-20 h-96">
//             <Image
//               fill
//               alt={post.title}
//               src={no_image}
//               sizes="(max-width: 480px) 100vw,
//              (max-width: 768px) 85vw,
//              (max-width: 1060px) 75vw,
//              60vw"
//               style={{ objectFit: "cover" }}
//             />
//             <p
//               className={
//                 "text-sm text-gray-100 text-center bg-black absolute -bottom-14 w-full"
//               }
//             >
//               Sin imagen
//             </p>
//           </div>
//         )}

//         {/* LEAD */}
//         <p className="mt-3">{post.lead}</p>

//         {/* MULTIMEDIA 1 */}
//         {post.images[1]?.url && (
//           <div className="relative w-auto mt-2 mb-24 h-96 mx-24">
//             <Image
//               fill
//               alt={post.title}
//               src={post.images[1].url}
//               sizes="(max-width: 480px) 100vw,
//              (max-width: 768px) 85vw,
//              (max-width: 1060px) 75vw,
//              60vw"
//               style={{ objectFit: "contain" }}
//             />
//             <Link
//               className={
//                 "text-sm text-gray-600 text-center italic absolute -bottom-12 w-full"
//               }
//               href={`https://${extractImageCredit(post.images[1]?.url).replace(
//                 /^http:\/\/localhost:3000\/post\//,
//                 ""
//               )}`}
//               target="_blank"
//               style={{ textDecoration: "none" }}
//             >
//               Image Credit: {extractImageCredit(post.images[1].url)}
//             </Link>
//           </div>
//         )}

//         {!post.images[1]?.url && post.videos[1] && (
//           <div className="relative w-auto mt-2 mb-20 h-96">
//             <iframe
//               src={post.videos[1]}
//               title={post.title}
//               allowFullScreen
//               allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
//               width="100%"
//               height="100%"
//             />
//             <p className={"text-sm text-gray-100 text-center bg-black m-0 p-0"}>
//               Image Credit: {extractVideoCredit(post.videos[1])}
//             </p>
//           </div>
//         )}
//         {!post.images[1] && !post.videos[1] && (
//           <div className="relative w-auto mt-2 mb-20 h-96 ">
//             <Image
//               fill
//               alt={post.title}
//               src={no_image}
//               sizes="(max-width: 480px) 100vw,
//              (max-width: 768px) 85vw,
//              (max-width: 1060px) 75vw,
//              60vw"
//               style={{ objectFit: "cover" }}
//             />
//             <p
//               className={
//                 "text-sm text-gray-100 text-center bg-black absolute -bottom-14 w-full"
//               }
//             >
//               Sin imagen
//             </p>
//           </div>
//         )}
//     {/* BODY  */}
//     <div className="mt-3">{parsedBody}</div>
//     {/* MINIGALERIA DE IMAGENES RESTANTES, SI LAS HUBIERA, EN UN GRID 3 x 2  */}
//     <div className="mx-56 w-auto h-32 my-32">
//       <MiniGallery images={post.images} />
//     </div>
//     {/* COMENTARIOS */}
//     <div className="mt-56">
//       <DisqusComments shortname="randomtech-1" config={disqusConfig} />
//     </div>
//   </main>

//   {/* SOCIAL LINKS */}
//   <div className="hidden md:block mt-10 w-1/3">
//     <SocialLinks isDark />
//   </div>
// </div>
//   );
// };

// export default Content;
