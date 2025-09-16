"use client";

import Image from "./Image";
import { shareAction } from "./actions";
import React, { useState } from "react";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form action={shareAction} className="p-4 flex gap-4">
      {/* Profile Photo */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path="public/general/post.jpeg"
          alt=""
          w={100}
          h={100}
          tr={true}
        />
      </div>
      {/* Other Setting */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                path="public/icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              path="public/icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="public/icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="public/icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="public/icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="public/icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold rounded-full py-2 px-4"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
