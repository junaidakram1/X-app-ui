import Link from "next/link";
import Image from "./Image";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>
      {/* Trending Event*/}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="public/general/wallhaven-0q3yw7.jpg"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            Nadal v Federer Grand Slam
          </h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {/* Topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="public/icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">Google Gemini</h2>
        <span className="text-textGray text-sm">10K posts</span>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="public/icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="public/icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">Microsoft</h2>
        <span className="text-textGray text-sm">2K posts</span>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image path="public/icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">AI Agents</h2>
        <span className="text-textGray text-sm">30K posts</span>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
