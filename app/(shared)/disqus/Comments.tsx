"use client";
import React from "react";
import { DiscussionEmbed } from "disqus-react";

type DisqusCommentsProps = {
  shortname: string;
  config: {
    url: string;
    identifier: string;
    title: string;
  };
};

const DisqusComments: React.FC<DisqusCommentsProps> = ({
  shortname,
  config,
}) => {
  return (
    <span>
      <DiscussionEmbed shortname={shortname} config={config} />
    </span>
  );
};

export default DisqusComments;
