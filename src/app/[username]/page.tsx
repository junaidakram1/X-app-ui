import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className="">
      {/* Profile photo */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image path="public/icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Junidepp</h1>
      </div>
      {/* Info */}
      <div className="">
        {/* Pfp & Cover CONTAINER */}
        <div className="relative w-full">
          {/* Cover Photo */}
          <div className="w-full aspect-[3/1] relative">
            <Image
              path="public/general/cover.jpg"
              alt=""
              w={600}
              h={200}
              tr={true}
            />
          </div>
          {/* Photo */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image
              path="public/general/avatar.jpg"
              alt=""
              w={100}
              h={100}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="public/icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="public/icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="public/icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/*  Details */}
        <div className="p-4 flex flex-col gap-2">
          {/* Username & Handle */}
          <div className="">
            <h1 className="text-2xl font-bold">Junaid Akram</h1>
            <span className="text-textGray text-sm">@junaidakram1</span>
          </div>
          <p>Web Developer</p>
          {/* Occupation & Location */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                path="public/icons/userLocation.svg"
                alt="location"
                w={20}
                h={20}
              />
              <span>PK</span>
            </div>
            <div className="flex items-center gap-2">
              <Image path="public/icons/date.svg" alt="date" w={20} h={20} />
              <span>Joined Sep 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Image path="public/icons/birth.svg" alt="birth" w={20} h={20} />
              <span>July, 2004</span>
            </div>
          </div>
          {/* FOLLOWINGS & FOLLOWERS */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">1210</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">436</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* Feed Content */}
      <Feed />
    </div>
  );
};

export default UserPage;
