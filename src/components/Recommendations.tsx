import Link from "next/link";
import Image from "./Image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* User Card */}
      <div className="flex items-center justify-between">
        {/* Profile Photo and Info. */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="public/general/avatar.jpg"
              alt="John Doe"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">Junaid Akram</h1>
            <span className="text-textGray text-sm">@junaidakram1</span>
          </div>
        </div>
        {/* Follow */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        {/* Profile Photo and Info. */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="public/general/avatar.jpg"
              alt="John Doe"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">Junaid Akram</h1>
            <span className="text-textGray text-sm">junaidakram1</span>
          </div>
        </div>
        {/* Follow */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        {/*Profile Photo and Info. */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="public/general/avatar.jpg"
              alt="John Doe"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">Junaid Akram</h1>
            <span className="text-textGray text-sm">@junaidakram1</span>
          </div>
        </div>
        {/* Follow */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
