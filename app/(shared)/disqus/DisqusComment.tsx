"use client";
import React, { useEffect, useState } from "react";

type DisqusCommentProps = {
  id: string | number;
};

declare global {
  interface Window {
    DISQUSWIDGETS: any;
  }
}

const DisqusComment: React.FC<DisqusCommentProps> = ({ id }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://YOUR_DISQUS_SHORTNAME.disqus.com/count.js`;
    script.id = "dsq-count-scr";
    script.async = true;
    document.body.appendChild(script);

    setIsMounted(true);
    window.DISQUSWIDGETS.getCount();
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div
      data-disqus-identifier={`#${id}`}
      className="disqus-comment-count bg-black text-wh-100 w-20 flex justify-center text-xs "
    ></div>
  );
};

export default DisqusComment;
// "use client";
// import React, { useEffect, useState } from "react";

// type DisqusCommentProps = {
//   id: string | number;
// };

// declare global {
//   interface Window {
//     DISQUSWIDGETS: any;
//   }
// }

// const DisqusComment: React.FC<DisqusCommentProps> = ({ id }) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://YOUR_DISQUS_SHORTNAME.disqus.com/count.js`;
//     script.id = "dsq-count-scr";
//     script.async = true;
//     document.body.appendChild(script);

//     setIsMounted(true);
//     window.DISQUSWIDGETS.getCount();
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div
//       data-disqus-identifier={`#${id}`}
//       className="disqus-comment-count bg-black text-wh-100 w-20 flex justify-center text-xs "
//     ></div>
//   );
// };

// export default DisqusComment;
