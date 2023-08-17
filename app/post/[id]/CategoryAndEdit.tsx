import { FormattedPost } from "@/app/types";
import {
  PencilSquareIcon,
  XMarkIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { Editor } from "@tiptap/react";
import React from "react";

type Props = {
  isEditable: boolean;
  handleIsEditable: (isEditable: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
  subtitle: string;
  setSubtitle: (subtitle: string) => void;
  tempSubtitle: string;
  setTempSubtitle: (tempSubtitle: string) => void;
  editor: Editor | null;
  post: FormattedPost;
};

const CategoryAndEdit = ({
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  subtitle,
  setSubtitle,
  tempSubtitle,
  setTempSubtitle,
  editor,
  post,
}: Props) => {
  const handelEnableEdit = () => {
    handleIsEditable(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || "");
  };

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  };

  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
        {post.tags[1]}
      </h4>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button onClick={handleCancelEdit}>
              <XMarkIcon className="h-6 w-6 text-accent-red" />
            </button>
          </div>
        ) : (
          <>
            <button onClick={() => {}}>
              <PlusIcon className="h-6 w-6 mx-4 text-accent-red" />
            </button>
            <button onClick={handelEnableEdit}>
              <PencilSquareIcon className="h-6 w-6 text-accent-red" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryAndEdit;
